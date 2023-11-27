import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { FormMecanicosComponent } from 'src/app/Forms/form-mecanicos/form-mecanicos.component';
import { RestService } from 'src/app/Services/rest.service';


@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent {
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  constructor(public api: RestService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.get();
  }
  
  public get(){
    this.api.get('Mecanicos').then((res)=>{
    for (let index = 0; index < res.length; index++){
      this.loadTable([res[index]])
    }
  
    this.dataSource.data=res
    
    console.log(res);
  
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }
  
  loadTable(data:any[]){
    this.displayedColumns=[];
    if (data.length > 0) {
      for(let column in data[0]){
        this.displayedColumns.push(column);
      }
      this.displayedColumns.push("Acciones")
    }
  }

  editarRegistro(){
    alert("Editando el registro");
  }

  deleteRegistro(){
    alert("Eliminando el registro");
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(FormMecanicosComponent, {
      width: '50%'
    }
    );
  }
}
