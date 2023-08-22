import { StyledDeleteBtn, StyledList, StyledListItem } from "./Contacts.styled";

export const Contacts = ({ array, onDelete }) => {
  return (
    <>
      <StyledList>
        {array.map((el, index) => (
          <StyledListItem key={index}>
            {el.name}: {el.number}
            <StyledDeleteBtn onClick={() => onDelete(el.id)}>delete</StyledDeleteBtn>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
};
