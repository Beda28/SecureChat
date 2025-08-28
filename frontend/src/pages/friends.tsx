import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { checkExp, getId } from '../utils/token'
import axios from "axios"
import { useAppContext } from "../utils/appcontext"
import { BackgroundB } from "../components/Box/Background"
import { Line, ServerItem, ServerList } from "../components/Box/Server"
import { AddServerText, ServerItemText } from "../components/Text/Server"
import { ChatUserList, TitleBox, UserInfo, UserList, UserListItem, UserListTitle, UserTitle } from "../components/Box/UserList"
import { LogoutBtn, SearchFriend } from "../components/Button/Button"
import { Def, SearchButtonA, SearchButtonB } from "../components/Text/Chat"
import { FriendTitle, Name } from "../components/Text/Friend"
import { ChatBox, ChatTop } from "../components/Box/Chat"
import { ChatList } from "../middlepages/friendChat"
import { AddFriend, FriendList } from "../middlepages/friendlist"
import { InfoBox, InfoTop } from "../components/Box/Info"
import { InfoList } from "../components/UL/List"
import { UIBox } from "../middlepages/UIBox"

const Friends = () => {
    const [friend, setfriend] = useState("list")
    const [sayback, setsayback] = useState("")
    const [listfriend, setlistfriend] = useState<string[]>([])
    const [focususer, setfocususer] = useState('')
    const navigate = useNavigate()
    const {currentChatServer, setCurrentChatServer} = useAppContext()
    const [serverlist, setserverlist] = useState<string[]>([]);
    const [UI, setUI] = useState<number>(0);
    const [servername, setservername] = useState('');

    const CheckToken = () => {
        if (!checkExp()) navigate('/')
    }

    useEffect(() => {
        const asyncf = async () => {
            await getList()
            await serverList()
        }
        CheckToken()
        asyncf()
        setCurrentChatServer(null)
    }, []);

    const changeFriend = () => {
        if (friend == "list") setfriend("req")
        else setfriend("list")
    }
    
    const logout = () => {
        localStorage.removeItem("SecuerChat_Token")
        CheckToken()
    }

    const getList = async () => {
        const res = await axios.post('/api/friend/getlist', {
            user_id: getId('uuid')
        })

        if (res.data) setlistfriend(res.data)
    }

    const serverList = async () => {
        const res = await axios.post('/api/server/get', {
            user_id: getId('uuid')
        })
        setserverlist(res.data)
    }

    const lookList = () => {
        return <>
            {
                listfriend.map((value) => {
                    return (
                        <UserListItem active={focususer == value} onClick={() => {setfriend('chat'); setsayback(value); changefocus(value)}}>
                            <UserListTitle></UserListTitle>
                            <Name>{value}</Name>
                        </UserListItem>
                    )
                })
            }
        </>
    }

    const changefocus = (id: string) => {
        setfocususer(id)
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
                <ServerItem active={currentChatServer === null} onClick={() => setCurrentChatServer(null)}><ServerItemText>SC</ServerItemText></ServerItem>
                {
                    serverlist.map((value:string) => {
                        return <ServerItem active={currentChatServer === value} onContextMenu={(e) => {invserver(e, value)}} 
                        onClick={() => {setCurrentChatServer(value); navigate('/chat')}}><AddServerText>{value}</AddServerText></ServerItem>
                    })
                }
                <ServerItem active={false} onClick={() => setUI(2)}><AddServerText>+</AddServerText></ServerItem>
            </ServerList>
            <UserList>
                <TitleBox>
                    <SearchFriend>대화 찾기</SearchFriend>
                </TitleBox>
                <ChatUserList><Def onClick={() => {changefocus(''); setfriend('list')}} active={focususer == ''}>친구</Def><Line></Line>{lookList()}</ChatUserList> 
                <UserInfo>
                    <UserTitle></UserTitle>
                    <Name>{getId('id')}</Name>
                    <LogoutBtn onClick={logout}></LogoutBtn>
                </UserInfo>
            </UserList>
            <ChatBox>
                <ChatTop acitve={friend == "chat"}>
                    {(friend == "chat") ? (<FriendTitle>{sayback}</FriendTitle>) : <FriendTitle>친구</FriendTitle>}
                    {(friend != "chat") ? ((friend == "list") ? <SearchButtonA>모두</SearchButtonA> : <SearchButtonB onClick={changeFriend}>모두</SearchButtonB>) : <></>}
                    {(friend != "chat") ? ((friend == "list") ? <SearchButtonB onClick={changeFriend}>친구찾기</SearchButtonB> : <SearchButtonA>친구찾기</SearchButtonA>) : <></>}
                </ChatTop>
                {(friend == "chat") ? <ChatList uuid={getId('uuid')} id={getId('id')} user_id={sayback}></ChatList> : ((friend == "list") ? <FriendList uuid={getId('uuid')}></FriendList> : <AddFriend uuid={getId('uuid')}></AddFriend>)}
            </ChatBox>
            <InfoBox>
                <InfoTop></InfoTop>
                <InfoList></InfoList>
            </InfoBox>
        </BackgroundB>
    </>
}

export default Friends