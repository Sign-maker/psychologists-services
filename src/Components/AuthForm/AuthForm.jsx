import { ICON_CLASSES } from "../../constants/iconConstants";
import { Icon } from "../Icon/Icon";
import css from "./AuthForm.module.css";

export const AuthForm = ({ actionOption, onClose }) => {
  return (
    <div className={css.wrapper}>
      <h2>{actionOption.title}</h2>
      <button type="button" onClick={onClose} className={css.closeBtn}>
        <Icon
          iconName="icon-x"
          height="32"
          width="32"
          className={ICON_CLASSES.classDark}
        />
      </button>
    </div>
  );
};
