# TDD — Alma E Arte

### Documento de Design Técnico

**Versão:** 0.1  
**Status:** Rascunho inicial  
**Projeto:** Alma E Arte

---

## 1. Introdução

### 1.1 Objetivo

Este documento tem como objetivo apresentar a estrutura técnica e as decisões de desenvolvimento do projeto Alma E Arte, servindo como guia para sua implementação.

### 1.2 Escopo

O documento descreve a arquitetura da aplicação, as tecnologias utilizadas, a comunicação entre Front-end e Back-end, a modelagem dos dados, as interfaces da API, os aspectos básicos de segurança e a estratégia de testes.

### 1.3 Referência ao PRD

O desenvolvimento técnico terá como referência o documento de Requisitos do Produto (PRD), que apresenta os objetivos, funcionalidades e limitações da plataforma.

---

## 2. Visão geral da solução

O Alma E Arte será desenvolvido como uma aplicação web, com um Front-end responsável pela apresentação da artista, exibição das obras e condução do fluxo de compra simulada.

O Front-end será desenvolvido utilizando Angular, enquanto o Back-end será construído com ASP.NET Core, disponibilizando uma API REST para registrar compras simuladas e consultar as informações necessárias.

As obras serão previamente definidas e inseridas diretamente no projeto, pois a primeira versão não prevê funcionalidades de cadastro ou gerenciamento dinâmico de obras.

A aplicação contará com um banco de dados para armazenar os registros das compras simuladas, sem envolver pagamentos reais ou movimentações financeiras.

---

## 3. Stack tecnológica

As tecnologias previstas para o desenvolvimento são:

- **Front-end:** Angular.
- **Linguagem do Front-end:** TypeScript.
- **Back-end:** C#.
- **Framework do Back-end:** ASP.NET Core.
- **Comunicação:** API REST.
- **Banco de dados:** SQL Server.
- **ORM:** Entity Framework Core.

O site será responsivo e terá como foco proporcionar uma experiência intuitiva para a apresentação das obras e realização da compra simulada.

---

## 4. Arquitetura do sistema

A aplicação utilizará uma arquitetura dividida entre Front-end e Back-end, com comunicação realizada por requisições HTTP.

O Angular será responsável pela interface, navegação, exibição das obras e condução do processo de compra simulada.

O Back-end, desenvolvido em ASP.NET Core, receberá as requisições enviadas pelo Front-end, realizará as validações necessárias e registrará as compras no banco de dados.

Após o processamento da compra, a API retornará uma resposta ao Angular, que apresentará uma confirmação ao usuário.

As obras serão mantidas diretamente no Front-end, não sendo necessário implementar funcionalidades de cadastro ou gerenciamento delas na API nesta versão.

---

## 5. Modelagem de dados

Como o projeto não prevê cadastro dinâmico de obras, o banco de dados será utilizado inicialmente para armazenar os registros das compras simuladas.

A estrutura inicial poderá contar com uma tabela de compras, contendo informações como:

- **Id:** identificador único da compra.
- **Obra:** identificação ou referência da obra adquirida.
- **Preço:** valor da obra no momento da compra.
- **Data da compra:** data e horário em que a compra simulada foi registrada.

Essa estrutura poderá ser ajustada durante o desenvolvimento, conforme as necessidades identificadas na implementação.

**Ponto técnico a confirmar:** a API precisará consultar uma fonte confiável para validar o preço da obra, sem depender exclusivamente do valor enviado pelo Angular.

---

## 6. Interfaces e API

A comunicação entre o Front-end e o Back-end será realizada por meio de uma API REST.

Os principais endpoints previstos inicialmente são:

### POST /compras

Responsável por receber os dados de uma compra simulada, realizar as validações necessárias e registrar a compra no banco de dados.

A resposta deverá apresentar as informações principais do registro realizado.

### GET /compras/{id}

Endpoint previsto para consultar uma compra específica a partir de seu identificador, caso essa consulta seja necessária para o funcionamento da aplicação.

No Angular, haverá um serviço responsável por realizar as chamadas à API e componentes responsáveis por apresentar as informações e a confirmação da compra ao usuário.

---

## 7. Segurança

A aplicação contará com validações básicas no Back-end para garantir que os dados recebidos pela API estejam corretos.

Entre os cuidados previstos estão:

- Verificar o envio dos campos obrigatórios.
- Validar os valores recebidos.
- Impedir o processamento de requisições malformadas.
- Garantir que os dados registrados estejam de acordo com as regras da aplicação.

Como a compra será simulada, não haverá processamento de pagamentos reais, armazenamento de dados de cartão ou integração com gateways de pagamento.

---

## 8. Estratégia de testes

O projeto contará com testes para verificar o funcionamento das principais funcionalidades e a comunicação entre seus componentes.

Estão previstos:

- **Testes unitários:** verificar as regras de negócio do Back-end, especialmente o processamento das compras simuladas.
- **Testes de integração:** verificar o funcionamento da API e sua comunicação com o banco de dados.
- **Testes funcionais:** verificar o fluxo de compra simulada no Front-end, desde a seleção da obra até a apresentação da confirmação.

---

## 9. Requisitos técnicos

A aplicação deverá atender a alguns requisitos técnicos para garantir qualidade e facilidade de manutenção.

Entre eles:

- Interface responsiva, adaptada a diferentes tamanhos de tela.
- Bom desempenho durante a navegação.
- Código organizado e de fácil manutenção.
- Separação adequada das responsabilidades entre Front-end e Back-end.
- Comunicação consistente entre a aplicação Angular e a API.

---

## 10. Roadmap de implementação

O desenvolvimento será organizado em etapas para facilitar a implementação e o acompanhamento do projeto.

1. Desenvolver a estrutura visual e o layout da galeria utilizando Angular.
2. Implementar a API em ASP.NET Core.
3. Desenvolver o endpoint responsável pelo registro das compras simuladas.
4. Configurar o banco de dados e implementar a persistência dos registros.
5. Integrar o Front-end com o Back-end.
6. Implementar e testar o fluxo completo de compra simulada.
7. Realizar os ajustes finais e organizar a documentação do projeto.

---

## 11. Requisitos técnicos complementares

O projeto deverá considerar aspectos técnicos complementares para garantir compatibilidade, desempenho e facilidade de manutenção.

### 11.1 Compatibilidade

A aplicação deverá funcionar adequadamente nos navegadores mais utilizados, proporcionando uma experiência consistente aos visitantes.

### 11.2 Responsividade

A interface deverá se adaptar a diferentes tamanhos de tela, permitindo a utilização em computadores, tablets e dispositivos móveis.

### 11.3 Desempenho e imagens

As imagens das obras deverão ser carregadas de maneira eficiente, evitando tempos de carregamento desnecessários e contribuindo para uma boa experiência de navegação.

### 11.4 Manutenção

O código deverá ser organizado de forma a facilitar futuras alterações, correções e melhorias na aplicação.

### 11.5 Ambiente de desenvolvimento

Deverão ser documentadas as configurações necessárias para executar o projeto localmente, incluindo versões do .NET, Node.js e demais dependências utilizadas.

---

**Fim do documento — TDD Alma E Arte, versão 0.1.**
