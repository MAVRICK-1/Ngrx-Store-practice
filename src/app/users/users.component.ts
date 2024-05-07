import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.interface';
import { loadUser } from '../corePractice/store/user/user.action';
import { selectUsers } from '../corePractice/store/user/user.selector';
import * as UserActions from '../corePractice/store/user/user.action';
import * as UserSelectors from '../corePractice/store/user/user.selector'
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from '../shared/modals/add-user-modal/add-user-modal.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users$ = this.store.select(UserSelectors.selectUsers);
  loading$ = this.store.select(UserSelectors.selectLoading);
  error$ = this.store.select(UserSelectors.selectError);
  loaded$ = this.store.select(UserSelectors.selectLoaded);
  displayedColumns: string[] = ['id', 'name', 'email','delete'];

  constructor(
    private store: Store<{ users: ReadonlyArray<User> }>,
    private dialog:MatDialog
  ) {
    this.store.dispatch(loadUser());

  }
  addUser() {
    const dialogRef = this.dialog.open(AddUserModalComponent, {
      data:{id:null,name:'',email:''}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(UserActions.addUser({ user: result }));
      }
    });
    
  }
  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id }));
    
  }

}
