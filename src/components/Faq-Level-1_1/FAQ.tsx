import { useState } from "react";
import "./FAQ.css";
const FAQ = () => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);
  const openAnswer = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };

  return (
    <section className="section_faq">
      <div className="question flex">
        <p>Why is React great?</p>
        <button onClick={openAnswer}>•</button>
      </div>
      <div className={` ${isAnswerOpen ? "show" : "hide"}`}>
        <hr />
        <p>Fast Learning Curve</p>
      </div>
    </section>
  );
};

export default FAQ;
