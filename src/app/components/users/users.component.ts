import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "Chin",
        lastName: "Pao",
        age: 25,
        address: {
          street: "123 Heaven Street",
          city: "New York",
          state: "NY"
        }
      },
      {
        firstName: "Max",
        lastName: "Schwazneggar",
        age: 32,
        address: {
          street: "456 Autumn Rd",
          city: "Philadelphia",
          state: "PA"
        }
      },
      {
        firstName: "Jessica",
        lastName: "Pearson",
        age: 37,
        address: {
          street: "5400 Preston Oaks Rd",
          city: "Dallas",
          state: "TX"
        }
      }
    ];
  }
}
