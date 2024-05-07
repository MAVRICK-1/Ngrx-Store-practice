import { createFeatureSelector } from "@ngrx/store";
import { Product } from "../../../models/product.interface";

export const ProductState = createFeatureSelector<ReadonlyArray<Product>>('products');

