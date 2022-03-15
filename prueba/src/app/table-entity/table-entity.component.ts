import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-entity',
  templateUrl: './table-entity.component.html',
  styleUrls: ['./table-entity.component.css']
})
export class TableEntityComponent {

  @Input() list: any[] = [];
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  orderName: string = "0";
  orderDate: string = "0";

  constructor() { }

  edit(id: number): void {
    this.onEdit.emit(id);
  }

  delete(id: number): void {
    this.onDelete.emit(id);
  }

  orderByName(): void {
    if (this.orderName !== "0") {
      if (this.orderName === "1") {
        this.list.sort(function (a, b) {
          var n = a.name
            .toLocaleLowerCase()
            .localeCompare(b.name.toLocaleLowerCase());
          return n === 0 && a.name !== b.name
            ? b.name.localeCompare(a.name)
            : n;
        })
      } else {
        this.list.sort(function (a, b) {
          var n = b.name
            .toLocaleLowerCase()
            .localeCompare(a.name.toLocaleLowerCase());
          return n === 0 && b.name !== a.name
            ? a.name.localeCompare(b.name)
            : n;
        })
      }
    }
  }

  orderByDate(): void {
    if (this.orderDate !== "0") {
      if (this.orderDate === "1") {
        this.list.sort(function (a, b) {
          var n = a.expirationDate
            .toLocaleLowerCase()
            .localeCompare(b.expirationDate.toLocaleLowerCase());
          return n === 0 && a.expirationDate !== b.expirationDate
            ? b.expirationDate.localeCompare(a.expirationDate)
            : n;
        })
      } else {
        this.list.sort(function (a, b) {
          var n = b.expirationDate
            .toLocaleLowerCase()
            .localeCompare(a.expirationDate.toLocaleLowerCase());
          return n === 0 && b.expirationDate !== a.expirationDate
            ? a.expirationDate.localeCompare(b.expirationDate)
            : n;
        })
      }
    }
  }
}
