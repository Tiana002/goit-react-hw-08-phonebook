import { List, Item, Button, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilters } from 'redux/contacts/selector';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
	);

  return (
    <List>
    {filterContacts.map(({ number, name, id }) => {
      return (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </Button>
        </Item>
      );
    })}
  </List>
);
};
  




