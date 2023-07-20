import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'sprofile',
    loadChildren: () => import('./sprofile/sprofile.module').then( m => m.SprofilePageModule)
  },
  {
    path: 'appsit',
    loadChildren: () => import('./appsit/appsit.module').then( m => m.AppsitPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'clogin',
    loadChildren: () => import('./clogin/clogin.module').then( m => m.CloginPageModule)
  },
  {
    path: 'sitter',
    loadChildren: () => import('./sitter/sitter.module').then( m => m.SitterPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'profol',
    loadChildren: () => import('./profol/profol.module').then( m => m.ProfolPageModule)
  },
  {
    path: 'proyani',
    loadChildren: () => import('./proyani/proyani.module').then( m => m.ProyaniPageModule)
  },
  {
    path: 'conyani',
    loadChildren: () => import('./conyani/conyani.module').then( m => m.ConyaniPageModule)
  },
  {
    path: 'clinbox',
    loadChildren: () => import('./clinbox/clinbox.module').then( m => m.ClinboxPageModule)
  },
  {
    path: 'accept',
    loadChildren: () => import('./accept/accept.module').then( m => m.AcceptPageModule)
  },
  {
    path: 'decline',
    loadChildren: () => import('./decline/decline.module').then( m => m.DeclinePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
