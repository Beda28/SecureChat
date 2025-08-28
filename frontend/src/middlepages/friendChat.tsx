import axios from "axios";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { Chating } from "../components/UL/List";
import { ChatBottom, SetChatBox, SetSubChatBoxA, SetSubChatBoxB } from "../components/Box/Chat";
import { UserTitle } from "../components/Box/UserList";
import { Chatting, MessageTime, MessageUser } from "../components/Text/Chat";
import { ChatInput } from "../components/Input/Input";

interface Childprops {
    uuid: string;
    id: string;
    user_id: string;
}

interface Message {
    id: string;
    uuid: string;
    user_id: string;
    content: string;
    timestamp: string;
}

export const ChatList: React.FC<Childprops> = ({uuid, id, user_id}) => {
    const [chatlist, setchatlist] = useState<Message[]>([])
    const [message, setmessage] = useState('')
    const [ws, setWS] = useState<WebSocket>()

    useEffect(() => {
        let websocket: WebSocket;

        const FLoading = async () => {
            const res = await axios.post('/api/chat/getchat', {
                user_id: uuid,
                submit_id: user_id
            })

            const FriendList: Message[] = res.data.result;
            const chat_uuid = res.data.uuid;
            setchatlist(FriendList)

            websocket = new WebSocket(`/ws/chat/${chat_uuid}`);
            setWS(websocket)

            websocket.onmessage = (event) => {
                const receivedMessage: Message = JSON.parse(event.data);
                setchatlist(prevList => [...prevList, receivedMessage]);
            };
        }

        FLoading()
        
        return () => {
            if (websocket && websocket.readyState === websocket.OPEN) websocket.close()
        }
    }, [])

    const handelkey = async (key: React.KeyboardEvent<HTMLInputElement>) => {
        if (key.key === 'Enter' && message !== ''){
            if (ws && ws.readyState == WebSocket.OPEN){
                const payload = {
                    uuid: uuid,
                    user_id: id,
                    content: message
                }
                ws.send(JSON.stringify(payload))
                setmessage('')
            }
        }
    }

    return <>
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
    </>
}