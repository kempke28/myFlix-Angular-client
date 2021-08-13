import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { editUser } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiDataUserEdit: editUser,
    public dialogRef: MatDialogRef<ProfileUpdateComponent>,
    public snackBar: MatSnackBar) { }
  

  ngOnInit(): void {
  }

  editUser(): void {
    this.fetchApiDataUserEdit.editUser(this.userData).subscribe((response) => {
    this.dialogRef.close(); // This will close the modal on success!
    localStorage.setItem('user', response.Username);
    localStorage.setItem('Email', response.Email);
    localStorage.setItem('Birthday', response.Birthday);
    console.log(response)
     this.snackBar.open( 'user updated successfully', 'OK', {
        duration: 2000
     });
    }, (response) => {
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }

}