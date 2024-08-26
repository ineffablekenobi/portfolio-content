import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education = [
    {
      title: 'High School',
      institution: 'Goverment Laboratory High School',
      year: '2006 - 2018',
      logo: 'assets/school-logo.png',
      description:
        'Completed high school with a focus on science, participating in various Olympiads and problem-solving competitions.',
    },
    {
      title: "Bachelor's Degree in Computer Science",
      year: '2019 - 2023',
      institution: 'Ahsanullah University of Science and Technology',
      logo: 'assets/varsity-logo.png',
      description:
        "Pursued a Bachelor's degree in Computer Science, winning university programming contests and conducting research in NLP, Computer Vision, and Bioinformatics.",
    },
  ];
}
