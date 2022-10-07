import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


// interface Menu {
//   text: string;
//   route: string;
// }

@Component({
  selector: 'app-normal-navbar',
  templateUrl: './normal-navbar.component.html',
  styleUrls: ['./normal-navbar.component.css']
})
export class NormalNavbarComponent implements OnInit {

  supportLanguages = ['en', 'es', 'fr'];


  constructor( private translateService: TranslateService,
  ) {
    // Languages
    this.translateService.addLangs( this.supportLanguages );
  }

  ngOnInit(): void {
    const lang = localStorage.getItem( 'language' ) || '';
    if ( lang.length ) {
      this.selectLang( lang );
    }
  }

  // To Change Language
  selectLang( lang: string ) {
    console.log(lang);
    this.translateService.use( lang );
    localStorage.setItem( 'language', lang );
  }

  // menuItem: Menu[] = [
  //   {
  //     text: 'Home',
  //     route: '/dashboard/home'
  //   },
  //   {
  //     text: 'Categories',
  //     route: '/dashboard/categories'
  //   },
  //   {
  //     text: 'Login',
  //     route: '/auth/login'
  //   },
  //   {
  //     text: 'Register',
  //     route: '/auth/register'
  //   },
  //   {
  //     text: 'My Profile',
  //     route: '/user/profile'
  //   },
  // ]

}
