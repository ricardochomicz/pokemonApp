# Pokémon App

Este é um aplicativo simples de listagem de Pokémon desenvolvido usando Ionic com Angular, que consome a API RESTful do [PokeAPI](https://pokeapi.co/).

## Visão Geral

O aplicativo permite visualizar uma lista de Pokémon, visualizar detalhes de cada Pokémon, favoritar Pokémon e pesquisar por Pokémon. A aplicação utiliza sessionStorage para armazenar os Pokémon favoritos.

## Funcionalidades

- Listagem de Pokémon com paginação
- Visualização dos detalhes de cada Pokémon
- Marcar Pokémon como favorito
- Buscar Pokémon por nome
- Interface responsiva e adaptável a mudanças de orientação

## Estrutura do Projeto

- `src/`
  - `app/`
    - `services/` - Contém os serviços utilizados para acessar a API e gerenciar favoritos
      - `pokemon.service.ts` - Serviço para consumir a PokeAPI
      - `favorite.service.ts` - Serviço para gerenciar Pokémon favoritos no sessionStorage
      - `toast.service.ts` - Serviço para exibir mensagens toast
    - `pages/`
      - `pokemon-list/` - Página para listar Pokémon
      - `pokemon-detail/` - Página para exibir detalhes do Pokémon
      - `pokemon-favorites/` - Página para exibir Pokémon favoritos
  - `assets/` - Contém os arquivos estáticos do projeto
  - `environments/` - Contém os arquivos de configuração de ambiente

## Configuração do Ambiente de Desenvolvimento

### Requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 14.x ou superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (versão recomendada: 6.x ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/pokemon-app.git
   cd pokemon-app
