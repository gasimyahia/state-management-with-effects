import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditComponent } from "./edit/edit.component";
import { PostListComponent } from "./post-list/post-list.component";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selector";

export const routes: Routes = [
  {
    path:'',component:PostListComponent,
    children:[
      {path:'add',component:AddPostComponent},
      {path:'edit/:id',component:EditComponent}
    ]
  }
];
@NgModule({
  declarations:[
    PostListComponent,
    AddPostComponent,
    EditComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME,postsReducer),
    FormsModule
  ],

})
export class PostModule{}
