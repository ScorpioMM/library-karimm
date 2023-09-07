import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Price from "../components/UI/Price";
import Rating from "../components/UI/Rating";

const BooksInfo = ({ books }) => {
    const {id} = useParams(); 
    const book = books.find(book => +book.id === +id)

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="row">
          <div className="book__selected--top">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/books" className="book__link">
              <h2 className="book__selected--title--top">Books</h2>
            </Link>
          </div>
          <div className="book__selected">
            <figure className="book__selected--figure">
              <img
                src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                alt=""
                className="book__selected--img"
              />
            </figure>
            <div className="book__selected--description">
              <h2 className="book__selected--title">
                Cracking the Coding Interview
              </h2>
              <Rating rating="4.5" />
              <div className="book_selected--price">
                <Price originalPrice={50} salePrice={20} />
              </div>
              <div className="book__summary">
                <div className="book__summary--title">Summary</div>
                <p className="book__summary__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  doloremque, eaque ex magni repellendus praesentium atque animi
                  eos veritatis facere esse similique sit architecto voluptate
                  quos distinctio eum accusantium repudiandae!
                </p>
                <p className="book__summary__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  doloremque, eaque ex magni repellendus praesentium atque animi
                  eos veritatis facere esse similique sit architecto voluptate
                  quos distinctio eum accusantium repudiandae!
                </p>
              </div>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title-top">Recommended Books</h2>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default BooksInfo;

// I love myself and I also belive in me :D

// Un fifa antes del trabajo jeje\

// EI A

// I E

// AI I
