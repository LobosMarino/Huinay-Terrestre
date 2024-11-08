var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TipoVegetacion_1 = new ol.format.GeoJSON();
var features_TipoVegetacion_1 = format_TipoVegetacion_1.readFeatures(json_TipoVegetacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TipoVegetacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TipoVegetacion_1.addFeatures(features_TipoVegetacion_1);
var lyr_TipoVegetacion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TipoVegetacion_1, 
                style: style_TipoVegetacion_1,
                popuplayertitle: "Tipo Vegetacion",
                interactive: true,
    title: 'Tipo Vegetacion<br />\
    <img src="styles/legend/TipoVegetacion_1_0.png" /> Alerce<br />\
    <img src="styles/legend/TipoVegetacion_1_1.png" /> Areas Sin Vegetacion<br />\
    <img src="styles/legend/TipoVegetacion_1_2.png" /> Cipres de la Cordillera<br />\
    <img src="styles/legend/TipoVegetacion_1_3.png" /> Cipres de las Guaitecas<br />\
    <img src="styles/legend/TipoVegetacion_1_4.png" /> Coihue - Rauli - Tepa<br />\
    <img src="styles/legend/TipoVegetacion_1_5.png" /> Coihue de Magallanes<br />\
    <img src="styles/legend/TipoVegetacion_1_6.png" /> Cuerpos de Agua<br />\
    <img src="styles/legend/TipoVegetacion_1_7.png" /> Humedales<br />\
    <img src="styles/legend/TipoVegetacion_1_8.png" /> Lenga<br />\
    <img src="styles/legend/TipoVegetacion_1_9.png" /> Nieves y Glaciares<br />\
    <img src="styles/legend/TipoVegetacion_1_10.png" /> Praderas y Matorrales<br />\
    <img src="styles/legend/TipoVegetacion_1_11.png" /> Roble - Rauli - Coihue<br />\
    <img src="styles/legend/TipoVegetacion_1_12.png" /> Siempreverde<br />'
        });
var format_Huinaysenderos_2 = new ol.format.GeoJSON();
var features_Huinaysenderos_2 = format_Huinaysenderos_2.readFeatures(json_Huinaysenderos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huinaysenderos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huinaysenderos_2.addFeatures(features_Huinaysenderos_2);
var lyr_Huinaysenderos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huinaysenderos_2, 
                style: style_Huinaysenderos_2,
                popuplayertitle: "Huinay senderos",
                interactive: true,
                title: '<img src="styles/legend/Huinaysenderos_2.png" /> Huinay senderos'
            });
var format_HuinayBoundaries_3 = new ol.format.GeoJSON();
var features_HuinayBoundaries_3 = format_HuinayBoundaries_3.readFeatures(json_HuinayBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuinayBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuinayBoundaries_3.addFeatures(features_HuinayBoundaries_3);
var lyr_HuinayBoundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HuinayBoundaries_3, 
                style: style_HuinayBoundaries_3,
                popuplayertitle: "Huinay Boundaries",
                interactive: false,
                title: '<img src="styles/legend/HuinayBoundaries_3.png" /> Huinay Boundaries'
            });
var format_POIs_4 = new ol.format.GeoJSON();
var features_POIs_4 = format_POIs_4.readFeatures(json_POIs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_4.addFeatures(features_POIs_4);
var lyr_POIs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_4, 
                style: style_POIs_4,
                popuplayertitle: "POIs",
                interactive: true,
    title: 'POIs<br />\
    <img src="styles/legend/POIs_4_0.png" /> Blue lagoon 1<br />\
    <img src="styles/legend/POIs_4_1.png" /> BocaToma 2<br />\
    <img src="styles/legend/POIs_4_2.png" /> Camp La Cruz<br />\
    <img src="styles/legend/POIs_4_3.png" /> Cerro Tambor<br />\
    <img src="styles/legend/POIs_4_4.png" /> Estás aquí!<br />\
    <img src="styles/legend/POIs_4_5.png" /> Locomovil<br />\
    <img src="styles/legend/POIs_4_6.png" /> Puente Colgante<br />\
    <img src="styles/legend/POIs_4_7.png" /> Refugio Huinay<br />'
        });

lyr_EsriWorldImagery_0.setVisible(true);lyr_TipoVegetacion_1.setVisible(true);lyr_Huinaysenderos_2.setVisible(true);lyr_HuinayBoundaries_3.setVisible(true);lyr_POIs_4.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_TipoVegetacion_1,lyr_Huinaysenderos_2,lyr_HuinayBoundaries_3,lyr_POIs_4];
lyr_TipoVegetacion_1.set('fieldAliases', {'TIPO_FORES': 'TIPO_FORES', });
lyr_Huinaysenderos_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HuinayBoundaries_3.set('fieldAliases', {'NOM_PREDIO': 'NOM_PREDIO', 'REFERENCIA': 'REFERENCIA', 'SUP_INFORM': 'SUP_INFORM', 'CONTACTO': 'CONTACTO', 'HECTARES_3': 'HECTARES_3', 'SUP_INFO_C': 'SUP_INFO_C', 'REGION': 'REGION', 'FUENTE': 'FUENTE', 'TIP_PROP': 'TIP_PROP', 'TIP_CON': 'TIP_CON', 'NOMB_ADMIN': 'NOMB_ADMIN', 'NOM_PROP': 'NOM_PROP', 'OBS': 'OBS', 'PP_ACT': 'PP_ACT', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_POIs_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TipoVegetacion_1.set('fieldImages', {'TIPO_FORES': 'TextEdit', });
lyr_Huinaysenderos_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_HuinayBoundaries_3.set('fieldImages', {'NOM_PREDIO': 'TextEdit', 'REFERENCIA': 'TextEdit', 'SUP_INFORM': 'TextEdit', 'CONTACTO': 'TextEdit', 'HECTARES_3': 'TextEdit', 'SUP_INFO_C': 'TextEdit', 'REGION': 'TextEdit', 'FUENTE': 'TextEdit', 'TIP_PROP': 'TextEdit', 'TIP_CON': 'TextEdit', 'NOMB_ADMIN': 'TextEdit', 'NOM_PROP': 'TextEdit', 'OBS': 'TextEdit', 'PP_ACT': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_POIs_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TipoVegetacion_1.set('fieldLabels', {'TIPO_FORES': 'inline label - visible with data', });
lyr_Huinaysenderos_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_HuinayBoundaries_3.set('fieldLabels', {'NOM_PREDIO': 'hidden field', 'REFERENCIA': 'hidden field', 'SUP_INFORM': 'no label', 'CONTACTO': 'no label', 'HECTARES_3': 'no label', 'SUP_INFO_C': 'no label', 'REGION': 'no label', 'FUENTE': 'no label', 'TIP_PROP': 'no label', 'TIP_CON': 'no label', 'NOMB_ADMIN': 'no label', 'NOM_PROP': 'no label', 'OBS': 'no label', 'PP_ACT': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_POIs_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_POIs_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});