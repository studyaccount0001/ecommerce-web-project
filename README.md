# fluffshop - E-commerce Web Project

![Logo](https://github.com/opaulosoares/ecommerce-web-project/blob/main/branding/banner-github.png)

Projeto final para a disciplina de Introdução ao Desenvolvimento Web (SCC0219).

## Milestones
- <a href="https://github.com/opaulosoares/ecommerce-web-project/tree/main/milestone-1" target="_blank">
  Milestone 1
  </a>
- Milestone 2 - TO-DO
- Milestone 3 - TO-DO

## Tópicos
- [Detalhes](#detalhes)
  - [Detalhes da empresa fictícia](#detalhes-da-empresa-fictícia)
- [Protótipos](#protótipos)
  - [Figma](#figma)
  - [Navegação Figma](#navegação-figma)
  - [HTML/CSS](#htmlcss)
- [Tabela de Cores](#tabela-de-cores)
- [Documento de Requisitos](#documento-de-requisitos)
  - [Administrador](#administrador)
  - [Usuário comum](#usuário-comum)
    - [Funcionalidade extra](#funcionalidade-extra)
  - [Requisitos não-funcionais](#requisitos-não-funcionais)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagramas de navegação](#diagramas-de-navegação)

## Detalhes

| Identificador | Nome                           |
| ------------- | ------------------------------ |
| 11884713      | Paulo Henrique de Souza Soares |
| 11795680      | Natan Henrique Sanches         |
| 10873365      | Álvaro José Lopes              |

### Detalhes da empresa fictícia

-   **Nome:** Fluffshop
-   **Área de atuação:** _Pet-shop_ para cães e gatos.

## Protótipos

### Figma

<a href="https://www.figma.com/file/LzWsi7yFEvNQ4pdKTXLKaw/fluffshop?node-id=53%3A162" target="_blank">
Link para o projeto no Figma
</a>

### Navegação Figma

<a href="https://www.figma.com/proto/LzWsi7yFEvNQ4pdKTXLKaw/fluffshop?node-id=56%3A823&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=56%3A823" target="_blank">
Link para o protótipo com navegação completa no Figma
</a>

### HTML/CSS

<a href="https://opaulosoares.github.io/ecommerce-web-project/" target="_blank">
Protótipo em HTML + CSS
</a>

-   3 páginas feitas em HTML e CSS, como especificado.
    -   "Homepage", "Login" e "Foods"
-   Botões interativos nesse protótipo:
    -   "Sign In"
    -   "Foods"

## Documento de Requisitos

-   O sistema deve possuir dois tipos de usuários: **comum e administrador**.

    -   No sistema, os **administradores** são responsáveis por gerir outros administradores e produtos exibidos no site. O **administrador** possui **nome**, **identificador**, **telefone** e **e-mail**.
    -   No sistema, os usuários **comuns** utilizam o sistema para comprar produtos de Pet Shop. Os usuários **comuns** possuem **nome**, **identificador**, **telefone**, **endereço** e **e-mail**.

-   O sistema possui uma série de **produtos** que são exibidos para a compra _on-line_. Os registros dos **produtos** são compostos por **nome**, **identificador**, **foto**, **descrição**, **preço**, **pets recomendados** (especifica para qual tipo de _pet_ esse produto é recomendado), **quantidade em estoque** e **quantidade vendida**.

### Administrador

-   No sistema, o administrador pode **inserir** novos produtos para serem exibidos na loja.
-   No sistema, o administrador tem acesso às **listas** contendo os produtos ativos e inativos na loja.
-   No sistema, o administrador pode **remover** um produto existente na loja.
-   No sistema, o administrador pode dar o cargo de **Administrador** a um usuário **comum**.

### Usuário comum

-   No sistema, o usuário pode se **registrar** utilizando seu **e-mail**, **senha**, **nome**, **endereço** e **telefone**. Ao ser registrado, o usuário possui um perfil próprio no site ligado com seu **e-mail** e **senha**.
-   No sistema, um usuário comum pode **cadastrar** um número de cartão de crédito para pagamento.
-   No sistema, um usuário comum pode **procurar** por produtos através de uma barra de pesquisa.
-   No sistema, um usuário comum pode **adicionar** produtos desejados ao carrinho de compras.
-   No sistema, um usuário comum pode **remover** produtos do carrinho de compras.

#### Funcionalidade extra

-   O sistema permite que o usuário consulte para qual tipo de _pet_ aquele produto é recomendado. O tipo de _pet_ pode ser "Qualquer pet", "Cachorro pequeno", "Cachorro médio", "Cachorro grande", "Gato pequeno", "Gato médio", "Gato grande". Um produto pode ter mais de um tipo de _pet_ recomendado simultaneamente.

### Requisitos não-funcionais

-   O sistema deve ser responsivo e possuir boa usabilidade.
-   O sistema deve conter funcionalidades de acessibilidade para usuários.

### Dados

- **User**
  - Email
  - Password
  - Full Name
  - ZIP Code
  - Address 1 and 2
  - Phone
  - Country
  - State
  - ZIP Code

**OBS** Admins são inseridos pelo primeiro Admin do sistema por questões de segurança.

- **Food**
	- **Species**
		- Dog
		- Cat
	- **Age**
		- Newborn
		- Adult
	- **Food type**
		- Dry
		- Wet
		- Frozen

- **Treats**
	- **Species**
		- Dog
		- Cat
	- **Age**
		- Newborn
		- Adult
	- **Type**
		- Soft
		- Chewy
		- Dental

**Supplies**
	- **Species**
		- Dog
		- Cat
	- **Age**
		- Newborn
		- Adult
	- **Type**
<<<<<<< HEAD
    - Clothes & Accessories
    - Beds
    - Bowls & Feeders
    - Collars, Leashes and Harnesses
    - Gates, Crates & Kernels
    - Grooming
    - Toys
=======
	    	- Clothes & Accessories
	    	- Beds
	    	- Bowls & Feeders
	    	- Collars, Leashes and Harnesses
	    	- Gates, Crates & Kernels
	    	- Grooming
	    	- Toys
>>>>>>> 26ea575e645c1419e1277d3b8aa58a0743764e64
    
---

## Descrição do projeto

O _e-commerce_ desenvolvido para a disciplina foi o de uma _pet-shop_, _Fluffshop_, caracterizada em produtos para cães e gatos (alimentos, suprimentos e petiscos).

-   O site da _Fluffshop_ permite que o usuário veja a listagem de produtos disponíveis em estoque. Com isso, o usuário pode comprar algum produto colocando-o no carrinho e especificando sua quantidade. Em seguida, o pagamento é feito através de um número de cartão de crédito. Após processada a compra e efetuado o pagamento, o carrinho é esvaziado.

-   No sistema, estão cadastrados os produtos do tipo _Food_ (alimentos), _Supplies_ (suprimentos) e _Treats_ (petiscos). Cada produto distinto possui a sua própria página e esses podem ser filtrados de acordo com seu tipo. Dentre os produtos, são exibidos uma foto, seu nome, sua descrição e seu preço. Além disso, o usuário pode conferir uma seção que indica para qual tipo de _pet_ aquele produto é recomendado.
-   A manutenção dos produtos cadastrados é feita pelo administrador, que pode listar/inserir/remover produtos no banco de dados do sistema. O administrador é responsável pela manutenção do sistema como um todo, e também por gerir outros administradores.

-   O sistema também possui recursos não-funcionais, englobando contextos como **usabilidade**, **responsividade** e **acessibilidade**:

    -   **Usabilidade:** O site foi implementado visando as boas práticas no ramo de UI (_User Interface_) e UX (_User Experience_), contando com páginas diretas e limpas, com fácil navegação por parte do usuário.

    -   **Responsividade:** O site foi implementado de maneira que pudesse ser exibido, sem perda de informação ou deformação dos componentes, em qualquer tipo de tela.

    -   **Acessibilidade:** O site conta com um mecanismo de mudança de cores no estilo claro/escuro, respeitando os padrões visuais WCAG, de forma que torne-se acessível a usuários com problemas de visão.

## Diagramas de navegação

Diagrama de navegação do admin.

![](./milestone-1/navigation-diagram/admin-nav-diagram.png)

Uma versão simplificada do diagrama de navegação do site pode ser vista a seguir.

![](./milestone-1/navigation-diagram/simple-nav-diagram.png)

Além desta, também foi produzido um diagrama sendo uma versão mais detalhada da navegação, de maneira que pudesse ser visto o relacionamento entre as páginas com maior precisão.

![](./milestone-1/navigation-diagram/full-nav-diagram.png)


## Tabela de Cores

Tabela de cores com seus respectivos testes de acessibilidade no padrao WCAG 2.0.

<img src="./milestone-1/img/colors.png" alt="colors" style="width:500px"/>

Nem todas cores devem passar nos testes, pois nem todas são usadas como texto ou fundo do texto. Contudo, as cores "dark" e "white" estão compatíveis entre si no padrão WCAG 2.0, o que é extrememamente relevante para a acessibilidade do site, visto que serão as cores mais usadas para o texto e fundo do texto. O nome e variações das cores restantes podem ser modificadas durante o progresso do projeto, porém as cores "dark" e "white" serão mantidas, além das cores oficiais da marca. Essa prática de refatoração é bastante comum em projetos como esse, pois o produto encontra-se em constante evolução.
