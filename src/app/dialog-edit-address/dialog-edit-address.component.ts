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
  selector: 'app-dialog-edit-address',
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
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user!: User;
  userId!: string;
  loading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, public firebase: FirebaseService) { }

  saveUser() {
    this.loading = true;
    this.firebase.updateUser(this.user.toJSON(), this.userId)
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
