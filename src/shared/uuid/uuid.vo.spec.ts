import { Uuid } from "./uuid.vo";

describe("UUID Unit Test", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");

  it("should throw error when uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrow();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  it("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.uuid).toBeDefined();
  });

  it("should accept a valid uuid", () => {
    const uuidValid = "85b98608-11e0-4302-94e9-b34329aa75a0";
    const uuid = new Uuid(uuidValid);
    expect(uuid.uuid).toBe(uuidValid);
  });
});
