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
  },
  {
    path:'ongoing', loadChildren:()=> import('./layout/projects/ongoing-projects/ongoing.module').then((m)=> {return m.OngoingModule}).catch((err)=>{
      throw new Error(`Error in the App Routing Module of Ongoing Projects ${err}`)
    })
  },
  {
    path:"completed", loadChildren:()=> import('./layout/projects/completed-projects/completed-projects.module').then((m)=> {return m.CompletedProjectsModule}).catch((err)=>{
      throw new Error(`Error in the App routing module of completed projects ${err}`);
    })
  },
  {
    path:"video", loadChildren:()=>import('./layout/gallery/videos/video-gallery.module').then((m)=>{return m.VideoGalleryModule}).catch((err)=>{
      throw new Error(`Error in app routing module of video gallery ${err}`)
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
