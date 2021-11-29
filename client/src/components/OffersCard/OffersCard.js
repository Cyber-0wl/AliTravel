import React from "react";
import "./OffersCard.css";
const OffersCard = ({ el }) => {
  return (
    <div className="offersCard">
      {/* <div className="cardOffer"> */}
      <img className="imgOfferCard" src="/img/travel3.jpg" alt="" />
      <h4 className="offers-tags">{el.tags}</h4>
      <button className="BtnCard">Read more</button>
      {/* <p className="offers-message">{el.message}</p> */}
      {/* <p className="offers-comments">{el.comments}</p> */}
      {/* </div> */}
      {/* <p>{}</p> */}
    </div>
  );
};
export default OffersCard;
