import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

import { HeaderModule } from './components/header/header.component.module';
import { MenuComponent } from './components/header/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [

  NgbModule,
  HeaderModule,
  MenubarModule
];

const COMPONENTS = [
  ContentComponent,
  FooterComponent,
  MenuComponent,
   HeaderComponent
];

const ENTRY_COMPONENTS = [

];

const PIPES = [

];

const NB_THEME_PROVIDERS = [


];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
