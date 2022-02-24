import { Component, OnInit } from '@angular/core';
import {
  KakaoMapsProvider,
  LatLng,
  MapTypeId,
  MapTypeControl,
  ControlPosition,
  OverlayMapTypeId,
  KakaoEvents,
  Marker,
  OverlayType,
  DrawingManager,
  Toolbox,
  MarkerClusterer,
  KakaoDrawingEvents,
} from 'kakao-maps-sdk';
import { ApiService } from '../api/api.component';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})

export class OperatorComponent implements OnInit{  
  
  position:any;
  mapConfig = { width: '500px', height: '500px' };
  flagg = true;
  marker:any;
  KaKaoJavascriptAPIKey = '020ac81dd47a5a4a80d40c43e9174f58';
  constructor(public _kakaoMapsProvider: KakaoMapsProvider) {
  
    _kakaoMapsProvider
      .loadKakaoMapSDK(this.KaKaoJavascriptAPIKey)
      .then(
        () => {
          let mapConfig = {
            center: new LatLng(36.2683, 127.6358),
            mapTypeId: MapTypeId.ROADMAP,
            level:13
          };

          _kakaoMapsProvider
            .init('kakaomaps-div', mapConfig)
            .then(() => {
              _kakaoMapsProvider.getMapInstance().addControl(new MapTypeControl(), ControlPosition.BOTTOM);
              _kakaoMapsProvider.getMapInstance().addOverlayMapTypeId(OverlayMapTypeId.BICYCLE_HYBRID);

              let events: KakaoEvents[] = [
                'center_changed',
                'zoom_start',
                'zoom_changed',
                'bounds_changed',
                'click',
                'dblclick',
                'rightclick',
                'mousemove',
                'dragstart',
                'drag',
                'dragend',
                'idle',
                'tilesloaded',
                'maptypeid_changed',
              ];
              _kakaoMapsProvider.addListeners(_kakaoMapsProvider.getMapInstance(), events, (res:any) => {
                 if(res.event == 'click'){console.log(res);
                 }
                               });


              //this.marker = new Marker({ position: new LatLng(33.450701, 126.570667) });

              let _markers = {
                "positions": [
                  {
                    "lat": 37.27943075229118,
                    "lng": 127.01763998406159
                  },
                  {
                    "lat": 37.55915668706214,
                    "lng": 126.92536526611102
                  },
                  {
                    "lat": 35.13854258261161,
                    "lng": 129.1014781294671
                  },
                  {
                    "lat": 37.55518388656961,
                    "lng": 126.92926237742505
                  },
                  {
                    "lat": 35.20618517638034,
                    "lng": 129.07944301057026
                  },
                  {
                    "lat": 37.561110808242056,
                    "lng": 126.9831268386891
                  },
                  {
                    "lat": 37.86187129655063,
                    "lng": 127.7410250820423
                  },
                  {
                    "lat": 37.47160156778542,
                    "lng": 126.62818064142286
                  },
                  {
                    "lat": 35.10233410927457,
                    "lng": 129.02611815856181
                  },
                  {
                    "lat": 35.10215562270429,
                    "lng": 129.02579793018205
                  },
                  {
                    "lat": 35.475423012251106,
                    "lng": 128.76666923366042
                  },
                  {
                    "lat": 35.93282824693927,
                    "lng": 126.95307628834287
                  },
                  {
                    "lat": 36.33884892276137,
                    "lng": 127.393666019664
                  },
                  {
                    "lat": 37.520412849636,
                    "lng": 126.9742764161581
                  },
                  {
                    "lat": 35.155139675209675,
                    "lng": 129.06154773758374
                  },
                  {
                    "lat": 35.816041994696576,
                    "lng": 127.11046706211324
                  },
                  {
                    "lat": 38.20441110638504,
                    "lng": 128.59038671285234
                  },
                  {
                    "lat": 37.586112739308916,
                    "lng": 127.02949148517999
                  },
                  {
                    "lat": 37.50380641844987,
                    "lng": 127.02130716617751
                  },
                  {
                    "lat": 37.55155704387368,
                    "lng": 126.92161115892036
                  },
                  {
                    "lat": 37.55413060051369,
                    "lng": 126.92207472929526
                  },
                  {
                    "lat": 36.362321615174835,
                    "lng": 127.35000483225389
                  },
                  {
                    "lat": 37.55227862908755,
                    "lng": 126.92280546294998
                  },
                  {
                    "lat": 37.490413948014606,
                    "lng": 127.02079678472444
                  },
                  {
                    "lat": 35.172358507549596,
                    "lng": 126.90545394866643
                  },
                  {
                    "lat": 35.15474103200252,
                    "lng": 129.11827889154455
                  },
                  {
                    "lat": 37.516081250973485,
                    "lng": 127.02369057166361
                  },
                  {
                    "lat": 36.80711722863776,
                    "lng": 127.14020346037576
                  },
                  {
                    "lat": 37.28957415752673,
                    "lng": 127.00103752005424
                  },
                  {
                    "lat": 35.83953896766896,
                    "lng": 128.7566880321854
                  },
                  {
                    "lat": 37.51027412948879,
                    "lng": 127.08227718124704
                  },
                  {
                    "lat": 37.493581783270294,
                    "lng": 126.72541955660554
                  },
                  {
                    "lat": 35.135291862962795,
                    "lng": 129.10060911448775
                  },
                  {
                    "lat": 35.174574933144065,
                    "lng": 126.91389980787773
                  },
                  {
                    "lat": 37.795887691878654,
                    "lng": 127.10660416587146
                  },
                  {
                    "lat": 37.59288687521181,
                    "lng": 126.96560524627377
                  },
                  {
                    "lat": 37.45076411130452,
                    "lng": 127.14593003749792
                  },
                  {
                    "lat": 35.86008337557079,
                    "lng": 127.1263912488061
                  },
                  {
                    "lat": 35.23773491330953,
                    "lng": 129.08371037429578
                  },
                  {
                    "lat": 37.524297321304886,
                    "lng": 127.05018281937049
                  },
                  {
                    "lat": 36.33386658021849,
                    "lng": 127.4461721466889
                  },
                  {
                    "lat": 35.72963747546802,
                    "lng": 128.27079056365005
                  },
                  {
                    "lat": 36.02726828142973,
                    "lng": 129.37257233594056
                  },
                  {
                    "lat": 35.0708030360945,
                    "lng": 129.0593185494088
                  },
                  {
                    "lat": 35.86835862950247,
                    "lng": 128.59755089175871
                  },
                  {
                    "lat": 33.51133264696746,
                    "lng": 126.51852347452322
                  },
                  {
                    "lat": 37.61284289586752,
                    "lng": 127.03120547238589
                  },
                  {
                    "lat": 35.851696038722466,
                    "lng": 128.59092937125666
                  },
                  {
                    "lat": 37.59084695083232,
                    "lng": 127.01872773588882
                  },
                  {
                    "lat": 35.52114874288784,
                    "lng": 129.33573629945764
                  },
                  {
                    "lat": 36.362326407439845,
                    "lng": 127.33577420148076
                  },
                  {
                    "lat": 37.28941189110747,
                    "lng": 127.00446132665141
                  },
                  {
                    "lat": 35.32049801117398,
                    "lng": 129.1810343576788
                  },
                  {
                    "lat": 37.53338631541601,
                    "lng": 127.00615481678061
                  },
                  {
                    "lat": 37.413461468258156,
                    "lng": 126.67735680840826
                  },
                  {
                    "lat": 35.920390371093205,
                    "lng": 128.54411720249956
                  },
                  {
                    "lat": 36.65489374054824,
                    "lng": 127.48374816871991
                  },
                  {
                    "lat": 37.49491987110441,
                    "lng": 127.01493134206048
                  },
                  {
                    "lat": 37.64985695608336,
                    "lng": 127.14496345268074
                  },
                  {
                    "lat": 37.55686770317417,
                    "lng": 127.16927880543041
                  },
                  {
                    "lat": 37.37014007589146,
                    "lng": 127.10614330185591
                  },
                  {
                    "lat": 37.5350236507627,
                    "lng": 126.96157681184789
                  },
                  {
                    "lat": 37.40549630594667,
                    "lng": 126.8980581820004
                  },
                  {
                    "lat": 34.867950544005744,
                    "lng": 128.69069690081176
                  },
                  {
                    "lat": 35.16317059543225,
                    "lng": 128.98452978748048
                  },
                  {
                    "lat": 36.607484825953186,
                    "lng": 127.48520451195111
                  },
                  {
                    "lat": 37.651724785213986,
                    "lng": 126.58306748337554
                  },
                  {
                    "lat": 35.86059690063427,
                    "lng": 128.59193087665244
                  },
                  {
                    "lat": 35.25685847585025,
                    "lng": 128.59912605060455
                  },
                  {
                    "lat": 33.509258155694496,
                    "lng": 126.5109451464813
                  },
                  {
                    "lat": 37.64366155701157,
                    "lng": 126.63255039247507
                  },
                  {
                    "lat": 35.82667262227336,
                    "lng": 127.1030670574823
                  },
                  {
                    "lat": 35.82003554991111,
                    "lng": 127.14810974062483
                  },
                  {
                    "lat": 35.097485195649455,
                    "lng": 128.99486181862338
                  },
                  {
                    "lat": 37.32204249590605,
                    "lng": 127.95591893585816
                  },
                  {
                    "lat": 37.50535127272031,
                    "lng": 127.1047465440526
                  },
                  {
                    "lat": 36.99081407156533,
                    "lng": 127.09338324956647
                  },
                  {
                    "lat": 37.323486640444834,
                    "lng": 127.12285239871076
                  },
                  {
                    "lat": 35.78973089440451,
                    "lng": 127.13644319545601
                  },
                  {
                    "lat": 35.641373953578196,
                    "lng": 129.35463220719618
                  },
                  {
                    "lat": 37.47423127310911,
                    "lng": 126.97625029161996
                  },
                  {
                    "lat": 35.84357192991226,
                    "lng": 128.61143720719716
                  },
                  {
                    "lat": 37.180974984085736,
                    "lng": 128.20294526341132
                  },
                  {
                    "lat": 37.57895718642583,
                    "lng": 126.9316897337244
                  },
                  {
                    "lat": 33.49077253755052,
                    "lng": 126.49314817000993
                  },
                  {
                    "lat": 36.42175925330255,
                    "lng": 128.67409133225766
                  },
                  {
                    "lat": 37.46405540570109,
                    "lng": 126.7153544119173
                  },
                  {
                    "lat": 37.594758776232126,
                    "lng": 127.10099917489818
                  },
                  {
                    "lat": 37.7239966558994,
                    "lng": 127.0478671731854
                  },
                  {
                    "lat": 35.86680171505329,
                    "lng": 128.5923738376741
                  },
                  {
                    "lat": 37.560573727266785,
                    "lng": 126.81239107485251
                  },
                  {
                    "lat": 37.78692224857484,
                    "lng": 126.98966010341789
                  },
                  {
                    "lat": 35.10368644802913,
                    "lng": 129.0206862606022
                  },
                  {
                    "lat": 37.063839948992644,
                    "lng": 127.06856523030079
                  },
                  {
                    "lat": 37.34344643728643,
                    "lng": 127.94382181350932
                  },
                  {
                    "lat": 37.512521267219064,
                    "lng": 127.40054805648133
                  },
                  {
                    "lat": 35.15286653837983,
                    "lng": 126.90419903971498
                  },
                  {
                    "lat": 35.173238445546296,
                    "lng": 129.176082844468
                  },
                  {
                    "lat": 36.082394201323524,
                    "lng": 129.40330471725923
                  },
                  {
                    "lat": 37.51043665598106,
                    "lng": 127.03974070036524
                  },
                  {
                    "lat": 36.627816673285054,
                    "lng": 127.44969866021904
                  },
                  {
                    "lat": 37.59194624756919,
                    "lng": 127.01817545576053
                  },
                  {
                    "lat": 37.387147045560866,
                    "lng": 127.1253365438929
                  },
                  {
                    "lat": 35.89948383848115,
                    "lng": 128.60809550730653
                  },
                  {
                    "lat": 37.555316235235324,
                    "lng": 127.14038447894715
                  },
                  {
                    "lat": 36.09622092762977,
                    "lng": 128.43314679004078
                  },
                  {
                    "lat": 37.582855922985544,
                    "lng": 126.91907857008522
                  },
                  {
                    "lat": 37.516000983841586,
                    "lng": 128.72798872032757
                  },
                  {
                    "lat": 37.48429363675198,
                    "lng": 127.0379630203579
                  },
                  {
                    "lat": 37.54502575965604,
                    "lng": 126.95429338245707
                  },
                  {
                    "lat": 35.236247173046394,
                    "lng": 128.8677618015292
                  },
                  {
                    "lat": 37.40157536691968,
                    "lng": 127.11717457214067
                  },
                  {
                    "lat": 36.95191038001258,
                    "lng": 127.91064040877527
                  },
                  {
                    "lat": 37.491526492971346,
                    "lng": 126.85463749525812
                  },
                  {
                    "lat": 36.124356479753196,
                    "lng": 128.09517052346138
                  },
                  {
                    "lat": 37.15715169307048,
                    "lng": 128.15853461363773
                  },
                  {
                    "lat": 37.5808156608605,
                    "lng": 126.95109705510639
                  },
                  {
                    "lat": 37.46931787249714,
                    "lng": 126.89904775044873
                  },
                  {
                    "lat": 35.52195614910054,
                    "lng": 129.3209904841746
                  },
                  {
                    "lat": 37.58625703195563,
                    "lng": 126.9496035206742
                  },
                  {
                    "lat": 37.28463639199199,
                    "lng": 126.85984474757359
                  },
                  {
                    "lat": 35.534169458631226,
                    "lng": 129.31169021536095
                  },
                  {
                    "lat": 37.553341234194285,
                    "lng": 127.15481222237025
                  },
                  {
                    "lat": 37.62293367990081,
                    "lng": 126.83445005122417
                  },
                  {
                    "lat": 35.5272027005698,
                    "lng": 127.72953798950101
                  },
                  {
                    "lat": 35.180032285898854,
                    "lng": 128.06954509175367
                  }
                ]
              };

              let clusterer = new MarkerClusterer({
                map: _kakaoMapsProvider.getMapInstance(),
                //markers: _markers.positions,
                //gridSize: 35,
                averageCenter: true,
                minLevel: 10,
                disableClickZoom: true,
              });
              
              for(const key of _markers.positions){
                clusterer.addMarker(new Marker({ position: new LatLng(key.lat, key.lng) }));
              }
            })
            .catch();

          
        },
        err => {
          // console.log('err ', err);
        }
      )
      .catch(e => {
        // console.log('catch ', e);
      });

    // _kakaoMapsProvider.getMapInstance().addControl(_kakaoMapsProvider.getZoomControl(), ControlPosition.TOPRIGHT);
    // _kakaoMapsProvider.getMapInstance().addControl(_kakaoMapsProvider.getMapTypeControl(), ControlPosition.TOPRIGHT);
  }

