import styled from 'styled-components';
import { Name } from '../Text/style';

export const Chating = styled.ul`
    width: 100%;
    height: 80%;

    background-color: #2E2F3E;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    overflow: auto;
`

export const InfoList = styled.ul`
    width: 100%;
    height: 94%;
    
    background-color: #2E2F3E;
    border: 1px solid #AAB0D0;
    border-width: 0 0 0 1px;

    display: flex;
    flex-direction: column;
    align-items: center;

    list-style: none;
`

export const InfoListBox = styled.div`
    width: 95%;
    height: 50px;

    margin: 5px 0 0;
    
    background-color: #2E2F3E;
    ${Name} {background-color: #2E2F3E;}

    display: flex;
    align-items: center;

    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: #464863;

        ${Name} {background-color: #464863;}
    }
`

export const FirstUserList = styled.ul`
    width: 100%;
    height: 80%;

    background-color: #2E2F3E;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
`