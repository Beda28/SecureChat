import styled from 'styled-components'
import { AlCenterDiv, CoulmnDiv } from './Base'
import theme from '../theme/theme'
import { ListName, Name } from '../Text/Friend'

export const UserList = styled(CoulmnDiv)`
    width: 250px;
    height: 100%;

    align-items: center;

    border-radius: 10px;
    background-color: ${theme.color.backb};
`

export const TitleBox = styled(AlCenterDiv)`
    width: 100%;
    height: 50px;

    margin-top: 5px;
    padding: 10px;

    border: 1px solid ${theme.color.radius};
    border-width: 1px 0 1px 1px;
    border-radius: 10px 0 0 0;
    background-color: ${theme.color.serveritem};
`

export const ChatUserList = styled(CoulmnDiv)`
    width: 100%;
    height: 80%;

    padding: 5px 5px 0;

    background-color: ${theme.color.serveritem};
    border-left: 1px solid ${theme.color.radius};
`

export const UserInfo = styled(AlCenterDiv)`
    width: 100%;
    height: 60px;

    position: relative;

    border-width: 1px 0 1px 1px;
    border-radius: 0 0 0 10px;

    background-color: ${theme.color.serveritem};
    border: 1px solid ${theme.color.radius};
`

export const UserListItem = styled(AlCenterDiv)<{active: boolean}>`
    width: 100%;
    height: 40px;

    border-radius: 5px;
    background-color: ${props=>props.active? theme.color.chatbox : theme.color.serveritem};
    ${Name}{
        background-color: ${props=>props.active? theme.color.chatbox : theme.color.serveritem};
    }

    &:hover{
        background-color: ${theme.color.backb};
        cursor: pointer;

        ${Name}{
            background-color: ${theme.color.backb};
        }
    }
`

export const ListItemFromUser = styled(AlCenterDiv)`
    width: 100%;
    height: 50px;

    background-color: ${theme.color.chatbox};
    border-top: 1px solid ${theme.color.radius};

    margin-bottom: 10px;

    &:hover{
        background-color: ${theme.color.serveritem};
        cursor: pointer;
        border: none;
        border-radius: 5px;

        ${ListName}{
            background-color: ${theme.color.serveritem};
            border-radius: 5px;
        }
    }
`

export const UserTitle = styled.div`
    width: 40px;
    height: 40px;

    margin: 10px;
    
    border-radius: 50px;
    background-color: ${theme.color.radius};
`

export const UserListTitle = styled.div`
    width: 30px;
    height: 30px;

    margin: 10px;
    
    border-radius: 50px;
    background-color: ${theme.color.radius};
`