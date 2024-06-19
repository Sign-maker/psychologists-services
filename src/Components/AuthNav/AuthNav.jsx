import { useState } from "react";
import { authNavOptions } from "../../constants/actionOptionsConstants";
import { UniversalBtn } from "../UniversalBtn/UniversalBtn";
import css from "./AuthNav.module.css";
import Modal from "../Modal/Modal";
import { AuthForm } from "../AuthForm/AuthForm";
import { UNIVESAL_BUTTON_CLASSES } from "../../constants/universalButtonConstants";

export const AuthNav = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleSignInClose = () => {
    setShowSignInModal(false);
  };

  const handleSignUpClose = () => {
    setShowSignUpModal(false);
  };

  return (
    <div className={css.wrapper}>
      <UniversalBtn
        onClick={handleSignInClick}
        width={124}
        btnClass={UNIVESAL_BUTTON_CLASSES.btnTransparent}
      >
        {authNavOptions.signIn.title}
      </UniversalBtn>
      <UniversalBtn onClick={handleSignUpClick} width={172}>
        {authNavOptions.signUp.title}
      </UniversalBtn>
      {showSignInModal && (
        <Modal onClose={handleSignInClose}>
          <AuthForm
            actionOption={authNavOptions.signIn}
            onClose={handleSignInClose}
          />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={handleSignUpClose}>
          <AuthForm
            actionOption={authNavOptions.signUp}
            onClose={handleSignUpClose}
          />
        </Modal>
      )}
    </div>
  );
};
