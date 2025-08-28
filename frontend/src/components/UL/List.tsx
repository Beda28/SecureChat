import styled from 'styled-components';
import theme from '../theme/theme';
import { BaseUL } from './Base';
import { Name } from '../Text/Friend';

export const Chating = styled(BaseUL)`
    width: 100%;
    height: 80%;

    background-color: ${theme.color.chatbox};

    flex-direction: column;
    justify-content: end;
    overflow: auto;
`

export const InfoList = styled(BaseUL)`
    width: 100%;
    height: 94%;
    
    background-color: ${theme.color.chatbox};
    border: 1px solid ${theme.color.radius};
    border-width: 0 0 0 1px;

    flex-direction: column;
`

export const InfoListBox = styled(BaseUL)`
    width: 95%;
    height: 50px;

    margin: 5px 0 0;
    
    background-color: ${theme.color.chatbox};
    ${Name} {background-color: ${theme.color.chatbox}}
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: ${theme.color.serveritem};

        ${Name} {background-color: ${theme.color.serveritem};}
    }
`

export const FirstUserList = styled(BaseUL)`
    width: 100%;
    height: 80%;

    background-color: ${theme.color.chatbox};
    flex-direction: column;
`

export const AddServerFriendList = styled(BaseUL)`
    width: 100%;
    height: 100%;
    margin: 10px 0 0;
    
    background-color: ${theme.color.FhoverColor};
    border: 1px solid ${theme.color.radius};
    border-radius: 5px;
    flex-direction: column;
`