import styled from "styled-components"
import {SearchIconType, ToggleButtonFavType, ToggleButtonGenType} from "../../types/types";
import {ReactComponent as searchIcon} from "../../assets/searchIcon.svg";


export const SearcherModeToggle = styled.div`
  justify: center;
  display: flex;
  width: 48rem;
  height: 4.2rem;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(229, 229, 229, 0.5);
  border-radius: 100px;
`

export const HeaderWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
`

export const ToggleButtonGen = styled.button<ToggleButtonGenType>`
  color: #E5E5E5;
  text-transform: uppercase;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 37px;
  line-height: 45px;
  padding: 9px 80px;
  width: 25rem;
  height: 4.3rem;
  cursor: pointer;
  border: none;
  border-radius: ${(props) => (!props.favouritesmode && "100px")};
  background: ${(props) => (!props.favouritesmode ? "#1F1F1F" : "transparent")};
  box-shadow: ${(props) => (!props.favouritesmode ? "3px -3px 4px rgba(229, 229, 229, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.5)" : "transparent")};
`
export const ToggleButtonFav = styled.button<ToggleButtonFavType>`
  color: #E5E5E5;
  text-transform: uppercase;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 37px;
  line-height: 45px;
  width: 25rem;
  height: 4.3rem;
  padding: 9px 80px;
  cursor: pointer;
  border: none;
  border-radius: ${(props) => (props.favouritesmode && "100px")};
  background: ${(props) => (props.favouritesmode ? "#1F1F1F" : "transparent")};
  box-shadow: ${(props) => (props.favouritesmode ? "3px -3px 4px rgba(229, 229, 229, 0.25), 4px 4px 4px rgba(0, 0, 0, 0.5)" : "transparent")};
`

export const SearchInput = styled.input`
  outline: none;
  width: 20rem;
  height: 4.2rem;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25), inset -1px -1px 4px rgba(229, 229, 229, 0.5);
  border-radius: 50px;
  background: #181818;
  color: #E5E5E5;
  padding-left: 20px;
  padding-right: 5px;
`
export const SearchWrapper = styled.div`
  display: flex;
`

export const SearchIcon = styled(searchIcon)<SearchIconType>`
  position: relative;
  left: -62px;
  bottom: -3px;
  cursor: pointer;
  justify-self: flex-end;
`