import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../redux-store/filter/filterSelectors";
import { filterSlice } from "../redux-store/filter/filterSlice";

export const useFilter = () => {
  const dispath = useDispatch();

  const selectedFilter = useSelector(selectFilter);

  const setFilter = (selectedFilter) =>
    dispath(filterSlice.actions.setFilter(selectedFilter));

  return { selectedFilter, setFilter };
};
