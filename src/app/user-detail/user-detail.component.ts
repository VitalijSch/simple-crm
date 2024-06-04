import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { onSnapshot } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      return onSnapshot(this.firebase.getSingleDocRef(this.userId), (user) => {
        this.user = new User(user.data());
      });
    });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user =  new User(this.user.toJSON());
    dialog.componentInstance.user =  new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
