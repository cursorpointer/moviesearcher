import {useDispatch} from "react-redux";
import {filterGenres} from "../../../../store/modules/Filter/slice";
import {FC} from "react";
import {GenresCheckboxType} from "../../../../types/types";
import {HiddenRadioButton} from "../../Filter.styles";

export const GenresCheckbox: FC<GenresCheckboxType> = ({id}) => {
  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(filterGenres(id))
  }

  return (
    <div>
      <label>
        <HiddenRadioButton onClick={handleCheck}/>
      </label>

    </div>
  );
};
