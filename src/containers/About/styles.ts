import styled from 'styled-components'

export const GithubSection = styled.div`
  text-align: center;
  margin: 32px auto 64px auto;

  img {
    height: 157px;
    margin-right: 16px;

    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 8px;
    }
  }
`
