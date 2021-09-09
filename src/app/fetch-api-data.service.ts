import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


const apiUrl = 'https://movie-api-1.herokuapp.com/';


/**
 * User registration
   * API call to the user registration endpoint.
   * @param userDetails
   */
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




  /**
 * User login
   * API call to the user login endpoint.
   * @param userDetails
   */
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

  /**
   * Get all movies
   * API call to get all movies from endpoint
   * @returns array of movies
   */
  @Injectable({
  providedIn: 'root'
})
export class getAllMoviesService {
  constructor(private http: HttpClient) { }
  public getAllMovies(): Observable<any> {
 console.log("here I am");
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


  /**
   * get one movie
   * making the call to get one a specific movie from endpoint
   * @returns movie 
   */
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
  
/**
   * get Director from one movie
   * making the call to get one the director of specific movie 
   * @returns director movie
   */
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


  /**
   * get Genre from one movie
   * making the call to get one the Genre of specific movie 
   * @returns Genre movie
   */
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
  

  /**
   * get user by username
   * making the call to get one user by username
   * @returns specific user
   */
  @Injectable({
    providedIn: 'root'
  })
  export class getUserService {
    constructor(private http: HttpClient) { }
  
    public getUser(): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http.get(apiUrl + `users/${username}`, {
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

  
  /**
   * get favorites movies of user
   * making the call to get favorites movies
   * @return array of movies of user
   */
  @Injectable({
    providedIn: 'root'
  })
  export class getFavoriteMovie {
    constructor(private http: HttpClient) { }
  
    public getFavoriteMovies(_id:string): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http.get(apiUrl + `users/${username}/movies/${_id}`, {
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
  
  
   /**
   * add movie to users favorite
   * making the call to add movies to favorites
   * @param {string} id from movie
   */
  @Injectable({
    providedIn: 'root'
  })
  export class addFavoriteMovie {
    constructor(private http: HttpClient) { }
  
    public addFavoriteMovie(_id:string): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http.patch(apiUrl + `users/${username}/movies/${_id}`, _id, {
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
  
  /**
   * edit user data
   * making the call to edit user by username
   * @param userDetails
   */
  @Injectable({
    providedIn: 'root'
  })
  export class editUser {
    constructor(private http: HttpClient) { }
  
    public editUser(userDetails: any): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http.put(apiUrl + `users/${username}`, userDetails, {
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
  
    /**
   * delete user data
   * making the call to delete user by username
   * @return deleted user
   */
  @Injectable({
    providedIn: 'root'
  })
  export class deleteUser {
    constructor(private http: HttpClient) { }
  
    public deleteUser(): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http.delete(apiUrl + `users/${username}`, {
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

  /**
   * delete movie from users favorite list
   * making the call to delete movie from favs
   * @return movie removed from favs
   */
  @Injectable({
    providedIn: 'root'
  })
  export class deleteFavMovie {
    constructor(private http: HttpClient) { }
  
    public deleteFavMovie(_id:string): Observable<any> {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('user');
      return this.http.delete(apiUrl + `users/${username}/${_id}`, {
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
  export class FetchApiDataService {
    constructor() { }
  }