import Select from "react-select";
import { FILTER_OPTIONS } from "../../constants/filterConstants";
import { useFilter } from "../../hooks/useFilter";

const options = Object.entries(FILTER_OPTIONS).map(([id, data]) => ({
  value: id,
  label: data.value,
}));

const defaultOption = options.find(
  ({ value }) => value === FILTER_OPTIONS.nameAsc.id
);

export const Filter = () => {
  const { setFilter, selectedFilter } = useFilter();

  const handleSelect = (selectedOption) => {
    if (selectedOption.value === selectedFilter) {
      return;
    }

    setFilter(selectedOption.value);
  };

  return (
    <Select
      onChange={handleSelect}
      options={options}
      defaultValue={defaultOption}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};
