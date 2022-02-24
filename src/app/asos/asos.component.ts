import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.component';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Spots, spots } from './sopt';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';
import { Result, result } from './result';
import { json } from 'd3';
import exportFromJSON from 'export-from-json';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-asos',
  templateUrl: './asos.component.html',
  styleUrls: ['./asos.component.css']
})
export class AsosComponent implements OnInit {

  spots = spots;
  selectedData: Spots | any;
  selectedMapSpot: any;
  selectedDate: Date | any;
  selectedTime: any;
  selectedSpot: any;
  selectedValue: any;
  times = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];

/*
  todos$: Observable<
    {
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
    }[]
  >
  */

  async getAsosData() {
    await this.test();
  }


  changeSpot() {
    console.log("changeSpot");
  }

  resSpots: Spots[] = [];

  constructor(private api: ApiService, private datePipe: DatePipe) {

    
  }
  /*
  public async ngOnInit(): Promise<any> {
    const obj: any = await this.test(); 
    console.log(this.resSpots);
    //exportFromJSON({data:this.resultArr});
  } */
  
  async ngOnInit():Promise<any>  {
   //await this.test();
   //exportFromJSON({data:this.resSpots});
  }

  private async test():Promise<any> { 

    let id = this.selectedSpot.id;
    
    for(let i =0; i  <spots.length; i++){
      if(spots[i].id == id ){
        let spotJson: any = spots[i];
        const objs: any = await this.awaitTest(spots[i].id);   

        let obj = objs.item;
        let objArr = [
          {"text":"습도(%)","t00":obj[0].hm,"t01":obj[1].hm,"t02":obj[2].hm,"t03":obj[3].hm,"t04":obj[4].hm,"t05":obj[5].hm,"t06":obj[6].hm,"t07":obj[7].hm,"t08":obj[8].hm,"t09":obj[9].hm,"t10":obj[10].hm,"t11":obj[11].hm,"t12":obj[12].hm,"t13":obj[13].hm,"t14":obj[14].hm,"t15":obj[15].hm,"t16":obj[16].hm},
          {"text":"일조(hr)","t00":obj[0].ss,"t01":obj[1].ss,"t02":obj[2].ss,"t03":obj[3].ss,"t04":obj[4].ss,"t05":obj[5].ss,"t06":obj[6].ss,"t07":obj[7].ss,"t08":obj[8].ss,"t09":obj[9].ss,"t10":obj[10].ss,"t11":obj[11].ss,"t12":obj[12].ss,"t13":obj[13].ss,"t14":obj[14].ss,"t15":obj[15].ss,"t16":obj[16].ss},
          {"text":"일사(MJ/m2)","t00":obj[0].icsr,"t01":obj[1].icsr,"t02":obj[2].icsr,"t03":obj[3].icsr,"t04":obj[4].icsr,"t05":obj[5].icsr,"t06":obj[6].icsr,"t07":obj[7].icsr,"t08":obj[8].icsr,"t09":obj[9].icsr,"t10":obj[10].icsr,"t11":obj[11].icsr,"t12":obj[12].icsr,"t13":obj[13].icsr,"t14":obj[14].icsr,"t15":obj[15].icsr,"t16":obj[16].icsr},
        ];        
        //spotJson.gridData = objArr;
        spotJson.items = objs.item;
        this.resSpots.push(spotJson);
        console.log("this.resSpots>>",this.resSpots);
      }  
    }
  } 
  
  private awaitTest(id: String): Promise<any> {
    let toDate = this.selectedDate ;
    toDate = this.datePipe.transform(toDate,'yyyyMMdd');
    console.log( this.datePipe.transform(toDate,'yyyyMMdd') );
     return new Promise((resolve, reject) => { 
       this.api.get('/getWthrDataList?serviceKey=4%2F3TNH%2BnldWkYwHQudKUl9ne6v8O%2BtQU2s0s3EnsTmLWKX2yXI9r84nZLKmXx2eE8yyZ67TFxCAENgiB9m%2Bw2w%3D%3D&numOfRows=100&pageNo=1&dataType=JSON&dataCd=ASOS&dateCd=HR&startDt='+toDate+'&startHh=00&endDt='+toDate+'&endHh=23&stnIds='+id)
        .subscribe((data: any) => { 
          resolve(data.response.body.items);
        });
    }); 
  }

}
