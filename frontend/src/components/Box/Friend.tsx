import styled from 'styled-components'
import theme from '../theme/theme'
import { AlCenterDiv, CoulmnDiv, SpaceDiv } from './Base'
import { ListName } from '../Text/Friend'


export const AddUserBox = styled(SpaceDiv)`
    width: 100%;
    height: 80px;

    background-color: ${theme.color.chatbox};

    padding: 15px;
    position: relative;
`

export const SubmitList = styled(CoulmnDiv)`
    width: 100%;

    background-color: ${theme.color.chatbox};
    padding: 15px;

    align-items: center;
`

export const FriendBoxInfo = styled(AlCenterDiv)`
    background-color: ${theme.color.chatbox};
    height: 50px;

    border-radius: 5px;
`

export const FriendBox = styled(SpaceDiv)`
    width: 100%;
    height: 50px;
    
    background-color: ${theme.color.chatbox};
    margin: 5px 0 0;

    border-radius: 5px;

    &:hover{
        background-color: ${theme.color.serveritem};

        ${FriendBoxInfo}{
            background-color: ${theme.color.serveritem};
        }

        ${ListName} {
            background-color: ${theme.color.serveritem};
        }
    }
`