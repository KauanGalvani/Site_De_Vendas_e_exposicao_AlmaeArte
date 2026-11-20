TDD --- Alma E Arte
Documento de Design Técnico
Versão: 0.2
Status: Revisado
Projeto: Alma E Arte
Documento de referência: PRD --- Alma E Arte, versão 0.7

1. Introdução
   1.1 Objetivo
   Este documento apresenta a estrutura técnica e as decisões de
   desenvolvimento do projeto Alma E Arte, servindo como guia para sua
   implementação.
   1.2 Escopo
   O documento descreve a arquitetura da aplicação, as tecnologias
   utilizadas, a comunicação entre Front-end e Back-end, a modelagem
   inicial dos dados, as interfaces da API, os aspectos básicos de
   segurança e a estratégia de testes.
   1.3 Referência ao PRD
   O desenvolvimento técnico terá como referência o Product Requirements
   Document (PRD), versão 0.7, que define os objetivos, funcionalidades,
   requisitos e limitações da primeira versão da plataforma.

As decisões técnicas deste documento deverão respeitar o escopo
estabelecido no PRD, especialmente a ausência de pagamentos reais,
autenticação de clientes, painel administrativo e gerenciamento dinâmico
de obras. 2. Visão geral da solução
O Alma E Arte será desenvolvido como uma aplicação web. O Front-end será
responsável pela apresentação da artista, exibição das obras e condução
do fluxo de compra simulada.

O Front-end será desenvolvido utilizando Angular e TypeScript. O
Back-end será construído com C# e ASP.NET Core, disponibilizando uma API
REST para fornecer as informações necessárias e registrar compras
simuladas.

As obras serão previamente definidas no projeto, sem funcionalidades de
cadastro, edição ou remoção na V1. Para permitir a validação confiável
das compras, o Back-end deverá ter acesso à identificação e ao preço
oficial das obras. Essas informações serão mantidas em uma fonte
estática controlada pela aplicação e poderão ser disponibilizadas ao
Front-end por meio de uma operação de consulta.

O banco de dados SQL Server será utilizado inicialmente para armazenar
os registros das compras simuladas. Não haverá processamento de
pagamentos, cobranças ou movimentações financeiras. 3. Stack tecnológica
As tecnologias previstas para o desenvolvimento são:

- Front-end: Angular.
- Linguagem do Front-end: TypeScript.
- Back-end: C#.
- Framework do Back-end: ASP.NET Core.
- Comunicação: API REST por meio de requisições HTTP.
- Banco de dados: SQL Server.
- ORM: Entity Framework Core.
  O site será responsivo e deverá proporcionar uma experiência intuitiva
  para a apresentação das obras e realização da compra simulada.

As versões das ferramentas e dependências utilizadas deverão ser
registradas durante a configuração do ambiente de desenvolvimento. 4. Arquitetura do sistema
A aplicação utilizará uma arquitetura dividida entre Front-end e
Back-end, com comunicação realizada por requisições HTTP.
4.1 Front-end
O Angular será responsável por:

- Apresentar a página inicial e as informações sobre a artista.
- Exibir a galeria e os detalhes das obras.
- Apresentar os preços disponibilizados pela aplicação.
- Permitir que o visitante inicie e confirme uma compra simulada.
- Enviar as solicitações à API.
- Apresentar mensagens de sucesso ou falha conforme a resposta
  recebida.
- Disponibilizar os links para Instagram e TikTok.
  O Front-end não será considerado uma fonte confiável para determinar o
  preço de uma obra. Qualquer valor enviado pelo navegador deverá ser
  validado pelo Back-end.
  4.2 Back-end
  O ASP.NET Core será responsável por:
- Disponibilizar os endpoints necessários à aplicação.
- Fornecer as informações das obras previamente definidas.
- Validar a identificação da obra recebida em uma solicitação de
  compra.
- Consultar o preço oficial da obra em uma fonte controlada pelo
  Back-end.
- Registrar a compra simulada no SQL Server por meio do Entity
  Framework Core.
