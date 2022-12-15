import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'training',
        loadChildren:  () => import('./training/training.module').then(x => x.TrainingModule)
    },
    {
        path: 'work-experience',
        loadChildren:  () => import('./work-experience/work-experience.module').then(x => x.WorkExperienceModule)
    },
    {
        path: 'about-me',
        loadChildren:  () => import('./about-me/about-me.module').then(x=>x.AboutMeModule)
    },
    {
        path: 'projects',
        loadChildren: () => import('./personal-projects/personal-projects.module').then ( x => x.PersonalProjectsModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(x => x.ContactModule)
    },
    { path: '**', redirectTo: '/home' }
    
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}