import { Filter } from "../../Components/Filter/Filter";
import { PsychologistsList } from "../../Components/PsychologistsList/PsychologistsList";

const Psychologists = () => {
  return (
    <section>
      <div className="container"></div>
      <h2>Psychologists</h2>
      <Filter />
      <PsychologistsList />
    </section>
  );
};

export default Psychologists;
