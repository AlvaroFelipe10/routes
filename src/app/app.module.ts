import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorComponent } from './book/book-author/book-author.component';
import { ElectronicsModule } from './electronics/electronics.module';

/*
const appRoutes: Routes = [
  { path:'dvds', component: DvdComponent},
  { path:'books', component: BookComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent}
]
 */
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
   // RouterModule.forRoot(appRoutes),
   //ElectronicsModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
