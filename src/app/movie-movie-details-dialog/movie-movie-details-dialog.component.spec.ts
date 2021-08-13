import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMovieDetailsDialogComponent } from './movie-movie-details-dialog.component';

describe('MovieMovieDetailsDialogComponent', () => {
  let component: MovieMovieDetailsDialogComponent;
  let fixture: ComponentFixture<MovieMovieDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMovieDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMovieDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
