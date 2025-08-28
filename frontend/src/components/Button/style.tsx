import styled from 'styled-components';
import { InviteBtn } from '../Text/style';

export const LoginButton = styled.button`
    width: 300px;
    height: 50px;
    margin-top: 33px;

    background-color: #9C7EC6;
    color: #FFFFFF;

    font-size: 20px;
    font-weight: bold;

    border-radius: 5px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`
export const SearchFriend = styled.button`
    width: 100%;
    height: 100%;

    font-size: 20px;
    font-weight: 700;
    
    color: #FFFFFF;
    background-color: #2E2F3E;

    border: none;
    border-radius: 5px;
    transition: 0.2s;
    
    &:hover{
        cursor: pointer;
        background-color: #5a5c72;
    }
`

export const SearchUserButton = styled.button`
    width: 120px;
    height: 40px;

    font-size: 14px;
    font-weight: 400;

    position: absolute;
    right: 0;
    
    color: #FFFFFF;
    background-color: #6c6e8dff;

    border: none;
    border-radius: 5px;
    transition: 0.2s;

    margin-right: 20px;
    
    &:hover{
        cursor: pointer;
        background-color: #2E2F3E;
    }
`

export const LogoutBtn = styled.button`
    width: 30px;
    height: 30px;
    
    position: absolute;
    right: 0;
    margin-right: 10px;

    border: none;
    outline: none;
    border-radius: 5px;

    background-color: #6c81b5;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: #3c5184;
    }
`

export const AcceptBtn = styled.button`
    width: 50px;
    height: 30px;
    
    color: #FFFFFF;
    background-color: #66BB6A;

    border-radius: 5px;
    margin: 5px;

    outline: none;
    border: none;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: #4CAF50;
    }
`

export const DenyBtn = styled.button`
    width: 50px;
    height: 30px;
    
    color: #FFFFFF;
    background-color: #F44336;

    border-radius: 5px;
    margin: 5px;

    outline: none;
    border: none;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: #d9534f ;
    }
`

export const CancelBtn = styled.button`
    width: 50px;
    height: 30px;
    
    color: #FFFFFF;
    background-color: #607D8B;

    border-radius: 5px;
    margin: 5px;

    outline: none;
    border: none;

    &:hover{
        cursor: pointer;
    }

    &:active{
        background-color: #60717a;
    }
`

export const InviteButton = styled.button`
    width: 50px;
    height: 30px;
    
    color: #FFFFFF;
    background-color: #4092ff ;
    ${InviteBtn} {background-color: #4092ff }

    border: none;
    outline: none;
    border-radius: 5px;
    margin: 0 10px 0;

    &:hover{
        cursor: pointer;
        background-color: #266ad8 ;
        ${InviteBtn} {background-color: #266ad8 }
    }
`