import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as question} from "../../assets/question.svg";

export const StyledLink = styled(Link) `
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const Question = styled(question)`
  justify-self: center;
  animation: spin 7s infinite linear;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
`
