import { Uuid } from "../../../shared";
import { Category, CategoryCreateCommand } from "../category.entity";

describe("Category Unit Tests", () => {
  let validateSpy: jest.SpyInstance;
  beforeEach(() => {
    validateSpy = jest.spyOn(Category, "validate");
  });
  describe("constructor", () => {
    it("should create a category with default values", () => {
      const category = new Category({
        name: "Movie",
      });

      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    it("should create a category with all values", () => {
      const created_at = new Date();
      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at,
      });

      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    });
  });
  describe("create command", () => {
    it("should create a category with values default", () => {
      const category = Category.create({
        name: "Movie",
      });

      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });
    it("should create a category with description", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie description",
      });

      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });
    it("should create a category with all values", () => {
      const category = Category.create({
        name: "Movie",
        description: "Movie description",
        is_active: false,
      });

      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("change name", () => {
    it("should change name", () => {
      const category = Category.create({
        name: "Movie",
      });

      expect(category.name).toBe("Movie");
      category.changeName("Movie 2");
      expect(category.name).toBe("Movie 2");
      expect(validateSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe("change description", () => {
    it("should change description", () => {
      const category = Category.create({
        name: "Movie",
      });

      expect(category.description).toBeNull();
      category.changeDescription("Movie description");
      expect(category.description).toBe("Movie description");
      expect(validateSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe("activate", () => {
    it("should activate category", () => {
      const category = Category.create({
        name: "Movie",
        is_active: false,
      });

      expect(category.is_active).toBeFalsy();
      category.activate();
      expect(category.is_active).toBeTruthy();
    });
  });

  describe("deactivate", () => {
    it("should deactivate category", () => {
      const category = Category.create({
        name: "Movie",
      });

      expect(category.is_active).toBeTruthy();
      category.deactivate();
      expect(category.is_active).toBeFalsy();
    });
  });

  describe("toJSON", () => {
    it("should return all values", () => {
      const arrangeCategory: CategoryCreateCommand = {
        name: "Movie",
        description: "Movie description",
        is_active: false,
      };
      const created_at = new Date();
      const category = Category.create({
        ...arrangeCategory,
      });

      expect(category.toJSON()).toEqual({
        ...arrangeCategory,
        category_id: category.category_id.uuid,
        created_at,
      });
    });
  });

  describe("category_id", () => {
    const arrange = [
      { category_id: null },
      { category_id: undefined },
      { category_id: new Uuid() },
    ];
    it.each(arrange)("category id = %j", ({ category_id }) => {
      const category = new Category({
        name: "Movie",
        category_id: category_id as any,
      });
      expect(category.category_id).toBeInstanceOf(Uuid);
      if (category_id instanceof Uuid) {
        expect(category.category_id).toBe(category_id);
      }
    });
  });
});
