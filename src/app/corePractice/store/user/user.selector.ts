import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

//It is whole state , eg. {users:[],loading:false,loaded:false,error:null}
// createFeatureSelector is a function that takes a string and returns a selector function that selects a feature state from the root state.
export const selectUserState = createFeatureSelector<UserState>('userState');
// now we will get parts of our state from this selector

export const selectUsers = createSelector(selectUserState,
    (state:UserState) => 
        state.users
);

//fetch loading here

export const selectLoading = createSelector(selectUserState,
    (state:UserState) => 
        state.loading
);

export const selectLoaded = createSelector(selectUserState,
    (state:UserState) => 
        state.loaded
); 
export const selectError = createSelector(selectUserState,
    (state:UserState) => 
        state.error
);
