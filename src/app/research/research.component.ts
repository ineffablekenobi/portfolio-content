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
      title: 'Automated and Context-Aware Code Documentation Leveraging Advanced LLMs',
      type: 'Conference Paper',
      affiliation: 'INLG 2025 (Camera-ready Submission)',
      summary: 'Code documentation is essential for improving software maintainability and comprehension. The tedious nature of manual code documentation has led to extensive research on automated documentation generation. Existing automated approaches have primarily focused on code summarization, leaving a gap in template-based documentation generation (e.g., Javadoc), particularly with publicly available Large Language Models (LLMs).\n\nFurthermore, progress in this area has been hindered by the lack of a Javadoc-specific dataset that incorporates modern language features, provides broad framework/library coverage, and includes necessary contextual information. This study aims to address these gaps by developing a tailored dataset and assessing the capabilities of publicly available LLMs for context-aware, template-based Javadoc generation.\n\nIn this work, we present a novel, context-aware dataset for Javadoc generation that includes critical structural and semantic information from modern Java codebases. We evaluate five open-source LLMs (including LLaMA-3.1, Gemma-2, Phi-3, Mistral, and Qwen-2.5) using zero-shot, few-shot, and fine-tuned setups, and provide a comparative analysis of their performance.\n\nOur results demonstrate that LLaMA-3.1 performs consistently well and is a reliable candidate for practical, automated Javadoc generation, offering a viable alternative to proprietary systems.',
      link: 'https://arxiv.org/abs/2509.14273'
    },
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
        'Real-Time Tea Leaf Disease Detection Using Deep Learning-Based Models',
      type: 'Conference Paper',
      affiliation: 'International Conference on Computer and Information Technology',
      summary:
        'Tea leaf diseases pose a significant threat to crop productivity, highlighting the need for efficient and accurate detection methods. The lack of cost-effective, lightweight models for deployment on end devices limits real-time detection. This study addressed this by annotating and utilizing the previously unlabeled Tea Sickness Dataset for object detection and deploying fine-tuned models on mobile devices. The YOLO-NAS-s, YOLOv8n, YOLOv5nu, and SSD-MobileNetV2 models were finetuned using this dataset to detect diseased tea leaves, achieving state-of-the-art performance. Among them, YOLOv5nu achieved a maximum mAP@ 50 of 0.969 and an F1-score of 0.927, demonstrating exceptional accuracy. Its lightweight architecture ensures fast inference and low resource usage, offering a balance between performance and computational efficiency, making it well-suited for real-time deployment. After the models were evaluated, the two most lightweight models were deployed on mobile devices, demonstrating the feasibility of using high-performance and lightweight models for real-time plant disease monitoring.',
      link: 'https://www.researchgate.net/profile/Ashiqul-Islam-6/publication/387501552_Real-Time_Tea_Leaf_Disease_Detection_Using_Deep_Learning-Based_Models/links/6770f54e894c55208531749f/Real-Time-Tea-Leaf-Disease-Detection-Using-Deep-Learning-Based-Models.pdf',
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
