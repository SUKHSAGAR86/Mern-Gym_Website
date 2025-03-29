import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
        </p>
        <img
          src="/img5.jpg"
          alt="workout"
          style={{
            maxWidth: "100%", // Added quotes and corrected the format
            height: "80%",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(12, 11, 11, 0.79)",
          }}
        />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          impedit quasi sunt amet rerum accusamus odio eveniet unde?
        </p>
        <div className="bootcamps">
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
