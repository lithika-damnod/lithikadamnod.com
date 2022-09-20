import React, { useState, useEffect } from "react";
import Menu from "./menu";

import "./indexPage.css";
import Loading from "./loading";

export default function View() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowContent(!showContent);
    }, 2000);
  }, []);

  return (
    <div className="view-wrapper">
      <Menu />
      <div className="main-text">
        <img src="main-text.svg" alt="main-text" />
        <img src="programmer.svg" alt="programmer" />
      </div>
    </div>
  );
}
