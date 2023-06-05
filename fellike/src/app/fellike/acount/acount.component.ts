import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent {


  hide = true;
  isRegistered: boolean = false;


userForm = new FormGroup({
  fullName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required , Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),  country: new FormControl('',[]),
  city: new FormControl('',[]),
  birthDate: new FormControl(null),
  acceptConditions: new FormControl(false, [Validators.requiredTrue]),
})
save(){}

}
