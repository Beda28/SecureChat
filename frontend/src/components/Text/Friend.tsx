import styled from 'styled-components';
import theme from '../theme/theme';
import { BaseCenterP, BaseP } from './Base';

export const Name = styled(BaseP)`
    font-size: 16px;
    background-color: ${theme.color.serveritem};
`
export const ListName = styled(BaseP)`
    font-size: 14px;
    background-color: ${theme.color.chatbox};
`

export const FriendTitle = styled(BaseCenterP)`
    font-size: 18px;
    width: 100px;
    height: 100%;

    background-color: ${theme.color.chatbox};
    border-right: 1px solid ${theme.color.radius};
`

export const InviteBtn = styled(BaseCenterP)`
    width: 100%;
    height: 100%;

    background-color: ${theme.color.chatbox};
    border-right: 1px solid ${theme.color.radius};
    border-radius: 5px;
`