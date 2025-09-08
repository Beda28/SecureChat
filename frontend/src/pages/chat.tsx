import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkExp, getId } from '../utils/token'
import axios from 'axios'
import { useAppContext } from '../utils/appcontext'
import { format, parseISO } from 'date-fns'
import { BackgroundB } from '../components/Box/Background'
import { CreateInServer, ServerInServer, ServerItem, ServerList } from '../components/Box/Server'
import { AddInServerChat, AddServerText, ChannelTitle, ServerInServerName, ServerItemText, ServerTitle } from '../components/Text/Server'
import { ChatUserList, TitleBox, UserInfo, UserList, UserTitle } from '../components/Box/UserList'
import { Name } from '../components/Text/Friend'
import { LogoutBtn } from '../components/Button/Button'
import { ChatBottom, ChatBox, ChatTop, SetChatBox, SetSubChatBoxA, SetSubChatBoxB } from '../components/Box/Chat'
import { Chating, InfoList, InfoListBox } from '../components/UL/List'
import { Chatting, MessageTime, MessageUser } from '../components/Text/Chat'
import { ChatInput } from '../components/Input/Input'
import { InfoBox, InfoTop } from '../components/Box/Info'
import { UIBox } from '../middlepages/UIBox'

interface Message {
    id: string;
    uuid: string;
    user_id: string;
    content: string;
    timestamp: string;
}

interface ChannelList {
    channel_id: string;
    channel_uuid: string;
}

interface ChannelInfo {
    channel: ChannelList[],
    last: string | null;
}

