import React from "react";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/LoginRegister");
  };

  return (
    <>
      <div>
        <Button variant="outline-primary" onClick={handleButtonClick}>
          Log In
        </Button>
      </div>
    </>
  );
};

export default Button;
