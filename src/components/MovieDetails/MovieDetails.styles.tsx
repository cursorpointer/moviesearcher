import styled, {css} from 'styled-components'
import {ReactComponent as favourites} from "../../assets/favourites.svg";
import {FavouriteButtonType} from "../../types/types";
import {ReactComponent as home} from "../../assets/home.svg";


export const MovieDetailsScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
`

export const MovieDetailsCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  font-family: Roboto;
  font-size: 30px;
  color: #E6E6E6;
`
export const CardImgBlur = styled.img`
  filter: blur(10px);
  position: absolute;
  left: 8rem;
  top: 10rem;
  opacity: 50%;
`

export const TitleShadow = styled.span`
  position: absolute;
  top: 8rem;
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

`

export const CardImg = styled.img`
  border-radius: 20px;;
  position: relative;

`
export const Title = styled.span`
  z-index: 1;
  font-family: Poppins;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
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
              fill: red;
            }
          `
  )};
`
export const HomeButton = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  width: 4rem;
  cursor: pointer;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(229, 229, 229, 0.5);
  border-radius: 20px;
  opacity: 50%;
`

export const Home = styled(home)`
  cursor: pointer;
`