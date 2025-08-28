import styled from 'styled-components'
import { CoulmnDiv, SpaceDiv } from './Base'
import theme from '../theme/theme'

export const LoginBox = styled(CoulmnDiv)`
    width: 440px;
    height: 550px;

    align-items: center;

    background-color: ${theme.color.loginbox};
    border-radius: 10px;
`

export const CheckBox = styled(SpaceDiv)`
    width: 300px;
    height: 50px;

    padding: 5px;
    margin: 20px;

    background-color: ${theme.color.checkbox};

    border-radius: 5px;
`