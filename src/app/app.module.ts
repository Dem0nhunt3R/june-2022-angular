import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {
  CommentComponent,
  CommentsComponent, HeaderComponent,
  PostComponent,
  PostsComponent,
  UserComponent,
  UsersComponent,
  HomeComponent,
  CommentDetailsComponent,
  UserDetailsComponent,
  PostDetailsComponent
} from "./components";
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':length/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':length/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: ':length/:id', component: CommentDetailsComponent}
        ]
      },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    MainLayoutComponent,
    HeaderComponent,
    HomeComponent,
    CommentDetailsComponent,
    UserDetailsComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
