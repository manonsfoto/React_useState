import { useState } from "react";
import "./Input.css";
const Input = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <section className="section_input flex">
      <div>
        <input
          type="text"
          placeholder="Vorname"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
          value={firstName}
        />
        <input
          type="text"
          placeholder="Nachname"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          value={lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
        />
      </div>
      <div className="output">
        <p>Vorname: {firstName}</p>
        <p>Nachname:{lastName} </p>
        <p>Email:{email} </p>
      </div>
    </section>
  );
};

export default Input;
