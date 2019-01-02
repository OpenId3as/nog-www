import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { ContactComponent } from './contact/contact.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './login/update-password/update-password.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

//import { Local } from './utils/service/local.service';
//import { Session } from './utils/service/session.service';
//import { UtilsService } from './utils/service/utils.service';
//import { SharedService } from './utils/service/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    WhoAreWeComponent,
    ContactComponent,
    HowToHelpComponent,
    CollaboratorComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    LoadingComponent,
    CarouselComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule
  ],

  providers: [
    // Local,
    // Session,
    // UtilsService,
    // SharedService,
    // CountryService,
    // LocaleService,
    // WINDOW_PROVIDERS,
    // HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
