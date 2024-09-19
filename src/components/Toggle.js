import React, { useState } from "react";

const Toggle = () => {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus((status) => !status);
  };

  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={handleToggle}>
        {status ? "On" : "Off"}
      </div>
    </div>
  );
};

export default Toggle;
