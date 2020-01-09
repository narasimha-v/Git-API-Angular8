import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: String;
  constructor(private ProfileService: ProfileService) {}

  findProfile() {
    this.ProfileService.updateProfile(this.username.toString());
    this.ProfileService.getProfile().subscribe((profile: any[]) => {
      console.log(profile);
      this.profile = profile;
    });
    this.ProfileService.getRepos().subscribe((repos: any[]) => {
      this.repos = repos;
    });
  }
  ngOnInit() {}
}
