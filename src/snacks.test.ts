import { describe, it, expect } from "vitest";
import { snacks_Tia } from "./snacks";

describe("snacks_Tia", () => {
  it("should have at least 3 items", () => {
    expect(snacks_Tia.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(snacks_Tia).toContain("chips");
  });
});

