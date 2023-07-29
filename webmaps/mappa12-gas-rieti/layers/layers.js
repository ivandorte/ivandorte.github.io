var wms_layers = [];


var lyr_GoogleSatellite_0 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'type': 'base',
    source: new ol.source.XYZ({
attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});


var format_02_lines_0 = new ol.format.GeoJSON();
var features_02_lines_0 = format_02_lines_0.readFeatures(json_02_lines_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_lines_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_lines_0.addFeatures(features_02_lines_0);
var lyr_02_lines_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_02_lines_0, 
                style: style_02_lines_0,
                interactive: true,
                title: '<img src="styles/legend/02_lines_0.png" /> 02_lines'
            });
var format_01_texts_1 = new ol.format.GeoJSON();
var features_01_texts_1 = format_01_texts_1.readFeatures(json_01_texts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_texts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_texts_1.addFeatures(features_01_texts_1);
var lyr_01_texts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_01_texts_1, 
                style: style_01_texts_1,
                interactive: true,
                title: '<img src="styles/legend/01_texts_1.png" /> 01_texts'
            });

lyr_02_lines_0.setVisible(true);lyr_01_texts_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_02_lines_0,lyr_01_texts_1];
lyr_02_lines_0.set('fieldAliases', {'fid': 'fid', 'seqno': 'seqno', 'color': 'color', 'width': 'width', });
lyr_01_texts_1.set('fieldAliases', {'fid': 'fid', 'seqno': 'seqno', 'text': 'text', 'font': 'font', 'size': 'size', 'color': 'color', 'angle': 'angle', });
lyr_02_lines_0.set('fieldImages', {'fid': 'TextEdit', 'seqno': 'TextEdit', 'color': 'TextEdit', 'width': 'TextEdit', });
lyr_01_texts_1.set('fieldImages', {'fid': 'TextEdit', 'seqno': 'TextEdit', 'text': 'TextEdit', 'font': 'TextEdit', 'size': 'TextEdit', 'color': 'TextEdit', 'angle': 'TextEdit', });
lyr_02_lines_0.set('fieldLabels', {'fid': 'no label', 'seqno': 'no label', 'color': 'no label', 'width': 'no label', });
lyr_01_texts_1.set('fieldLabels', {'fid': 'no label', 'seqno': 'no label', 'text': 'no label', 'font': 'no label', 'size': 'no label', 'color': 'no label', 'angle': 'no label', });
lyr_01_texts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});