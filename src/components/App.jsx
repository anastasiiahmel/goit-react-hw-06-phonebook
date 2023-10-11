

import { Section } from './section/Section';
import { Containers } from './container/Container';
import { Form } from './contactsForm/ContactsForm';
import { Filter } from './filter/Filter';
import { Contacts } from './contacts/Contacts';



export const App = () => {
  return(
   <Section>
      <Containers title={'Phonebook'}>
        <Form />
      </Containers>
      <Containers title={'Filter'}>
        <Filter/>
      </Containers>
      <Containers title={'Contacts'}>
        <Contacts/>
      </Containers>
    </Section>
  );


}; 