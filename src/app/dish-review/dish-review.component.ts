import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dish-review',
  templateUrl: './dish-review.component.html',
  styleUrls: ['./dish-review.component.css'],
  inputs: []
})
export class DishReviewComponent implements OnInit {

  @Output() added: EventEmitter<any> = new EventEmitter()
  form: FormGroup | undefined;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      nickname : ['', Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      data: [null],
    });
  }

  isNotCompleted(){
    return this.form?.get('nickname')?.invalid || this.form?.get('description')?.invalid || this.form?.get('name')?.invalid;
  }

  errors: any = []
  onSubmit(form: FormGroup) {
    this.errors = []
    if(!form.valid){
      if(form?.get('nickname')?.errors){
        this.errors.push("Enter valid nickname")
      }
      if(form?.get('name')?.errors){
        this.errors.push("Enter valid name")
      }
      if(form?.get('description')?.errors){
        this.errors.push("Enter valid description")
      }
      return;
    }
    this.added.emit(form.value)

    this.form?.reset()
  }

}
