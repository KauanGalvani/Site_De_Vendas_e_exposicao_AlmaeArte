PRD — Alma E Arte
Versão: 0.7  

Documento: Product Requirements Document

Histórico da versão: versão 0.7 — inclusão da compra simulada, validação pela API e persistência dos registros no SQL Server. Não inclui pagamentos reais.

1. Resumo executivo
   O Alma E Arte será uma plataforma web destinada à apresentação e divulgação do trabalho artístico de uma artista.

O objetivo é reunir em um único espaço informações sobre a artista, sua história, sua trajetória e suas produções, permitindo que visitantes conheçam seu trabalho e explorem suas obras por meio de uma galeria.

A plataforma contará com informações e imagens das obras, incluindo descrições e preços quando disponíveis. Os interessados poderão entrar em contato com a artista pelo Instagram para demonstrar interesse em uma obra ou solicitar encomendas personalizadas.

Na primeira versão, além da apresentação e divulgação do trabalho artístico, o site permitirá que o visitante realize uma compra simulada de uma obra. Essa funcionalidade terá finalidade demonstrativa: a API validará a solicitação e registrará a compra no banco de dados, sem realizar pagamento real, cobrança ou movimentação financeira.

A plataforma não utilizará serviços externos de pagamento. A compra simulada não representa uma venda financeira efetiva nem garante disponibilidade, envio ou entrega da obra. O contato com a artista pelo Instagram continuará disponível para dúvidas e encomendas personalizadas.

Futuramente, o projeto poderá evoluir para uma plataforma comercial, com recursos adicionais de gerenciamento e venda efetiva de obras. 2. Contexto e problema
A artista possui presença nas redes sociais, principalmente no Instagram e no TikTok, onde divulga suas produções e compartilha parte de seu trabalho.

Seu contato com a arte começou ainda na infância, com incentivo dos pais e do irmão mais velho. Ao longo do tempo, a arte tornou-se uma forma de expressão, permitindo representar sentimentos, experiências e diferentes momentos de sua vida.

Suas produções envolvem diferentes técnicas e materiais, como aquarela, pintura em tela, desenhos em papel Canson, mandalas e peças decorativas em MDF, além de trabalhos que combinam técnicas, como costura e desenho.

Atualmente, a divulgação das obras acontece principalmente pelas redes sociais. Entretanto, as publicações e os stories acabam distribuindo as produções em diferentes conteúdos, o que pode dificultar a organização e a consulta das obras por pessoas interessadas.

Além disso, registrar os processos de criação e manter uma frequência constante de publicações pode representar um desafio.

Diante desse cenário, o Alma E Arte propõe reunir a apresentação da artista e suas produções em uma plataforma própria, oferecendo um espaço organizado para conhecer sua trajetória e visualizar suas obras.

O site também permitirá que visitantes acessem o Instagram da artista para conversar diretamente com ela sobre obras disponíveis e encomendas personalizadas. 3. Objetivos e métricas de sucesso
3.1 Objetivos principais

- Apresentar a artista, sua história, trajetória e identidade artística.
- Divulgar e organizar suas produções em uma galeria digital.
- Disponibilizar informações sobre as obras, incluindo imagens, descrições e preços quando aplicável.
  3.2 Objetivos complementares
- Facilitar o contato entre visitantes e artista por meio do Instagram.
- Divulgar as redes sociais da artista.
- Complementar a presença digital que ela já possui.
  3.3 Métricas de sucesso
  O sucesso da primeira versão será avaliado considerando:
- Apresentação clara das informações sobre a artista.
- Organização e visualização adequada das obras.
- Facilidade de navegação pela plataforma.
- Funcionamento correto dos links para Instagram e TikTok.
- Funcionamento adequado em computadores e dispositivos móveis.
- Funcionamento do fluxo de compra simulada e registro da operação no banco de dados.
  A avaliação será realizada por meio de testes funcionais e validação da experiência de navegação. A compra simulada será avaliada pela conclusão do fluxo e pela persistência do registro, sem depender de vendas ou pagamentos reais.

4. Público-alvo e stakeholders
   4.1 Público-alvo
   A plataforma será direcionada a:

