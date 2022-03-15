import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-entity',
  templateUrl: './form-entity.component.html',
  styleUrls: ['./form-entity.component.css']
})
export class FormEntityComponent implements OnChanges {

  @Input() entity: any;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    contactMail: ['', [Validators.required, Validators.email]],
    contactName: ['', [Validators.required]],
    expirationDate: ['', [Validators.required, Validators.pattern(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)]],
    identificationNumber: ['', [Validators.required, Validators.minLength(9)]],
    ipAddress: ['', []]
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnChanges(): void {
    this.updateForm();
  }

  updateForm(): void {
    this.form.patchValue({
      name: this.entity.name,
      identificationNumber: this.entity.identificationNumber,
      contactMail: this.entity.contactMail,
      contactName: this.entity.contactName,
      expirationDate: this.entity.expirationDate,
      ipAddress: this.entity.ipAddress,
      entityId: this.entity.entityId
    });
  }

  save(): void {
    const itemUpdated = {
      name: this.form.controls['name'].value,
      identificationNumber: this.form.controls['identificationNumber'].value,
      contactMail: this.form.controls['contactMail'].value,
      contactName: this.form.controls['contactName'].value,
      expirationDate: this.form.controls['expirationDate'].value,
      ipAddress: this.form.controls['ipAddress'].value,
      entityId: this.entity.entityId,
      logo: this.entity.logo
    }
    this.onSave.emit(itemUpdated);
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
