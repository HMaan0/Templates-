import React from "react";

const SharpButton = ({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="transition-all text-lg  duration-200 hover:scale-105 hover:bg-theme-secondary mb-2 me-2 w-full border  text-Theme_blue border-Theme_blue bg-transparent px-2 sm:px-5 py-2.5 text-center sm:text-lg  font-medium  hover:bg-Theme_blue focus:outline-none"
    >
      {children}
    </button>
  );
};

export default SharpButton;