- Retornar respostas adequadas ao Front-end.
  4.3 Fonte de dados das obras
  As obras serão previamente definidas no projeto e não terão
  gerenciamento dinâmico na V1.

A identificação, a descrição e o preço oficial de cada obra deverão
estar disponíveis ao Back-end em uma fonte estática controlada pela
aplicação. O Front-end poderá consultar as informações disponibilizadas
pela API para apresentar a galeria.

Não será implementado CRUD de obras nem painel administrativo. A
inclusão e a atualização dos dados continuarão sob responsabilidade do
desenvolvedor.

Essa definição permite que a API valide o preço utilizando uma fonte
confiável, sem depender exclusivamente dos dados enviados pelo
navegador. 5. Modelagem de dados
Como o projeto não prevê cadastro dinâmico de obras, o banco de dados
será utilizado inicialmente para armazenar os registros das compras
simuladas.
5.1 Entidade Compra
A estrutura inicial poderá conter uma entidade de compra com os
seguintes dados:

- Id: identificador único do registro da compra simulada.
- ObraId: identificação da obra relacionada à operação.
- Preco: valor oficial considerado no momento da simulação.
- DataCompra: data e horário em que a compra simulada foi
  registrada.
  Os nomes definitivos das propriedades e os tipos de dados serão
  definidos durante a implementação e configuração do Entity Framework
  Core.
  5.2 Validação do preço
  A API não deverá confiar no preço enviado pelo Angular. Ao receber uma
  solicitação, deverá localizar a obra na fonte controlada pelo Back-end e
  obter o preço oficial.

O valor persistido deverá ser o preço obtido pelo Back-end, e não um
valor arbitrário enviado pelo navegador.

Caso a obra não exista ou não possua preço definido, a API deverá
rejeitar a solicitação e não registrar a compra simulada.

A estrutura poderá ser ajustada durante o desenvolvimento, conforme as
necessidades identificadas na implementação. 6. Interfaces e API
A comunicação entre o Front-end e o Back-end será realizada por meio de
uma API REST.

Os endpoints previstos inicialmente são:
GET /obras
Responsável por disponibilizar as informações das obras previamente
definidas, incluindo os dados necessários para a apresentação da
galeria.

Esse endpoint terá finalidade de consulta. Não permitirá cadastrar,
editar ou remover obras.
POST /compras
Responsável por receber os dados necessários para iniciar uma compra
simulada, validar a identificação da obra, consultar o preço oficial e
registrar a operação no banco de dados.

A solicitação deverá identificar a obra. O preço enviado pelo Front-end,
caso exista na requisição, não deverá ser utilizado como fonte confiável
para o registro.

Após o registro bem-sucedido, a API deverá retornar os dados essenciais
da operação e uma resposta que permita ao Angular apresentar a
confirmação da simulação.

Em caso de obra inexistente, ausência de preço ou falha no registro, a
API deverá retornar uma resposta de erro adequada, sem indicar que a
compra foi concluída.
GET /compras/{id} --- opcional
Poderá ser implementado caso surja uma necessidade concreta de consultar
uma compra simulada específica pelo identificador.

Esse endpoint não é essencial para o fluxo principal definido no PRD e
sua implementação ficará condicionada à necessidade identificada durante
o desenvolvimento.

No Angular, haverá um serviço responsável por realizar as chamadas à API
e componentes responsáveis por apresentar as informações e a confirmação
da compra ao visitante. 7. Segurança
A aplicação contará com validações no Back-end para garantir que os
dados recebidos pela API estejam de acordo com as regras da aplicação.

Entre os cuidados previstos estão:

- Verificar o envio dos campos obrigatórios.
- Validar a identificação da obra.
- Consultar o preço oficial em uma fonte controlada pelo Back-end.
- Não confiar exclusivamente em valores enviados pelo navegador.
- Impedir o processamento de requisições malformadas.
- Não registrar compras de obras inexistentes ou sem preço definido.
- Garantir que a confirmação de sucesso seja apresentada somente após
  o registro da compra.
  7.1 Autenticação
  A primeira versão não contará com cadastro ou autenticação de
  visitantes, conforme definido no PRD.

