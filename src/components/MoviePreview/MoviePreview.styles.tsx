import styled from 'styled-components'
import {css} from "styled-components";
import {DescriptionType} from '../../types/types'

export const MoviePreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  gap: 50px;
`

export const CardImg = styled.img`
  border-radius: 20px;;
  position: relative;

`
export const CardOverview = styled.div`
  width: 70rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Title = styled.span`
  z-index: 1;
  font-family: Poppins;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #FFFFFF;

`

export const Description = styled.span<DescriptionType>`
  font-family: Roboto;
  font-weight: normal;
  font-size: 30px;
  letter-spacing: 0.03em;
  color: #E6E6E6;
  overflow: fragments;
  position: relative;
  ${(props => props.overview && css`
            ::after {
              content: "";
              position: absolute;
              bottom: -1rem;
              left: 0;
              border: 1px solid #666666;
              width: 40rem;
            }
          `
  )};

`
export const Date = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  letter-spacing: 0.01em;
  text-transform: lowercase;
  color: #666666;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    border: 1px solid #666666;
    width: 40rem;
  }
`

export const Genres = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  letter-spacing: 0.01em;
  text-transform: lowercase;
  color: #666666;
`

export const CardNum = styled.span`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 200px;
  color: #121212;;
  text-shadow: 2px 2px 1px #666666;
  -webkit-background-clip: text;
`
