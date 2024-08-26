import { Component } from '@angular/core';
import { EVENT_NAMES } from '../constants/event-constants';
import { EventBusService } from '../services/event-bus.service';

export interface Publication {
  title: string;
  type: string;
  affiliation: string;
  summary: string;
  link: string;
}

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss',
})
export class ResearchComponent {
  publications: Publication[] = [
    {
      title:
        'Performance Analysis of Deep Learning Models on Chemokines Protein Group Using Structure-Based Pattern Detection',
      type: 'Book Chapter',
      affiliation: 'Springer Link',
      summary:
        'The recent success of deep learning-based models such as AlphaFold 2 on the prediction of structure from protein sequences has made structural assessment much easier. Structural prediction from these models can be used in many protein-based types of research like identifying misfolded protein, protein docking, etc. much quicker than traditional methods. Recent studies include benchmark studies of nanobodies, empirical analysis on Cytokines protein groups, and so on. These studies compare different protein folding models against each other to evaluate which models perform the best. However, no further investigation has been done to detect anomalies or protein that consistently performs poorly across all models. Additionally, no similar research has been done on the Chemokines protein group. In this work, we have assessed the performance of AlphaFold 2 on the Chemokines protein group and attempted to detect patterns in which the model performs very poorly. The result highlights protein groups with patterns in which AlphaFold 2 performs poorly.',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-62316-5_4',
    },
    {
      title:
        'An Empirical Analysis of Different Protein Folding Algorithms on Cytokine Protein Structure',
      type: 'Conference Paper',
      affiliation: 'SARC International Conference',
      summary:
        'Numerous applications, including identifying protein misfolding, protein docking, and comprehending the function of proteins, depend on accurate prediction of the three-dimensional structure of proteins. Cytokines, a type of protein involved in intercellular communication in the immune system and inflammation, are of special interest due to their medicinal significance. Accurate prediction of these protein types can be very resourceful in medical studies. Several deep learning-based algorithms for predicting protein structures from amino acid sequences, such as AlphaFold 2, OmegaFold, and ESMFold, have been developed in recent years. There has been significant research in this field, such as benchmark studies of nanobodies, evaluating protein docking using AlphaFold 2, and so on, but there has not been a study that analyzes the performance of these models on Cytokines. In this work, we assessed how well these models performed at predicting the Cytokine structures. Overall, these results highlight the importance of considering both accuracy and speed when selecting a protein structure prediction model.',
      link: 'https://www.researchgate.net/publication/367545335_An_Empirical_Analysis_of_Different_Protein_Folding_Algorithms_on_Cytokine_Protein_Structure',
    },
  ];

  constructor(private eventBus: EventBusService) {}

  playClickSound(): void {
    this.eventBus.cast(EVENT_NAMES.CLICK);
  }

  goToPublication(publication: Publication): void {
    this.playClickSound();
    window.open(publication.link, '_blank');
  }
}
