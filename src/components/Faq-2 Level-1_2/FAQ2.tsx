import { useState } from "react";
import "./FAQ2.css";

const FAQ2 = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);

  const [isDetailedAnswerOpen, setIsDetailedAnswerOpen] =
    useState<boolean>(false);

  const openAnswer = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };
  const openDetailedAnswer = () => {
    setIsDetailedAnswerOpen(!isDetailedAnswerOpen);
  };

  return (
    <section className="section_faq">
      <div className="question flex">
        <p>Why is React great?</p>
        <button onClick={openAnswer}>•</button>
      </div>

      <div className={` ${isAnswerOpen ? "show" : "hide"}`}>
        <hr />
        <div className="flex answer">
          <p>Fast Learning Curve</p>
          <button onClick={openDetailedAnswer}>•</button>
        </div>
      </div>
      <div className={` ${isDetailedAnswerOpen ? "show" : "hide"}`}>
        <p className="detailedAnswer">
          React is very a simple and lightweight library that only deals with
          the view layer. It is not a beast like other MV* frameworks such as
          Angular or Ember. Any Javascript developer can understand the basics
          and start developing an awesome web application after only a couple of
          days reading tutorial. As the React guide says ‘Thinking in React’ may
          be a little different than you used to since it brings a new approach
          to the table, but it will become much easier and natural as you gain
          experience with it.
        </p>
      </div>
    </section>
  );
};

export default FAQ2;
