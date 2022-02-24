import { Component, OnInit, Input } from '@angular/core';
import { Spots } from '../asos/sopt';

@Component({
  selector: 'app-asos-info',
  templateUrl: './asos-info.component.html',
  styleUrls: ['./asos-info.component.css']
})
export class AsosInfoComponent implements OnInit {

  
  @Input() spot!: Spots;
  @Input() selectedTime!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
