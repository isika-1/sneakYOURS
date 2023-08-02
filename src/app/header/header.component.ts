import { Component } from '@angular/core';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    faMagnifyingGlass = faMagnifyingGlass;
    faUser = faUser;
    faCartShopping = faCartShopping;
    public inputText : string = "";
    public isSignedUp : boolean = false;

    public searchInitiated() : void {
        console.log(this.inputText);
    }
    
    public openSignInPage() : void {
        console.log("ho gaya sign up");
        this.isSignedUp = true;
    }

    public logOut() : void {
        this.isSignedUp = false;
    }
}