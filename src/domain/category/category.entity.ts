import { Uuid } from "../../shared/uuid/uuid.vo";
import { CategoryCreateType, CategoryType } from "./types";

export class Category {
  category_id: Uuid;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: Date;

  constructor({
    category_id,
    name,
    created_at,
    description,
    is_active,
  }: CategoryType) {
    this.category_id = category_id ?? new Uuid();
    this.name = name;
    this.description = description ?? null;
    this.is_active = is_active ?? true;
    this.created_at = created_at ?? new Date();
  }

  static create(props: CategoryCreateType): Category {
    return new Category({ ...props });
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  activate(): void {
    this.is_active = true;
  }

  deactivate(): void {
    this.is_active = false;
  }

  toJSON() {
    return {
      name: this.name,
      category_id: this.category_id.uuid,
      created_at: this.created_at,
      description: this.description || "",
      is_active: this.is_active,
    };
  }
}
