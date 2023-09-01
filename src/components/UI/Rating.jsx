import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__rating">
      {
        <div className="book__ratings">
          {new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <FontAwesomeIcon icon="star" key={index} />
          ))}

          {!Number.isInteger(rating) && (
            <FontAwesomeIcon icon="star-half-alt" />
          )}
        </div>
      }
    </div>
  );
};

export default Rating;

// FAKE DATA

//
 // I NEED THOSE NOTES ASAPPP. 