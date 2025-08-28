import styled from 'styled-components';
import theme from '../theme/theme';
import { BaseCenterP, BaseJusP, BaseP } from './Base';


export const ServerItemText = styled(BaseCenterP)`
    width: 75%;
    height: 75%;

    background-color: ${theme.color.serveritem};
    border-radius: 5px;

    font-size: 18px;
    overflow: hidden;
`

export const AddServerText = styled(BaseCenterP)`
    width: 75%;
    height: 75%;

    background-color: ${theme.color.serveritem};
    border-radius: 5px;

    font-size: 30px;
    font-weight: 500;
    overflow: hidden;
`

export const ServerInServerName = styled(BaseCenterP)`
    font-size: 16px;    
    font-weight: 400;
    
    background-color: ${theme.color.serveritem};
`

export const AddInServerChat = styled(BaseJusP)`
    font-size: 16px;    
    font-weight: 400;
    
    background-color: ${theme.color.serveritem};
    color: ${theme.color.radius};

    &:hover{
        cursor: pointer;
        color: ${theme.textcolor.white};
    }
`

export const UiBoxTitle = styled(BaseP)`
    font-size: 24px;
    font-weight: 600;
`

export const ChannelTitle = styled(BaseCenterP)`
    font-size: 18px;
    width: auto;
    height: 100%;

    background-color: ${theme.color.chatbox};
    border-right: 1px solid ${theme.color.radius};
    padding: 0 15px;
`

export const ServerTitle = styled(BaseP)`
    font-size: 20px;
    font-weight: 700;

    background-color: #464863;
`

export const InviteTitle = styled(BaseCenterP)`
    color: ${theme.textcolor.white};
    background: none;
    
    font-size: 28px;
    font-weight: 700;
    margin: 15px;
`

export const ResultMessage = styled(BaseP)<{active: boolean, op: boolean}>`
    width: 100%;
    margin: 10px 0;

    color: ${props=>props.active? theme.buttoncolor.hacceptbtn : theme.buttoncolor.denybtn};
    background: none;

    font-size: 18px;
    font-weight: 500;

    display: ${props=>props.op? 'flex' : 'none'};
`