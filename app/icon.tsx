import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          borderRadius: 14,
          background: "linear-gradient(135deg, #4a90c8 0%, #3776AB 45%, #1d3d5c 100%)",
          color: "white",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: -1.5,
        }}
      >
        ME
      </div>
    ),
    size
  );
}
