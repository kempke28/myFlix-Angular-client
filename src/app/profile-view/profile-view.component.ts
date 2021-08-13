import { Component, OnInit } from '@angular/core';

// This import brings in the API calls we created in 6.2
import { getUserService } from '../fetch-api-data.service';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';


// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})


export class ProfileViewComponent implements OnInit {

  constructor(
    public fetchApiDataUser: getUserService,
    public dialogRef: MatDialogRef<ProfileViewComponent>,
    public snackBar: MatSnackBar) { }
  

  ngOnInit(): void {
  }

  getUser(): void {
    let FavoriteMovies = localStorage.getItem('FavoriteMovies');
    let Username = localStorage.getItem('user');
    let Email = localStorage.getItem('Email');
    let Birthday = localStorage.getItem('Birthday');
    this.getuser = {
      "FavoriteMovies": FavoriteMovies,
      "Username": Username,
      "Email": Email,
      "Birthday": Birthday,
    }
    this.getUser();
  }

  deleteUser(): void {
    let check = confirm(
      'This will delete your profile! Are you sure you want to continue?'
    );
    if (check) {
      this.fetchApiData3.deleteUser().subscribe(() => {
        localStorage.clear();
        this.router.navigate(['welcome']);
        this.snackBar.open('Profile deleted', 'OK', {
          duration: 2000,
        });
      });
    } else {
      window.location.reload();
    }
  }
 
  editUser(): void {
    this.dialog.open(ProfileUpdateComponent, {
      width: '400px'
    });
  }
}
