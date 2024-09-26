import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  achivements: Array<any> = []

  constructor() {}

  ngOnInit(): void {
    let achivement1 = {
      description: "Certified Angular Developer"
    }

    let achivement2 = {
      description: "Speaker en el Congreso de Innovación Tecnológica"
    }

    let achivement3 = {
      description: "Data Science Specialization"
    }

    this.achivements.push(achivement1);
    this.achivements.push(achivement2);
    this.achivements.push(achivement3);
    console.log(this.achivements);
  }
}
