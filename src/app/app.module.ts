import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { WindowComponent } from './window/window.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    WindowComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ResearchComponent,
    ContactComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    TimelineModule,
    ButtonModule,
    ToastModule,
    TooltipModule,
    FormsModule,
  ],
  providers: [provideClientHydration(), MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
