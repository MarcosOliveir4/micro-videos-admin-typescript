import {
  MaxLength,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
} from "class-validator";
import { Category } from "./category.entity";
import { ClassValidatorFields } from "../../shared";

class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;

  constructor({ name, description, is_active }: Category) {
    Object.assign(this, { name, description, is_active });
  }
}

export class CategoryValidator extends ClassValidatorFields<CategoryRules> {
  validate(entiti: Category) {
    return super.validate(new CategoryRules(entiti));
  }
}

export class CategoryValidatorFactory {
  static create() {
    return new CategoryValidator();
  }
}
