import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserLoginService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit { 

  @Input() userData = { Username: '', Password: ''};

constructor(
    public fetchApiData: UserLoginService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router) { }

ngOnInit(): void { }

// This is the function responsible for sending the form inputs to the backend
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((response) => {
      this.dialogRef.close();
      localStorage.setItem('user', response.user.Username);
      localStorage.setItem('token', response.token);
      localStorage.setItem('FavoriteMovies', response.user.FavoriteMovies);
      localStorage.setItem('Email', response.user.Email);
      localStorage.setItem('Birthday', response.user.Birthday);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (response) => {
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }
}