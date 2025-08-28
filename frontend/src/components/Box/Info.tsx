import styled from 'styled-components'
import { CenterDiv, CoulmnDiv } from './Base'
import theme from '../theme/theme'

export const InfoBox = styled(CoulmnDiv)`
    width: 250px;
    height: 100%;
    
    margin-top: 10px;

    background-color: ${theme.color.chatbox};
    align-items: center;
`

export const InfoTop = styled(CenterDiv)`
    width: 100%;
    height: 50px;

    border: 1px solid ${theme.color.radius};
    border-width: 1px 0 1px 0;
    background-color: ${theme.color.chatbox};
`
