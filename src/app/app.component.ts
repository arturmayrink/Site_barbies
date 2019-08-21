import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: ['.blue-bg{background-color:blue;}']
})
export class AppComponent {
	private currentUser:User = { username: "-", email: "test@test.com", senha: "-" }

	private hideEmail:boolean = true

	private toggle() {
		this.hideEmail = !this.hideEmail
	}

}

interface User {
	username:string,
	email:string,
  senha:string
}
