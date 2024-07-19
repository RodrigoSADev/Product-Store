
# Product Store

Product Store é uma aplicação web desenvolvida em Angular que simula um gerenciamento de inventário de produtos, proporcionando um conjunto completo de ferramentas para o controle e organização de produtos.


## Stack Utilizada

**Front-end:** Angular, TypeScript, Angular Material, Sass, Cypress

**Back-end:** Json Server


## Funcionalidades

- Cadastro de Produtos: Permite adicionar novos produtos ao inventário com informações detalhadas como nome, descrição, preço, categoria e quantidade em estoque.
- Edição de Produtos: Facilita a atualização das informações dos produtos já cadastrados, assegurando que os dados estejam sempre atualizados.
- Exclusão de Produtos: Possibilita a remoção de produtos do inventário de forma simples e segura.
- Visualização de Produtos: Exibe uma lista completa dos produtos cadastrados, com opção de visualização detalhada de cada item.
- Filtro: Oferece opções de filtro por categoria para encontrar produtos específicos rapidamente.
- Validação de Formulários: Implementa validações nos formulários de cadastro e edição de produtos para garantir a integridade e consistência dos dados inseridos.

## Documentação da API - Json Server

#### Retorna todos os produtos

```http
  GET /products
```
#### Retorna um produto

```http
  GET /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Adiciona um novo produto

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `payload`      | `ProductPayload` | **Obrigatório**. O objeto contendo os dados do novo produto |

Exemplo de payload:
```http
{
  "name": "Produto Exemplo",
  "description": "Descrição do produto exemplo",
  "price": 100,
  "quantity": 10,
  "category": "Categoria Exemplo"
}
```

#### Atualiza um produto

```http
  PUT /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você deseja atualizar |
| `payload`      | `ProductPayload` | **Obrigatório**. O objeto contendo os dados atualizados do produto |

Exemplo de payload:
```http
{
  "name": "Produto Exemplo Atualizado",
  "description": "Descrição atualizada do produto exemplo",
  "price": 120,
  "quantity": 15,
  "category": "Categoria Exemplo"
}
```

#### Deleta um produto

```http
  DELETE /products/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você deseja deletar |

#### Retorna produtos por categoria

```http
  GET /products?category=${category}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `category`      | `string` | **Obrigatório**. A categoria dos produtos que você deseja |

Exemplo de URL:
```http
  GET /products?category=exemplo
```
## Screenshots

![Captura de tela de 2024-07-03 23-24-44](https://github.com/RodrigoSADev/Product-Store/assets/97991094/cfee55e5-6cac-4ec2-8560-e7d5754dfb04)

![Captura de tela de 2024-07-03 23-25-19](https://github.com/RodrigoSADev/Product-Store/assets/97991094/c898d970-b571-434d-933e-cf312a740351)

![Captura de tela de 2024-07-03 23-25-28](https://github.com/RodrigoSADev/Product-Store/assets/97991094/a2047dca-b719-4428-8dbb-f71201522f58)

![Captura de tela de 2024-07-03 23-26-26](https://github.com/RodrigoSADev/Product-Store/assets/97991094/4585faba-2aad-4389-9af3-9a324d82cde8)

![Captura de tela de 2024-07-03 22-45-17](https://github.com/RodrigoSADev/Product-Store/assets/97991094/db4b1fbc-bfc0-4c96-9976-2ad89ce68424)

## Como rodar o projeto na sua máquina

### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

    Node.js (versão 12 ou superior)
    Angular CLI (versão 12 ou superior)

### Configuração do projeto

Siga os passos abaixo para configurar o projeto em sua máquina:

Clone o repositório para o seu ambiente local: ```git clone https://github.com/RodrigoSADev/Product-Store```

Navegue até o diretório do projeto: ```cd nome-do-repositorio```

Instale as dependências do projeto: ```npm install```

### Executando o projeto

Após a configuração, você pode executar o projeto localmente. Utilize o seguinte comando: ng serve

A aplicação estará disponível em http://localhost:4200/. A página será recarregada automaticamente sempre que houver alterações no código.

### Executando testes

Este projeto utiliza o Cypress para execução de testes E2E. Para rodar os testes unitários, utilize o seguinte comando: ```npx cypress open```

Este projeto utiliza o Karma e o Jasmine para execução de testes unitários. Para rodar os testes unitários, utilize o seguinte comando: ```ng test```

Isso iniciará a execução dos testes e mostrará os resultados no terminal.

