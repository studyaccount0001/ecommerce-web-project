# E-Commerce Web Project

![Logo](https://github.com/opaulosoares/ecommerce-web-project/blob/main/docs/branding/banner-github.png)

This is the final assignment for the 2022's Web Development class.
It's divided in 3 main milestones, which can be checked through the available git branches.

| Identifier | Full name |
| --- | --- |
| 11884713 | Paulo Henrique de Souza Soares |
| 11795680 | Natan Henrique Sanches |
| 10873365 | Álvaro José Lopes |

## Fictional Company Details

- **Name:** Fluffshop
- **Business Field:** Pet shop for dogs and cats.

## Documento de Requisitos

- O sistema deve possuir dois tipos de usuários: **comum e administrador**.

  - No sistema, os **administradores** são responsáveis por gerir outros administradores e produtos exibidos no site. O **administrador** possui **nome**, **identificador**, **telefone** e **e-mail**.
  - No sistema, os usuários **comuns** utilizam o sistema para comprar produtos de Pet Shop. Os usuários **comuns** possuem **nome**, **identificador**, **telefone**, **endereço** e **e-mail**.

- O sistema possui uma série de **produtos** que são exibidos para a compra _on-line_. Os registros dos **produtos** são compostos por **nome**, **identificador**, **foto**, **descrição**, **preço**, **pets recomendados** (especifica para qual tipo de _pet_ esse produto é recomendado), **quantidade em estoque** e **quantidade vendida**.

### Administrador

- No sistema, o administrador pode **inserir** novos produtos para serem exibidos na loja.
- No sistema, o administrador pode **modificar** um produto já existente na loja. Os atributos que podem ser modificados são **nome**, **foto**, **descrição**, **preço**, **pets recomendados**, **quantidade em estoque** e **quantidade vendida**.
- No sistema, o administrador pode **procurar** por um produto já existente na loja.
- No sistema, o administrador pode **remover** um produto existente na loja.
- No sistema, o administrador pode dar o cargo de **Administrador** a um usuário **comum**.

### Usuário comum

- No sistema, o usuário pode se **registrar** através de um **e-mail** e **senha**. Ao ser registrado, o usuário possui um perfil próprio no site.
- No sistema, um usuário comum pode cadastrar um número de cartão de crédito.
- No sistema, um usuário pode **adicionar** produtos à lista de desejos.
- No sistema, um usuário pode **remover** produtos da lista de desejos.
- No sistema, um usuário comum pode **procurar** por produtos através de uma barra de pesquisa.
- No sistema, um usuário comum pode **adicionar** produtos desejados ao carrinho de compras.
- No sistema, um usuário comum pode **remover** produtos do carrinho de compras.

#### Fluxo de compra de produtos

- O usuário **comum** insere os produtos desejados no carrinho, com a quantidade de cada um. O pagamento é feito através de um número de cartão de crédito informado pelo usuário. A quantidade comprada é subtraida da **quantidade em estoque** e somada à **quantidade vendida** do(s) produto(s). Após o pagamento, o carrinho é esvaziado.

#### Funcionalidade extra

- O sistema permite que o usuário consulte para qual tipo de _pet_ aquele produto é recomendado. O tipo de _pet_ pode ser "Qualquer pet", "Cachorro pequeno", "Cachorro médio", "Cachorro grande", "Gato pequeno", "Gato médio", "Gato grande". Um produto pode ter mais de um tipo de _pet_ recomendado simultaneamente.

### Requisitos não-funcionais

- O sistema deve ser responsivo e possuir boa usabilidade.
- O sistema deve conter funcionalidades de acessibilidade para usuários.
