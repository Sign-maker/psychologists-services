import css from "./UserMenu.module.css";
import { UniversalBtn } from "../UniversalBtn/UniversalBtn";
import { useAuth } from "../../hooks/useAuth";
import { Icon } from "../Icon/Icon";

import { ICON_CLASSES } from "../../constants/iconConstants";
import { ACTION_OPTIONS } from "../../constants/actionOptionsConstants";
import { UNIVESAL_BUTTON_CLASSES } from "../../constants/universalButtonConstants";

export const UserMenu = () => {
  const {
    user: { displayName },
  } = useAuth();

  return (
    <div className={css.wrapper}>
      <span className={css.userInfoWrapper}>
        <span className={css.userIconWrapper}>
          <Icon
            iconName="icon-user"
            width="24"
            height="24"
            className={ICON_CLASSES.classLight}
          />
        </span>
        {displayName &&
          `${displayName.charAt(0).toUpperCase()}${displayName
            .slice(1)
            .toLowerCase()}`}
      </span>
      <UniversalBtn
        width={135}
        btnClass={UNIVESAL_BUTTON_CLASSES.btnTransparent}
      >
        {ACTION_OPTIONS.signOut.title}
      </UniversalBtn>
    </div>
  );
};
