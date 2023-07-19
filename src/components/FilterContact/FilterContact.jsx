import { Label, Text } from './FilterContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContact } from 'redux/contacts/filtersSlice';
import { selectFilters } from 'redux/contacts/selector';

export const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const changeFilter = ({ target: { value } }) => {
    dispatch(filteredContact(value.trim()));
  };
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

