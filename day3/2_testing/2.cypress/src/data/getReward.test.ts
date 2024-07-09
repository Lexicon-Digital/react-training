import { describe, expect, test } from "vitest";
import { getReward } from "./getReward";

describe("getReward", () => {
  test("should return high reward when score 130% of expectation", () => {
    const expectation = 100;
    const reward = getReward(expectation * 1.3, expectation);

    expect(reward).toEqual(300);
  });

  test("should return high reward when score 105% of expectation", () => {
    const expectation = 100;
    const reward = getReward(expectation * 1.05, expectation);

    expect(reward).toEqual(150);
  });

  test("should return high reward when score below expectation", () => {
    const expectation = 100;
    const reward = getReward(expectation * 0.9, expectation);

    expect(reward).toEqual(50);
  });
});
