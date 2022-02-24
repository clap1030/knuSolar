import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';
import { KakaoMapsModule } from 'kakao-maps-sdk';
import { HttpClientModule } from '@angular/common/http';
import { AsosComponent } from './asos/asos.component';
import { ComponentOperateComponent } from './component-operate/component-operate.component';
import { CustomUrlSerializer } from './custom-url-serializer';
import { UrlSerializer } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AngmapComponent } from './angmap/angmap.component';
import highmaps from 'highcharts/modules/map.src';
import more from 'highcharts/highcharts-more.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { AsosInfoComponent } from './asos-info/asos-info.component';
import { AgGridModule } from 'ag-grid-angular';
import { AsosGridComponent } from './asos-grid/asos-grid.component';
import { AsosSelComponent } from './asos-sel/asos-sel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [more, highmaps];
}

export const MY_FORMATS = { display:{ dateInput: 'YYYY/MM/DD', monthYearLabel : 'MMM YYYY', } }

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    ComponentOperateComponent,
    AsosComponent,
    MapComponent,
    AngmapComponent,
    AsosInfoComponent,
    AsosGridComponent,
    AsosSelComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    AppRoutingModule,
    KakaoMapsModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule,
    FormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,MatListModule,MatIconModule,
  ],
  providers: [
    /*{
      provide: UrlSerializer,
      useClass: CustomUrlSerializer,    // <-- Here!
    }*/
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules },
    {provide:MAT_DATE_LOCALE, useValue:'ko-KR'}, {provide:MAT_DATE_FORMATS, useValue:MY_FORMATS},
    DatePipe
    /*{provide: MAT_DATE_LOCALE, useValue: 'ko-KR'},*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
