import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContentContainer } from './shared/content-container/content-container.component';
import { SearchBarComponent } from './about/search-bar/search-bar.component';
import { SearchResultsComponent } from './about/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ContentContainer,
    SearchBarComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, {useHash: true}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
