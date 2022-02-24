import { Component, OnInit, Input } from '@angular/core';
import { spots, Spots } from '../asos/sopt';
import { Grid , ColDef } from 'ag-grid-community';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-asos-grid',
  templateUrl: './asos-grid.component.html',
  styleUrls: ['./asos-grid.component.css']
})
export class AsosGridComponent implements OnInit {

/*
  tm : string //시간
      stnId: string //지점번호
      stnNm: string //지점병
      ta: string  //기온(C)
      rn: string  //강수량(mm)
      ws: string  //풍속(m/s)
      wd: string  //풍향(16방위)
      hm: string  //습도(%)
      pa: string //현지기압(hPa)
      ss: string  //일조(hr)
      icsr: string  //일사(MJ/m2)
      dsnw: string  //적설(cm)
      dc10Tca: string //전운량(10분위)
*/
  columnDefss: ColDef[] = [
    { headerName:'시간', field: 'tm',width: 150 },
    { headerName:'기온(C)', field: 'ta' ,width: 150},
    { headerName:'강수량(mm)', field: 'rn',width: 150 },
    { headerName:'풍속(m/s)', field: 'ws' ,width: 150},
    { headerName:'풍향(16방위)', field: 'wd' ,width: 150},
    { headerName:'습도(%)', field: 'hm' ,width: 150},
    { headerName:'현지기압(hPa)', field: 'pa',width: 150 },
    { headerName:'일조(hr)', field: 'ss' ,width: 150},
    { headerName:'일사(MJ/m2)', field: 'icsr' ,width: 150},
    { headerName:'적설(cm)', field: 'dsnw',width: 150 },
    { headerName:'전운량(10분위)', field: 'dc10Tca',width: 150 },
  ];

  columnDefs: ColDef[] = [
    { headerName:'항목', field: 'text',width: 150 },
    { headerName:'00시', field: 't00',width: 150 },
    { headerName:'01시', field: 't01',width: 150 },
    { headerName:'02시', field: 't02',width: 150 },
    { headerName:'03시', field: 't03',width: 150 },
    { headerName:'04시', field: 't04',width: 150 },
    { headerName:'05시', field: 't05',width: 150 },
    { headerName:'06시', field: 't06',width: 150 },
    { headerName:'07시', field: 't07',width: 150 },
    { headerName:'08시', field: 't08',width: 150 },
    { headerName:'09시', field: 't09',width: 150 },
    { headerName:'10시', field: 't10',width: 150 },
    { headerName:'11시', field: 't11',width: 150 },
    { headerName:'12시', field: 't12',width: 150 },
    { headerName:'13시', field: 't13',width: 150 },
    { headerName:'14시', field: 't14',width: 150 },
    { headerName:'15시', field: 't15',width: 150 },
    { headerName:'16시', field: 't16',width: 150 },
  ];

  rowData: any[] = [];
  dataSource: any[] = [];

  degree: any[] = [];

  PeriodicElement: any[] = []; 
  displayedColumns: string[] = [];

  highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      type: "spline"
    },
    title: {
      text: ''
    },
    xAxis:{
        categories:["00", "01", "02", "03", "04", "05",
          "06", "07", "08", "09", "10", "11","12","13","14","15","16","17","18","19","20","21","22","23"]
    },
    tooltip: {
        valueSuffix:" °C"
    },
    series: [{
        name: '기온°C',
        data: this.degree
    }]
  };

  @Input() spot!: Spots;
  constructor() { }

  setDegree() {
    for(let i in this.spot.items){
      this.degree.push(Number(this.spot.items[i].ta));
    }
    this.chartOptions = {
      series: [{
        name: '기온°C',
        data: this.degree
    }]
    }
  }

  ngOnInit(): void {
    



    /*this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource =[
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    this.displayedColumns = ['text', 't00', 't01', 't02','t03','t04','t05','t06','t07','t08','t09','t10','t11','t12','t13','t14','t15','t16','t17','t18','t19','t20','t21','t22','t23'];
    let obj = this.spot.items;
    this.dataSource = [
      {"text":"습도(%)","t00":obj[0].hm,"t01":obj[1].hm,"t02":obj[2].hm,"t03":obj[3].hm,"t04":obj[4].hm,"t05":obj[5].hm,"t06":obj[6].hm,"t07":obj[7].hm,"t08":obj[8].hm,"t09":obj[9].hm,"t10":obj[10].hm,"t11":obj[11].hm,"t12":obj[12].hm,"t13":obj[13].hm,"t14":obj[14].hm,"t15":obj[15].hm,"t16":obj[16].hm,"t17":obj[17].hm,"t18":obj[18].hm,"t19":obj[19].hm,"t20":obj[20].hm,"t21":obj[21].hm,"t22":obj[22].hm,"t23":obj[23].hm},
      {"text":"일조(hr)","t00":obj[0].ss,"t01":obj[1].ss,"t02":obj[2].ss,"t03":obj[3].ss,"t04":obj[4].ss,"t05":obj[5].ss,"t06":obj[6].ss,"t07":obj[7].ss,"t08":obj[8].ss,"t09":obj[9].ss,"t10":obj[10].ss,"t11":obj[11].ss,"t12":obj[12].ss,"t13":obj[13].ss,"t14":obj[14].ss,"t15":obj[15].ss,"t16":obj[16].ss,"t17":obj[17].ss,"t18":obj[18].ss,"t19":obj[19].ss,"t20":obj[20].ss,"t21":obj[21].ss,"t22":obj[22].ss,"t23":obj[23].ss},
      {"text":"일사(MJ/m2)","t00":obj[0].icsr,"t01":obj[1].icsr,"t02":obj[2].icsr,"t03":obj[3].icsr,"t04":obj[4].icsr,"t05":obj[5].icsr,"t06":obj[6].icsr,"t07":obj[7].icsr,"t08":obj[8].icsr,"t09":obj[9].icsr,"t10":obj[10].icsr,"t11":obj[11].icsr,"t12":obj[12].icsr,"t13":obj[13].icsr,"t14":obj[14].icsr,"t15":obj[15].icsr,"t16":obj[16].icsr,"t17":obj[17].icsr,"t18":obj[18].icsr,"t19":obj[19].icsr,"t20":obj[20].icsr,"t21":obj[21].icsr,"t22":obj[22].icsr,"t23":obj[23].icsr},
    ];
    console.log(">>>>>>>>>>",this.dataSource);
    */
  }

}
