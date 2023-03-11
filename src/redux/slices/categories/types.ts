export type CategoryItem = {
  categoryId: number,
  categoryName: string,
  categoryDescription: string,
  categoryImg: string,
}

export interface CategoriesSliceState {
  categories: CategoryItem[]
}

