import React, { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");
  return (
    <form className="box" onSubmit={(e) => e.preventDefault}>
      <DateInput
        label="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {inicio} {final}
    </form>
  );
};

export default DateRange;
