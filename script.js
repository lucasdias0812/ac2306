class McLancheAlegre {
  constructor(carne, queijo, batatapequena, frutas) {
    this.carne = carne;
    this.queijo = queijo;
    this.batatapequena = batatapequena;
    this.frutas = frutas 
  }
}

class Biglanche {
  constructor(duascarnes, queijo, alface, molhobacana, cebola, picles, pão, batatamédia, bebida){
    this.duascarne = duascarnes;
    this.queijo = queijo;
    this.alface = alface;
    this.molhobacana = molhobacana;
    this.cebola = cebola;
    this.picles = picles;
    this.pão = pão;
    this.batatamédia = batatamédia;
    this.bebida = bebida
  }
}
class McHen {
  constructor(frangoempanado, queijo, alface, cebola, picles, pão, batatamédia, bebida){
    this.frangoempanado = frangoempanado;
    this.queijo = queijo;
    this.alface = alface;
    this.cebola = cebola;
    this.picles = picles;
    this.pão = pão;
    this.batatamédia = batatamédia;
    this.bebida = bebida
  }
}

recebimento(conta, valor){
  if (conta === conta.cpf) {
      //Essa função envia os valores ao banco do funcionário
      //já chequei os parâmetros de envio e estão certos
      bankApi.addValueBank(conta, valor);
  }
}