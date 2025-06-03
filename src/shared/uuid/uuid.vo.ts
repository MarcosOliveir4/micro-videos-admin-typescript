import { v4 as uuidv4, validate as uuidValidade } from "uuid";
import { ValueObject } from "../value-object/value-object";

export class Uuid extends ValueObject {
  readonly uuid: string;
  constructor(uuid?: string) {
    super();
    this.uuid = uuid || uuidv4();
    this.validate();
  }

  private validate() {
    const isValid = uuidValidade(this.uuid);

    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}

class InvalidUuidError extends Error {
  constructor() {
    super("UUID must be a valida UUID");
    this.name = "InvalidUuidError";
  }
}
