import React from "react";

const sizeClasses = {
  txtMontserratBold16: "font-bold font-montserrat",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtFigtreeRegular14BlueA20001: "font-figtree font-normal",
  txtMontserratBold36: "font-bold font-montserrat",
  txtNunitoSemiBold24: "font-nunito font-semibold",
  txtFigtreeRegular14Gray900: "font-figtree font-normal",
  txtLatoRegular16Gray600: "font-lato font-normal",
  txtFigtreeRegular14: "font-figtree font-normal",
  txtNunitoSemiBold16Gray500: "font-nunito font-semibold",
  txtLatoRegular16: "font-lato font-normal",
  txtFigtreeRegular16: "font-figtree font-normal",
  txtNunitoSemiBold16Black90087: "font-nunito font-semibold",
  txtFigtreeSemiBold14Gray900: "font-figtree font-semibold",
  txtLatoRegular16Blue700: "font-lato font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtFigtreeSemiBold24: "font-figtree font-semibold",
  txtFigtreeSemiBold14: "font-figtree font-semibold",
  txtMontserratBold72: "font-bold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
