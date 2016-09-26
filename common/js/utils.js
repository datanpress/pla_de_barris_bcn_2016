function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



var lang = getParameterByName('lang');
if(lang!=null && lang!=""){
  //set the locale in which the messages will be translated
  iJS.i18n.setlocale(lang) ;
  //add domain where to find messages data
  iJS.i18n.bindtextdomain(lang, "../locale", "po") ;
  //Always do this after a `setlocale` or a `bindtextdomain` call.
  iJS.i18n.try_load_lang() ; //will load and parse messages data from the setting catalog.
}


// html 1
d3.select('[prop="RFD"] h4').text(iJS._('Renda familiar disponible'));
d3.select('[prop="Atur"] h4').text(iJS._('Atur'));
d3.select('[prop="Fec Ad"] h4').text(iJS._('Fecunditat adolescent'));
d3.select('[prop="EV"] h4').text(iJS._('Esperança de vida'));
d3.select('[prop="TBC"] h4').text(iJS._('Tuberculosi'));

// html2
d3.select('body#g2 .info_pdf a').html(iJS._('Descarrega Taula general <strong>Urban Hear</strong> en pdf'));
if(lang=='es'){
  d3.select('body#g2 .info_pdf a').attr("href","../common/data/UrbanHeart_es.pdf")
}

//html3
d3.select('body#g3 h4').text(iJS._('18 Barris amb indicadors més desfavorables'))
d3.select('body#g3 .districte').text(iJS._('Districte'))
d3.select('body#g3 .barri').text(iJS._('Barri'))
iJS._('més favorables');
iJS._('més favorable');
iJS._('nivell mig');
iJS._('més desfavorables');

//html4
d3.select('body#g4 h4').text(iJS._('Renta familiar disponible per càpita 2014'))
d3.select('body#g4 span.info').text(iJS._("El 2014 és manté el fort contrast entre la zona oest i nord-est i s'accentua la polarització per eixamplar-se la distancia entre el barris amb valors extrems"))


//html5
d3.select('body#g4 h4').text(iJS._('Renta familiar disponible per càpita 2014'))



//html6 html7 html8
d3.select('body#g6 h2').text(iJS._('LA TRINITAT NOVA'))
d3.select('body#g7 h2').text(iJS._('EL BON PASTOR - BARÓ DE VIVER'))
d3.select('body#g8 h2').text(iJS._('BESÒS I MARESME'))

d3.select('body#g6 .Bname').text(iJS._('La Trinitat Nova'))
d3.select('body#g7 .Bname').text(iJS._('el Bon Pastor'))
d3.select('body#g7 .Bname2').text(iJS._('Baró de Viver'))
d3.select('body#g8 .Bname').text(iJS._('Besòs i Maresme'))


d3.select('body.graphtable .legend_info').text(iJS._('Significat en base 100 per la ciutat de Barcelona.'))
d3.select('body.graphtable .legend1').text(iJS._('25% amb millor indicador'))
d3.select('body.graphtable .legend2').text(iJS._('50% amb valors intermitjos'))
d3.select('body.graphtable .legend3').text(iJS._('25% amb pitjor indicador'))

d3.select('body.graphtable .index .sobree').text(iJS._('Índex de sobre-envelliment'))
d3.select('body.graphtable .index .soles').text(iJS._('% de persones 75 anys o més que viuen soles'))
d3.select('body.graphtable .index .rendFdispo').text(iJS._('Índex Renda Familiar Disponible'))
d3.select('body.graphtable .index .ePrimaris').text(iJS._('% persones de 15 anys o més amb estudis primaris o menys'))
d3.select('body.graphtable .index .atur').text(iJS._('% atur registrat 16-64 anys'))
d3.select('body.graphtable .index .abstencio').text(iJS._('% abstenció muncipals'))
d3.select('body.graphtable .index .eVida').text(iJS._('Esperança de vida al nèixer'))
d3.select('body.graphtable .index .mortalitatC').text(iJS._('Raó de mortalitat comparativa'))
d3.select('body.graphtable .index .vidaPerduts').text(iJS._("Raó d'Anys Potencials de Vida Perduts"))
d3.select('body.graphtable .index .taxTuberco').text(iJS._('Taxa de tuberculosi'))
d3.select('body.graphtable .index .fecunditatA').text(iJS._('Taxa de fecunditat adolescent'))
d3.select('body.graphtable .index .baixPes').text(iJS._('Prevalència baix pes en nèixer'))
// d3.select('body.graphtable .index .sobree').text(iJS._('Índex de sobre-envelliment'))

d3.select('body.graphtable h3').text(iJS._('Indicadors socioeconòmics:'))

d3.select('body.graphtable .indicadors').text(iJS._('Indicadors'))
d3.select('body.graphtable .mitjanaC').text(iJS._('Mitjana ciutat'))
d3.select('body.graphtable .poblacio').text(iJS._('Població. Juny 2014'))
d3.select('body.graphtable .superficie').text(iJS._('Superfície (km2)'))
d3.select('body.graphtable .densitat').text(iJS._('Densitat (hab/km2)'))
d3.select('body.graphtable .poblacioE').text(iJS._('Població per edat'))
d3.select('body.graphtable .poblacioN').text(iJS._('Població per lloc de naixament'))
d3.select('body.graphtable .RestaCat').text(iJS._('Resta de Catalunya'))
d3.select('body.graphtable .RestaEs').text(iJS._('Resta de Espanya'))
d3.select('body.graphtable .Estranger').text(iJS._('Estranger'))
d3.select('body.graphtable .poblacioNacio').text(iJS._('Població per nacionalitat'))
d3.select('body.graphtable .Espanyols').text(iJS._('Espanyols'))
d3.select('body.graphtable .Estrangers').text(iJS._('Estrangers'))
d3.select('body.graphtable .titulatsSup').text(iJS._('Titulats superiors i CFGS'))
d3.select('body.graphtable .p65sola').text(iJS._('Població de més de 65 anys que viu sola'))
d3.select('body.graphtable .inSobreE').text(iJS._('Índex de sobreenvelliment'))
d3.select('body.graphtable .aturatsR').text(iJS._('Nombre d’aturats registrats'))
d3.select('body.graphtable .rendaFH').text(iJS._('Renda familiar disponible per habitant'))
d3.select('body.graphtable .indicadors').text(iJS._('Indicadors'))
d3.select('body.graphtable .indicadors').text(iJS._('Indicadors'))
d3.select('body.graphtable .indicadors').text(iJS._('Indicadors'))