- Pessoas interessadas em arte e trabalhos artesanais.
- Possíveis compradores interessados nas produções da artista.
- Pessoas que procuram obras personalizadas ou encomendas.
- Seguidores da artista no Instagram e TikTok.
- Visitantes que ainda não conhecem o trabalho da artista.
  4.2 Stakeholders
  Artista

Responsável por fornecer informações sobre sua história, trajetória, obras, imagens, descrições e preços, além de atender aos interessados pelo Instagram.

Desenvolvedor

Responsável pelo planejamento, desenvolvimento, implementação e manutenção inicial da plataforma.

Visitantes e possíveis clientes

Pessoas que utilizarão o site para conhecer a artista, visualizar suas produções e entrar em contato por meio das redes sociais. 5. Escopo da primeira versão (V1)
5.1 Funcionalidades incluídas
A primeira versão deverá contemplar:

- Página inicial: apresentação da artista e do projeto Alma E Arte, com acesso às principais áreas do site.
- Sobre a artista: apresentação de sua história, trajetória, inspirações e relação com a arte.
- Galeria de obras: exposição organizada das produções, incluindo mandalas, aquarelas, pinturas em tela e outras modalidades.
- Informações das obras: apresentação de imagens, títulos quando disponíveis, descrições e preços quando aplicável.
- Contato e encomendas: orientação para que os interessados entrem em contato pelo Instagram, incluindo dúvidas sobre obras e solicitações personalizadas.
- Redes sociais: disponibilização de links para os perfis oficiais do Instagram e TikTok.
- Compra simulada: possibilidade de selecionar uma obra e confirmar uma compra demonstrativa, com validação pela API, registro no banco de dados e apresentação de uma confirmação ao visitante.
- Responsividade: adaptação da plataforma para computadores, tablets e dispositivos móveis.
  5.2 Funcionalidades fora do escopo da V1
  Não farão parte da primeira versão:
- Pagamentos reais diretamente pelo site ou por serviços externos.
- Carrinho de compras com múltiplos itens e processamento de pedidos comerciais.
- Cálculo ou integração de frete.
- Cadastro e autenticação de clientes.
- Acompanhamento de pedidos.
- Controle automatizado de estoque.
- Painel administrativo para gerenciamento das obras.
  5.3 Limites da primeira versão
  O visitante poderá conhecer as obras, consultar suas informações, realizar uma compra simulada e acessar as redes sociais da artista.

A compra simulada será limitada ao fluxo demonstrativo previsto na V1. Ela não realizará cobrança, pagamento, reserva comercial, cálculo de frete ou envio da obra. O contato para dúvidas e encomendas personalizadas continuará sendo realizado pelo Instagram, sem sistema próprio de mensagens ou negociação dentro do site.

A inclusão e atualização das informações das obras serão realizadas pelo desenvolvedor durante o desenvolvimento e a manutenção inicial da plataforma. Não haverá painel administrativo ou CRUD para gerenciamento das obras.
5.4 Possíveis evoluções futuras
Em versões posteriores, poderão ser considerados:

- Pagamentos diretamente pela plataforma.
- Painel administrativo para a artista cadastrar, editar e remover obras.
- Gerenciamento de pedidos e encomendas.
- Integração com serviços de entrega.
- Recursos adicionais de divulgação e comercialização.

6. Jornadas e casos de uso
   6.1 Jornada principal do visitante
1. O visitante acessa o site diretamente ou por meio de um link divulgado nas redes sociais.
1. Conhece a apresentação da artista e sua proposta.
1. Explora a galeria de obras.
1. Seleciona uma produção para consultar suas informações.
1. Visualiza imagem, descrição e preço, quando disponível.
1. Caso queira experimentar o fluxo de compra, seleciona a opção de compra simulada.
1. Confirma a operação demonstrativa.
1. O sistema envia a solicitação à API, que valida a obra e os dados necessários e registra a compra simulada no banco de dados.
1. O visitante recebe uma mensagem de confirmação informando que a operação foi registrada como simulação, sem pagamento real.
1. Caso tenha dúvidas ou queira tratar de uma encomenda personalizada, o visitante poderá acessar o Instagram da artista.
   6.2 Jornada para encomendas personalizadas
