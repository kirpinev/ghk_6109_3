import { style, keyframes } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  borderRadius: "24px",
  border: "2px solid #F8F8F8",
  overflow: "hidden",
  textAlign: "center",
  paddingBottom: "1rem",
  backgroundColor: "#F8F8F8",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  fontSize: "22px",
});

const products = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "24px",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.2rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "16px",
  marginBottom: "0.3rem",
});

const productIcon = style({
  // transform: "scale(1.1)",
});

const productText = style({
  marginBottom: 0,
});

const slowBlink = keyframes({
  "0%": { opacity: "1" },
  "50%": { opacity: "0.4" },
  "100%": { opacity: "1" },
});

const newAdd = style({
  padding: "12px 28px",
  backgroundColor: "#FFFFFF",
  borderRadius: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  textAlign: "left",
  width: "max-content",
  margin: "0 auto",
});

const newAddImageContainer = style({
  width: "8px",
  height: "8px",
  backgroundColor: "#09C509",
  borderRadius: "100%",
  animation: `${slowBlink} 1s ease-in-out infinite`,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  newAdd,
  newAddImageContainer,
};
