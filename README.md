# Cartão de Crédito Válido

***

## 1. Introdução 

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

[Projeto Final](https://danubiabcamargo.github.io/cartao-valido/)

Criação desse projeto foi baseado no site de locação de carros da empresa [Localiza](https://www.localiza.com/brasil/pt-br), desenvolvido para os usuários escolherem seu tipo de locação e finalizar
a reserva e poderem confirmar se seu cartão é válido ou não. No momento ele está desenvolvido apenas para entrada de números, futuramente 
quero agregar mais informações.


## 3. Desenvolvimento do Projeto

- Realizei o esboço no papel em seguida passei o projeto para **Figma** <br>
gostei de utilizar do Figma pois fiz um curso no SENAI e achei uma forma de olhar o projeto e ajuda na hora da criação.

### Primeira página do usuário
<img src="figma.png">
<br>

* Não consegui finalizar o projeto como fiz no protótipo, pretendo finalizar. <br><br>

## 4. Projeto Final

### Tela Inicial
<img src="primeira.jpg">
<br><br>

### Quando usuário clicar no botão de reserve agora, vai ser direcionado para validação do cartão de crédito.
<img src="segunda.jpg">
<br>

*  Caso o cartão for válido vai aparecer um alerta na tela com duas opções cartão válido ou inválido.

## 5. Ferramentas Utilizadas

* Figma
* HTML
* CSS
* Github

## 6. Referência Estudo

* Colegas do Bootcamp
* Stack Overflow
* ChatGBT
* MDN
* Google em geral
* Muitos vídeos do Guanabara para entender o conceito
