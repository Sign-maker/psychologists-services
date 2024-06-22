import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import * as psychologistsOperations from "../redux-store/psychologists/psychologistsOperations";
import {
  selectIsPsychologistsLoading,
  selectNextKey,
  selectNextValue,
  selectPsychologists,
} from "../redux-store/psychologists/psychologistsSelectors";
import { psychologistsSlice } from "../redux-store/psychologists/psychologistsSlice";

export const usePsychologists = () => {
  const dispath = useDispatch();

  const psychologistsItems = useSelector(selectPsychologists);
  const isPsychologistsLoading = useSelector(selectIsPsychologistsLoading);
  const nextValue = useSelector(selectNextValue);
  const nextKey = useSelector(selectNextKey);

  const resetPsychologists = useCallback(
    () => dispath(psychologistsSlice.actions.resetPsychologists()),
    [dispath]
  );

  const getPsychologists = useCallback(
    (requestData) =>
      dispath(psychologistsOperations.getPsychologists(requestData)).unwrap(),
    [dispath]
  );

  return {
    psychologistsItems,
    isPsychologistsLoading,
    nextKey,
    nextValue,
    getPsychologists,
    resetPsychologists,
  };
};
