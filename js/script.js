// var jsonObject = {

// 	"schools":[
// 	    {"id": 1, "name":"De Aventurijn", "logo":"images/scholen/deaventurijn.jpg"},
// 	    {"id": 2, "name":"Kameleon", "logo":"images/scholen/kameleon.jpg"},
// 	    {"id": 3, "name":"prinsMauritsschool", "logo":"images/scholen/prinsMauritsschool.jpg"},
// 	],

// 	"communities":[
// 		{"id": 1, "name": "School en samenleving"},
// 	],

// 	"experts":[
// 	    {"id": 1, "name":"Ryan Smith", "schoolId":1, "communitieId": 1},
// 	    {"id": 2, "name":"Dion Thiers", "schoolId":1, "communitieId": 1},
// 	    {"id": 3, "name":"Niels Snakenborg", "schoolId":2, "communitieId": 1},
// 	    {"id": 4, "name":"TJ van Os", "schoolId":2, "communitieId": 1},
// 	    {"id": 5, "name":"Tom van Sambeek", "schoolId":3, "communitieId": 1},
// 	    {"id": 6, "name":"Maartje Vesselaar", "schoolId":3, "communitieId": 1},
// 	],

// };

window.onload = function()
{
    var $colorPicker = $('#colorPicker');
    $colorPicker.tinycolorpicker();

    // Input type color
    var $colorSwatch = $('#colorSwatch');
    $colorSwatch[0].value = '#1c1c1c';

    var colorPicker = $colorPicker.data("plugin_tinycolorpicker");
    //console.log(colorPicker);
    colorPicker.setColor('#1c1c1c');

    // When tinycolorpicker changes
    $colorPicker.bind("change", function(){
      $('.mynetwork_color').css('background-color', colorPicker.colorHex);
      $colorSwatch[0].value = colorPicker.colorHex + "";
    })



    // When input type is color changes
    $colorSwatch.on('input', function(){
      console.log(this.value);
      $('.mynetwork_color').css('background-color', this.value);
      colorPicker.setColor(this.value);
    })


    // Button to toggle between color and image
    $('#btn').on('click', function(){
      $('#mynetwork').toggleClass('mynetwork_image');
    })
}



// create an array with nodes
var nodes = new vis.DataSet([
    //personen
    {id: 1, label: 'Theo Brinkman \n Stichting Digidact \n managing director & oprichter', shape:'circularImage', image:"images/Personen/persoon1.png"},
    {id: 2, label: 'Marita van den Heuvel \n Wittering.nl \n regisseur, ICT coördinator', shape:'circularImage', image:"images/Personen/persoon6.png"},
    {id: 3, label: 'Theo Mensen \n Stichting e-Portfolio Support \n secretaris', shape:'circularImage', image:"images/Personen/persoon7.png"},
    {id: 4, label: 'Els van der Pol \n Signum \n directeur Onderwijs en Ontwikkeling', shape:'circularImage', image:"images/Personen/persoon8.png"},
    {id: 5, label: 'Angela Horsten \n XPect Primair \n manager Schoolontwikkeling', shape:'circularImage', image:"images/Personen/persoon9.png"},
    {id: 6, label: 'Hans van Daelen \n XPect Primair \n voorzitter College van Bestuur', shape:'circularImage', image:"images/Personen/persoon10.png"},
    {id: 7, label: 'Stef van Wickeren \n Campus Columbus \n directeur', shape:'circularImage', image:"images/Personen/persoon11.png"},
    {id: 8, label: 'Karin van Zutphen \n Wittering.nl \n directeur', shape:'circularImage', image:"images/Personen/persoon2.png"},
    {id: 9, label: 'Siebrand Konst \n Stichting Flore \n Algemeen directeur Onderwijs en Personeel', shape:'circularImage', image:"images/Personen/persoon3.png"},
    {id: 10, label: 'Koen Oosterbaan \n SKO Flevoland en Veluwe \n voorzitter College van Bestuur', shape:'circularImage', image:"images/Personen/persoon20.png"},
    {id: 11, label: 'Jan Timmers \n Signum \n voorzitter College van Bestuur', shape:'circularImage', image:"images/Personen/persoon5.png"},
    {id: 12, label: 'Kristian van den Berg \n SKO Flevoland en Veluwe \n projectmanager Onderwijsinnovatie en ICT', shape:'circularImage', image:"images/Personen/persoon13.png"},
    {id: 13, label: 'Marianne Rongen \n Wittering.nl \n regisseur, innovator', shape:'circularImage', image:"images/Personen/persoon12.png"},
    {id: 18, label: 'Annelies Verbeek \n SKO Flevoland en Veluwe \n lid College van Bestuur', shape:'circularImage', image:"images/Personen/persoon18.png"},

    //Termen
    {id: 14, label: 'E-portfolio', shape:'box'},
    {id: 15, label: 'Professionalisering' , shape:'box'},
    {id: 16, label: 'Kwaliteitszorg' , shape:'box'},
    {id: 17, label: 'Zelfregulering' , shape:'box'},
]);

