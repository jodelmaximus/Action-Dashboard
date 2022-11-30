import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { GoogleMapsModule } from "@angular/google-maps";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomepageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        GoogleMapsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        FontAwesomeModule,
        IgxDataChartInteractivityModule,
        IgxGeographicMapModule
    ],
    exports: [
        AppComponent,
        LoginComponent,
        HomepageComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
