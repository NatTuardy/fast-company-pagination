import React from "react";

const SearchStatus = ({number}) => {

  const people = () => {
    return number === 2 || number === 3 || number === 4
      ? "человека"
      : "человек";
  };

  return (
    <h4>
      <span className="badge m-2 h-12 bg-primary">{`${number} ${people()} тусанет с тобой сегодня`}</span>
    </h4>
  );
};

export default SearchStatus;
