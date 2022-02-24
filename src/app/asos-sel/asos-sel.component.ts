import { Component, OnInit, Input } from '@angular/core';
import { Spots } from '../asos/sopt';
@Component({
  selector: 'app-asos-sel',
  templateUrl: './asos-sel.component.html',
  styleUrls: ['./asos-sel.component.css']
})
export class AsosSelComponent implements OnInit {
  selectedData: Spots | any;

  @Input() result!: any;
  @Input() selectedTime!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
