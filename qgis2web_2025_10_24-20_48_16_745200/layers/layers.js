var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KL_Wards_1 = new ol.format.GeoJSON();
var features_KL_Wards_1 = format_KL_Wards_1.readFeatures(json_KL_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Wards_1.addFeatures(features_KL_Wards_1);
var lyr_KL_Wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Wards_1, 
                style: style_KL_Wards_1,
                popuplayertitle: 'KL_Wards',
                interactive: true,
    title: 'KL_Wards<br />\
    <img src="styles/legend/KL_Wards_1_0.png" /> CHALODE<br />\
    <img src="styles/legend/KL_Wards_1_1.png" /> EDAYANNUR<br />\
    <img src="styles/legend/KL_Wards_1_2.png" /> ELAMPARA<br />\
    <img src="styles/legend/KL_Wards_1_3.png" /> KANAD<br />\
    <img src="styles/legend/KL_Wards_1_4.png" /> KEEZHALLUR<br />\
    <img src="styles/legend/KL_Wards_1_5.png" /> KEEZHALLUR NORTH<br />\
    <img src="styles/legend/KL_Wards_1_6.png" /> KOTHERI<br />\
    <img src="styles/legend/KL_Wards_1_7.png" /> KUMMANAM<br />\
    <img src="styles/legend/KL_Wards_1_8.png" /> NALLANI<br />\
    <img src="styles/legend/KL_Wards_1_9.png" /> PALAYODE<br />\
    <img src="styles/legend/KL_Wards_1_10.png" /> PANAYATHAMPARAMBA<br />\
    <img src="styles/legend/KL_Wards_1_11.png" /> PERAVOOR<br />\
    <img src="styles/legend/KL_Wards_1_12.png" /> THERUR<br />\
    <img src="styles/legend/KL_Wards_1_13.png" /> THERUR PALAYODE<br />\
    <img src="styles/legend/KL_Wards_1_14.png" /> VAYANTHODE<br />\
    <img src="styles/legend/KL_Wards_1_15.png" /> VELLIYAMPARAMBA<br />\
    <img src="styles/legend/KL_Wards_1_16.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KL_Wards_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KL_Wards_1];
lyr_KL_Wards_1.set('fieldAliases', {'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'population': 'population', });
lyr_KL_Wards_1.set('fieldImages', {'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'population': 'TextEdit', });
lyr_KL_Wards_1.set('fieldLabels', {'District': 'no label', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'population': 'inline label - always visible', });
lyr_KL_Wards_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});