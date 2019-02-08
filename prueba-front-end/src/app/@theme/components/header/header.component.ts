import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../@core/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  menusUser: any[];

  constructor(private _menuService: MenuService) {}

  ngOnInit() {
     this._menuService.getMenu().subscribe((menus: any[]) => {
      this.menusUser = menus;
    });
  }
}
