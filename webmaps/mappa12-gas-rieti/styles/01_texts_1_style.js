var size = 0;
var placement = 'point';

var style_01_texts_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px sans-serif";
    var labelFill = "#000000";
    var bufferColor = "rgba(255, 255, 255, 0.8)";
    var bufferWidth = 2;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    var angle = feature.get("angle") * (Math.PI/180);
    if (feature.get("text") !== null) {
        labelText = String(feature.get("text"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size, fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 1.0)'}), stroke: new ol.style.Stroke({color: 'rgba(255, 255, 255, 1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, angle)
    })];

    return style;
};
