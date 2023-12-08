import { ValueObject } from "../value-object";
import { v4 as uuidv4, validate as uuidValidade } from "uuid";

export class Uuid extends ValueObject {
  readonly uuid: string;
  constructor(id?: string) {
    super();
    this.uuid = id || Uuid.create();
    this.validate();
  }

  static create() {
    return uuidv4();
  }

  private validate(): void {
    const isValid = uuidValidade(this.uuid);

    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}

export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || " ID must be a valid UUID.");
    this.name = "InvalidUuidError";
  }
}
