import { useState } from "react";

interface Props {
  abcxyz: string;
}

const MyButton = ({ abcxyz }: Props) => {
  const [Number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(Number + 1);
  };

  const handleClick = () => {
    console.log(Number);
  };

  return (
    <button
      className="btn btn-success"
      onClick={() => {
        incrementNumber();
        handleClick();
      }}
    >
      {Number === 0 ? (
        <h1>
          Number is {Number}. {abcxyz}
        </h1>
      ) : (
        <h1>
          Now Number is {Number}. {abcxyz}
        </h1>
      )}
    </button>
  );
};

export default MyButton;


