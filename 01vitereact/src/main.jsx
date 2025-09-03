import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function MyApp() {
  return (
    <div>
      <h1>Custom App ! I am Yash</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

const anotherUser="chai aur react";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://googlt.com",
//     target: "_blank",
//   },
//   children: "click me visit google",
// };
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  ReactElement
);
