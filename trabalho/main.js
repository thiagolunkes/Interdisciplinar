function pesquisar() {
    var cidade = document.getElementById("select").value;
    const url = 'http://www.portaltransparencia.gov.br/api-de-dados/bpc-por-municipio?mesAno=201911&codigoIbge='+cidade+'&pagina=1';
    
    var xhr = new XMLHttpRequest();
    
     xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
     xhr.setRequestHeader("chave-api-dados", "84d3b852456a635f20ee9ea7672a2f4e");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
        document.getElementById('quantidade').innerHTML = "Essa cidade teve "+JSON.parse(xhr.responseText)[0]['quantidadeBeneficiados']+" de benefiarios do BPC em novembro de 2019";
        }
        }
}