1. O visitante acessa a plataforma.
1. Conhece as produções e as possibilidades de trabalhos personalizados.
1. Identifica a possibilidade de solicitar uma encomenda.
1. Acessa o perfil do Instagram da artista.
1. Entra em contato pelo direct para conversar sobre sua solicitação.
   6.3 Acesso direto às redes sociais
   O visitante também poderá acessar diretamente os perfis oficiais do Instagram e TikTok, sem precisar explorar todas as áreas da plataforma.
   6.4 Principais casos de uso

- Conhecer a história e a trajetória da artista.
- Visualizar a galeria de obras.
- Consultar informações e preços das produções.
- Realizar e confirmar uma compra simulada de uma obra.
- Receber a confirmação do registro da compra simulada.
- Demonstrar interesse em uma obra por meio do Instagram.
- Solicitar informações sobre encomendas personalizadas.
- Acessar os perfis da artista nas redes sociais.

7. Requisitos funcionais
   Os requisitos funcionais descrevem as funcionalidades e ações que a plataforma deverá disponibilizar aos visitantes.
   7.1 Apresentação da artista
   RF01 — Exibir página inicial: o sistema deverá apresentar uma página inicial com informações introdutórias sobre o Alma E Arte e sua proposta artística.

RF02 — Apresentar informações da artista: o sistema deverá disponibilizar uma área com informações sobre a história, trajetória e identidade artística da artista.
7.2 Galeria de obras
RF03 — Exibir galeria de artes: o sistema deverá disponibilizar uma galeria com as obras cadastradas para visualização.

RF04 — Exibir informações das obras: o sistema deverá apresentar informações sobre cada obra, incluindo imagem, título quando disponível, descrição e preço quando aplicável.

RF05 — Organizar as obras: o sistema deverá apresentar as produções de maneira organizada, permitindo que os visitantes identifiquem e explorem os trabalhos.
7.3 Contato e encomendas
RF06 — Disponibilizar contato pelo Instagram: o sistema deverá oferecer acesso ao perfil oficial da artista no Instagram, permitindo que visitantes entrem em contato pelo direct.

RF07 — Permitir demonstração de interesse: a plataforma deverá orientar os visitantes interessados em uma obra a entrar em contato com a artista pelo Instagram.

RF08 — Divulgar encomendas personalizadas: o sistema deverá apresentar informações sobre a possibilidade de solicitar trabalhos personalizados, direcionando os interessados ao Instagram.
7.4 Redes sociais
RF09 — Disponibilizar links das redes sociais: o sistema deverá oferecer acesso aos perfis oficiais da artista no Instagram e TikTok.
7.5 Compra simulada
RF10 — Iniciar compra simulada: o sistema deverá permitir que o visitante inicie uma compra simulada a partir de uma obra disponível na galeria.

RF11 — Validar solicitação de compra: a API deverá validar a identificação da obra e os dados necessários para a operação antes de registrar a compra. O valor utilizado deverá corresponder ao valor definido para a obra no lado confiável da aplicação, não devendo ser aceito sem validação apenas por ter sido enviado pelo navegador.

RF12 — Registrar compra simulada: após a validação, a API deverá registrar no banco de dados as informações essenciais da compra simulada, incluindo identificador do registro, identificação da obra, valor considerado na operação e data e hora do registro.

RF13 — Apresentar confirmação: após o registro bem-sucedido, o sistema deverá informar ao visitante que a compra simulada foi concluída. Em caso de falha na validação ou no registro, deverá apresentar uma mensagem adequada, sem informar sucesso indevidamente.
7.6 Observações
Os requisitos apresentados correspondem ao escopo da primeira versão.

Não será desenvolvido um painel administrativo na V1. A inclusão e atualização das informações das obras serão realizadas pelo desenvolvedor. A compra simulada não exige cadastro ou autenticação de clientes e não envolve pagamento real. 8. Requisitos não funcionais
Os requisitos não funcionais estabelecem critérios relacionados à qualidade, usabilidade e funcionamento da plataforma.

RNF01 — Responsividade: o site deverá funcionar adequadamente em celulares, tablets e computadores, adaptando sua apresentação aos diferentes tamanhos de tela.

RNF02 — Desempenho: as páginas deverão apresentar um tempo de carregamento adequado, proporcionando uma boa experiência de navegação.

