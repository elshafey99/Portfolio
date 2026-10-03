import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4a90c8 0%, #3776AB 45%, #1d3d5c 100%)",
          color: "white",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        ME
      </div>
    ),
    size
  );
}
