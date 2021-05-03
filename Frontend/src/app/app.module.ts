import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TeamComponent } from './components/team/team.component';
import { GlassCoatingComponent } from './components/services/glass-coating/glass-coating.component';
import { PaintJobComponent } from './components/services/paint-job/paint-job.component';
import { TintServicesComponent } from './components/services/tint-services/tint-services.component';
import { CarwashComponent } from './components/services/carwash/carwash.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TeamComponent,
    GlassCoatingComponent,
    PaintJobComponent,
    TintServicesComponent,
    CarwashComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
