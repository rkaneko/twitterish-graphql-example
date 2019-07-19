import * as React from "react";
import * as ReactDOM from "react-dom";

import { Top } from "../component/top/Top";

const container: Element = document.getElementsByClassName("main-content")[0];

(() => {
    ReactDOM.render(<Top />, container);
})();
