import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {filterRating} from "../../../../store/modules/Filter/slice";
import {
  ExactButton,
  FilterOption,
  FilterOptionArrow,
  FilterOptionWrapper,
  InputRange,
  RatingIcon,
  RatingSet
} from "../../Filter.styles";

export const Rating = () => {
  const [ratingCollapse, setRatingCollapse] = useState(false)
  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    dispatch(filterRating(parseFloat(value)))
  }
  const handleShowRating = () => {
    setRatingCollapse(!ratingCollapse)
  }
  const handleSetDefault = () => {
    dispatch(filterRating(0))
  }

  return (
    <FilterOptionWrapper>
      <FilterOption onClick={handleShowRating}>
        <RatingIcon/>
        рейтинг
        <FilterOptionArrow ratingcollapse={ratingCollapse ? 1 : 0}></FilterOptionArrow>
      </FilterOption>
      <div>
        {ratingCollapse &&
        <RatingSet>
          <InputRange
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={value}
            onChange={handleChangeValue}
          />
          <div>{value} и выше</div>
          <ExactButton onClick={handleSetDefault}>не учитывать</ExactButton>
        </RatingSet>
        }
      </div>
    </FilterOptionWrapper>
  );
};