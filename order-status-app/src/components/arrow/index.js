import React from "react";

function Arrow({ handleClick }) {
  return (
    <button className="arrow" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15 16v5l9-10.062-9-9.938v5c-14.069 1.711-19.348 15.107-10.606 16.981-3.804-2.936 3.251-7.441 10.606-6.981z" />
      </svg>
    </button>
  );
}

export default Arrow;
