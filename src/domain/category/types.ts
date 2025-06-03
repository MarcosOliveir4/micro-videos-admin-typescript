import { Uuid } from "../../shared/uuid/uuid.vo";

export type CategoryType = {
  category_id?: Uuid;
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export type CategoryCreateType = {
  name: string;
  description?: string;
  is_active?: boolean;
};
