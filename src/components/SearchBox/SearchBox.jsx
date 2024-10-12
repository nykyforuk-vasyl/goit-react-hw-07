import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <>
      <p className={s.text}>Finds contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        name="query"
      />
    </>
  );
};

export default SearchBox;
