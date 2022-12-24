import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren: ()=> import('./layout/home/home.module').then((m)=> {return m.HomeModule}).catch((err)=>{throw new Error(`Error in app routing module of layout ${err}`)})
  },
  {
    path:'about', loadChildren:()=> import('./layout/about-us/about-us.module').then((m)=> {return m.AboutUsModule}).catch((err)=>{throw new Error(`Error in App Layout module of about ${err}`)})
  },
  {
    path:'contact', loadChildren:()=> import('./layout/contact/contact-us.module').then((m)=>{return m.ContactUsModule}).catch((err)=>{
      throw new Error(`Error in App Routing Module of contact us ${err}`)
    })
  },
  {
    path:'career', loadChildren:()=> import('./layout/career/career.module').then((m)=>{return m.CareerModule}).catch((err)=>{
      throw new Error(`Error in App Routing Module of career ${err}`)
    })
  },
  {
    path:'images', loadChildren:()=> import('./layout/gallery/images/images.module').then((m)=> {return m.ImagesModule}).catch((err)=>{
      throw new Error(`Error in the App Routing Module of images ${err}`)
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
