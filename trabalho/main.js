function pesquisar() {
    var cidade = document.getElementById("select").value;
    const url = 'http://www.portaltransparencia.gov.br/api-de-dados/bpc-por-municipio?mesAno=201911&codigoIbge='+cidade+'&pagina=1';
    
    var v = new XMLHttpRequest();
    
     v.open("GET","https://cors-anywhere.herokuapp.com/"+url);
     v.setRequestHeader("chave-api-dados", "84d3b852456a635f20ee9ea7672a2f4e");
    v.setRequestHeader("Accept", "*/*");
    v.send(null);
    
    v.onreadystatechange = function() {
      if(v.readyState === 4){
        console.log(JSON.parse(v.responseText));
        document.getElementById('quantidade').innerHTML = "Essa cidade teve "+JSON.parse(v.responseText)[0]['quantidadeBeneficiados']+" de benefiarios do BPC em novembro de 2019";
        }
        }
}
