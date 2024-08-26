import { Component } from '@angular/core';
import { link } from 'fs';
import { EventBusService } from '../services/event-bus.service';
import { EVENT_NAMES } from '../constants/event-constants';
import { MessageService } from 'primeng/api';

export interface Project {
  title: string;
  description: string;
  affiliation: string;
  gitLink: string;
  details: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Community Voting System',
      description:
        'A voting system, which is a part of a community management system. Admins can host votes/polls/surveys and residents can vote.',
      affiliation: 'Enosis Solutions',
      gitLink: '',
      details: [
        'Most of the services are built with RestEasy',
        'Uses docker and AWS',
        'Frontend is built with Angular',
        'Used Design patterns like singleton, factory, observer, strategy',
        'Learned concurrency and transaction management of a singleton bean',
        'Learned to write reusable codes that can be exported as libraries.',
      ],
    },

    {
      title: 'Leave Portal',
      description:
        'A service of a company management software, where employees can apply for leaves.',
      affiliation: 'Enosis Solutions',
      gitLink: '',
      details: [
        'Built with Angular in the frontend and Spring in the backend',
        'Integrated state management replacing existing communication service',
        'Built reusable angular components',
        'Used Reactive approach (Observables) for calling API and inter-component communication',
      ],
    },

    {
      title: 'ShopFast 2.0',
      description:
        'An ecommerce based API that have services like order, inventory, product, user, shop, shop roles, product management',
      affiliation: 'Personal',
      gitLink: 'https://github.com/ineffablekenobi/Shopfast2.0',
      details: [
        'A microservice architecture and JWT based authentication.',
        'Databases: MongoDB and MySQL',
        'Frameworks: Spring Boot, Spring Cloud, Spring Security, Spring Data, Spring Doc',
        'Netflix Eureka, Ribbon, and Hystrix for service discovery, load balancing, and fault tolerance',
        'The documentation was provided on a separate website which I created using bootstrap',
      ],
    },

    {
      title: 'Guccho',
      description:
        'A university management system where student can enroll to courses and teacher can manage students.',
      affiliation: 'Personal',
      gitLink: 'https://github.com/ineffablekenobi/Guccho',
      details: [
        'The project was primarily developed using ASP .NET MVC for the backend and RAZOR view for the frontend',
        'MS SQL Servers was used as database.',
      ],
    },

    {
      title: 'Bucketary',
      description:
        'A clothing store. It holds different kind of clothing items. You can add, update items and order items',
      affiliation: 'Personal',
      gitLink: 'https://github.com/ineffablekenobi/Shopfast1_5',
      details: [
        'Features include cart functionality, product ordering, trending product visibility, order management, user management, and more',
        'Spring Boot backend, utilizing Spring Doc for documentation',
        'MySQL and Firebase as databases',
        'React JS for Frontend',
        'Design Patterns Like The Repository-Service, Singletone were used',
      ],
    },

    {
      title: 'Uncallibrated',
      description: 'A fun android game',
      affiliation: 'Personal',
      gitLink: 'https://github.com/ineffablekenobi/Android2-2',
      details: [
        'In this game, a funny accent is played and players try to guess what is being said',
        'Utilizes features such as a scoring system, music streaming, an edit distance algorithm, and a live leaderboard.',
        'Built with Java and Android studio ',
        'Firebase as database',
      ],
    },
  ];

  constructor(
    private eventBus: EventBusService,
    private messageService: MessageService
  ) {}

  playClickSound(): void {
    this.eventBus.cast(EVENT_NAMES.CLICK);
  }

  goToProject(project: Project): void {
    this.playClickSound();
    if (project.gitLink === '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Dont have permission to show codes',
        detail:
          'Because of Company policies, I dont have permission to reveal the codes for this project.',
      });
    } else {
      window.open(project.gitLink, '_blank');
    }
  }
}
