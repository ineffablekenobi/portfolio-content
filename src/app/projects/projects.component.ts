import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Leave Portal',
      description:'',
      affiliation:'Enosis Solutions',
      details: [
        'Built with Angular in the frontend and Spring in the backend',
        'Integrated state management replacing existing communication service',
        'Built reusable angular components',
        'Used Reactive approach (Observables) for calling API and inter-component communication'
      ]
    },

    {
      title: 'Community Voting System',
      description: '',
      affiliation: 'Enosis Solutions',
      details: [
        'Most of the services are built with RestEasy',
        'Uses docker and AWS',
        'Frontend is built with Angular',
        'Used Design patterns like singleton, factory, observer, strategy',
        'Learned concurrency and transaction management of a singleton bean',
        'Learned to write reusable codes that can be exported as libraries.'
      ]
    }
  ];
}
