<!--
Porpadronização, o template para esse Readme foi retirado do link abaixo, e os comentários do proprietário serão mantidos para guiar futuras mudanças dos participantes do projeto.
https://github.com/othneildrew/Best-README-Template/blob/master/README.md
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">RayPay QR</h3>

  <p align="center">
    Meio web React para o aplicativo de pagamento da RayPay
    <br />
    <a href="https://github.com/maxjonata/raypay-web"><strong>Explore a documentação »</strong></a>
    <br />
    <br />
    <a href="https://github.com/maxjonata/raypay-web">🚧<strike>Ver demonstração.</strike>🚧</a>
    ·
    <a href="https://github.com/maxjonata/raypay-web">Reportar um bug</a>
    ·
    <a href="https://github.com/maxjonata/raypay-web">Pedir novidades</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Sobre o projeto](#sobre-o-projeto)
  * [Criado com](#criado-com)
* [Utilizando o site](#utilizando-o-site)
  * [Pre-requisitos](#pre-requisitos)
  * [Como conseguir um QRCode](#como-conseguir-um-qrcode)
* [Como usar](#como-usar)
* [Roadmap](#roadmap)
* [Contatos](#contatos)
* [Reconhecimentos](#reconhecimentos)



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Existem muitas idéias de soluções para acessibilidade de compra física para cegos, mas todas parecem poucos viáveis financeiramente. A RayPay decide então criar um projeto que seja verdadeiramente "Acessível". Esta é a versão inteiramente WEB e responsiva deste projeto que se baseia primáriamente em App.

Motivos para versão WEB:
* Grande parte da população já possui acesso a um celular com internet podendo acessar sites.
* O problema de se criar um APP que funcione perfeitamente em todos os celulares some. Ideal para teste de projeto antes da solução definitiva.

Lembrando que o objetivo deste não é ser a versão final, mas sim funcional para um teste geral.

### Criado com
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React](https://pt-br.reactjs.org)



<!-- GETTING STARTED -->
## Utilizando o site

Basta entrar no site em "Ver demonstração" abaixo do ícone aqui no readme, permitir o acesso à câmera e apontar para um dos QRCodes permitidos do projeto.

### Pre-requisitos

Precisará ter em mãos um QRCode viável ao projeto de pagamento.
* Formato padrão atual do QRCode
```json
{
    "VALOR":20.0,
    "METODO":"Crédito",
    "QUANTIDADE_DE_PARCELAS":4.0
}
```
_No caso de números decimais, a separação é feita por ponto em vez de vírgula_

### Como conseguir um QRCode

1. Entre neste site: [QR Code Generator](https://br.qr-code-generator.com)
2. Selecione o modo de texto.
3. Cole o formato padrão do QRCode na área de texto e faça as alterações que deseja nos valores.
4. O código já terá sido gerado no lado direito, basta scannear com o celular no site.



<!-- USAGE EXAMPLES -->
## Como usar

Aponte a câmera para um código QR e retornará as informações de forma legível e acessível por talkback, a partir daí é só confirmar ou cancelar para ler um novo.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

Veja a janela de [issues](https://github.com/maxjonata/raypay-web/issues) para uma lista de funcionalidades propostas (e problemas conhecidos).

<!-- CONTACT -->
## Contatos

João Alfredo - joaoalfredoff@outlook.com.br

Project Link: [https://github.com/maxjonata/raypay-web](https://github.com/maxjonata/raypay-web)



<!-- ACKNOWLEDGEMENTS -->
## Reconhecimentos
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
    * [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
    * [Img Shields](https://shields.io)
    * [Choose an Open Source License](https://choosealicense.com)
    * [GitHub Pages](https://pages.github.com)
    * [Animate.css](https://daneden.github.io/animate.css)
    * [Loaders.css](https://connoratherton.com/loaders)
    * [Slick Carousel](https://kenwheeler.github.io/slick)
    * [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
    * [Sticky Kit](http://leafo.net/sticky-kit)
    * [JVectorMap](http://jvectormap.com)
    * [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
