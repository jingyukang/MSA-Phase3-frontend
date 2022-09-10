import { calculateQuantity } from "./RenderStorageItems";

describe("Storage update calculation", () => {
  it("add correctly", () => {
    expect(calculateQuantity(100, 10)).toBe(110);
  });
  it("undefined for additionalQuantity", () => {
    expect(calculateQuantity(100, undefined)).toBe(100);
  });
});
