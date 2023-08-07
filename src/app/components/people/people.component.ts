import { Component, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

export interface People {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  @ViewChild(IonModal) modal: IonModal | undefined;
  @Input() peoples: People[] | null = null;
  currentPeople$: BehaviorSubject<People | null> =
    new BehaviorSubject<People | null>(null);
  constructor() {}

  openModal(people: People): void {
    this.currentPeople$.next(people);
  }
}
