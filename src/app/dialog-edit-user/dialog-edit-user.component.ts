import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../models/user.class';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user!: User;
  userId!: string;
  birthDate!: Date;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, public firebase: FirebaseService) { }

  saveUser() {
    this.loading = true;
    this.firebase.updateUser(this.user.toJSON(), this.userId)
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
