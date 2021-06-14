import "./styles.css";
import { title, contents } from "./007_ReverseInteger";

document.getElementById("app").innerHTML = `
<h1>${title}</h1>
<div>${contents()}</div>
`;
