"use client";

import { ICustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: ICustomButtonProps) => {
  return (
    <button
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={false}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
