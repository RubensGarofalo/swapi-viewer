import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

export interface Film {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  @ViewChild(IonModal) modal: IonModal | undefined;
  @Input() films: Film[] | null = null;
  currentFilm$: BehaviorSubject<Film | null> = new BehaviorSubject<Film | null>(
    null
  );
  constructor() {}

  openModal(film: Film): void {
    this.currentFilm$.next(film);
  }
}
