import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

import { FileSelectDirective } from 'ng2-file-upload';

const appRoutes: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent,
  }
]);

@NgModule({
  declarations: [
    SettingsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [SettingsComponent]
})
export class SettingsModule { }