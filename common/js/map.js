//propietats
//Abst, Atur, Baix Pes, EV, Envell, Envell (copia), Fec Ad, Indicador títol, Nest, Number of Records, RFD, RMC, Rapvp, Soles, TBC

var texts = {
    "Envell": {"nom_curt": iJS._("Envelliment"),
        "nom_llarg":iJS._("Índex sobreenvelliment."),
        "any":"2014",
        "unitats":"",
        "descripcio": iJS._("proporció de persones de 75 anys o més sobre el nombre de persones de 65 anys o menys.")},
    "Soles": {"nom_curt": iJS._("Persones grans que viuen soles"),
        "nom_llarg":iJS._("% persones 75 anys o més que viuen soles."),
        "any": "2014",
        "unitats":"%",
        "descripcio": iJS._("% de persones de 75 anys o més que viuen soles. Anys 2014.")},
    "RFD": {"nom_curt": iJS._("Renda Familiar Disponible"),
        "inicials": "RFD",
        "nom_llarg":iJS._("Índex de Renda Familiar Disponible."),
        "any": "2013",
        "unitats":"",
        "descripcio": iJS._("Indicador sintètic resultant de la combinació de diferents variables. Pretén ser una aproximació a la renda disponible mitjana de les familes residents a l'àrea (barri en aquest cas). Es presenta en format de raó de entre renda del barri i la mitjana del conjunt de Barcelona. L'índex RFD del conjunt de Barcelona és 100. A major valor d'RFD, major capcitat econòmica del barri, i a menor valor d'RFD, menor capacitat econòmica del barri. Any 2014.")},
    "Nest": {"nom_curt": iJS._("Estudis primaris o menys"),
        "nom_llarg":iJS._("% persones de 15 anys o més amb estudis primaris o menys."),
        "any": "2014",
        "unitats":"%",
        "descripcio": iJS._("% persones de 15 anys o més amb estudis primaris o menys. Any 2014.")},
    "Atur": {"nom_curt": iJS._("Atur"),
        "nom_llarg":iJS._("% d'atur registrat entre 16-64 anys."),
        "any": "2014",
        "unitats":"%",
        "descripcio": iJS._("% de persones entre 16 i 64 anys registrades a les Oficines de Treball de la Generalitat sobre el nombre de persones de 16 a 64 anys. Estiació per barris a partir de les dades facilitades per codis postals. Any 2014.")},
    "Abst": {"nom_curt": iJS._("Abstenció eleccions"),
        "nom_llarg":iJS._("% abstenció eleccions municipals."),
        "any": "2015",
        "unitats":"%",
        "descripcio": iJS._("% de persones que no han participat en la convocatòria electoral en les darreres elecciones municipals.")},
    "EV": {"nom_curt": iJS._("Esperança de vida"),
        "nom_llarg":iJS._("Esperança de vida al néixer"),
        "any":"2009-2013",
        "unitats":iJS._(" anys"),
        "inicials": "EV",
        "descripcio": iJS._("són els anys que una persona espera viure al néixer, en promig, tenint en compte el patró de mortalitat en aquell període. Període 2009-2013.")},
    "RMC": {"nom_curt": iJS._("Mortalitat comparativa"),
        "nom_llarg":iJS._("Raó de Mortalitat Comparativa."),
        "any": "2009-2013",
        "unitats":"",
        "inicials": "RMC",
        "descripcio": iJS._("raó entre la taxa de mortalitat estandarditzada per edat del barri respecte la de la ciutat de Barcelona, mulitplicada per 100. Un valor per sobre del 100 indica més mortalitat al territori respecte Barcelona i, en canvi, un valor per sota de 100 indica menys mortalitat respecte la ciutat. Període: 2009-2013.")},
    "Rapvp": {"nom_curt": iJS._("Mortalitat permatura"),
        "nom_llarg":iJS._("Raó d'Anys Potencials de Vida Perduts."),
        "any": "2009-2013",
        "unitats":"",
        "inicials": "RAPVP",
        "descripcio": iJS._("raó entre la taxa de mortalitat prematura (morts entre els 1 i 70 anys) o d'Anys Potencials de Vida Perduts (APVP) estandarditzada per edat del barri respecte de la ciutat de Barcelona, multiplicada per 100. Un valor per sobre del 100 indica més mortalitat prematura al territori respecte Barcelona i, en canvi, un valor per sota de 100 indica menys mortalitat prematura respecte la ciutat. Període: 2009-2013.")},
    "TBC": {"nom_curt": iJS._("Tuberculosi"),
        "nom_llarg":iJS._("Taxa de tuberculosi"),
        "any": "2010-2014",
        "unitats":"",
        "descripcio": iJS._("taxa de tuberculosi. Nombre de nous casos de tuberculosi diagnosticats per 100.000 habitants. Període: 2010-2014.")},
    "Fec Ad": {"nom_curt": iJS._("Fecunditat adolescent"),
        "nom_llarg":iJS._("Taxa de fecunditat adolescent."),
        "any": "2010-2014",
        "unitats":"‰",
        "descripcio": iJS._("taxa de fecunditat adolescent o nombre de neixaments vius de dones entre 15 i 19 anys dividit per la població de dones entre 15 i 19 anys per 1.000. Període 2010-2014.")},
    "Baix Pes": {"nom_curt": iJS._("Baix pes en néixer"),
        "nom_llarg": iJS._("% de baix pes en néixer."),
        "any": "2010-2014",
        "unitats":"%",
        "descripcio": iJS._("% de baix pes en néixer, nombre de nadons nascuts vius amb un pes inferior a 2500 grams per 100 naixaments vius. Període: 2010-2014.")}
    }


