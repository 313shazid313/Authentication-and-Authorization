import { useState } from "react";
import { useNew } from "../src/context/AuthContext";

const About = () => {
  const { uniqueUser } = useNew();
  const [item, setItem] = useState("Email Account");
  const [user, setUser] = useState(uniqueUser.email);

  const click = () => {
    setItem("Phone number");
    setUser(uniqueUser.phone);
    if (item == "Phone number") {
      setItem("Email Account");
      setUser(uniqueUser.email);
    }
  
  };
  return (
    <>
      <main className="about-page">
        <h1>Hi {uniqueUser.username}</h1>
        <h2>Why choose us???</h2>
        <h5>
          We started as a small business in Dhaka, and our aim is to continue
          providing our customers with products that keep them happy, at prices
          that keep them happy
        </h5>
        <h2 style={{ color: "blue", marginTop: "50px" }}>
          Your {item} {user}
        </h2>
        <button className="button-85" role="button" onClick={click}>
          Click
        </button>
      </main>
    </>
  );
};

export default About;
