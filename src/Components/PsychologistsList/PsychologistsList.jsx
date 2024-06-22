import { useEffect, useState } from "react";
import { usePsychologists } from "../../hooks/usePsychologists";
import { useFilter } from "../../hooks/useFilter";
import { toast } from "react-toastify";
import { endAt, startAt } from "firebase/database";
import { FILTER_OPTIONS, SORT_ORDER } from "../../constants/filterConstants";
import { UniversalBtn } from "../UniversalBtn/UniversalBtn";
// import css from "./PsychologistsList.module.css";

export const PsychologistsList = () => {
  const [queryConstraint, setQueryConstraint] = useState([]);
  const [shouldGetItems, setShouldGetItems] = useState(true);

  const {
    // psychologistsItems,
    isPsychologistsLoading,
    nextKey,
    nextValue,
    getPsychologists,
    resetPsychologists,
  } = usePsychologists();

  const { selectedFilter } = useFilter();

  useEffect(() => {
    const getData = async () => {
      try {
        await getPsychologists(queryConstraint);
        setShouldGetItems(false);
      } catch (error) {
        toast.error(`Ooops, something went wrong! ${error.message}`);
      }
    };

    if (shouldGetItems && queryConstraint.length > 0) {
      getData();
    }
  }, [getPsychologists, queryConstraint, shouldGetItems]);

  useEffect(() => {
    if (!nextKey) return;

    const constraintParams =
      FILTER_OPTIONS[selectedFilter].sortOrder === SORT_ORDER.asc
        ? FILTER_OPTIONS[selectedFilter].key
          ? [startAt(nextValue, nextKey)]
          : [startAt(nextKey)]
        : FILTER_OPTIONS[selectedFilter].key
        ? [endAt(nextValue, nextKey)]
        : [endAt(nextKey)];

    setQueryConstraint([
      ...FILTER_OPTIONS[selectedFilter].queryConstraint,
      ...constraintParams,
    ]);
  }, [nextKey, nextValue, selectedFilter]);

  useEffect(() => {
    resetPsychologists();
    const newQueryConstraint = FILTER_OPTIONS[selectedFilter]
      .additionalQueryConstraint
      ? [
          ...FILTER_OPTIONS[selectedFilter].queryConstraint,
          ...FILTER_OPTIONS[selectedFilter].additionalQueryConstraint,
        ]
      : [...FILTER_OPTIONS[selectedFilter].queryConstraint];

    setQueryConstraint(newQueryConstraint);
    setShouldGetItems(true);
  }, [resetPsychologists, selectedFilter]);

  const handleLoadMore = () => {
    setShouldGetItems(true);
  };

  return (
    <div>
      PsychologistsList
      {nextKey && (
        <UniversalBtn
          onClick={handleLoadMore}
          isLoading={isPsychologistsLoading}
          width={176}
        >
          Load more
        </UniversalBtn>
      )}
    </div>
  );
};
