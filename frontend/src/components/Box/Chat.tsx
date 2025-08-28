import styled from 'styled-components'
import { AlCenterDiv, CoulmnDiv, SpaceDiv } from './Base'
import theme from '../theme/theme'
import { Chatting, MessageTime, MessageUser } from '../Text/Chat'


export const ChatBox = styled(CoulmnDiv)`
    width: 70%;
    height: 100%;

    margin-top: 10px;
    background-color: ${theme.color.chatbox};

    align-items: center;
`

export const ChatTop = styled(SpaceDiv)<{acitve: boolean}>`
    width: 100%;
    height: 50px;

    justify-content: ${props => props.acitve ? "space-between" : "left"};
    
    border: 1px solid ${theme.color.radius};
    border-width: 1px 0 1px 0;
    background-color: ${theme.color.chatbox};
`

export const ChatBottom = styled(SpaceDiv)`
    width: 100%;
    height: 70px;

    padding: 10px;
    background-color: ${theme.color.chatbox};
`

export const SetSubChatBoxA = styled(CoulmnDiv)`
    height: 100%;
    background-color: ${theme.color.chatbox};
`

export const SetSubChatBoxB = styled.div`
    height: 25px;

    display: flex;
    background-color: ${theme.color.chatbox};
`

export const SetChatBox = styled(AlCenterDiv)`
    width: 100%;
    height: 50px;

    background-color: ${theme.color.chatbox};
    margin-top: 10px;

    &:hover{
        background-color: ${theme.color.serveritem};

        ${SetSubChatBoxA} {
            background-color: ${theme.color.serveritem};
        }

        ${SetSubChatBoxB} {
            background-color: ${theme.color.serveritem};
        }

        ${MessageUser}{
            background-color: ${theme.color.serveritem};
        }

        ${MessageTime}{
            background-color: ${theme.color.serveritem};
        }

        ${Chatting}{
            background-color: ${theme.color.serveritem};
        }
    }
`