import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// modules
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app.routing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule } from '@angular/material';

// fusion charts
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

// services
import { ProteinDataService } from "./services/protein.service";
import { SearchHelperService } from "./services/search.helper.service";

// components
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactComponent } from './components/contact/contact.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { AboutComponent } from './components/about/about.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProteinListComponent } from './components/protein-list/protein.list.component';
import { ProteinCardComponent } from './components/protein-card/protein-card.component';
import { ProteinFullViewComponent } from './components/protein-full-view/protein-full-view.component';
import { ProVizViewComponent } from './components/proviz-view/proviz-view.component';
import { LinksComponent } from './components/links/links.component';
import { LinksTableComponent } from './components/links-table/links-table.component';
import { ReactionCardComponent } from './components/reaction-card/reaction-card.component';
import { ReactionListComponent } from './components/reaction-list/reaction-list.component';
import { StructureCardComponent } from './components/structure-card/structure-card.component';
import { DownloadComponent } from './components/download/download.component';
import { StructureListComponent } from './components/structure-list/structure-list.component';


FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqsComponent,
    ContactComponent,
    TutorialComponent,
    AboutComponent,
    StatsComponent,
    HomeComponent,
    SearchComponent,
    ProteinListComponent,
    ProteinCardComponent,
    ProteinFullViewComponent,
    ProVizViewComponent,
    LinksComponent,
    LinksTableComponent,
    ReactionListComponent,
    ReactionCardComponent,
    StructureCardComponent,
    DownloadComponent,
    StructureListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterializeModule,
    Angular2FontawesomeModule,
    FusionChartsModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    ProteinDataService,
    SearchHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
