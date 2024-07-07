import { getData } from "./data/getData";
import { createPostUI } from "./render/createPostUI";

const posts = await getData();
const domElements = posts.map((post) => createPostUI(post));

const listParent = document.querySelector("#list");

domElements.forEach((postLi) => listParent?.appendChild(postLi));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello</h1>
  </div>
`;
