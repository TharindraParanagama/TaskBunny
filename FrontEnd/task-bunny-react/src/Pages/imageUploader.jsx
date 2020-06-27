import React, { useState } from "react";

export default function ImageUpdate() {
  function handleChange(event) {
    const filename = event.target.files[0].name;
    return filename;
  }

  return (
    <>
      <input type="file" onChange={handleChange} />
    </>
  );
}
