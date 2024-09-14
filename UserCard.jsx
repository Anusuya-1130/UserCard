import React from "react";

const userData = [
  {
    name: "GRACE",
    city: "NEW YORK",
    desceription: "Front-End Developer",
    Skills: [
      "UI / UX",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Front-End Developer",
    ],
    online: false,
    profile: "./images/img1.jpg",
  },
  {
    name: "NANCY",
    city: "San Francisco",
    desceription: "Full Stack Developer",
    Skills: [
      "Vlogging",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Web Developement",
    ],
    online: true,
    profile: "./images/2.jpg",
  },
];
function User(props) {
  return (
    <div className="card -container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="Skills">
        <h4>Skills</h4>
        <ul>
          {props.Skills.map((Skill, index) => (
            <li key={index}>{Skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const UserCard = () => {
  return (
    <div>
      <User
        name="grace"
        city="New York"
        description="Front-End Developer"
        Skills={[
          "UI / UX",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node",
          "Front-End Developer",
        ]}
        online={true}
        profile="./images/img1.jpg"
      />
    </div>
    // <>
    //   {userData.map((user, index) => (
    //     <User
    //       key={index}
    //       name={user.name}
    //       city={user.city}
    //       description={user.description}
    //       Skills={user.Skills}
    //       online={user.online}
    //       profile={user.profile}
    //     />
    //   ))}
    // </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Skills: PropTypes.arrayOf(propType.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};

export default UserCard;
