import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import * as firebase  from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public auth: AuthService) {}

  logout()
  {
    this.auth.logout();
  }

 

}
