import React from "react";
import Card from "./Card.js";

function Cards({ courses }) {
  function getCourses() {
    let allCoures = [];
    Object.values(courses).forEach((arr) => {
      arr.forEach((item) => {
        allCoures.push(item);
      });
    });

    return allCoures;
  }

  return (
    <div>
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
}

export default Cards;
