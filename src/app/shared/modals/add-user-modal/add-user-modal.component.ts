import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../models/user.interface';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.scss'
})
export class AddUserModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AddUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:User,

  ) {}

  onCancel(){
    this.dialogRef.close();
  }
  onSave(): void {
    this.data.id = Math.floor(Math.random() * 1000);
    this.dialogRef.close(this.data);
  }

}
