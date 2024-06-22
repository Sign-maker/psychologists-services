import Select from "react-select";
import { FILTER_OPTIONS } from "../../constants/filterConstants";
import { useFilter } from "../../hooks/useFilter";
import css from "./Filter.module.css";

const options = Object.entries(FILTER_OPTIONS).map(([id, data]) => ({
  value: id,
  label: data.value,
}));

export const Filter = () => {
  const { setFilter, selectedFilter } = useFilter();

  const defaultOption = options.find(
    ({ value }) => value === FILTER_OPTIONS[selectedFilter].id
  );

  const handleSelect = (selectedOption) => {
    if (selectedOption.value === selectedFilter) {
      return;
    }

    setFilter(selectedOption.value);
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Filters</h3>
      <Select
        onChange={handleSelect}
        options={options}
        defaultValue={defaultOption}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};
