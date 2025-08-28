import styled from 'styled-components'
import { AlCenterDiv, CenterDiv } from './Base'
import theme from '../theme/theme'

export const BackgroundA = styled(CenterDiv)`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(120deg, #2F2957, #7D50BA, #2F2957);
`

export const BackgroundB = styled(AlCenterDiv)`
    width: 100vw;
    height: 100vh;

    padding: 10px 0 0;
    background-color: ${theme.color.backb};
`

export const BackgroundC = styled(CenterDiv)<{op: number}>`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    background: none;

    z-index: ${props=>props.op != 0? 15 : 0};
`