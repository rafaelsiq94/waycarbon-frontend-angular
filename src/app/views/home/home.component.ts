import { Component, OnInit } from '@angular/core';
import { ApiService }from '../../api.service';
import {NgForm} from '@angular/forms';

interface Car {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  cars: Car[] = [
    { value: 1, viewValue: 'Carro a Gasolina (até 1.4)' },
    { value: 2, viewValue: 'Carro a Gasolina (1.5 até 2.0)' },
  ];

  result = {
    'arvores': 0,
    'total_tco2_ano': 0,
    'total_tco2_mes': 0
  }

  constructor(private apiService:ApiService) {}

  onSubmit(carbonForm: NgForm) {
    if (carbonForm.value.car_id === "" || carbonForm.value.car_id === null) {
      carbonForm.value.car_id = 1
    }
    if (carbonForm.value.km == "" || carbonForm.value.km == null ) {
      carbonForm.value.km = 0
    }
    if (carbonForm.value.eletricity == "" || carbonForm.value.eletricity == null) {
      carbonForm.value.eletricity = 0
    }
    if (carbonForm.value.gas == "" || carbonForm.value.gas == null) {
      carbonForm.value.gas = 0
    }
    this.apiService.addCarbon(carbonForm.value)
      .subscribe(data => {
        console.log(data)
        this.result = data
      })
  }

  ngOnInit(): void {}
}
