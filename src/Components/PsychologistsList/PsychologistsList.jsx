import { usePsychologists } from "../../hooks/usePsychologists";
import { PsychologistsItem } from "../PsychologistsItem/PsychologistsItem";
// import css from "./PsychologistsList.module.css";

export const PsychologistsList = () => {
  const { psychologistsItems } = usePsychologists();

  return (
    <ul>
      {psychologistsItems.map((item) => (
        <PsychologistsItem key={item.key} item={item} />
      ))}
    </ul>
  );
};
