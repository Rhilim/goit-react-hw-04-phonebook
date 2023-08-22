import { StyledFilter, StyledFilterTitle } from "./Filter.styled";

export const Filter = ({ filter, onChangeFilter }) => {
    return (
      <>
        <StyledFilterTitle>Find contacts by name:</StyledFilterTitle>
        <StyledFilter type="text" value={filter} onChange={e => onChangeFilter(e.target.value)}/>
      </>
    );
  };
  