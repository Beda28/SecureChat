import styled from 'styled-components';
import { Chatting, ListName, MessageTime, MessageUser, Name, ServerInServerName, ServerItemText } from '../Text/style';

export const BackgroundA = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(120deg, #2F2957, #7D50BA, #2F2957);
`
export const BackgroundB = styled.div`
    display: flex;
    align-items: center;

    width: 100vw;
    height: 100vh;

    padding: 10px 0 0;
    background-color: #353645;
`

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 440px;
    height: 550px;

    background-color: #352F4F;
    border-radius: 10px;
`

export const CheckBox = styled.div`
    width: 300px;
    height: 50px;
    padding: 5px;
    margin: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #333B55;

    border-radius: 5px;
`

export const ServerList = styled.div`
    width: 50px;
    height: 100%;

    background-color: #353645;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px;
`

export const ServerItem = styled.div<{active : boolean}>`
    width: 50px;
    height: 50px;

    margin: 5px 0;
    
    border-radius: 10px;
    background-color: #464863;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: ${props=>props.active? '#464863' : '#6c6e8dff'};
        cursor: pointer;
        
        ${ServerItemText}{
            background-color: ${props=>props.active? '#464863' : '#6c6e8dff'};
            background-color: #6c6e8dff;
        }
    }
`

export const UserList = styled.div`
    width: 250px;
    height: 100%;

    border-radius: 10px;
    background-color: #353645;
`

export const Title = styled.div`
    width: 100%;
    height: 50px;

    margin-top: 5px;
    padding: 10px;

    border: 1px solid #AAB0D0;
    border-width: 1px 0 1px 1px;
    border-radius: 10px 0 0 0;
    background-color: #464863;

    display: flex;
    align-items: center;
`

export const CServerList = styled.div`
    width: 100%;
    height: 80%;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 5px 5px 0;

    background-color: #464863;
    border-left: 1px solid #AAB0D0;
`

export const UserInfo = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    position: relative;

    background-color: #464863;
    border: 1px solid #AAB0D0;
    border-width: 1px 0 1px 1px;
    border-radius: 0 0 0 10px;
`

export const ChatBox = styled.div`
    width: 70%;
    height: 100%;

    margin-top: 10px;
    background-color: #2E2F3E;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ChatTop = styled.div<{acitve: boolean}>`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: ${props => props.acitve ? "space-between" : "left"};
    align-items: center;
    
    border: 1px solid #AAB0D0;
    border-width: 1px 0 1px 0;
    background-color: #2E2F3E;
`

export const ChatBottom = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    background-color: #2E2F3E;
`

export const InfoBox = styled.div`
    width: 250px;
    height: 100%;
    
    margin-top: 10px;

    background-color: #2E2F3E;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoTop = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 1px solid #AAB0D0;
    border-width: 1px 0 1px 0;
    background-color: #2E2F3E;
`

export const UserListItem = styled.div<{active: boolean}>`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 40px;

    border-radius: 5px;
    background-color: ${props=>props.active? '#2E2F3E' : '#464863'};
    ${Name}{
        background-color: ${props=>props.active? '#2E2F3E' : '#464863'};
    }

    &:hover{
        background-color: #353645;
        cursor: pointer;

        ${Name}{
            background-color: #353645;
        }
    }
`

export const ListItemFromUser = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 50px;

    background-color: #2E2F3E;
    border-top: 1px solid #AAB0D0;

    margin-bottom: 10px;

    &:hover{
        background-color: #464863;
        cursor: pointer;
        border: none;
        border-radius: 5px;

        ${ListName}{
            background-color: #464863;
            border-radius: 5px;
        }
    }
`

export const UserTitle = styled.div`
    width: 40px;
    height: 40px;

    margin: 10px;
    
    border-radius: 50px;
    background-color: #AAB0D0;
`

export const UserListTitle = styled.div`
    width: 30px;
    height: 30px;

    margin: 10px;
    
    border-radius: 50px;
    background-color: #AAB0D0;
`

export const AddUserBox = styled.div`
    width: 100%;
    height: 80px;

    background-color: #2E2F3E;

    padding: 15px;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;    
`

export const SubmitList = styled.div`
    width: 100%;

    background-color: #2E2F3E;
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FriendBoxInfo = styled.div`
    background-color: #2E2F3E;
    height: 50px;

    display: flex;
    align-items: center;

    border-radius: 5px;
`

export const FriendBox = styled.div`
    width: 100%;
    height: 50px;
    
    background-color: #2E2F3E;
    margin: 5px 0 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px;

    &:hover{
        background-color: #464863;

        ${FriendBoxInfo}{
            background-color: #464863;
        }

        ${ListName} {
            background-color: #464863;
        }
    }
`
export const SetSubChatBoxA = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    
    background-color: #2E2F3E;
`

export const SetSubChatBoxB = styled.div`
    height: 25px;

    display: flex;
    background-color: #2E2F3E;
`

export const SetChatBox = styled.li`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    background-color: #2E2F3E;
    margin-top: 10px;

    &:hover{
        background-color: #464863;

        ${SetSubChatBoxA} {
            background-color: #464863;
        }

        ${SetSubChatBoxB} {
            background-color: #464863;
        }

        ${MessageUser}{
            background-color: #464863;
        }

        ${MessageTime}{
            background-color: #464863;
        }

        ${Chatting}{
            background-color: #464863;
        }
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #AAB0D0;
    margin: 5px 0;
`

export const CreateInServer = styled.div`
    width: 100%;
    height: 40px;
    
    background-color: #464863;

    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const ServerInServer = styled.div<{active: boolean}>`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 5px;
    background-color: ${props=>props.active? '#2E2F3E' : '#464863'};
    ${ServerInServerName}{
        background-color: ${props=>props.active? '#2E2F3E' : '#464863'};
    }

    padding: 0 10px;
    margin: 3px 0 0;

    &:hover{
        background-color: ${props=>props.active? '#2E2F3E' : '#353645'};
        cursor: pointer;

        ${ServerInServerName}{
            background-color: ${props=>props.active? '#2E2F3E' : '#353645'};
        }
    }
`

export const AddUIBox = styled.div`
    width: 100%;
    height: 100%;
    
    position: fixed;
    background-color: black;
    opacity: 0.3;

    display: flex; 
    justify-content: center;
    align-items: center;
`

export const InviteServerList = styled.div`
    width: 500px;
    height: 500px;
    background-color: black;
    opacity: 1;

    border-radius: 10px;
    display: flex;
    flex-direction: column;
`