A API disponibilizará somente as operações necessárias ao funcionamento
público da plataforma. Não haverá área administrativa ou operações de
gerenciamento de obras.
7.2 Pagamentos
Como a compra será simulada, não haverá processamento de pagamentos
reais, armazenamento de dados de cartão ou integração com gateways e
serviços externos de pagamento. 8. Estratégia de testes
O projeto contará com testes para verificar o funcionamento das
principais funcionalidades e a comunicação entre seus componentes.

Estão previstos:
8.1 Testes unitários
Verificar as regras de negócio do Back-end, especialmente:

- Processamento de uma compra simulada válida.
- Rejeição de uma obra inexistente.
- Rejeição de uma obra sem preço definido.
- Utilização do preço oficial da obra, mesmo quando a requisição
  apresentar um valor diferente.
- Comportamento adequado diante de dados obrigatórios inválidos.
  8.2 Testes de integração
  Verificar o funcionamento da API e sua comunicação com o banco de dados,
  incluindo:
- Registro de uma compra simulada no SQL Server.
- Persistência dos dados essenciais da compra.
- Comportamento da API quando ocorre uma falha no registro.
- Retorno adequado das respostas dos endpoints.
  8.3 Testes funcionais
  Verificar o fluxo de compra simulada no Front-end, desde a seleção da
  obra até a apresentação da confirmação.

Também deverão ser verificados os cenários em que a compra não pode ser
concluída, garantindo que o visitante receba uma mensagem adequada e não
seja informado de um sucesso indevido. 9. Requisitos técnicos
A aplicação deverá atender a requisitos técnicos para garantir qualidade
e facilidade de manutenção.

Entre eles:

- Interface responsiva, adaptada a diferentes tamanhos de tela.
- Bom desempenho durante a navegação.
- Código organizado e de fácil manutenção.
- Separação adequada das responsabilidades entre Front-end e Back-end.
- Comunicação consistente entre a aplicação Angular e a API.
- Validação das informações no Back-end.
- Persistência dos registros das compras simuladas no SQL Server.
- Manutenção centralizada das informações confiáveis das obras, sem
  gerenciamento dinâmico na V1.

10. Roadmap de implementação
    O desenvolvimento será organizado em etapas para facilitar a
    implementação e o acompanhamento do projeto.
1. Definir a estrutura inicial do projeto Angular e do Back-end ASP.NET
   Core.
1. Organizar as informações estáticas das obras e disponibilizar sua
   consulta.
1. Desenvolver a estrutura visual e o layout da galeria utilizando
   Angular.
1. Implementar a entidade de compra e configurar o acesso ao SQL Server
   com Entity Framework Core.
1. Desenvolver o endpoint responsável pelo registro das compras
   simuladas.
1. Implementar as validações da obra e do preço oficial no Back-end.
1. Integrar o Front-end com o Back-end.
1. Implementar e testar o fluxo completo de compra simulada.
1. Realizar os ajustes finais e organizar a documentação do projeto.
1. Requisitos técnicos complementares
   O projeto deverá considerar aspectos técnicos complementares para
   garantir compatibilidade, desempenho e facilidade de manutenção.
   11.1 Compatibilidade
   A aplicação deverá funcionar adequadamente nos navegadores mais
   utilizados, proporcionando uma experiência consistente aos visitantes.
   11.2 Responsividade
   A interface deverá se adaptar a diferentes tamanhos de tela, permitindo
   a utilização em computadores, tablets e dispositivos móveis.
   11.3 Desempenho e imagens
   As imagens das obras deverão ser carregadas de maneira eficiente,
   evitando tempos de carregamento desnecessários e contribuindo para uma
   boa experiência de navegação.
   11.4 Manutenção
   O código deverá ser organizado de forma a facilitar futuras alterações,
   correções e melhorias na aplicação. A atualização das informações das
   obras deverá ser possível por meio da alteração da fonte estática
   mantida pelo desenvolvedor.
   11.5 Ambiente de desenvolvimento
   Deverão ser documentadas as configurações necessárias para executar o
   projeto localmente, incluindo versões do .NET, Node.js e demais
   dependências utilizadas.
