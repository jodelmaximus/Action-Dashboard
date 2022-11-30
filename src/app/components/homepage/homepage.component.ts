import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import locations from "src/app/data/locations";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements AfterViewInit {

  @ViewChild("map", { static: true })
  public map!: IgxGeographicMapComponent;
  @ViewChild("template", { static: true })
  public tooltip!: TemplateRef<object>;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.addSeriesWith(locations.getAll(), "Gray");
    this.map.zoomToGeographic({left: 120.8, top: 13.7, width: 0.6, height: 0.25});
  }

  public addSeriesWith(locations: any[], brush: string) {
      const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
      symbolSeries.dataSource = locations;
      symbolSeries.markerType = MarkerType.Circle;
      symbolSeries.latitudeMemberPath = "lat";
      symbolSeries.longitudeMemberPath = "lon";
      symbolSeries.markerBrush  = "#4ee44e";
      symbolSeries.markerOutline = "#4ee44e";
      symbolSeries.markerThickness =12;
      symbolSeries.markerFillMode = 1;
      symbolSeries.tooltipTemplate = this.tooltip;
      this.map.series.add(symbolSeries);
  }
}