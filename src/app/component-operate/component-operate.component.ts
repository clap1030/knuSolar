import { Component, OnInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import koreaHighGeoData from "@amcharts/amcharts5-geodata/southKoreaHigh";

@Component({
  selector: 'app-component-operate',
  templateUrl: './component-operate.component.html',
  styleUrls: ['./component-operate.component.css']
})
export class ComponentOperateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var root = am5.Root.new("chartdiv"); 

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    var chart = root.container.children.push(
      am5map.MapChart.new(root, {})
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: koreaHighGeoData
      })
    );

    let circleTemplate = am5.Template.new({});

    let bubbleSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        calculateAggregates: true,
        valueField: "value",
        polygonIdField: "id"
      })
    );

    bubbleSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10
        })
      });
    });

    bubbleSeries.set("heatRules", [{
      target: circleTemplate,
      min: 3,
      max: 30,
      key: "radius",
      dataField: "value"
    }]);
    
    bubbleSeries.data.setAll([
      {
        id: "AF",
        name: "Afghanistan",
        value: 32358260,
        circleTemplate: { fill: am5.color(0xff0000) }
      },
      {
        id: "AL",
        name: "Albania",
        value: 3215988,
        circleTemplate: { fill:am5.color("#00ff00") }
      }
    ]);

    let colors = am5.ColorSet.new(root, {});

    chart.appear(1000, 100);
  }



}
