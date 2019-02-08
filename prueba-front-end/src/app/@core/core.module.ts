import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of as observableOf } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ServicesModule } from './services/services.module';

export const NB_CORE_PROVIDERS = [
  ...ServicesModule.forRoot().providers,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  exports: [

  ],
  declarations: [

  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
