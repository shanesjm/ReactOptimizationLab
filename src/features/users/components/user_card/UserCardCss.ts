import { CSSProperties } from "react";

export const card: CSSProperties = {
  width: "100%",
  borderRadius: "15px",
  backgroundColor: "white",
};
export const cardContent: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 14px",
  textAlign: "center",
};

export const cardImage: CSSProperties = {
  position: "relative",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: "#EFEFEF",
  padding: "3px",
};
export const cardImg: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
  border: "4px solid blue",
};
export const overlay: CSSProperties = {
  position: "absolute",
  left: "0",
  top: "0",
  height: "100%",
  width: "100%",
};
