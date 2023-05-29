import React, { useState } from "react";
import Card from "./Card.js";

function Cards(props) {
  let category = props.category;
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCoures = [];
      Object.values(courses).forEach((arr) => {
        arr.forEach((item) => {
          allCoures.push(item);
        });
      });

      return allCoures;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}

export default Cards;
