import styled from 'styled-components'

export const ProfilePicture = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
  text-align: center;
  border: 2px solid ${(props) => props.theme.primaryColor};
`