  addToolbox() {
    // 도형 스타일을 변수로 설정합니다
    var strokeColor = '#39f',
      fillColor = '#cce6ff',
      fillOpacity = 0.5,
      hintStrokeStyle = 'dash';

    var options = {
      // Drawing Manager를 생성할 때 사용할 옵션입니다
      map: this._kakaoMapsProvider.getMapInstance(), // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
      drawingMode: [
        OverlayType.MARKER,
        OverlayType.ARROW,
        OverlayType.POLYLINE,
        OverlayType.RECTANGLE,
        OverlayType.CIRCLE,
        OverlayType.ELLIPSE,
        OverlayType.POLYGON,
      ],
      // 사용자에게 제공할 그리기 가이드 툴팁입니다
      // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
      guideTooltip: ['draw', 'drag', 'edit'],
      markerOptions: {
        draggable: true,
        removable: true,
      },
      arrowOptions: {
        draggable: true,
        removable: true,
        strokeColor: strokeColor,
        hintStrokeStyle: hintStrokeStyle,
      },
      polylineOptions: {
        draggable: true,
        removable: true,
        strokeColor: strokeColor,
        hintStrokeStyle: hintStrokeStyle,
      },
      rectangleOptions: {
        draggable: true,
        removable: true,
        strokeColor: strokeColor,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
      },
      circleOptions: {
        draggable: true,
        removable: true,
        strokeColor: strokeColor,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
      },
      ellipseOptions: {
        draggable: true,
        removable: true,
        strokeColor: strokeColor,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
      },
      polygonOptions: {
        draggable: true,
        removable: true,
        strokeColor: strokeColor,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
      },
    };

    // 위에 작성한 옵션으로 Drawing Manager를 생성합니다
    var manager = new DrawingManager(options);

    // Toolbox를 생성합니다.
    // Toolbox 생성 시 위에서 생성한 DrawingManager 객체를 설정합니다.
    // DrawingManager 객체를 꼭 설정해야만 그리기 모드와 매니저의 상태를 툴박스에 설정할 수 있습니다.
    var toolbox = new Toolbox({ drawingManager: manager });

    // 지도 위에 Toolbox를 표시합니다
    // daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOP은 위 가운데를 의미합니다.
    this._kakaoMapsProvider.getMapInstance().addControl(toolbox.getElement(), ControlPosition.TOP);
  }
  
  removeMarker() {
    this.marker.setMap(null);
  }
  addMarker() {
    this.marker.setMap(this._kakaoMapsProvider.getMapInstance());
  }

  getPosition() {
    this.position = this._kakaoMapsProvider.getMapInstance().getCenter();
    this.marker = new Marker({ position: this.position });
  }

  addOverlay() {
    this._kakaoMapsProvider.getMapInstance().addOverlayMapTypeId(OverlayMapTypeId.TRAFFIC);
  }
  removeOverlay() {
    this._kakaoMapsProvider.getMapInstance().removeOverlayMapTypeId(OverlayMapTypeId.TRAFFIC);
  }

  changeLayout() {
    let option = {
      width: '100%',
      height: '50%',
    };
    if (this.flagg) {
      option = {
        width: '100%',
        height: '30%',
      };
    } else {
      option = {
        width: '100%',
        height: '50%',
      };
    }
    this.mapConfig = option;
    this.flagg = !this.flagg;
  }



  ngOnInit(): void {}

}
