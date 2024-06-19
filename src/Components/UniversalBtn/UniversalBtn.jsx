import { UNIVESAL_BUTTON_CLASSES } from "../../constants/universalButtonConstants";
import { BtnLoader } from "../BtnLoader/BtnLoader";
import css from "./UniversalBtn.module.css";

export const UniversalBtn = ({
  onClick,
  width = "100%",
  height = 48,
  isLoading = false,
  btnClass = UNIVESAL_BUTTON_CLASSES.btnFilled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${css.btn} ${css[btnClass]}`}
      style={{ width, height }}
      disabled={isLoading}
    >
      {isLoading && (
        <span>
          <BtnLoader
            color={
              btnClass === UNIVESAL_BUTTON_CLASSES.btnTransparent
                ? "#191a15"
                : "#fbfbfb"
            }
          />
        </span>
      )}
      {children}
    </button>
  );
};
