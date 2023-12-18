import React from "react";

function SadBanner({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}

export default SadBanner;
