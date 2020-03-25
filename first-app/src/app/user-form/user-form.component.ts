import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  submitted = false;
  defaultQuestion = "pet";
  answer = '';
  genders = ["Male", "Female"];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }
  constructor() { }
  suggestedUserName() {
    const suggestedUserName = 'sample name 1'
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedUserName,
    //     email:'a@aa.com',
    //   },
    //   secret:'teacher',
    //   questionAnswer:'ammy',
    //   gender:'Male'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedUserName
      },
      gender: 'Male'
    })
  }
  ngOnInit(): void {
  }

  // onsubmit(form:NgForm){
  //   console.log(form)
  // }

  onsubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
    console.log(this.signupForm)
  }

}
