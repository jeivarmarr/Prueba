import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';

const SERVICES = [
  MenuService
];

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [...SERVICES,
    ],
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ServicesModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
