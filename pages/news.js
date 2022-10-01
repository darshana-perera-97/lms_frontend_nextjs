import React from "react";
import Grid from "@mui/material/Grid";
export default function news() {
  return (
    <div style={{ margin: "20px 60px", width: "100vh" }}>
      <p style={{ fontSize: "30px" }}>Latest News</p>
      <p style={{ fontSize: "25px", color: "red" }}>
        No NEWS to be shown in here..
      </p>
      <img
        src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png"
        height="200vh"
        style={{
          borderRadius: "500px",
          marginLeft: "3vh",
        }}
      />
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        This project is build with next js
      </p>
    </div>
  );
}
