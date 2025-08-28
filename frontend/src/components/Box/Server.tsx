import styled from 'styled-components'
import { AlCenterDiv, CenterDiv, CoulmnDiv, SpaceDiv } from './Base'
import theme from '../theme/theme'
import { ServerInServerName, ServerItemText } from '../Text/Server'
import { Name } from '../Text/Friend'

export const ServerList = styled(CoulmnDiv)`
    width: 50px;
    height: 100%;

    background-color: ${theme.color.backb};
    align-items: center;

    margin: 10px;
`

export const ServerItem = styled(CenterDiv)<{active : boolean}>`
    width: 50px;
    height: 50px;

    margin: 5px 0;
    
    border-radius: 10px;
    background-color: ${theme.color.serveritem};

    &:hover{
        background-color: ${props=>props.active? theme.color.serveritem : theme.color.hovercolor};
        cursor: pointer;
        
        ${ServerItemText}{
            background-color: ${props=>props.active? theme.color.serveritem : theme.color.hovercolor};
            background-color: #6c6e8dff;
        }
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    margin: 5px 0;
    background-color: ${theme.color.radius};
`

export const CreateInServer = styled(SpaceDiv)`
    width: 100%;
    height: 40px;
    
    background-color: ${theme.color.serveritem};
`

export const ServerInServer = styled(SpaceDiv)<{active: boolean}>`
    width: 100%;
    height: 40px;

    border-radius: 5px;
    background-color: ${props=>props.active? theme.color.chatbox : theme.color.serveritem};
    ${ServerInServerName}{background-color: ${props=>props.active? theme.color.chatbox : theme.color.serveritem};}

    padding: 0 10px;
    margin: 3px 0 0;

    &:hover{
        background-color: ${props=>props.active? theme.color.chatbox : theme.color.backb};
        cursor: pointer;

        ${ServerInServerName}{
            background-color: ${props=>props.active? theme.color.chatbox : theme.color.backb};
        }
    }
`

export const InviteServerList = styled(CoulmnDiv)<{op: number}>`
    width: 400px;
    height: ${props=>props.op == 1? '400px' : '170px'};
    padding: 0 10px 10px;
    position: absolute;

    background-color: ${theme.color.chatbox};
    border: 1px solid ${theme.color.radius};
    opacity: ${props=>props.op != 0? 1 : 0};
    align-items: ${props=>props.op != 0? 'center' : ''};

    border-radius: 10px;
    z-index: 5;
`

export const AddUIBox = styled(CenterDiv)<{op: number}>`
    width: 100%;
    height: 100%;

    display: ${props=>props.op != 0? 'flex' : 'none'};
    
    position: absolute;
    background-color: ${theme.textcolor.colorc};
    opacity: ${props=>props.op != 0? 0.5 : 0};

    z-index: 3;
    top:0;
`

export const AddServerUserList = styled(SpaceDiv)`
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    
    background: none;
`

export const ListUserItem = styled(AlCenterDiv)`
    height: 100%;
    background: none;

    ${Name} { background: none; }
`