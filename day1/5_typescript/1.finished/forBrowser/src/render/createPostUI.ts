import { Post } from "../types/types";

const createPostUI = (post: Post) => {
  const element = document.createElement("li");
  element.style.listStyle = "none";
  element.innerHTML = `
      <div style="background-color:yellow; padding: 12px; margin: 8px; border: solid black 1px">
        <p>${post.note}</p>
        <sub>${post.author}</sub>
      </div>
    `;
  return element;
};

export { createPostUI };
