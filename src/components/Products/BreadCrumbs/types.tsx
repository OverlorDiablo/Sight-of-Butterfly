import { CategoryItem } from '@/redux/slices/categories/types'
import { ProductItem } from '@/redux/slices/products/types'

export interface BreadCrumbsProps {
  category: CategoryItem | undefined,
  product?: ProductItem | undefined
}