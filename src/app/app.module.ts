import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileService } from "./services/profile.service";

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
