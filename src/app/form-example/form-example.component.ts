import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {
  myForm: FormGroup;
  count:number=1;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
      address: ['', Validators.required],
      disease: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onFormSubmit() {
    if (this.myForm.valid) {
      const formData = {
        name: this.myForm.value.name,
        age: this.myForm.value.age,
        weight: this.myForm.value.weight,
        address: this.myForm.value.address,
        disease: this.myForm.value.disease,
        gender: this.myForm.value.gender
      };
     
      this.http.post('http://localhost:4000', formData).subscribe(() => {
        // Navigate to the new component
       
      });
      alert(`Successfully Registered.Your Token Number is ${this.count++}`)
    } else {
      console.log('Invalid form');
      // Handle form validation errors here
    }
  }
}