import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * Este método no se puede modificar
   * */
  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }

  public redireccionar(url): void {
    this.sidenav.close()
    this.router.navigateByUrl(url);
   
  }

}
