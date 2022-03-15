import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any[] = [];
  listSelected: any[] = [];
  totalEntities: number = 10;
  selected: any = null;

  constructor(private readonly dataService: DataServiceService) { }

  ngOnInit(): void {
    this.getAllEntities();
  }

  getAllEntities(): void {
    this.list = []
    for (let index = 1; index <= this.totalEntities; index++) {
      this.dataService.getEntity(index).subscribe(response => {
        if (response.data) {
          this.list.push(response.data)
        }
      })
    }
  }

  onSelect(listSelected: any[]): void {
    this.listSelected = listSelected;
  }

  onEdit(id: number): void {
    this.selected = this.list.find(item => item.entityId === id);
  }

  onDelete(id: number): void {
    let index = this.list.findIndex((i: any) => i.entityId === id);
    if (index !== -1)
      this.list.splice(index, 1);

    index = this.listSelected.findIndex((i: any) => i.entityId === id);
      if (index !== -1)
        this.listSelected.splice(index, 1);
  }

  onSave(item: any): void {
    let index = this.list.findIndex(x => x.entityId === item.entityId);
    if (index !== -1)
      this.list[index] = item;

    index = this.listSelected.findIndex(x => x.entityId === item.entityId);
    if (index !== -1)
      this.listSelected[index] = item;
    this.selected = null;
  }

  onCancel(): void {
    this.selected = null;
  }
}
