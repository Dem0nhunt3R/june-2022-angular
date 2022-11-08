import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;

  @Output()
  liftCarForUpdate = new EventEmitter<ICar>();

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
  }

  update(id: number) {

  }
}
