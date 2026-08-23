import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.shareImage.alt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#020617",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -160,
          right: -100,
          width: 520,
          height: 520,
          borderRadius: 260,
          background: "rgba(8, 145, 178, 0.16)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 120,
          bottom: -210,
          width: 500,
          height: 500,
          borderRadius: 250,
          background: "rgba(14, 116, 144, 0.12)",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px 68px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              border: "3px solid rgba(34, 211, 238, 0.7)",
              background: "rgba(15, 23, 42, 0.9)",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-3px",
            }}
          >
            LY
          </div>
          <div
            style={{
              color: "#67e8f9",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Personal Website
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#cbd5e1",
              fontSize: 32,
              fontWeight: 500,
            }}
          >
            {siteConfig.shareImage.identity}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#67e8f9",
              fontSize: 23,
              letterSpacing: "0.05em",
            }}
          >
            {siteConfig.shareImage.interests}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
