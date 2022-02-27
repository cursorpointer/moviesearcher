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
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  margin-top: 7rem;
  filter: ${(props) => (props.filterCollapse && "blur(8px)")};
`
