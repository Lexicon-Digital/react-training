import { describe, expect, test } from "vitest";
import { getPosts } from "./getPosts";

describe("getData", () => {
  test("should return 2 items when invoked", () => {
    const data = getPosts();
    expect(data.length).toBe(2);
  });
  test("should return correct author names when invoked", () => {
    const data = getPosts();
    expect(data[0].author).toBe("one");
    expect(data[1].author).toBe("Two");
  });
});
