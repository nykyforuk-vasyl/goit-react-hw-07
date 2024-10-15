import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ul className={s.list}>
          {filteredContacts.map((item) => (
            <Contact key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
