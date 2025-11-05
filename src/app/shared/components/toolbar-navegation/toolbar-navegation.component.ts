import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar-navegation',
  templateUrl: './toolbar-navegation.component.html',
  styleUrls: ['./toolbar-navegation.component.scss']
})
export class ToolbarNavegationComponent {

 constructor(private cookieService: CookieService, private router: Router){}
  handleLogout(): void{
    this.cookieService.delete('USER_INFO');
    void this.router.navigate(['/home']);

  }

}
