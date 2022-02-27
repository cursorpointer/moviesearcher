import styled, {css} from "styled-components";
import {ReactComponent as filterButton} from "../../assets/filterButton.svg";
import {ReactComponent as downArrow} from "../../assets/downArrow.svg";
import {ReactComponent as dateIcon} from "../../assets/dateIcon.svg"
import {ReactComponent as genresIcon} from "../../assets/genresIcon.svg"
import {ReactComponent as ratingIcon} from "../../assets/ratingIcon.svg"
import {DateButtonType, FilterArrowType} from "../../types/types";


export const FilterWrapper = styled.div`
  width: 20rem;  
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
`

export const FilterButton = styled.div`
  font-family: Montserrat;
  color: #E5E5E5;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  width: inherit;
  display: flex;
  justify-content: end;
  gap: 3rem;
  align-items: center;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(229, 229, 229, 0.5);
  border-radius: 50px;
  height: 4.2rem;

`


export const FilterOptions = styled.div`
  margin-top: 1rem;
  position: absolute;
  display: flex;
  gap: 15px;
  padding: 15px 30px 40px 40px;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: auto;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(229, 229, 229, 0.5);
  border-radius: 50px;
  color: #FFFFFF;
  background: #181818;
  z-index: 1000;
`

export const FilterArrow = styled(filterButton)<FilterArrowType>`
  ${(props => props.filtercollapse && css`transform: rotate(180deg)`)};
`

export const FilterOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const FilterOption = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

export const GenresIcon = styled(genresIcon) ``
export const DateIcon = styled(dateIcon) ``
export const RatingIcon = styled(ratingIcon) ``

export const FilterOptionArrow = styled(downArrow)<FilterArrowType>`
  transform: ${(props => (props.genrescollapse || props.datecollapse || props.ratingcollapse) ? "rotate(180deg)" : null)};
`

export const GenresOption = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-weight: 400;
  font-size: 25px;
  color: #E5E5E5;
  text-transform: capitalize;
`
export const DateShow = styled.div`
  padding: 20px;
  gap: 5px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  opacity: 80%;
`

export const DateButton = styled.button<DateButtonType>`
  border-radius: 10px;
  background: #E5E5E5;
  cursor: pointer;
  color: #000;
  padding: 5px 5px;
  border: #444;
  &&:focus{
    background: #444;
  }
  &&:hover{
    background: #fff;
  }
`;

export const RatingSet = styled.div`
  font-weight: 400;
  font-size: 18px;
`


export const HiddenRadioButton = styled.input.attrs({
  type: "radio",
})`
  height: 25px;
  width: 25px;
  cursor: pointer;
  position: absolute;
  opacity: 10%;
  right: 1.5rem
`

export const InputRange = styled.input.attrs({
  type: "range",
})`
  width: 12rem;
  opacity: 50%;
`

