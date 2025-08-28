import styled from 'styled-components';
import theme from '../theme/theme';

export const CenterP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const JusP = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BaseP = styled.p`
    color: ${theme.textcolor.white};
`

export const BaseCenterP = styled(CenterP)`
    color: ${theme.textcolor.white};
`

export const BaseJusP = styled(JusP)`
    color: ${theme.textcolor.white}
`