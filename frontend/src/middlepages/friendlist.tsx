import { useEffect, useState } from "react"
import { ListItemFromUser, UserTitle } from "../components/Box/UserList";
import { ListName } from "../components/Text/Friend";
import { AddUserBox, FriendBox, FriendBoxInfo, SubmitList } from "../components/Box/Friend";
import { ChatSearchA, ChatSearchB } from "../components/Input/Input";
import { FirstUserList } from "../components/UL/List";
import axios from "axios"
import { AcceptBtn, CancelBtn, DenyBtn, SearchUserButton } from "../components/Button/Button";
import { PostSubmit } from "../components/Text/Chat";
import { getId } from "../utils/token";

interface Childprops {
    uuid: string;
}

interface FriendRequest {
    id: string;
    type: 'sent' | 'receive';
}

export const FriendList: React.FC<Childprops> = ({uuid}) => {
    const [friend, setfriend] = useState<string[]>([]);

    useEffect(() => {
        getList()
    }, [uuid])

    const getList = async () => {
        const res = await axios.post('/api/friend/getlist', {
            user_id: uuid
        })
        
        setfriend(res.data)
    }

    const lookList = () => {
        return <>
            {
                friend.map((value) => {
                    return (
                        <ListItemFromUser>
                            <UserTitle></UserTitle>
                            <ListName>{value}</ListName>
                        </ListItemFromUser>
                    )
                })
            }
        </>
    }

    return <>
        <AddUserBox>
            <ChatSearchA placeholder="검색하기"></ChatSearchA>
        </AddUserBox>
        <SubmitList>
            <FirstUserList>{lookList()}</FirstUserList>
        </SubmitList>
    </>
}

export const AddFriend: React.FC<Childprops> = ({uuid}) => {
    const [idsearch, setidsearch] = useState('')
    const [resultuser, setresultuser] = useState<string[]>([]);
    const [resultsend, setresultsend] = useState<string[]>([]);

    const cancel = async (send_id:string) => {
        try{
            const res = await axios.post('/api/friend/cancel', {
                user_id: uuid,
                submit_id: send_id
            })
            alert(res.data.message)
            fl()
        }catch(e){
            console.log(e)
        }
    }

    const deny = async (send_id:string) => {
        try{
            const res = await axios.post('/api/friend/deny', {
                user_id: uuid,
                submit_id: send_id
            })
            alert(res.data.message)
            fl()
        }catch(e){
            console.log(e)
        }
    }

    const accept = async (send_id:string) => {
        try{
            const res = await axios.post('/api/friend/accept', {
                user_id: uuid,
                submit_id: send_id
            })
            alert(res.data.message)
            fl()
        }catch(e){
            console.log(e)
        }
    }

    const submitfriend = async () => {
        if (idsearch == getId('id')) return alert("본인에게는 요청할 수 없습니다.")
        try{
            const res = await axios.post('/api/friend/submit', {
                user_id: uuid,
                submit_id: idsearch
            })
            alert(res.data.message)
            if (res.data.message == "친구요청성공") setresultuser(prev => [...prev, idsearch])
        } catch(e){
            console.log(e)
        }
    }

    const fl = async () => {
        const newSent: string[] = [];
        const newReceived: string[] = [];
        const res = await axios.post('/api/friend/sendlist', {
            user_id: uuid
        })

        res.data.forEach((request: FriendRequest) => {
            if (request.type == "sent") newSent.push(request.id)
            else newReceived.push(request.id)
        })

        setresultuser(newSent)
        setresultsend(newReceived)
    }

    useEffect(() => {
        fl()
    }, [uuid])

    return <>
        <AddUserBox>
            <ChatSearchB placeholder="검색하기" value={idsearch} onChange={(e) => setidsearch(e.target.value)}></ChatSearchB>
            <SearchUserButton onClick={submitfriend}>친구 요청 보내기</SearchUserButton>
        </AddUserBox>
        <SubmitList>
            <PostSubmit>받은 요청</PostSubmit>
            {
                resultsend.map((value) => (
                    <FriendBox>
                        <FriendBoxInfo>
                            <UserTitle></UserTitle>
                            <ListName>{value}</ListName>
                        </FriendBoxInfo>
                        <FriendBoxInfo>
                            <AcceptBtn onClick={() => accept(value)}>수락</AcceptBtn>
                            <DenyBtn onClick={() => deny(value)}>거절</DenyBtn>
                        </FriendBoxInfo>
                    </FriendBox>
                ))
            }
        </SubmitList>
        <SubmitList>
            <PostSubmit>보낸 요청</PostSubmit>
            {
                resultuser.map((value) => (
                    <FriendBox>
                        <FriendBoxInfo>
                            <UserTitle></UserTitle>
                            <ListName>{value}</ListName>
                        </FriendBoxInfo>
                        <CancelBtn onClick={() => cancel(value)}>취소</CancelBtn>
                    </FriendBox>
                ))
            }
        </SubmitList>
    </>
}