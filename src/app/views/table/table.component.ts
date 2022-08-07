import { Component, OnInit , AfterViewInit, ViewChild} from '@angular/core';
import { ApiService }from '../../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';

interface Carbons {
  id: string,
  car_id: string,
  eletricity: number,
  gas: string,
  km: number,
  total_tco2_monthly: string,
  total_tco2_yearly: string,
  trees: number,
  creation_date: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Id','Tipo do Carro', 'Km/Mês', 'Eletricidade/Mês', 'Gás/Mês', 'Tco2/Mês', 'Tco2/Ano', 'Árvores', 'Data'];

  dataSource = new MatTableDataSource<Carbons> ();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private apiService:ApiService) { }

  private dataArray: any;

  ngOnInit(){
    this.refreshCarbons()
  }

  refreshCarbons() {
    this.apiService.getCarbons()
      .subscribe(data => {
        this.dataArray=data;
        this.dataSource = new MatTableDataSource<Carbons>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
}