RNF03 — Legibilidade: os textos deverão apresentar boa leitura, com organização e hierarquia visual que facilitem a compreensão das informações.

RNF04 — Consistência visual: a plataforma deverá manter uma identidade visual consistente em suas diferentes áreas, respeitando a proposta artística do projeto.

RNF05 — Facilidade de manutenção: a estrutura deverá permitir que informações e conteúdos, como imagens e descrições das obras, sejam atualizados pelo desenvolvedor sem dificuldades desnecessárias.

RNF06 — Segurança básica: a plataforma deverá evitar a exposição de informações sensíveis e adotar cuidados básicos de segurança durante seu desenvolvimento. 9. Critérios de aceite
Os critérios de aceite estabelecem as condições necessárias para considerar a primeira versão da plataforma funcional e adequada ao que foi proposto.

1. A página de apresentação deverá estar acessível e apresentar claramente a história e a identidade artística da artista.
2. A galeria deverá exibir as obras com imagens, descrições e preços quando disponíveis.
3. O visitante deverá conseguir iniciar e confirmar a compra simulada de uma obra.
4. A API deverá validar a solicitação e registrar a compra simulada no banco de dados.
5. Após o registro, o visitante deverá receber uma confirmação que deixe claro que se trata de uma simulação, sem pagamento real.
6. O link do Instagram deverá direcionar corretamente ao perfil oficial da artista, permitindo o contato pelo direct.
7. O site deverá funcionar adequadamente em celulares, tablets e computadores, sem apresentar problemas que prejudiquem a navegação.
8. A navegação deverá ser simples, permitindo que os visitantes encontrem as principais informações da plataforma com facilidade.
9. Os links para os perfis oficiais do Instagram e TikTok deverão funcionar corretamente.
10. A plataforma não deverá realizar pagamentos reais, cobranças ou movimentações financeiras.
11. A primeira versão não deverá incluir painel administrativo, cadastro de clientes, carrinho de múltiplos itens ou gerenciamento comercial automatizado de pedidos.
12. Dados e integrações
    10.1 Dados utilizados pela plataforma
    A plataforma deverá trabalhar com informações relacionadas à artista e às suas produções.

Informações da artista

- Nome ou identificação artística.
- História e trajetória.
- Apresentação e inspirações.
- Imagens relacionadas ao trabalho artístico.
  Informações das obras
- Imagens das produções.
- Título, quando disponível.
- Descrição.
- Preço, quando aplicável.
- Informações complementares necessárias para apresentar cada produção.
  Informações das redes sociais
- Endereço do perfil oficial do Instagram.
- Endereço do perfil oficial do TikTok.
  10.2 Integrações externas
  A primeira versão deverá disponibilizar links externos para os perfis oficiais da artista no Instagram e TikTok.

O Instagram será utilizado como canal de contato para dúvidas, demonstração de interesse nas obras e solicitações de encomendas personalizadas.

O TikTok terá finalidade de divulgação e acesso ao conteúdo publicado pela artista.
10.3 Compra simulada, pagamentos e transações
A primeira versão contará com uma funcionalidade de compra simulada. A solicitação será enviada pelo front-end Angular à API em ASP.NET Core, que deverá validar os dados da operação e registrar a compra simulada no SQL Server.

O registro deverá guardar, no mínimo, um identificador da compra, a identificação da obra, o valor considerado no momento da simulação e a data e hora do registro. O modelo detalhado dos dados será especificado na documentação técnica.

A compra é exclusivamente demonstrativa. Não haverá cobrança, processamento de transação financeira, integração com cartão de crédito, gateway ou serviço externo de pagamento, nem movimentação real de dinheiro. A confirmação apresentada ao visitante deverá deixar essa condição explícita.

A V1 não terá carrinho de múltiplos itens, cálculo ou integração de frete, nem acompanhamento comercial de pedidos. O registro da compra simulada não deve ser interpretado como confirmação de venda ou entrega da obra.
10.4 Gerenciamento dos dados
As informações e imagens das obras serão inseridas e atualizadas pelo desenvolvedor durante o desenvolvimento e a manutenção inicial.

Não haverá painel administrativo ou ferramenta de gerenciamento disponibilizada à artista na V1.

