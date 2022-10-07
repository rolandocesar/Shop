import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { ProductsService } from './product/products.service';
import { CategoriesService } from './category/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopApp';

  supportLanguages = ['en', 'es', 'fr'];

  constructor( private prodServ: ProductsService,
               private cateServ: CategoriesService, 
               private translateService: TranslateService
    ) {
    console.log('App Component');
    this.prodServ.loadAllProducts().subscribe();
    this.cateServ.loadAllCategories().subscribe();

    // Languages Settings
    this.translateService.addLangs( this.supportLanguages );
    this.translateService.setDefaultLang('es');

    // const browserLang = this.translateService.getBrowserLang() || 'en';  // to get browser lang
    // this.translateService.use( browserLang );

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
