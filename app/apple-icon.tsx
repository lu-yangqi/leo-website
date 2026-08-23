import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 36,
        border: "5px solid rgba(34, 211, 238, 0.7)",
        background: "#020617",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        fontSize: 68,
        fontWeight: 700,
        letterSpacing: "-5px",
      }}
    >
      <span>LY</span>
    </div>,
    size,
  );
}