const Friends = () => {
    const [chatlist, setchatlist] = useState<Message[]>([])
    const [message, setmessage] = useState('')
    const [ws, setWS] = useState<WebSocket>()
    const navigate = useNavigate();
    const {currentChatServer, setCurrentChatServer, 
        chatserveruuid, setchatserveruuid} = useAppContext();
    const [channellist, setchannellist] = useState<ChannelList[]>([]);
    const [serverlist, setserverlist] = useState<string[]>([]);
    const [inserver, setinserver] = useState('');
    const [userlist, setuserlist] = useState<string[]>([]);
    const [UI, setUI] = useState<number>(0);
    const [servername, setservername] = useState('');

    useEffect(() => {
        const asyncf = async() => {
            await checkState()
            await InserverList()
            await serverList()
            await getuserlist()
        }

        asyncf()

        return () => {
            lastchannel()
        }
    }, [currentChatServer])

    useEffect(() => {
        let websocket: WebSocket;

        const fload = async () => {
            if (chatserveruuid !== null){
                const res = await axios.post('/api/server/chatget', {
                    user_id: chatserveruuid,
                })
                const FriendList: Message[] = res.data.result;
                setchatlist(FriendList)
        
                websocket = new WebSocket(`/ws/chat/${chatserveruuid}`);
                setWS(websocket)

                websocket.onmessage = (event) => {
                    const receivedMessage: Message = JSON.parse(event.data);
                    setchatlist(prevList => [...prevList, receivedMessage]);
                };
            }
        }
        fload()

        return () => {
            if (websocket && websocket.readyState === websocket.OPEN) websocket.close()
            lastchannel()
        }
    }, [chatserveruuid])

    const lastchannel = async () => {
        if (currentChatServer && chatserveruuid){
            await axios.post('/api/server/backtask', {
                user_id: getId('uuid'),
                last_server: currentChatServer,
                last_channel: chatserveruuid
            })
        }
    }

    const checkState = () => {
        if (!checkExp()) navigate('/')
    }

    const logout = () => {
        localStorage.removeItem("SecuerChat_Token")
        checkState()
    }

    const getuserlist = async () => {
        if (currentChatServer == null) return navigate('/friends')

        const res = await axios.post('/api/server/getuserlist', {
            user_id: currentChatServer
        })
        if (res.data) setuserlist(res.data)
    }

    const serverList = async () => {
        const res = await axios.post('/api/server/get', {
            user_id: getId('uuid')
        })
        if (res.data) setserverlist(res.data)
    }

    const handelkey = async (key: React.KeyboardEvent<HTMLInputElement>) => {
        if (key.key === 'Enter' && message !== ''){
            if (ws && ws.readyState == WebSocket.OPEN){
                const payload = {
                    uuid: getId('uuid'),
                    user_id: getId('id'),
                    content: message
                }
                ws.send(JSON.stringify(payload))
                setmessage('')
            }
        }
    }

    const InserverList = async() => {
        if (currentChatServer == null) return navigate('/friends')

        const res = await axios.post<ChannelInfo>('/api/server/getInserver', {
            user_id: getId('uuid'),
            server_name: currentChatServer
        })

        const {channel, last} = res.data;

        let lastchan = last;
        setchannellist(channel);

        if (lastchan === null) lastchan = channel[0].channel_uuid
        setchatserveruuid(lastchan);

        let channel_id = channel.find(channel => channel?.channel_uuid === lastchan)?.channel_id
        if (!channel_id) channel_id = channel[0].channel_id
        setinserver(channel_id)
    }
    
    const invserver = (e: React.MouseEvent<HTMLDivElement>, value: string) => {
        e.preventDefault();
        setUI(1)
        setservername(value)
    }

    return <>
        <UIBox op={UI} setop={setUI} servername={servername} setservername={setservername}></UIBox>
        <BackgroundB>
            <ServerList>
                <ServerItem active={currentChatServer === null} onClick={() => {setCurrentChatServer(null); navigate('/friends')}}><ServerItemText>SC</ServerItemText></ServerItem>
                {serverlist.map((value:string) => {
                    return (
                        <ServerItem active={currentChatServer === value} onContextMenu={(e) => {invserver(e, value)}} 
                        onClick={() => {setCurrentChatServer(value); navigate('/chat')}}><AddServerText>{value}</AddServerText></ServerItem>
                    )
                })}
                <ServerItem active={false} onClick={() => setUI(2)}><AddServerText>+</AddServerText></ServerItem>
            </ServerList>
            <UserList>
                <TitleBox><ServerTitle>{currentChatServer}</ServerTitle></TitleBox>
                <ChatUserList>
                    <CreateInServer>
                        <AddInServerChat>채널 추가</AddInServerChat>
                        <AddInServerChat onClick={() => {setUI(3)}}>+</AddInServerChat>
                    </CreateInServer>
                    {channellist.map((channel: ChannelList) => {
                        return <ServerInServer active={inserver == channel.channel_id} 
                        onClick={() => {setinserver(channel.channel_id); setchatserveruuid(channel.channel_uuid)}}>
                            <ServerInServerName>{channel.channel_id}</ServerInServerName>
                        </ServerInServer>
                    })}
                </ChatUserList>
                <UserInfo>
                    <UserTitle></UserTitle>
                    <Name>{getId('id')}</Name>
                    <LogoutBtn onClick={logout}></LogoutBtn>
                </UserInfo>
            </UserList>
            <ChatBox>
                <ChatTop acitve={false}>
                    <ChannelTitle>{inserver}</ChannelTitle>
                </ChatTop>
                <Chating>
                    {chatlist.map((value) => {
                        return <>
                            <SetChatBox>
                                <UserTitle></UserTitle>
                                <SetSubChatBoxA>
                                    <SetSubChatBoxB>
                                        <MessageUser>{value.user_id}</MessageUser>
                                        <MessageTime>{format(parseISO(value.timestamp), 'yyyy-MM-dd HH:mm')}</MessageTime>
                                    </SetSubChatBoxB>
                                    <Chatting>{value.content}</Chatting>
                                </SetSubChatBoxA>
                            </SetChatBox>
                        </>
                    })}
                </Chating>
                <ChatBottom>
                    <ChatInput placeholder="메시지 보내기" onKeyDown={(e) => handelkey(e)} onChange={(event) => setmessage(event.target.value)} value={message}></ChatInput>
                </ChatBottom>
            </ChatBox>
            <InfoBox>
                <InfoTop></InfoTop>
                <InfoList>
                    {
                        userlist.map((value) => {
                            return <>
                                <InfoListBox>
                                    <UserTitle></UserTitle>
                                    <Name>{value}</Name>
                                </InfoListBox>
                            </>
                        })
                    }
                </InfoList>
            </InfoBox>
        </BackgroundB>
    </>
}

export default Friends