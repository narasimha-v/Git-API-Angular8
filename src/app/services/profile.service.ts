import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private username: String;
  private clientID = "0e482913d1a892ce2f8d";
  private clientSecret = "5f13486d29809aad9832bf25833a76d18b83a8c6";

  constructor(private hhtp: HttpClient) {
    this.username;
  }

  getProfile() {
    return this.hhtp.get(
      `https://api.github.com/users/${this.username}?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );
  }

  getRepos() {
    return this.hhtp.get(
      `https://api.github.com/users/${this.username}/repos?client_id=${this.clientID}&client_secret=${this.clientSecret}`
    );
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
