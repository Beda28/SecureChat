import styled from 'styled-components';
import theme from '../theme/theme';
import { BaseCenterP, BaseP } from './Base';

export const LoginTitle = styled(BaseP)`
    font-size: 36px;
    font-weight: bold;
    background-color: ${theme.color.loginbox};
    margin: 30px;
`

export const CheckP = styled(BaseCenterP)<{$active: boolean}>`
    font-size: 20px;
    font-weight: bold;
    width: 140px;
    height: 40px;
    border-radius: 5px;

    color: ${props=>props.$active? theme.textcolor.white : theme.textcolor.colora};
    background-color: ${props=>props.$active? theme.textcolor.colorc : theme.color.checkbox};

    &:hover{
        cursor: ${props=>props.$active? '': 'pointer'};
        color: ${props=>props.$active? theme.textcolor.white : theme.textcolor.colora};
        background-color: ${props=>props.$active? theme.textcolor.colorc : theme.textcolor.colorc};
    }
`

export const SubTitle = styled(BaseP)`
    background-color: ${theme.color.loginbox};

    width: 300px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
`