import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Enosis Solutions',
      role: 'Software Engineer',
      duration: 'December 2023 - Present',
      description: 'Specializing in full-stack development with a strong focus on backend technologies. My preferred language is Java, where I excel in creating robust and scalable solutions.'
    }
    // Add more experiences as needed
  ];
}