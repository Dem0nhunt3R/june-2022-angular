import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', loadChildren: () => import('./modules/home/home.module').then(value => value.HomeModule)},
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)},
      {
        path: 'comments',
        loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)
      },
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
}
