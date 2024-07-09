import { getData } from "./data/getData";
import { createPostUI } from "./render/createPostUI";
import { postIts } from "./types/types";

const data = await getData<postIts>();
const domElements = data.postIts.map((post) => createPostUI(post));

const listParent = document.querySelector("#list");

domElements.forEach((postLi) => listParent?.appendChild(postLi));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`;
