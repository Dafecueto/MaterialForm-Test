import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class DetailsComponent implements OnInit {

  userDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userDetailsForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      date: ['', [Validators.required]]
    });  
  }

  ngOnInit() {
  }

  submit = () => {

    // service call to store the data
  }

  setFormControls = () => {

  }

  invalidateForm = () => {

  }

  // get username() { return this.userDetailsForm.get('username'); }

}