function text2nom(text){
    if(t2n[text]!=undefined){
        return t2n[text]
    }
    return text
}



var defaultColors = ["#b00026", "#feffb3"];

function parse(value){
    value = parseFloat(value.replace(/\s/g, "").replace(",", "."));
    return value
}

function humanize(value){
    if ((typeof value)==="string"){
        value = parse(value);
    }
    var n_decimals= 3 - (""+Math.round(value)).length;
    if (n_decimals<0){n_decimals=0}
    value = value.toFixed(n_decimals);//.replace(/\.?0*$/,'');
    return value
}

function addMap(container, property, colors, inv, ready_function, domain, tooltip_val){
        if(property==undefined){property = 'Atur';}
        if(colors==undefined){colors = [defaultColors[0], defaultColors[1]];}

        var mapcontainer = container.append('svg')
        mapcontainer.attr('width', '100%');
        mapcontainer.attr('height', '100%');
        mapcontainer.attr('viewBox', '0 0 100 100');
        mapcontainer.attr('preserveAspectRatio', 'xMidYMin ');
        mapcontainer.append('image').attr('xlink:href', '../common/js/backmap2.png').attr('x',-16).attr('y',-15).attr('height', 129).attr('width', 129);


        var width = 100;
        var height = 100;
        var mapObj = {};

        var projection = d3.geoMercator()
            .translate([width / 2, height / 2]);

        var hurban_heart = d3.map();

        function csvData(d){
          var value = d;
          var idBarri = parseInt(d.Codibarri);
          hurban_heart.set(idBarri, d);
        }


        d3.queue()
            .defer(d3.json, "../common/data/bcn_barris.json")
            .defer(d3.csv, "../common/data/hurban_heart.csv", csvData)
            .await(ready);

        var path

        var tooltip = d3.select('body').append('div')
                .attr('class', 'hidden tooltip').text('');

        function ready(error, bcn_doc) {

                if (error) throw error;
                bcn = topojson.feature(bcn_doc, bcn_doc.objects.bcn_barris);

                var bounds = d3.geoBounds(bcn),
                    center = d3.geoCentroid(bcn);

                var distance = d3.geoDistance(bounds[0], bounds[1]),
                    scale = d3.min([height, width]) / distance;

                projection.scale(scale)
                    .center(center);

                path = d3.geoPath()
                    .projection(projection);


                mapcontainer.append("g")
                    .attr("class", "barris")
                    .selectAll("path")
                    .data(bcn.features)
                    .enter().append("path")
                        .attr('stroke', 'gray')
                        .attr('stroke-width', '0.05')
                        .attr('fill','gray')
                        .attr("d", path)

                mapcontainer.append("g")
                    .attr("class", "districtes")
                    .append("path")
                    .datum(topojson.mesh(bcn_doc, bcn_doc.objects.bcn_barris, function(a, b) {return a.properties.C_Distri !== b.properties.C_Distri; }))
                    .style("fill-opacity", "0")
                    .style("stroke", "gray")
                    .style("stroke-width", "0.25")
                    .style("pointer-events", "none")
                    .attr("d", path);

                mapcontainer.append("g")
                    .attr("class", "exterior")
                    .append("path")
                    .datum(topojson.merge(bcn_doc, bcn_doc.objects.bcn_barris.geometries))
                    .style("fill-opacity", "0")
                    .style("stroke", "gray")
                    .style("stroke-width", "0.25")
                    .style("pointer-events", "none")
                    .attr("d", path);


                mapcontainer.select('g.barris').attr('transform','translate('+(-width*0.1)+','+(-height*0.04)+')rotate(45,'+width/2+','+height/2+')')
                mapcontainer.select('g.districtes').attr('transform','translate('+(-width*0.1)+','+(-height*0.04)+')rotate(45,'+width/2+','+height/2+')')
                mapcontainer.select('g.exterior').attr('transform','translate('+(-width*0.1)+','+(-height*0.04)+')rotate(45,'+width/2+','+height/2+')')
                fillBaris(property, inv, domain, tooltip_val);
                if(ready_function!==undefined){
                    ready_function(mapObj);
                }
        }

        function fillBaris(property, inv, domain, tooltip_val){
            if(inv==undefined){inv=false};
            if(domain==undefined){
                mapObj.domain = d3.extent( hurban_heart.values().map(function(d){return parse(d[property])}))}
            else{
                mapObj.domain = domain
            }


            if ((typeof colors)=="function") {
                mapObj.color = colors
            }else{
                if (inv){
                    mapObj.color = d3.scaleLinear().domain(mapObj.domain).range([colors[1], colors[0]]).interpolate(d3.interpolateHsl);
                }else{
                    mapObj.color = d3.scaleLinear().domain(mapObj.domain).range(colors).interpolate(d3.interpolateHsl);
                }
            }

            if(tooltip_val==undefined){
                var tooltip_val = function(property, barri, hurban_heart){
                    if (texts[property]!=undefined){
                        var unit = texts[property]["unitats"];
                        if(unit==undefined){unit=""}
                    }else{var unit=""}

                    var val = hurban_heart.get(parseInt(barri))[property];
                    val = humanize(val);
                    return val+unit;
                }
            }

            mapcontainer.selectAll('g.barris path')
                .transition(5000)
                .attr("fill", function(d) {
                    var value = parse(hurban_heart.get(parseInt(d.properties.C_Barri))[property]);
                    return mapObj.color(value);
                });

            if (tooltip_val!==false){
                mapcontainer.selectAll('g.barris path')
                    .on('mousemove', function(d) {

                        var mouse = d3.mouse(d3.select('body').node()).map(function(d) {
                            return parseInt(d);
                        });
                        var val = hurban_heart.get(parseInt(d.properties.C_Barri))[property];
                        var nomBarri = hurban_heart.get(parseInt(d.properties.C_Barri))["Barri"];
                        val = humanize(val);
                        tooltip.classed('hidden', false)
                            .attr('style', 'left:' + (mouse[0] + 15) + 'px; top:' + (mouse[1] - 35) + 'px')
                            .html('<span style="font-size:0.9em">'+nomBarri + '</span><div style="font-size:0.75em;font-weight:bold;margin-left:0.5em">' + tooltip_val(property, d.properties.C_Barri, hurban_heart)+'</div>');
                    })
                    .on('mouseout', function() {
                        tooltip.classed('hidden', true);
                    });
            }
        }

        mapObj.ChangeProperty = function(property, inv){
            fillBaris(property, inv)
        }

        mapObj.putLegend = function(legendContainer){

            var width = 140
            var height = 20
            legendContainer.html("")
            legendContainer.append('span').text(humanize(mapObj.domain[0])).style('margin','0 5px 0 10px');
            var legendT = legendContainer.append('div').style('display', 'inline-table').style('width','50%').style('height','22px').style('vertical-align','middle');
            legendContainer.append('span').text(humanize(mapObj.domain[1])).style('margin','0 5px 0 10px');
            legendT.style('border', '1px gray solid').style('border-radius', '3px')
            var legend = legendT.append('div').style('display', 'table-row');

            var N=5;
            var step=(mapObj.domain[1]-mapObj.domain[0])/(N-1);
            for(var i=0;i<N;i++){
                var value=mapObj.domain[0]+(step*i)
                var color = mapObj.color(value)
                legend.append('div').style('background-color', color).style("width", "10px").style("height", "10px").style('display', 'table-cell');
            }

        }

        return mapObj

}
