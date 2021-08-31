import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './movie-movie-details-dialog.component.html',
  styleUrls: ['./movie-movie-details-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MovieDetailsDialogComponent implements OnInit {
  
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      description: string;
      director: string;
      genre: string;
    }
  ) { }

  ngOnInit(): void { }
}