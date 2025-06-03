import { Uuid } from "../../shared/uuid/uuid.vo";
import { Category } from "./category.entity";
import { CategoryType } from "./types";

describe("Category Unit Tests", () => {
  describe("Constructor", () => {
    it("should create a categor with default values", () => {
      const category = new Category({ name: "Movie" });
      expect(category.name).toBe("Movie");
      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("should create a category with all value", () => {
      const created_at = new Date();
      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at,
      });

      expect(category.name).toBe("Movie");
      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    });
  });

  describe("Methods", () => {
    it("should create a category with the static method", () => {
      const categoryProps: CategoryType = {
        name: "Movie",
        description: "Movie description",
        created_at: new Date(),
        is_active: true,
      };
      const category = Category.create(categoryProps);
      expect(category).toBeDefined();
    });
    it("should change the name", () => {
      const category = new Category({ name: "movie" });
      category.changeName("Serie");
      expect(category.name).toBe("Serie");
    });

    it("should change the description", () => {
      const category = new Category({ name: "movie" });
      category.changeDescription("Movie description");
      expect(category.description).toBe("Movie description");
    });

    it("should change the status of is active: 'true'", () => {
      const category = new Category({ name: "movie", is_active: false });
      category.activate();
      expect(category.is_active).toBeTruthy();
    });

    it("should change the status of is active: 'false'", () => {
      const category = new Category({ name: "movie", is_active: true });
      category.deactivate();
      expect(category.is_active).toBeFalsy();
    });

    it("should return a json", () => {
      const categoryProps: CategoryType = {
        name: "Movie",
        description: "Movie description",
        created_at: new Date(),
        is_active: true,
        category_id: new Uuid(),
      };
      const category = new Category({ ...categoryProps });
      const categoryStrictEqual = {
        ...categoryProps,
        category_id: categoryProps.category_id?.uuid,
      };
      expect(category.toJSON()).toStrictEqual({ ...categoryStrictEqual });
    });

    it("should return a json with no description", () => {
      const categoryProps: CategoryType = {
        name: "Movie",
        description: "",
        created_at: new Date(),
        is_active: true,
        category_id: new Uuid(),
      };
      const categoryStrictEqual = {
        ...categoryProps,
        category_id: categoryProps.category_id?.uuid,
      };
      const category = new Category({ ...categoryProps });

      expect(category.toJSON()).toStrictEqual({ ...categoryStrictEqual });
    });
  });
});
