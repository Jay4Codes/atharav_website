import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c1b2e",
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: -0.4,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        AS
      </div>
    ),
    size,
  );
}
