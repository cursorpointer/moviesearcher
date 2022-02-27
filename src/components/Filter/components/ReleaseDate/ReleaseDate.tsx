import {ReleaseDateButton} from "./ReleaseDateButton";
import {DateIcon, DateShow, FilterOption, FilterOptionArrow, FilterOptionWrapper} from "../../Filter.styles";
import {useState} from "react";


export const ReleaseDate = () => {
  const [dateCollapse, setDateCollapse] = useState(false)
  const releaseDates = [
    {title: 'до 2025 года', date: 2025},
    {title: 'до 2015 года', date: 2015},
    {title: 'до 2010 года', date: 2010},
    {title: 'до 2000 года', date: 2000},
    {title: 'до 1990 года', date: 1990},
    {title: 'до 1980 года', date: 1980},
    {title: 'до 1970 года', date: 1970},
    {title: 'до 1960 года', date: 1960},
  ]

  const handleShowDate = () => {
    setDateCollapse(!dateCollapse)
  }

  return (
    <FilterOptionWrapper>
      <FilterOption onClick={handleShowDate}>
        <DateIcon />
        год
        <FilterOptionArrow datecollapse={dateCollapse ? 1 : 0}></FilterOptionArrow>
      </FilterOption>
      <div>
        {dateCollapse &&
        <DateShow>
          {releaseDates.map((item) =>
            <ReleaseDateButton
              key={item.date + item.title}
              date={item.date}
              title={item.title}
            >
            </ReleaseDateButton>
          )}
        </DateShow>
        }
      </div>
    </FilterOptionWrapper>
  );
};

