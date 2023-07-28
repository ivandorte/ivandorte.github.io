var wms_layers = [];

var format_02_lines_0 = new ol.format.GeoJSON();
var features_02_lines_0 = format_02_lines_0.readFeatures(json_02_lines_0);
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
var features_01_texts_1 = format_01_texts_1.readFeatures(json_01_texts_1);
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
var group_mappa25_0 = new ol.layer.Group({
                                layers: [lyr_02_lines_0,lyr_01_texts_1,],
                                title: "mappa25_0"});

lyr_02_lines_0.setVisible(true);lyr_01_texts_1.setVisible(true);
var layersList = [group_mappa25_0];
lyr_02_lines_0.set('fieldAliases', {'fid': 'fid', 'seqno': 'seqno', 'color': 'color', 'width': 'width', });
lyr_01_texts_1.set('fieldAliases', {'fid': 'fid', 'seqno': 'seqno', 'text': 'text', 'font': 'font', 'size': 'size', 'color': 'color', 'angle': 'angle', });
lyr_02_lines_0.set('fieldImages', {'fid': 'TextEdit', 'seqno': 'TextEdit', 'color': 'TextEdit', 'width': 'TextEdit', });
lyr_01_texts_1.set('fieldImages', {'fid': 'TextEdit', 'seqno': 'TextEdit', 'text': 'TextEdit', 'font': 'TextEdit', 'size': 'TextEdit', 'color': 'TextEdit', 'angle': 'TextEdit', });
lyr_02_lines_0.set('fieldLabels', {});
lyr_01_texts_1.set('fieldLabels', {});
lyr_01_texts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});