import {useDispatch} from "react-redux";
import { filterDate } from "../../../../store/modules/Filter/slice";
import {FC} from "react";
import { ReleaseDateButtonType } from "../../../../types/types";
import { DateButton } from "../../Filter.styles";

export const ReleaseDateButton:FC<ReleaseDateButtonType> = ({title, date}) => {

  const dispatch = useDispatch()
  const handleSetFilter = () => {
    dispatch(filterDate(date))
  }

  return (
    <DateButton
      onClick={handleSetFilter}
    >{title}
    </DateButton>
  );
};

