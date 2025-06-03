import { ValueObject } from "./value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

describe("ValueObject Unit Test", () => {
  it("should be equals", () => {
    const valueObject1 = new StringValueObject("test");
    const valueObject2 = new StringValueObject("test");
    expect(valueObject1.equals(valueObject2)).toBeTruthy();
  });

  it("should not be equals", () => {
    const valueObject1 = new StringValueObject("test 1");
    const valueObject2 = new StringValueObject("test 2");
    expect(valueObject1.equals(valueObject2)).toBeFalsy();
  });

  it("should not be equal when it is 'null'", () => {
    const valueObject = new StringValueObject("test");
    expect(
      valueObject.equals(null as unknown as StringValueObject)
    ).toBeFalsy();
  });

  it("should not be equal when it is 'undefined'", () => {
    const valueObject = new StringValueObject("test");
    expect(
      valueObject.equals(undefined as unknown as StringValueObject)
    ).toBeFalsy();
  });

  it("should not be the same when the class is different", () => {
    const valueObject = new StringValueObject("test");
    const string = new String("test");
    expect(
      valueObject.equals(string as unknown as StringValueObject)
    ).toBeFalsy();
  });
});
