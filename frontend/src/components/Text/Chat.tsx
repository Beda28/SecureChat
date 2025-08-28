import styled from 'styled-components';
import theme from '../theme/theme';
import { BaseCenterP, BaseP } from './Base';

export const SearchButtonA = styled(BaseCenterP)`
    font-size: 16px;

    padding: 15px 10px;
    margin: 10px;
    height: 50%;
    border-radius: 5px;

    background-color: ${theme.buttoncolor.sbtn};

    &:hover{
        cursor: pointer;
    }
`

export const SearchButtonB = styled(BaseCenterP)`
    font-size: 16px;
    padding: 15px 10px;
    margin: 10px;
    height: 50%;

    border-radius: 5px;
    background-color: ${theme.color.chatbox};
    transition: 0.3s;

    &:hover{
        cursor: pointer;
        background-color: ${theme.buttoncolor.sbtn};
    }
`

export const PostSubmit = styled(BaseP)`
    width: 100%;
    font-size: 18px;
    border-bottom: 1px solid ${theme.color.radius};
    padding: 5px;

    background-color: ${theme.color.chatbox};
`

export const MessageUser = styled(BaseP)`
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;

    background-color: ${theme.color.chatbox};
    display: flex;
    align-items: center;
`

export const MessageTime = styled(BaseP)`
    margin-right: 10px;
    font-size: 14px;

    color: ${theme.textcolor.colorb};
    background-color: ${theme.color.chatbox};

    display: flex;
    align-items: center;
`

export const Chatting = styled(BaseP)`
    font-size: 16px;
    font-weight: 200;
    width: 100%;

    background-color: ${theme.color.chatbox};
    display: flex;
    align-items: center;
`

export const Def = styled(BaseP)<{active : boolean}>`
    width: 100%;
    height: 40px;
    font-size: 18px;

    background-color: ${props=>props.active? theme.color.chatbox : theme.color.serveritem};

    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: ${theme.color.chatbox};
    }
`