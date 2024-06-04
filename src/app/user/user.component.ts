import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { FirebaseService } from '../services/firebase.service';
import { onSnapshot } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  allUsers: any[] = [];
  allUsersId: string[] = []

  constructor(public dialog: MatDialog, private firesbase: FirebaseService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  public openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  public getUsersList() {
    return onSnapshot(this.firesbase.getUsersRef(), (users) => {
      this.allUsers = [];
      users.forEach((user) => {
        this.allUsersId.push(user.id);
        this.allUsers.push(user.data());
      });
    });
  }
}
