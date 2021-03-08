import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { MessageInterface } from '../../interfaces/message';
import { FormControl, FormGroup,Validators } from '@angular/forms';




@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  emailPatern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private _dataService: DataDbService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern(this.emailPatern)]),
      name: new FormControl('',[Validators.required,Validators.minLength(5)]),
      message: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)])
    });
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {

    if(this.contactForm.valid){
      this._dataService.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valid')
    }else{
      this.onResetForm();
      console.log('Not valid')
    }
    
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

}
