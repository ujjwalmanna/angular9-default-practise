import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-user-form',
  templateUrl: './reactive-user-form.component.html',
  styleUrls: ['./reactive-user-form.component.css']
})
export class ReactiveUserFormComponent implements OnInit {

  signupForm: FormGroup;
  genders = ['Male', 'Female']
  forbiddennames=['sam','ujjwal']
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails)
       }),      
      'gender': new FormControl('Male'),
      'hobbies':new FormArray([])
    });
    //this.signupForm.valueChanges.subscribe((value)=>console.log(value));
    this.signupForm.statusChanges.subscribe((value)=>console.log(value));
  }
  onsubmit(){
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
   (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control:FormControl):{[s:string]:boolean}
  {
    if (this.forbiddennames.indexOf(control.value)!==-1)
     return {'nameIsForbiiden':true};
    else
     return null;
  }

  forbiddenEmails(control:FormControl):Promise<any>|Observable<any>
  {
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=="test@test.com"){
          resolve({'emailForBiddden':true})
        }
        else
          resolve(null)
      },1500)
    });
    return promise;
  }

}
