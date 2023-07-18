import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/FilterContact/FilterContact';
import { ContactList } from 'components/ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/selector';
import { ContactsLoader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { Container } from 'components/Container.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error && <ContactsLoader />}
    </Container>
  );
}
