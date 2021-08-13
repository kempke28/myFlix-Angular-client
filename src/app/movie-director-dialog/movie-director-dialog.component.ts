import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-director-dialog',
  templateUrl: './movie-director-dialog.component.html',
  styleUrls: ['./movie-director-dialog.component.scss']
})

export class MovieDirectorDialogComponent implements OnInit {
  
    constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: {
        name: string;
        bio: string;
      }
    ) { }
  
    ngOnInit(): void {
    }
  }