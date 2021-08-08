import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


const apiUrl = 'https://movie-api-1.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

  //User Login
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) { }

  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

  //Get all movies
  @Injectable({
  providedIn: 'root'
})
export class getAllMoviesService {
  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', { headers: new HttpHeaders({ Authorization: 'Bearer ' + token,})
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}


  // get one movie end-point
  @Injectable({
  providedIn: 'root'
})
export class GetOneMoviesService {
  constructor(private http: HttpClient) { }

  public getMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}
  
  //Get director
  @Injectable({
  providedIn: 'root'
})
export class GetDirectorService {
  constructor(private http: HttpClient) { }

  public getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/Director/:name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}


  //  Get genre
  @Injectable({
    providedIn: 'root'
  })
  export class GetMovieGenreService {
    constructor(private http: HttpClient) { }
  
    public getMovieGenre(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.get(apiUrl + 'movies/Director/:name', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }
  

  //  Get user
  @Injectable({
    providedIn: 'root'
  })
  export class getUserService {
    constructor(private http: HttpClient) { }
  
    public getUser(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.get(apiUrl + 'users/:username', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }

  
  //  Get favourite movies for a user
  @Injectable({
    providedIn: 'root'
  })
  export class getFavoriteMovie {
    constructor(private http: HttpClient) { }
  
    public getFavoriteMovies(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.get(apiUrl + 'movies/:Title/users/:username', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }
  
  
  // Add a movie to favourite Movies
  @Injectable({
    providedIn: 'root'
  })
  export class addFavoriteMovie {
    constructor(private http: HttpClient) { }
  
    public addFavoriteMovies(id:string): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.post(apiUrl + 'users/:username/favorites/:id', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }
  
  //Edit user
  @Injectable({
    providedIn: 'root'
  })
  export class editUser {
    constructor(private http: HttpClient) { }
  
    public editUser(userDetails: any): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.put(apiUrl + 'users/:username', userDetails, {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }
  
  //Delete user

  @Injectable({
    providedIn: 'root'
  })
  export class deleteUser {
    constructor(private http: HttpClient) { }
  
    public deleteUser(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.delete(apiUrl + 'users/:username', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }

  //Delete a movie from the favorite movies

  @Injectable({
    providedIn: 'root'
  })
  export class deleteMovie {
    constructor(private http: HttpClient) { }
  
    public deleteMovie(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.delete(apiUrl + 'user/:username/favorites/:id', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          })
        })
        .pipe(map(this.extractResponseData), catchError(this.handleError));
    }
    // non-typed response extraction
    private extractResponseData(res: Response | {}): Response | {} {
      console.log(res);
      const body = res;
      return body || {};
    }
  
    private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` + `Error body is ${error.error}`
        );
      }
      return throwError('Something bad happened; please try again later');
    }
  }

