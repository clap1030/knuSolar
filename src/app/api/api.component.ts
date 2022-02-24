import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const SERVICE_KEY = '4%2F3TNH%2BnldWkYwHQudKUl9ne6v8O%2BtQU2s0s3EnsTmLWKX2yXI9r84nZLKmXx2eE8yyZ67TFxCAENgiB9m%2Bw2w%3D%3D';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/x-www-form-urlencoded ; charset=UTF-8'
  }),
  method: 'GET', // GET, POST, PUT, DELETE
  mode: 'no-cors' // the most important option
  /*params: {'serviceKey':SERVICE_KEY, //'dpR1%2F4rkPgHiqdlv3gFuQbX54%2BSpL%2B8IfrsQN4x6NLwEeaRaXXjlptEvlBxIOGDQPZCWJpaeN1%2F7gWNZn6FShw%3D%3D',//'dpR1/4rkPgHiqdlv3gFuQbX54+SpL+8IfrsQN4x6NLwEeaRaXXjlptEvlBxIOGDQPZCWJpaeN1/7gWNZn6FShw==', //'dpR1%2F4rkPgHiqdlv3gFuQbX54%2BSpL%2B8IfrsQN4x6NLwEeaRaXXjlptEvlBxIOGDQPZCWJpaeN1%2F7gWNZn6FShw%3D%3D',
  'numOfRows':10,
  'pageNo':1,
  'dataType':'JSON',
  'dataCd':'ASOS',
  'dateCd':'HR',
  'startDt':'20220101',
  'startHh':'01',
  'endDt':'20220102',
  'endHh':'01',
  'stnIds':'108'}*/
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public BASE_URL = '/api/1360000/AsosHourlyInfoService';


  constructor(private http: HttpClient) {}

  get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}${endPoint}`, httpOptions)
  }

  post<T>(endPoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.BASE_URL}${endPoint}`, body)
  }

  put<T>(endPoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.BASE_URL}${endPoint}`, body)
  }

  delete<T>(endPoint: string): Observable<T> {
    return this.http.delete<T>(`${this.BASE_URL}${endPoint}`)
  }
}