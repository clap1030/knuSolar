import { Component, OnInit, Input ,  Output, EventEmitter} from '@angular/core';  
import * as Highcharts from 'highcharts';
//import * as Highcharts from 'highcharts/highmaps';
import krMap from "@highcharts/map-collection/countries/kr/kr-all.geo.json";
import worldMap from '@highcharts/map-collection/custom/world.geo.json';
//import worldMap from './mapdata';
import HC_map from 'highcharts/modules/map';
import proj4 from 'proj4';
import { spots, Spots } from '../asos/sopt';
import { spotMap, SpotsMap } from '../asos/soptMap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  
  @Output() 
  selectedSpotNotice = new EventEmitter();
  
  mapData: any[] = [];
  mapCurData: any[] = [];
  updateFlag = false;
  selectedMapSpot: any;
  /*rowDataddd = [
      {"id":"강원도","no":105,"spot":"강릉","lat":37.75147,"lon":128.89099,"z":27},
    {"id":"강원도","no":100,"spot":"대관령","lat":37.67713,"lon":128.71834,"z":772},
    {"id":"강원도","no":106,"spot":"동해","lat":37.50709,"lon":129.12433,"z":40},
    {"id":"강원도","no":104,"spot":"북강릉","lat":37.80456,"lon":128.85535,"z":75},
    {"id":"강원도","no":93,"spot":"북춘천","lat":37.94738,"lon":127.75443,"z":96},
    {"id":"강원도","no":90,"spot":"속초","lat":38.25085,"lon":128.56473,"z":18},
    {"id":"강원도","no":121,"spot":"영월","lat":37.18126,"lon":128.45743,"z":241},
    {"id":"강원도","no":114,"spot":"원주","lat":37.33749,"lon":127.94658,"z":149},
    {"id":"강원도","no":211,"spot":"인제","lat":38.05986,"lon":128.16714,"z":202},
    {"id":"강원도","no":217,"spot":"정선군","lat":37.38148,"lon":128.64589,"z":308},
    {"id":"강원도","no":95,"spot":"철원","lat":38.14787,"lon":127.3042,"z":155},
    {"id":"강원도","no":101,"spot":"춘천","lat":37.90262,"lon":127.7357,"z":76}
    ];
*/
  getData(value: any) {
    let rowData =  spotMap[0];
    for(let i = 0; i < rowData.length; i++){
      let map: any = rowData[i];
      let items: any[] = map.items;
      let item = items[0];
      
      let data : number = Number(item[value]);
      if( item[value] != ""){
        if(i == 0){
          this.mapCurData.push({"spot":map.spot,"id":Number(map.id),"lat":Number(map.lat),"lon":Number(map.lon),"z":data});
        }else{
          this.mapData.push({"spot":map.spot,"id":Number(map.id),"lat":Number(map.lat),"lon":Number(map.lon),"z":data});
        }
      }
    }
  }

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'mapChart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    chart: {
      map: krMap,
      proj4: proj4,
    },
    tooltip: {
      pointFormat: '{point.id}, {point.spot}<br>' +
          'Lat: {point.lat}<br>' +
          'Lon: {point.lon}<br>' 
    },
    series: [
      {
        mapData: krMap,
        borderColor: '#606060',
        nullColor: 'rgba(200, 200, 200, 0.2)',
        showInLegend: false
      } as Highcharts.SeriesMapOptions,
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: '발전소',
        color: '#f30909',
        data: [{
            name: "춘천","lat":37.90262,"lon":127.7357
        }]
      },
      {
        // Specify points using lat/lon
        type: 'mapbubble',
        mapData: krMap,
        dataLabels: {
          enabled: true,
          format: '{point.z}'
        },
        //joinBy: ['iso-a3', 'code3'],
        data: this.mapData,
        maxSize: '12%',
        events: {
          click: function(e){
            console.log("click", e.point.options.id);  
          }
        }
      },
      {
        // Specify points using lat/lon
        type: 'mapbubble',
        mapData: krMap,
        dataLabels: {
          enabled: true,
          format: '{point.z}'
        },
        //joinBy: ['iso-a3', 'code3'],
        data: this.mapCurData,
        maxSize: '5%',
      }
    ]
  };

  selectType(e: any){
    this.mapData = [];
    this.mapCurData = [];

    this.getData(e.target.value);
    this.chartOptions.series = [
      {
        mapData: krMap,
        borderColor: '#606060',
        nullColor: 'rgba(200, 200, 200, 0.2)',
        showInLegend: false
      } as Highcharts.SeriesMapOptions,
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: '발전소',
        color: '#f30909',
        data: [{
            name: "춘천","lat":37.90262,"lon":127.7357
        }]
      },
      {
        // Specify points using lat/lon
        type: 'mapbubble',
        mapData: krMap,
        dataLabels: {
          enabled: true,
          format: '{point.z}'
        },
        //joinBy: ['iso-a3', 'code3'],
        data: this.mapData,
        maxSize: '12%',
        events: {
          click: function(e){
            console.log(e);
            //this.selectedSpot = e.target.value;
          }
        }
      },
      {
        // Specify points using lat/lon
        type: 'mapbubble',
        mapData: krMap,
        dataLabels: {
          enabled: true,
          format: '{point.z}'
        },
        //joinBy: ['iso-a3', 'code3'],
        data: this.mapCurData,
      }
    ];

    this.updateFlag = true;
  }


  constructor() { }

  ngOnInit(): void {
    this.getData("ta");
    HC_map(Highcharts);
  }


}
