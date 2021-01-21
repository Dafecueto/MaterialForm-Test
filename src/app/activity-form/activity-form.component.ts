import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  actform : FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { 
    this.actform = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }


  ngOnInit(): void {
  }

  submit(event: Event) {
    event.preventDefault();
    if (!this.actform.valid) {
      return;
    }
    console.log(this.actform.value);
  }

}
