
import {Router,RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {PhotosComponent} from './photos/photos.component';
import {MessagesComponent} from './messages/messages.component';
import {NotFoundComponent} from './not-found.component';
import { PhotoDetailsComponent } from "./photos/photo-details.component";

export const routing = RouterModule.forRoot([
    {path: '', component : HomeComponent},
    {path: 'messages', component : MessagesComponent},
    {path: 'photos', component : PhotosComponent},
    {path: 'photos/:id', component : PhotoDetailsComponent},
    {path: '**', component : NotFoundComponent}
]);