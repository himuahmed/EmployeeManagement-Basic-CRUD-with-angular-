import { Employee } from "./employee";

export interface Response {
    TotalCount: number;
    TotalPage: number;
    CurrentPage:number;
    PageSize:number;
    empl: Employee[];
}
