import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
