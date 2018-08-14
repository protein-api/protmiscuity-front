import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// route components
import { HomeComponent } from "./components/home/home.component";
import { ProteinListComponent } from "./components/protein-list/protein.list.component";
import { ProteinFullViewComponent } from "./components/protein-full-view/protein-full-view.component";
import { StatsComponent } from "./components/stats/stats.component";
import { TutorialComponent } from "./components/tutorial/tutorial.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { FaqsComponent } from "./components/faqs/faqs.component";
import { DownloadComponent } from "./components/download/download.component";


// Routing
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'protein/:idProtein', component: ProteinFullViewComponent },
    { path: 'proteins', component: ProteinListComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'download', component: DownloadComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
