import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { TekkenInterface } from '../../types/tekken';
import { TekkenService } from '../../services/tekken.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  listLutadores: TekkenInterface[] = [];

  constructor(private tekkenService: TekkenService) {}

  ngOnInit(): void {
    this.tekkenService.getLutadores().subscribe((res) => {
      console.log('RES ', res);
    });
  }
}
