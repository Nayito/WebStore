import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountComponent } from './pages/account/account.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccessComponent } from './pages/account/access/access.component';
import { SecurityComponent } from './pages/account/security/security.component';
import { SubsComponent } from './pages/account/subs/subs.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDescComponent } from './pages/product-desc/product-desc.component';
import { ModalComponent } from './modal/modal.component';
import { ModaldescComponent } from './shared/modaldesc/modaldesc.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    AboutUsComponent,
    CartComponent,
    AccountComponent,
    SignInComponent,
    CreateAccountComponent,
    AccessComponent,
    SecurityComponent,
    SubsComponent,
    ProductListComponent,
    ProductDescComponent,
    ModalComponent,
    ModaldescComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SidebarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
