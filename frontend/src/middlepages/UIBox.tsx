import { useEffect, useState } from "react"
import { BackgroundC } from "../components/Box/Background"
import { AddServerUserList, AddUIBox, InviteServerList, ListUserItem } from "../components/Box/Server"
import { UserTitle } from "../components/Box/UserList"
import { ChatInput } from "../components/Input/Input"
import { InviteBtn, Name } from "../components/Text/Friend"
import { InviteTitle, ResultMessage } from "../components/Text/Server"
import { AddServerFriendList } from "../components/UL/List"
import axios from "axios"
import { getId } from "../utils/token"
import { useAppContext } from "../utils/appcontext"
import { useNavigate } from "react-router-dom"
import { InviteButton } from "../components/Button/Button"

interface ChannelList {
    channel_id: string;
    channel_uuid: string;
}

export const UIBox =  ({op, setop, servername, setservername, setchannellist}: 
    {op: number, setop: React.Dispatch<React.SetStateAction<number>>, servername: string, 
        setservername: React.Dispatch<React.SetStateAction<string>>, setchannellist:React.Dispatch<React.SetStateAction<ChannelList[]>>}) => {
    
    const [resultmessage, setresultmessage] = useState('');
    const [active, setactive] = useState<boolean>(false);
    const {currentChatServer, setCurrentChatServer, setchatserveruuid} = useAppContext()
    const [friendlist, setfriendlist] = useState<string[]>([]);
    const navigate = useNavigate()

    const clickcheck = () => {
        if (op === 0) return;
        setop(0)
        setservername('')
    }

    const AddserverUser = async(value:string) => {
        const res = await axios.post('/api/server/invite', {
            user_id: value,
            server_name: servername
        })
        setresultmessage(res.data.message)
        setactive(res.data.active)
    }
            
    const setting = async() => {
        const res = await axios.post('api/friend/getlist', {
            user_id: getId('uuid')
            })
        setfriendlist(res.data)
    }

    const userlist = () => {
        return <>
            {friendlist.map(value => {
                return (<>
                    <ListUserItem>
                        <UserTitle></UserTitle>
                        <Name>{value}</Name>
                    </ListUserItem>
                    <InviteButton onClick={() => AddserverUser(value)}><InviteBtn>전송</InviteBtn></InviteButton>
                </>)
            })}
        </>
    }

    useEffect(() => {
        setresultmessage('')
        if (op == 1) setting()
    }, [op])

    
    const enterkey = async (key: React.KeyboardEvent<HTMLInputElement>) => {
        if (key.key == 'Enter'){
            if (servername == ''){
                setresultmessage("빈값은 입력할 수 없습니다.")
                return setactive(true)
            }

            if (servername.length > 10) {
                setresultmessage("제한길이 초과"); 
                return setactive(true)
            }

            const res = await axios.post(`/api/server/${(op == 2)? 'add':'addchannel'}`, 
            (op == 2) ? {
                user_uuid: getId('uuid'),
                server_name: servername
            } : {
                server_name: currentChatServer,
                channel_name: servername
            })

            if (res.data.active) {
                setop(0); 
                setservername(''); 
                if (op == 2) {
                    setCurrentChatServer(servername);
                }
                else {
                    console.log(res.data)
                    setchannellist(res.data.channel_list);
                    setchatserveruuid(res.data.channel_uuid); 
                }
                return navigate('/chat');
            }

            setresultmessage(res.data.message)
            setactive(res.data.active)
        }
    }
    
    return <>
        <BackgroundC op={op}>
            <AddUIBox op={op} onClick={clickcheck}></AddUIBox>
            <InviteServerList op={op} onClick={(e) => {e.preventDefault()}}>
                {(op == 1) ? <InviteTitle>친구 초대하기</InviteTitle> : (
                    (op == 2) ? <InviteTitle>서버 생성하기</InviteTitle> : (
                        (op == 3) ? <InviteTitle>채널 생성하기</InviteTitle> : <InviteTitle></InviteTitle>
                    )
                )}
                {(op == 1)? <AddServerFriendList>
                    <AddServerUserList>{userlist()}</AddServerUserList>
                </AddServerFriendList> : (null)}

                {(op == 2)? <ChatInput placeholder="서버 이름을 입력해주세요" onKeyDown={(e) => {enterkey(e)}} 
                onChange={(e) => {setservername(e.target.value)}} value={servername}></ChatInput> : (null)}

                {(op == 3)? <ChatInput placeholder="채널 이름을 입력해주세요" onKeyDown={(e) => {enterkey(e)}} 
                onChange={(e) => {setservername(e.target.value)}} value={servername}></ChatInput> : (null)}

                <ResultMessage active={active} op={resultmessage != ''}>{resultmessage}</ResultMessage>
            </InviteServerList>
        </BackgroundC>
    </>
}