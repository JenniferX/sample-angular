import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { ModuleRouting } from './modules/modules.routing-module';
import { HttpClientModule } from '@angular/common/http';
import { ModulesComponent } from 'src/app/modules/modules.component';
import { MockBackendProvider } from 'src/app/mockup-server/mockup-server.provider';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ModuleRouting,
    HttpClientModule,
  ],
  providers: [MockBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
