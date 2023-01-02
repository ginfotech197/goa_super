import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Md5} from 'ts-md5';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import {ServerResponse} from '../../models/ServerResponse.model';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private BASE_API_URL = environment.BASE_API_URL;
  cPanelPasswordResetForm: FormGroup;

  userData: User;

  constructor(private http: HttpClient) {
    this.userData = JSON.parse(localStorage.getItem('user'));
    console.log(this.userData);
  }

  ngOnInit(): void {
    this.cPanelPasswordResetForm = new FormGroup({
      id: new FormControl(null),
      oldPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      confirmedPassword: new FormControl(null, [Validators.required]),
    });
  }

  resetPassword(){
    // const md5 = new Md5();
    // const passwordMd5 = md5.appendStr(this.cPanelPasswordResetForm.value.oldPassword).end();
    console.log(this.cPanelPasswordResetForm.value);
    const md5 = new Md5();
    const passwordMd5 = md5.appendStr(this.cPanelPasswordResetForm.value.oldPassword).end();

    if (this.cPanelPasswordResetForm.value.newPassword !== this.cPanelPasswordResetForm.value.confirmedPassword){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'New password and Confirmed password did not match',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    // this.cPanelPasswordResetForm.patchValue({id: this.userData.userId, oldPassword: passwordMd5});
    this.http.post(this.BASE_API_URL + '/resetPassword', {userId: this.userData.userId, password: passwordMd5, newPassword : this.cPanelPasswordResetForm.value.confirmedPassword})
      .subscribe((response: ServerResponse) => {
      if (response.success === 1){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Password Updated',
          showConfirmButton: false,
          timer: 2000
        });
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Wrong old password',
          showConfirmButton: false,
          timer: 2000
        });
      }
    });

  }

}
