import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {


  dataSourceColumnChart
  dataSourceColumnChart2
  dataSourcePie1
  dataSourcePie2
  title = 'Angular4 FusionCharts Sample'

  constructor() {
    this.dataSourceColumnChart = {
      "id": 'chart1',
      "width": '100%',
      "height": 400,
      "type": 'column2d',
      "dataFormat": 'json',
      "dataSource": {
        "chart": {
          "baseFont": "Verdana",
          "baseFontSize": "14",
          "palettecolors":"#ff5252",
          "caption": "Distribution of organisms in ProtMiscuity",
          "subCaption": "Representation of organisms",
          "numberprefix": "",
          "showValues": "0",
          "numberScaleUnit": "",
          "theme": "fint"
        },
        "data": [
          {"label": "Streptomyces coelicolor","value": "1.05"},
          {"label": "Hevea brasiliensis","value": "1.05"},
          {"label": "Burkholderia cepacia","value": "2.10"},
          {"label": "Sulfolobus solfataricus","value": "1.05"},
          {"label": "Penicillium citrinum","value": "1.05"},
          {"label": "Amycolatopsis sp.","value": "1.05"},
          {"label": "Pseudomonas putida","value": "2.10"},
          {"label": "Thermomyces lanuginosus (Humicola lanuginosa)","value": "2.10"},
          {"label": "Pseudomonas putida (Arthrobacter siderocapsulatus)","value": "3.29"},
          {"label": "Rhodococcus erythropolis (Arthrobacter picolinophilus)","value": "1.05"},
          {"label": "Neosartorya fumigata","value": "3.15"},
          {"label": "Rhizopus delemar","value": "1.09"},
          {"label": "Ficus carica","value": "1.05"},
          {"label": "Escherichia coli (strain K12)","value": "1.05"},
          {"label": "Pseudozyma antarctica (Candida antarctica)","value": "4.21"},
          {"label": "Bacillus licheniformis","value": "3.15789473684"},
          {"label": "Burkholderia glumae (Pseudomonas glumae)","value": "1.05"},
          {"label": "Pseudomonas chlororaphis","value": "1.05"},
          {"label": "Homo sapiens (Human)","color": "#bdbdbd","value": "8.79"},
          {"label": "Methylomonas aminofaciens","value": "1.05"},
          {"label": "Salmonella typhimurium (strain LT2 / SGSC1412 / ATCC 700720)","value": "1.05"},
          {"label": "Aspergillus usamii","value": "1.05"},
          {"label": "Gallus gallus (Chicken)","value": "1.05"},
          {"label": "Thermomyces lanuginosa","value": "1.05"},
          {"label": "Acinetobacter johnsonii","value": "1.05"},
          {"label": "Brevundimonas diminuta (Pseudomonas diminuta)","value": "2.10"},
          {"label": "Rhizopus niveus","value": "2.10526315789"},
          {"label": "Bos taurus (Bovine)","color": "#bdbdbd","value": "8.795"},
          {"label": "Pseudomonas aeruginosa","value": "1.05"},
          {"label": "Citrobacter freundii","value": "1.05"},
          {"label": "Aspergillus niger","value": "2.10"},
          {"label": "Carica papaya (Papaya)","value": "1.05"},
          {"label": "Arthrobacter sp.","value": "1.05"},
          {"label": "Thermomyces lanuginosus","value": "1.05"},
          {"label": "Bacillus subtilis","value": "1.09"},
          {"label": "Escherichia coli","color": "#bdbdbd","value": "8.42"},
          {"label": "Macrophoma commelinae","value": "2.10"},
          {"label": "Sus scrofa (Pig)","color": "#bdbdbd","value": "12.08"},
          {"label": "Pseudomonas fluorescens","value": "1.05"},
          {"label": "Microbacterium hydrocarbonoxydans","value": "1.05"},
          {"label": "Rhizomucor miehei","value": "2.1993157895"},
          {"label": "Pseudozyma antarctica (Yeast) (Candida antarctica)","value": "3.296"}
        ]
      }
    }

    this.dataSourceColumnChart2 = {
      "id": 'chart2',
      "width": '100%',
      "height": 400,
      "type": 'column2d',
      "dataFormat": 'json',
      "dataSource": {
        "chart":
        {
          "baseFont": "Verdana",
          "labelDisplay": "rotate",
          "showValues": "0",
          "baseFontSize": "14",
          "palettecolors":"#ff5252",
          "caption": "Protein families in ProtMiscuity",
          "subCaption": "Distribution of proteins per family",
          "numberprefix": "",
          "numberScaleUnit": "",
          "theme": "fint"
        },
        "data": [
          {
              "label": "AB hydrolase superfamily",
              "color": "#bdbdbd",
              "value": "11.90"
          },
          {
              "label": "Glycosyl hydrolase 22 family",
              "value": "2.38"
          },
          {
              "label": "Globin family",
              "value": "4.76"
          },
          {
              "label": "Paraoxonase family",
              "value": "2.38"
          },
          {
              "label": "Phosphotriesterase family",
              "value": "1.96"
          },
          {
              "label": "Peptidase M20A family DapE subfamily",
              "value": "2.38"
          },
          {
              "label": "Tryptophan dimethylallyltransferase family",
              "color": "#bdbdbd",
              "value": "7.14"
          },
          {
              "label": "Glycosyl hydrolase 15",
              "value": "2.38"
          },
          {
              "label": "Alpha-carbonic anhydrase",
              "value": "2.38"
          },
          {
              "label": "Glycosyl hydrolase 13",
              "value": "4.76"
          },
          {
              "label": "Sulfatase",
              "value": "2.38"
          },
          {
              "label": "Trans-sulfuration enzymes",
              "value": "2.38"
          },
          {
              "label": "ALB/AFP/VDB",
              "value": "4.76"
          },
          {
              "label": "HPS/KGPDC family HPS",
              "value": "2.38"
          },
          {
              "label": "'GDSL' lipolytic enzyme",
              "value": "2.38"
          },
          {
              "label": "'Peptidase M20A family",
              "value": "2.38"
          },
          {
              "label": "4-oxalocrotonate tautomerase",
              "value": "2.38"
          },
          {
              "label": "HPS/KGPDC family KGPDC",
              "value": "2.38"
          },
          {
              "label": "Peptidase A1",
              "value": "2.38"
          },
          {
              "label": "AB hydrolase",
              "value": "3.96"
          },
          {
              "label": "Peptidase S8",
              "value": "2.38"
          },
          {
              "label": "Peptidase S1",
              "value": "4.76"
          },
          {
              "label": "Peptidase C1 family",
              "color": "#bdbdbd",
              "value": "7.14"
          },
          {
              "label": "Nuclease type I",
              "value": "2.38"
          },
          {
              "label": "Mandelate racemase/muconate lactonizing",
              "value": "2.38"
          },
          {
              "label": "Metallo-dependent hydrolase",
              "value": "2.38"
          }
        ]
      }
    }

    this.dataSourcePie1 = {
      "width": "100%",
      "height": 400,
      "type": 'pie3d',
      "dataFormat": 'json',
      "dataSource": {
        "chart": {
            "baseFont": "Verdana",
            "baseFontSize": "14",
            "palettecolors":"#bdbdbd,#212121,FF0000,#ff5252",
            "caption": "Distribution of promiscuous reactions",
            "subcaption": "Number of promiscuous reactions per protein",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Number of promiscuos reactions: $label",
            "theme": "ocean"
        },
        "data": [
            {
                "label": "1 reaction",
                "value": "6680000"
            },
            {
                "label": "2 reactions",
                "value": "2000000"
            },
            {
                "label": "3 reactions",
                "value": "600001"
            },
            {
                "label": "4 reactions",
                "value": "600000"
            }
        ]
      }
    }

    this.dataSourcePie2 = {
      "width": "100%",
      "height": 400,
      "type": 'pie3d',
      "dataFormat": 'json',
      "dataSource": {
        "chart": {
            "caption": "Taxonomy",
            "subcaption": "Percentage of promiscuous proteins per kingdom",
            "palettecolors":"FF0000,#212121,#bdbdbd",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "Kindom: $label",
            "theme": "ocean"
        },
        "data": [
            {
                "label": "Eukarya",
                "value": "3750000"
            },
            {
                "label": "Bacteria",
                "value": "6042000"
            },
            {
                "label": "Archaea",
                "value": "0208400"
            }
        ]
      }
    }

  }

  ngOnInit() {
  }

}
