import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li className={s.listItem}>
        <div className={s.wraper}>
          <p className={s.name}>
            <FaUser className={s.iconUser} />
            {name}
          </p>
          <p className={s.name}>
            <FaPhoneAlt className={s.iconUser} />
            {phone}
          </p>
        </div>

        <button type="button" className={s.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
