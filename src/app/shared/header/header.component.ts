import { Component, OnInit } from '@angular/core';
import { GoogleApiService, UserInfo } from '../../google-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo?: UserInfo

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  ngOnInit(): void {
  }

  logout() {
    this.googleApi.signOut()
  }

}
