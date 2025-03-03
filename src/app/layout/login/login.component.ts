import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  private fb = inject(FormBuilder);
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
  });
  }

  login() {
    console.log('Form Data', this.formGroup.value);
  }

}
