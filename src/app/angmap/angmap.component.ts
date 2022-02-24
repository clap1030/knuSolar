import { Component, OnInit } from '@angular/core';
import { MapChart } from 'angular-highcharts';
import krMap from "@highcharts/map-collection/countries/kr/kr-all.geo.json";

@Component({
  selector: 'app-angmap',
  templateUrl: './angmap.component.html',
  styleUrls: ['./angmap.component.css']
})
export class AngmapComponent implements OnInit {

  constructor() { }

  mapChart: MapChart | undefined;

  ngOnInit() {
    let chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];
    this.mapChart = new MapChart({
      chart: {
                borderWidth: 1,
                map: krMap
            },

            title: {
                text: 'World population 2013 by country'
            },

            subtitle: {
                text: 'Demo of Highcharts map with bubbles'
            },

            legend: {
                enabled: false
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            series: [{
                type: 'mapbubble',
                name: 'Population 2016',
                joinBy: ['iso-a3', 'code3'],
                data: chartData,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
                }
            }]
    });
    console.log(this.mapChart);
  }

}
