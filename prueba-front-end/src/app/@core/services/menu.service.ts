import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MenuService {

constructor(private http: HttpClient) {}

    getMenu() {
        return this.http.get(environment.API_URL + '/menu');
    }

    getMenuMock() {
        const menu = [
            {
               label: 'Home',
               icon: 'fa fa-plus',
               url: '/',
               items: [
                  {
                     label: 'page 1',
                     icon: 'fa fa-plus',
                     url: 'page1'
                  }
               ]
            },
            {
               label: 'Tools',
               icon: 'fa fa-plus',
               url: '/',
               items: [
                  {
                     label: 'page 1',
                     icon: 'fa fa-plus',
                     url: 'tools/page1'
                  },
                  {
                     label: 'page 2',
                     icon: 'fa fa-plus',
                     url: 'tools/page2'
                  },
                  {
                     label: 'page 3',
                     icon: 'fa fa-plus',
                     url: 'tools/page3'
                  }
               ]
            }
         ];
        return menu;
    }

}
