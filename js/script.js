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

    var colorPicker = $colorPicker.data("plugin_tinycolorpicker");
    console.log(colorPicker);

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
    {id: 1, label: 'Theo Brinkman', shape:'circularImage', image:"images/Personen/persoon1.png"},
    {id: 2, label: 'Marita van den Heuvel', shape:'circularImage', image:"images/Personen/persoon6.png"},
    {id: 3, label: 'Theo Mensen', shape:'circularImage', image:"images/Personen/persoon7.png"},
    {id: 4, label: 'Els van der Pol', shape:'circularImage', image:"images/Personen/persoon8.png"},
    {id: 5, label: 'Angela Horsten', shape:'circularImage', image:"images/Personen/persoon9.png"},
    {id: 6, label: 'Hans van Daelen', shape:'circularImage', image:"images/Personen/persoon10.png"},
    {id: 7, label: 'Stef van Wickeren', shape:'circularImage', image:"images/Personen/persoon11.png"},
    {id: 8, label: 'Karin van Zutphen', shape:'circularImage', image:"images/Personen/persoon2.png"},
    {id: 9, label: 'Siebrand Konst', shape:'circularImage', image:"images/Personen/persoon3.png"},
    {id: 10, label: 'Koen Oosterbaan', shape:'circularImage', image:"images/Personen/persoon4.png"},
    {id: 11, label: 'Jan Timmers', shape:'circularImage', image:"images/Personen/persoon5.png"},
    {id: 12, label: 'Kristian van den Berg', shape:'circularImage', image:"images/Personen/persoon13.png"},
    {id: 13, label: 'Marianne Rongen', shape:'circularImage', image:"images/Personen/persoon12.png"},

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
    data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes:{
            shape: 'box',
            color: '#ffffff',
            font: {
                color: '#000000'
            }
        },
        edges:{
            color: "#ffffff"
        },

    };

    // initialize your network!
    var network = new vis.Network(container, data, options);
}
