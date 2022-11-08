import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  carForUpdate: ICar;

  @Output()
  liftCar = new EventEmitter<ICar>();

  constructor(private carService: CarService) {
    this._initForm();
    if (this.carForUpdate) {
      this.form.setValue({
        model: this.carForUpdate.model,
        price: this.carForUpdate.price,
        year: this.carForUpdate.year,
      })
    }
  }

  ngOnInit(): void {
  }

  _initForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [
        Validators.min(1),
        Validators.max(1000000),
        Validators.required
      ]),
      year: new FormControl(null, [
        Validators.min(1990),
        Validators.max(new Date().getFullYear()),
        Validators.required
      ])
    })
  }

  save() {
    this.carService.create(this.form.value).subscribe(value => {
      this.liftCar.emit(value);
      this.form.reset();
    })
  }
}
