import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BooksInfo = ({ books }) => {
  return (
    <div id="books__body">
      <div className="books__main">
        <div className="row">
          <div className="book__selected--top">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/book" className="book__link">
              <h2 className="book__selected--title--top">Books</h2>
            </Link>
          </div>
          <div className="book__selected">
            <figure className="book__selected--figure">
                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
            </figure>
            <div className="book__selected--description">
               <h2 className="book__selected--title">Cracking the Coding Interview</h2>
               <FontAwesomeIcon icon="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksInfo;
