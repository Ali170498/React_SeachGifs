import React, { useState } from "react";
import "../App.css";

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGif = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    setCategory(value);
    setValue("");
  };

  return (
    <div className="AddCategory">
      <form onSubmit={searchGif}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      {error && <p className="error">Por favor, inserte una palabra en el buscador</p>}
    </div>
  );
}

export default AddCategory;
