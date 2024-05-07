// loadUser,AddUser,DeleteUser

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../../service/user.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadUser, loadUserFail, loadUserSuccess, addUser, addUserFail, addUserSuccess, deleteUser, deleteUserFail, deleteUserSuccess } from './user.action';
import { User } from '../../../models/user.interface';

@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => 
    {return this.actions$.pipe(
    ofType(loadUser),
    switchMap(() => this.userService.getUsers()
      .pipe(
        map((users)=>loadUserSuccess({users:users as ReadonlyArray<User>})),
        catchError(error => of(loadUserFail({ error })))
      ))
    )});

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    switchMap(payload => this.userService.addUser(payload.user)
      .pipe(
        map((user) => addUserSuccess({ user: payload.user})),
        catchError(error => of(addUserFail({ error })))
      )
    )
  ));

  deleteUser$ = createEffect(() => 
    { return this.actions$.pipe(
    ofType(deleteUser),
    switchMap(payload => this.userService.deleteUser(payload.id)
      .pipe(
        map(() => deleteUserSuccess({ id:payload.id })),
        catchError(error => of(deleteUserFail({ error })))
      )
    )
  )});

  constructor(private actions$: Actions, private userService: UserService) { }
}