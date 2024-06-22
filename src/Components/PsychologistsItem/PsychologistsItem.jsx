import { useState } from "react";
import { ICON_CLASSES } from "../../constants/iconConstants";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { Icon } from "../Icon/Icon";
import { UniversalBtn } from "../UniversalBtn/UniversalBtn";
import { ReviewList } from "../ReviewList/ReviewList";
import css from "./PsychologistsItem.module.css";
import { ACTION_OPTIONS } from "../../constants/actionOptionsConstants";
import Modal from "../Modal/Modal";
import { ModalContentWrapper } from "../ModalContentWrapper/ModalContentWrapper";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const PsychologistsItem = ({
  item: {
    about,
    avatar_url,
    experience,
    initial_consultation,
    license,
    name,
    price_per_hour,
    rating,
    reviews,
    specialization,
  },
}) => {
  // const { favoriteCars, addCarToFavorite, removeCarFromFavorite } = useCars();
  const [isFavorite, setIsFavorite] = useState();
  const [showReadMore, setShowReadmore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionOption, setActionOption] = useState({});
  // const [isFavorite, setIsFavorite] = useState(() => {
  //   const idx = favoriteCars.findIndex(({ _id }) => car._id === _id);
  //   return idx === -1 ? false : true;
  // });
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // if (!isFavorite) {
    //   addCarToFavorite(car);
    // } else {
    //   removeCarFromFavorite(car._id);
    // }
    // setIsFavorite(!isFavorite);
  };

  const handleReadMoreClick = () => {
    setShowReadmore(!showReadMore);
  };

  const handleAppointmentClick = () => {
    setActionOption(ACTION_OPTIONS.makeAppointment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const details = [
    { detailName: "Experience", detailValue: experience },
    { detailName: "License", detailValue: license },
    { detailName: "Specialization", detailValue: specialization },
    { detailName: "Initial_consultation", detailValue: initial_consultation },
  ];

  return (
    <div className={css.item}>
      <div className={css.imgWrapper}>
        <img src={avatar_url} alt={name} width={96} className={css.img} />
      </div>
      <div className={css.content}>
        <div className={css.topWrapper}>
          <div>
            <p className={css.profession}>Psychologist</p>
            <h2 className={css.name}>{name}</h2>
          </div>
          <div className={css.ratingPriceFavoriteWrapper}>
            <div className={css.ratingPriceWrapper}>
              <p className={css.ratingWrapper}>
                <Icon
                  className={ICON_CLASSES.classStar}
                  iconName="icon-star"
                  width={16}
                />
                <span className={css.ratingText}>{`Rating: ${rating}`}</span>
              </p>
              <span className={css.devider}></span>
              <p className={css.priceWrapper}>
                Price / 1 hour:
                <span className={css.priceValue}>{` ${price_per_hour}$`}</span>
              </p>
            </div>

            <FavoriteButton
              isFavorite={isFavorite}
              onClick={handleFavoriteClick}
            />
          </div>
        </div>
        <ul className={css.detailList}>
          {details.map(({ detailName, detailValue }) => (
            <li key={detailName} className={css.detailItem}>
              <span className={css.detailName}>{detailName}: </span>
              {detailValue}
            </li>
          ))}
        </ul>
        <p className={css.about}>{about}</p>
        {!showReadMore && (
          <button className={css.readMoreBtn} onClick={handleReadMoreClick}>
            Read more
          </button>
        )}
        {showReadMore && (
          <>
            <div className={css.reviewsWrapper}>
              <ReviewList reviews={reviews} />
            </div>

            <UniversalBtn onClick={handleAppointmentClick} width={227}>
              {ACTION_OPTIONS.makeAppointment.title.slice(0, 19)}
            </UniversalBtn>
          </>
        )}
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ModalContentWrapper
            actionOption={actionOption}
            onClose={handleCloseModal}
          >
            <AppointmentForm actionOption={actionOption} />
          </ModalContentWrapper>
        </Modal>
      )}
    </div>
  );
};
