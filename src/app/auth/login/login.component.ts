import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/share/component/state/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.initPostForm();
  }

  initPostForm(){
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required]),
    });
  }

  onLogin(){
    if(this.loginForm.invalid){
      return;
    }
    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(loginStart({email,password}))
  }

}
