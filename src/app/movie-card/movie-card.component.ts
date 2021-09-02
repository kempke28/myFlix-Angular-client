import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getAllMoviesService } from '../fetch-api-data.service'
import { addFavoriteMovie } from '../fetch-api-data.service';

import { MovieDirectorDialogComponent } from '../movie-director-dialog/movie-director-dialog.component';
import { MovieGenreDialogComponent } from '../movie-genre-dialog/movie-genre-dialog.component';
import { MovieDetailsDialogComponent } from "../movie-movie-details-dialog/movie-movie-details-dialog.component"

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  movies: any[] = [];
  constructor(
    public fetchApiDataMovies: getAllMoviesService,
    public fetchApiDataMovieFavs: addFavoriteMovie,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiDataMovies.getAllMovies().subscribe((response: any) => {
        this.movies = response;
        console.log(this.movies);
        return this.movies;
      });
    }

  showGenreDialog(name: string, description: string): void {
    this.dialog.open(MovieGenreDialogComponent, {
      data: { name, description },
      });
  }

  showDirectorDialog(
    name: string,
    bio: string,
  ): void {
    this.dialog.open(MovieDirectorDialogComponent, {
      data: { name, bio },
      });
  }

  movieDetails(title: string, description: string): void {
    this.dialog.open(MovieDetailsDialogComponent, {
      data: { title, description },
    });
  }

  addFavoriteMovie(id: string): void {
    this.fetchApiDataMovieFavs.addFavoriteMovie(id).subscribe((response: any) => {
      console.log(response);
      let favMovies = response.FavoriteMovies;
      localStorage.setItem('FavoriteMovies', favMovies);
      this.snackBar.open('The movie has been added to the list', 'OK', {
        duration: 2000,
      });
    });

  }

}