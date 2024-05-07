//loadUser,LoadUserSuccess,LoadUserFail
//addUser,AddUserSuccess,AddUserFail
//deleteUser,DeleteUserSuccess,DeleteUserFail

import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/user.interface';

export const loadUser = createAction('[User] Load User');
export const loadUserSuccess = createAction('[User] Load User Success', props<{users:readonly User[]}>());
export const loadUserFail = createAction('[User] Load User Fail', props<{error:any}>());

export const addUser = createAction('[User] Add User', props<{user: User}>());
export const addUserSuccess = createAction('[User] Add User Success', props<{user:User}>());
export const addUserFail = createAction('[User] Add User Fail', props<{error:any}>());

export const deleteUser = createAction('[User] Delete User', props<{id:number}>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{id:number}>());
export const deleteUserFail = createAction('[User] Delete User Fail', props<{error:any}>());