As informações das obras permanecerão previamente definidas no projeto, sem painel administrativo ou CRUD para seu gerenciamento. Os registros das compras simuladas serão persistidos no SQL Server. A API será desenvolvida em C# com ASP.NET Core Web API, utilizando Entity Framework Core para acesso e persistência dos dados. O detalhamento da estrutura técnica será apresentado no TDD. 11. Riscos, premissas e dependências
11.1 Riscos
Disponibilidade de conteúdo: a falta de imagens, descrições ou informações sobre determinadas obras poderá limitar o conteúdo apresentado na galeria.

Atualização das informações: como a primeira versão não terá painel administrativo, as alterações nas obras dependerão do desenvolvedor, podendo exigir manutenção para atualizar o conteúdo.

Dependência das redes sociais: o contato com a artista dependerá do funcionamento e da disponibilidade do Instagram. Alterações nos perfis ou nas plataformas externas poderão afetar o acesso.

Compatibilidade e responsividade: diferenças entre dispositivos e navegadores poderão ocasionar problemas de apresentação ou navegação, exigindo testes e ajustes.
11.2 Premissas

- A artista fornecerá as informações necessárias para sua apresentação e divulgação das obras.
- As imagens e descrições utilizadas no site serão disponibilizadas ou autorizadas pela artista.
- Os preços das obras serão informados pela artista quando aplicável.
- O Instagram e o TikTok da artista estarão disponíveis para divulgação e acesso dos visitantes.
- O contato sobre obras e encomendas será realizado pelo direct do Instagram.
- A primeira versão permitirá somente compras simuladas, sem vendas financeiras efetivas, cobranças ou pagamentos reais.
- Os registros das compras simuladas serão armazenados no banco de dados da aplicação.
- A inclusão e atualização dos conteúdos serão realizadas pelo desenvolvedor.
  11.3 Dependências
  O desenvolvimento da plataforma dependerá de:
- Disponibilidade das informações sobre a artista.
- Fornecimento das imagens e informações das obras.
- Disponibilidade dos endereços dos perfis oficiais do Instagram e TikTok.
- Definição das tecnologias e da estrutura técnica durante a etapa de planejamento e desenvolvimento.
- Disponibilidade de um ambiente para publicação e acesso à plataforma.

12. Questões em aberto e próximos passos
    12.1 Questões em aberto
    Algumas decisões ainda poderão ser definidas durante o planejamento e o desenvolvimento:

- Definição da identidade visual definitiva, incluindo paleta de cores, tipografia e elementos gráficos.
- Definição da organização visual das páginas e da navegação.
- Definição dos detalhes do armazenamento e gerenciamento do conteúdo estático das obras; os registros de compras simuladas serão armazenados no SQL Server.
- Definição do ambiente de hospedagem e publicação do site.
- Organização e seleção das imagens e informações que serão utilizadas na galeria.
- Definição de possíveis categorias ou formas de organização das obras.
  Essas decisões não impedem a continuidade do projeto e poderão ser detalhadas nas próximas etapas da documentação.
  12.2 Próximos passos
  Após a conclusão e revisão do PRD, o desenvolvimento do projeto seguirá as próximas etapas:

1. Revisão do PRD: leitura completa da versão 0.7 para identificar possíveis correções, ajustes ou informações que precisem ser acrescentadas.
2. Elaboração do TDD: documentação técnica do projeto, seguindo as orientações e o modelo apresentados no curso.
3. Elaboração do SDD: documentação da estrutura e do desenho da solução, conforme as orientações do curso.
4. Planejamento do desenvolvimento: definição da arquitetura, das tecnologias e da organização do projeto.
5. Desenvolvimento da plataforma: implementação das funcionalidades previstas no escopo da primeira versão.
6. Testes e validação: verificação do funcionamento das funcionalidades e da experiência de navegação.
7. Publicação: disponibilização da primeira versão da plataforma.
   12.3 Considerações finais
   O PRD estabelece os objetivos, o público, o escopo e os requisitos da primeira versão do Alma E Arte.

O documento servirá como referência para as próximas etapas de planejamento, documentação técnica e desenvolvimento, mantendo o projeto alinhado às necessidades da artista e às funcionalidades definidas para a V1.
