# Loja Angular

Uma loja de produtos com Angular, os produtos são aleatórios, a cada vez que a página é recarregada, novos produtos são gerados,
as imagens são aleatórias da API do [picsum.photos](https://picsum.photos/).

## Instalação
1. Clone o repositório:
   ```bash
   git clone 
   ```
2. Navegue até o diretório do projeto:
   ```bash
    cd loja-angular
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
5. Abra o navegador e acesse `http://localhost:4200/`.

## Tecnologias Utilizadas
- Angular
- TypeScript

## Funcionalidades
- Exibição de produtos aleatórios
- Ver detalhes do produto

## Arquivos

```
└── app
    ├── pages # Paginas da aplicação
    │   ├── details # Detalhes do produto
    │   └── home # Página inicial com lista de produtos
    └── shared # Componentes compartilhados
        └── header # Cabeçalho da aplicação
```