import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customers',
  standalone: false,
  templateUrl: './create-customers.component.html',
  styleUrl: './create-customers.component.css'
})
export class CreateCustomersComponent implements OnInit {
  constructor(private formBuilder:FormBuilder){}
  customerFormGroup!:FormGroup;

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.customerFormGroup = this.formBuilder.group(
      {
        name:["", [Validators.required]],
        phone:["", [Validators.maxLength(11)]],
        email:["", [Validators.email]],
        address:[""],
        gender:[""],
      }
    )
  }

  submitForm(){
    console.log(this.customerFormGroup.value);
  }
}
