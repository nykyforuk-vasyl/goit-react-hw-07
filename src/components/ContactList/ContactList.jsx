import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map((item) => (
          <Contact
            key={item.id}
            name={item.name}
            phone={item.number}
            id={item.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
