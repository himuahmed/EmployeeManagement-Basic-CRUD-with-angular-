import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeNavSharedService {
  private _checkedEmployeeIds : number[] = [];


constructor() { }

  checkedIds(id: number){
    this._checkedEmployeeIds.push(id);
    console.log("Id pushed");
  }

  uncheckId(id:number){
    var index = this._checkedEmployeeIds.indexOf(id);
    if (index > -1) {
      this._checkedEmployeeIds.splice(index, 1);
    }
  }

  uncheckAll(){
    this._checkedEmployeeIds.length=0;
  }

  returnIds(): number[] {
    return this._checkedEmployeeIds;
  }
}
