import styled, {css} from 'styled-components'
import {ReactComponent as favourites} from "../../assets/favourites.svg";
import {FavouriteButtonType} from "../../types/types";
import {ReactComponent as Back} from "../../assets/backArrow.svg";


export const MovieDetailsScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
`

export const MovieDetailsCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 20rem;
  font-family: Roboto;
  font-size: 30px;
  color: #E6E6E6;
`
export const CardImgBlur = styled.img`
  filter: blur(10px);
  position: absolute;
  left: 14rem;
  top: 10rem;
`

export const TitleShadow = styled.span`
  position: absolute;
  top: 11rem;
  z-index: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 150px;
  color: #292929;
`

export const Rating = styled.span`
  z-index: 1;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 52px;
  letter-spacing: 0.03em;
  color: #E5E5E5;
  position: relative;
  left: 8rem;

`

export const ImgRatingBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const Runtime = styled.span`

`

export const Gross = styled.span`

`

export const FavouritesButton = styled(favourites)<FavouriteButtonType>`
  cursor: pointer;
  ${(props => props.favourite && css`
          &:hover {
            fill: #fff;
          }
        `
  )};
  ${(props => !props.favourite && css`
          &:hover {
            fill: #444;
          }
        `
  )};
`
export const HomeButton = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  width: 7.5rem;
  font-family: Montserrat;
  color: #E5E5E5;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(229, 229, 229, 0.5);
  border-radius: 100px;
  opacity: 50%;
`

export const BackArrow = styled(Back)`
  cursor: pointer;
`