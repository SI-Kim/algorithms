import "./styles.css";
import { title, contents, Q } from "./007_ReverseInteger";

document.getElementById("app").innerHTML = `
<h1>${title}</h1>
<p>${Q}</p>
<div>${contents()}</div>
`;