//Kwaliteitszorg: karin van zutphen, stef van wickeren, hans van Daelen
//Zelfregulering: jan timmers, koen oosterbaan, siebrand konst

//, x:"3", y:"2", fixed:{x:false,y:false}

// create an array with edges
var edges = new vis.DataSet([

    //eportfolio
    {from: 13, to: 14},
    {from: 14, to: 12},
    {from: 14, to: 1},
    {from: 14, to: 2},
    {from: 14, to: 3},

    //professionalisering
    {from: 13, to: 15},
    {from: 15, to: 4},
    {from: 15, to: 5},
    {from: 15, to: 18},

    //zelfregulering
    {from: 13, to: 16},
    {from: 16, to: 6},
    {from: 16, to: 7},
    {from: 16, to: 8},

    //kwaliteitszorg
    {from: 13, to: 17},
    {from: 17, to: 9},
    {from: 17, to: 10},
    {from: 17, to: 11},

]);

//variables
var web;
var data;

$(document).ready(function(){

	web = new web();
});

var web = function(){
	this.renderWeb();
}

web.prototype.renderWeb = function(){

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    /*data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes:{
            shape: 'box',
            color: '#ffffff',
            font: {
                color: '#000000'
            },
            label: {
              enabled: false
            },
            scaling: {
              min: 50,
              max: 50,
            }
        },
        edges:{
            color: "#ffffff"
        },

    };*/

    // these are all options in full.
    data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
      nodes:{
        borderWidth: 0,
        borderWidthSelected: 1,
        color: {
          background: '#5a8ea0',
          highlight: {
            border: '#64a0b5',
            background: '#4b8295'
          }
        },
        // fixed: {
        //   x:false,
        //   y:false
        // },
        font: {
          color: '#ffffff',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 1, // px
          strokeColor: '#000000',

        },
        group: undefined,
        hidden: false,
        // icon: {
        //   face: 'FontAwesome',
        //   code: undefined,
        //   size: 50,  //50,
        //   color:'#2B7CE9'
        // },
        // image: undefined,
        // label: undefined,
        labelHighlightBold: true,
        level: undefined,
        mass: 1,
        physics: true,
        scaling: {
          // min: 50,
          // max: 60,
          label: {
            enabled: true,
            // min: 14,
            // max: 30,
            // maxVisible: 30,
            //drawThreshold: 5
          },
          customScalingFunction: function (min,max,total,value) {
            if (max === min) {
              return 0.5;
            }
            else {
              let scale = 1 / (max - min);
              return Math.max(0,(value - min)*scale);
            }
          }
        },
        shadow:{
          enabled: true,
          // color: 'rgba(0,0,0,0.5)',
          color: '#1c1c1c',
          size:20,
          x:1,
          y:1
        },
        size: 60,
        title: undefined,
        value: undefined,
        // x: undefined,
        // y: undefined
      },
      edges: {
        length: 275,
        color: '#c3dce5'
      }
    }


    // initialize your network!
    var network = new vis.Network(container, data, options);
}
