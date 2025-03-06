import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Ensure this is set
  imports: [FormsModule], // ✅ Add FormsModule to imports array
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  login() {
    console.log('Login with:', this.email, this.password);
  }
}
