import Datas from "../public/Datas";

let option = "";
Datas.map((object) => {
  option = option + `<option value="${object.title}">${object.title}</option>`;
});

let Selection = `
<div 
  style="border: 1px solid; width: 30vw; height: 80vh; text-align: center;" 
  id="selection">
  <form style="margin-top: 5%">
    <select>
      ${option}
    </select>
  </form>
</div>
`;

export default Selection;
