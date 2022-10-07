import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// interface Menu {
//   text: string;
//   route: string;
// }

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  isOpen: boolean = false;
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
    this.translateService.use( lang );
    localStorage.setItem( 'language', lang );
    if ( this.isOpen ) {
      this.setOpenClose();
    }
  }
  

  // Navbar
  setOpenClose(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenuNavbar(): void {
    this.isOpen = false;
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
