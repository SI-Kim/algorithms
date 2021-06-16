import { Datas } from "../public/Datas";

let option = "";
Datas.map((object) => {
  option = option + `<option value=${object.title} />`;
});

let Selection = `
<div 
  style="border: 1px solid; width: 20vw; height: 80vh" 
  id="selection">
  <form>
    <select>
      ${option}
    </select>
  </form>
</div>
`;

export default Selection;
