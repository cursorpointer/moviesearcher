import styled from "styled-components";
import { MovieListType } from "../../types/types";

export const MovieFetchedListListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
`
export const MovieList = styled.div<MovieListType>`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  margin-top: 7rem;
  margin-left: 7rem;
  filter: ${(props) => (props.filterCollapse && "blur(8px)")};
`

export const Title = styled.span`
  z-index: 1;
  font-family: Poppins;
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
`

export const GenButton = styled.div `
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 34px;
  color: #000000;
  width: 12rem;
  height: 4.2rem;
  background: #E5E5E5;
  border-radius: 100px;
  padding: 15px 40px;
  box-shadow: 4px 4px 4px rgb(245, 241, 241), 4px 4px 4px rgb(250, 247, 247);
  cursor: pointer;
  z-index: 1000;
  position: relative;
  top: 30rem;
`