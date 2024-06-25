import { useEffect } from "react";
import { useFilter } from "../../hooks/useFilter";
import Select from "react-select";
import { FILTER_OPTIONS } from "../../constants/filterConstants";
import css from "./Filter.module.css";

const options = Object.entries(FILTER_OPTIONS).map(([id, data]) => ({
  value: id,
  label: data.value,
}));

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#e8f5e9", // Светло-зеленый цвет фона для контрола
    border: "1px solid #81c784", // Зеленая рамка
    borderRadius: "4px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#66bb6a", // Цвет рамки при наведении
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "4px",
    marginTop: 0,
    backgroundColor: "#ffffff", // Белый цвет фона для меню
    boxShadow: "0 4px 11px rgba(0, 0, 0, 0.1)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#a5d6a7"
      : state.isFocused
      ? "#c8e6c9"
      : "#ffffff",
    color: state.isSelected ? "#2e7d32" : "#000000",
    "&:active": {
      backgroundColor: "#81c784", // Цвет фона при активации
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#2e7d32", // Зеленый цвет текста для выбранного значения
  }),
};

export const Filter = () => {
  const { setFilter, selectedFilter, resetFilter } = useFilter();

  useEffect(() => {
    resetFilter();
  }, [resetFilter]);

  const getDefaultOption = (options) =>
    options.find(({ value }) => value === FILTER_OPTIONS.nameAsc.id);

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
        styles={customStyles}
        onChange={handleSelect}
        options={options}
        defaultValue={getDefaultOption(options)}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};
