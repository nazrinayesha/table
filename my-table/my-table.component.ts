import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

interface Person {
  name: string;
  age: number;
  occupation: string;
  location: string;
}


const PEOPLE_DATA: Person[] = [
  { name: 'John Doe', age: 30, occupation: 'Engineer', location: 'New York' },
  { name: 'Jane Smith', age: 25, occupation: 'Designer', location: 'San Francisco' },
  { name: 'Sam Green', age: 35, occupation: 'Manager', location: 'Chicago' },
  { name: 'Sarah Davis', age: 28, occupation: 'Nurse', location: 'Miami' },
  { name: 'David Wilson', age: 45, occupation: 'Lawyer', location: 'Seattle' },
  { name: 'Laura Martinez', age: 32, occupation: 'Architect', location: 'Austin' },
  { name: 'James White', age: 38, occupation: 'Software Developer', location: 'Denver' },
  { name: 'Megan Garcia', age: 27, occupation: 'Chef', location: 'Portland' },
  { name: 'Christopher Lee', age: 41, occupation: 'Pilot', location: 'San Diego' },
  { name: 'Patricia Taylor', age: 29, occupation: 'Journalist', location: 'Boston' },
];

@Component({
  selector: 'app-my-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {
  displayedColumns: string[] = ['name', 'age', 'occupation', 'location'];
  dataSource = PEOPLE_DATA;
}

