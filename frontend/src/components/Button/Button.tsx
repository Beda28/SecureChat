import styled from 'styled-components'
import theme from '../theme/theme'
import { NoLine } from './Base'
import { InviteBtn } from '../Text/Friend'

export const LoginButton = styled(NoLine)`
    width: 300px;
    height: 50px;
    margin-top: 33px;
    border-radius: 5px;

    background-color: ${theme.buttoncolor.login};
    font-size: 20px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`
export const SearchFriend = styled(NoLine)`
    width: 100%;
    height: 100%;

    font-size: 20px;
    font-weight: 700;
    
    background-color: ${theme.color.chatbox};

    border-radius: 5px;
    transition: 0.2s;
    
    &:hover{
        cursor: pointer;
        background-color: #5a5c72;
    }
`

export const SearchUserButton = styled(NoLine)`
    width: 120px;
    height: 40px;
    font-size: 14px;
    font-weight: 400;

    position: absolute;
    right: 0;
    border-radius: 5px;
    transition: 0.2s;
    margin-right: 20px;
    
    background-color: ${theme.color.hovercolor};
    
    &:hover{
        cursor: pointer;
        background-color: ${theme.color.chatbox};
    }
`

export const LogoutBtn = styled(NoLine)`
    width: 30px;
    height: 30px;
    
    position: absolute;
    right: 0;
    margin-right: 10px;
    border-radius: 5px;

    background-color: ${theme.buttoncolor.logout};
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: ${theme.buttoncolor.logouthover};
    }
`

export const AcceptBtn = styled(NoLine)`
    width: 50px;
    height: 30px;
    
    background-color: ${theme.buttoncolor.acceptbtn};

    border-radius: 5px;
    margin: 5px;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: ${theme.buttoncolor.hacceptbtn};
    }
`

export const DenyBtn = styled(NoLine)`
    width: 50px;
    height: 30px;
    
    background-color: ${theme.buttoncolor.denybtn};

    border-radius: 5px;
    margin: 5px;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: ${theme.buttoncolor.hdenybtn};
    }
`

export const CancelBtn = styled(NoLine)`
    width: 50px;
    height: 30px;
    
    background-color: ${theme.buttoncolor.cancelbtn};
    border-radius: 5px;
    margin: 5px;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: ${theme.buttoncolor.hcancelbtn};
    }
`

export const InviteButton = styled(NoLine)`
    width: 50px;
    height: 30px;
    
    background-color: ${theme.buttoncolor.invbtn};
    ${InviteBtn} {background-color: ${theme.buttoncolor.invbtn};}

    border-radius: 5px;
    margin: 0 10px 0;

    &:hover{
        cursor: pointer;
        background-color: ${theme.buttoncolor.hinvbtn};
        ${InviteBtn} {background-color: ${theme.buttoncolor.hinvbtn}};
    }
`