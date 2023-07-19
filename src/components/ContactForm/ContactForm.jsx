import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Label, Button } from './ContactForm.styled';
import { schema, NumberMask } from '../Details/Validate';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';
import toast from 'react-hot-toast';
import MaskedInput from 'react-text-mask';

export const ContactForm = () => {
  const contact = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{  name: '', number: '' }} 
          
      validationSchema={schema}
      
      onSubmit={(values, action) => {  
      const duplicateName = contact.find(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      );

      return duplicateName
      ? toast(`${values.name} is already in contacts.`, { icon: '⚠️' })
      : (dispatch(addContact(values)), action.resetForm());
  }}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">
          Name*
          <Field
            type="text"
            name="name"
          />
        </Label>
        <ErrorMessage name="name" component={'span'} />
        <Label htmlFor="number">
          Number*
          <Field
            type="tel"
            name="number"
            component={({ field }) => (
              <MaskedInput
                {...field}
                mask={NumberMask}
                />
            )}
          />
        </Label>
        <ErrorMessage name="number" component={'span'} />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};


