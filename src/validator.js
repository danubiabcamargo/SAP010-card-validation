const validator = {
  isValid(cartaocredito) { //isValid funções ou métodos que verificam se algo é válido
    function NumberDigitado(number) {//função q vai validar o cartão
      if (number < 9) {//os numeros precisam ser verificados por posição
        return number;
      }
      else {
        return number % 10 + 1;
      }
    }
    let somaPar = 0;//números sempre iniciam em 0
    let somaImpar = 0;
    let aux = 0;


    //for é uma estrutura de controle de fluxo em JavaScript que permite executar repetidamente um bloco de código enquanto uma condição for verdadeira.;
    for (let p = cartaocredito.length - 2; p >= 0; p = p - 2) {
      aux = parseInt(cartaocredito.charAt(p) + "");
      somaPar = somaPar + NumberDigitado(aux * 2);//em loop até que todos os números sejam * pelo o aux*2
    }

    for (let i = cartaocredito.length - 1; i >= 0; i = i - 2) {// -1 que pegará as posições impares.
      aux = parseInt(cartaocredito.charAt(i) + "");
      somaImpar = somaImpar + aux;
    }

    if ((somaPar + somaImpar) % 10 === 0) {//condição se os loops acima forem multiplos de 10 = verdadeiro ou não
      return true;
    }
    else {
      return false;
    }
  },

}
export default validator;


//parseInt - é uma função nativa em JavaScript que converte uma string em um número inteiro.
//charAt -  é um método em JavaScript que retorna o caractere de uma string na posição especificada. A posição é especificada como um índice inteiro entre 0 e o comprimento da string menos 1. O primeiro caractere da string está na posição 0,
// o segundo caractere está na posição 1, e assim por diante.
