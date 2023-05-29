import React from "react";
import { FcLike } from "react-icons/fc";

function Card({ course }) {
  return (
    <div>
      <div>
        <img src={course.image.url} />
      </div>
      <div>
        <button>
          <FcLike />
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
