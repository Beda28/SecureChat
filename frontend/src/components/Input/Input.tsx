import styled from 'styled-components'
import theme from '../theme/theme'
import { Line } from './Base'

export const InputA = styled(Line)`
    width: 300px;

    border: 1px solid ${theme.inputcolor.bordera};
    border-radius: 5px;
    background-color: ${theme.color.checkbox};

    color: ${theme.textcolor.colora};
    font-size: 16px;
    font-weight: bold;

    padding: 17px 10px;
    margin: 7px 0;
`

export const ChatInput = styled(Line)`
    width: 100%;
    border-radius: 5px;

    color: ${theme.textcolor.white};
    background-color: ${theme.color.serveritem};
    border: 1px solid ${theme.color.radius};

    font-size: 18px;
    padding: 5px 20px;
`

export const ChatSearchA = styled(Line)`
    width: 100%;
    border-radius: 5px;

    color: ${theme.textcolor.white};
    background-color: ${theme.color.backb};
    border: 1px solid ${theme.color.radius};

    font-size: 18px;
    padding: 5px 20px;
    margin: 20px 0;
`

export const ChatSearchB = styled(Line)`
    width: 900%;
    border-radius: 5px;

    color: ${theme.textcolor.white};
    background-color: ${theme.color.backb};
    border: 1px solid ${theme.color.radius};

    font-size: 18px;
    padding: 5px 20px;
    margin: 20px 0;
`