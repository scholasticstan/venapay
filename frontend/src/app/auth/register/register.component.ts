import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], // ✅ Add FormsModule to imports array
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';

  register() {
    console.log('Register with:', this.email, this.password);
  }
}
