import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { People } from 'src/app/data/people';
import { Person } from 'src/app/models/people.interface';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})



export class EmpleadosComponent implements AfterViewInit {


  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'marca', 'precio'];
  dataSource: MatTableDataSource<Person>;
  people = People;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor() {
    this.dataSource = new MatTableDataSource(People);
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {}
}