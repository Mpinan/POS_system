import React, { useState } from "react";

const Table = () => {
  const [busy, setBusy] = useState("false");

  return (
    <div>
      <h1>Hello Table</h1>
      <div id="busy-value">{busy}</div>
      <button id="book-table" onClick={() => setBusy("true")}>
        Book
      </button>
    </div>
  );
};

export default Table;
