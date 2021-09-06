import React from "react";

const BookMark = ({ status, onToggle, id }) => {
  return (
    <>
      <button type='button' className="btn btn-outline-info btn-sm"onClick={() => onToggle(id)}>
        <i className={status ? "bi bi-trophy-fill" : "bi bi-trophy"}></i>
      </button>
    </>
  );
};

export default BookMark;
