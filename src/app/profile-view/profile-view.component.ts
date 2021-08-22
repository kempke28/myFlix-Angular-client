import { Component, OnInit } from '@angular/core';

// This import brings in the API calls we created in 6.2
import { getUserService, getAllMoviesService, editUser, deleteMovie, deleteUser } from '../fetch-api-data.service';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';


// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})


export class ProfileViewComponent implements OnInit {

  user: any = {};
  movies: any = [];
  favorites: any = [];

  constructor(
    public fetchApiDataUser: getUserService,
    public fetchApiDataGetAllMovies: getAllMoviesService,
    public fetchApiDeleteFavMovie: deleteMovie,
    public fetchApiDeleteUser: deleteUser,

    public router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) { }
  

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.fetchApiDataUser.getUser().subscribe((resp: any) => {
      this.user = resp;
      this.getFavoriteMovies();
    });
  }


  ProfileUpdate(): void {
    this.dialog.open(ProfileUpdateComponent, {
      width: '280px',
    });
  }

  getFavoriteMovies(): void {
    this.fetchApiDataGetAllMovies.getAllMovies().subscribe((res: any) => {
      this.movies = res;
    });
  }

    
  deleteFromFavorites(_id: string, title: string): void {
    this.fetchApiDeleteFavMovie.deleteMovie().subscribe(() => {
      this.snackBar.open(
        `${title} has been removed`, 'OK', {
        duration: 2000,
      }
      );
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    });
  }

  deleteUser(): void {
    let confirmDelete = confirm("Are you sure you want to delete your profile?");
    if (confirmDelete) {
      this.fetchApiDeleteUser.deleteUser().subscribe(() => {
        console.log('Profile Deleted');
        localStorage.clear();
        this.router.navigate(['/welcome']);
        this.snackBar.open('Profile Deleted', 'OK', {
          duration: 2000,
        });
      });
    } else {
      window.location.reload();
    }
  }

}