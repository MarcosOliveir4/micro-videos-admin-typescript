import { Uuid, InvalidUuidError } from "../uuid.vo";

describe("Uuid Unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrow(new InvalidUuidError());
  });
  it("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid).toBeInstanceOf(Uuid);
    expect(uuid.uuid).toBeDefined();
  });

  it("should accept a valid uuid", () => {
    const uuidMock = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11";
    const uuid = new Uuid(uuidMock);

    expect(uuid).toBeInstanceOf(Uuid);
    expect(uuid.uuid).toBeDefined();
    expect(uuid.uuid).toBe(uuidMock);
  });

  it("should call validate method", () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");
    new Uuid();
    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  describe("create static method", () => {
    it("should create a valid uuid", () => {
      const uuid = Uuid.create();
      expect(uuid).toBeDefined();
    });
  });
});
