import styled from 'styled-components';

export const LoginTitle = styled.p`
    font-size: 36px;
    font-weight: bold;

    color: #FFFFFF;
    background-color: #352F4F;

    margin: 30px;
`

export const CheckP = styled.p`
    font-size: 20px;
    font-weight: bold;
    
    color: #FFFFFF;
    background-color: #232434;

    width: 140px;
    height: 40px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
`

export const NoCheckP = styled.p`
    font-size: 20px;
    font-weight: bold;

    color: #6B7183;
    background-color: #333B55;

    width: 140px;
    height: 40px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 5px;

    &:hover{
        background-color: #232434;
        color: #FFFFFF;
        cursor: pointer;
    }
`

export const SubTitle = styled.p`
    color: #FFFFFF;
    background-color: #352F4F;

    width: 300px;
    font-size: 20px;
    font-weight: bold;

    margin-top: 15px;
`

export const ServerTitle = styled.p`
    font-size: 20px;
    font-weight: 700;

    color: #FFFFFF;
    background-color: #464863;
`

export const Name = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    background-color: #464863;
`
export const ListName = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    background-color: #2E2F3E;
`

export const FriendTitle = styled.p`
    font-size: 18px;
    width: 100px;
    height: 100%;

    color: #FFFFFF;
    background-color: #2E2F3E;
    border-right: 1px solid #AAB0D0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const InviteBtn = styled.p`
    width: 100%;
    height: 100%;

    color: #FFFFFF;
    background-color: #2E2F3E;
    border-right: 1px solid #AAB0D0;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChannelTitle = styled.p`
    font-size: 18px;
    width: auto;
    height: 100%;

    color: #FFFFFF;
    background-color: #2E2F3E;
    border-right: 1px solid #AAB0D0;

    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0 15px;
`

export const SearchButtonA = styled.p`
    font-size: 16px;

    padding: 15px 10px;
    margin: 10px;
    height: 50%;

    border-radius: 5px;

    color: #FFFFFF;
    background-color: #80829d;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`

export const SearchButtonB = styled.p`
    font-size: 16px;

    padding: 15px 10px;
    margin: 10px;
    height: 50%;

    border-radius: 5px;

    color: #FFFFFF;
    background-color: #2E2F3E;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;

    &:hover{
        cursor: pointer;
        background-color: #80829d;
    }
`

export const PostSubmit = styled.p`
    width: 100%;

    font-size: 18px;
    border-bottom: 1px solid #AAB0D0;
    padding: 5px;

    color: #FFFFFF;
    background-color: #2E2F3E;
`

export const MessageUser = styled.p`
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;

    color: #FFFFFF;
    background-color: #2E2F3E;
    
    display: flex;
    align-items: center;
`

export const MessageTime = styled.p`
    margin-right: 10px;
    font-size: 14px;

    color: #a1a1a1;
    background-color: #2E2F3E;

    display: flex;
    align-items: center;
`

export const Chatting = styled.p`
    font-size: 16px;
    font-weight: 200;

    color: #FFFFFF;
    background-color: #2E2F3E;

    width: 100%;
    
    display: flex;
    align-items: center;
`

export const Def = styled.p<{active : boolean}>`
    width: 100%;
    height: 40px;

    font-size: 18px;

    color: #FFFFFF;
    background-color: ${props=>props.active? '#2E2F3E' : '#464863'};

    display: flex;
    align-items: center;
    padding: 0 10px;

    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: #2E2F3E;
    }
`

export const ServerItemText = styled.div`
    width: 75%;
    height: 75%;

    background-color: #464863;
    color: #FFFFFF;

    border-radius: 5px;

    font-size: 18px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddServerText = styled.div`
    width: 75%;
    height: 75%;

    background-color: #464863;
    color: #FFFFFF;

    border-radius: 5px;

    font-size: 30px;
    font-weight: 500;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ServerInServerName = styled.div`
    font-size: 16px;    
    font-weight: 400;
    
    display: flex;
    justify-content: center;
    align-items: center;

    
    background-color: #464863;
    color: #FFFFFF;
`

export const AddInServerChat = styled.p`
    font-size: 16px;    
    font-weight: 400;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #464863;
    color: #AAB0D0;

    &:hover{
        cursor: pointer;
        color: #FFFFFF;
    }
`

export const UiBoxTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;
`