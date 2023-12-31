import styled from 'styled-components'
import { Props } from '.'

export const Text = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.primaryColor
      : props.theme.secondaryColor};
`
