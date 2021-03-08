import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { MessageInterface } from '../../interfaces/message';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private _dataService: DataDbService) { 
    this.contactForm= this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl('')
    });
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {
    console.log('guardado')
  }

}
