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
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    var angle = feature.get("angle") * (Math.PI/180);
    if (feature.get("text") !== null) {
        labelText = String(feature.get("text"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size, fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, angle)
    })];

    return style;
};
