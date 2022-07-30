import React from "react";
import { createRoot} from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

const props = { className: "title" };
const element = React.createElement("div", props, 'hello  world 123');

root.render(element);