import { createReducer, on } from "@ngrx/store";
import { productAdd, delProduct, delAllProduct } from "./product.action";
import { Product } from "../../../models/product.interface";

export const initialState: ReadonlyArray<Product> = [];

export const productReducers = createReducer(
    initialState,
    on(productAdd, (state, { product }) => [...state, product]),
    on(delProduct, (state, { id }) => state.filter(product => product.id !== id)),  
    on(delAllProduct, (state) => [])
);
