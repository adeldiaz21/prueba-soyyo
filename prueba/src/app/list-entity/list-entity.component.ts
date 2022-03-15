import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-entity',
  templateUrl: './list-entity.component.html',
  styleUrls: ['./list-entity.component.css']
})
export class ListEntityComponent {
  @Input() list: any = [];
  listSelected: any[] = [];

  @Output() onSelect = new EventEmitter<any[]>();

  onSelectItem(item: any): void {
    let index = null;
    index = this.listSelected.findIndex((value: any) => value.entityId === item.entityId)

    if (index === -1)
      this.listSelected.push(item)
    else {
      this.listSelected.splice(index, 1)
    }

    this.onSelect.emit(this.listSelected);
  }

  verifyChecked(item: any): boolean {
    let index = null;
    index = this.listSelected.findIndex((value: any) => value.entityId === item.entityId)

    if (index !== -1) {
      return true;
    } else return false;
  }
}
