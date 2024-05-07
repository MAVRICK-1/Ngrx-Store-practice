import { createAction, props } from "@ngrx/store";
import { Product } from "../../../models/product.interface";

export const productAdd = createAction('[Product] Add',props<{product:Product}>());
export const delProduct = createAction('[Product] Delete',props<{id:string}>());
export const delAllProduct = createAction('[Product] Delete All');