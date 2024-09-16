# Definindo rotas com Angular Routing

### Criar uma aplicação angular
    ng new segundo-programa-angular --no-standalone

### Abrir aplicação
    ng serve

### Criar componentes
    ng generate component nomeComponent --skip-tests (nao cria testes)     | ng g c
    ng generate component shared/navbar --skip-tests

### Angular Routing
    Routing em angular significa que o usuário pode criar uma single-page application (SPA) com multiplas views e permite
    a navegação entre essas views.
    Os usuarios podem trocar entre estas views sem perder os dados da sessão.

### Como criar Routing no Angular
    - Crie um menu de navegação e passe o routerLink como propriedade para os links (ao invés de usar o href).
    - Adicione a rota no app-routing.module.ts
        - Dentro do campo Routes, adicione um objeto, com as propriedades "path" e component
            - Em path você coloca qual é a rota, exemplo: "cadastro"
            - Em component vocÊ passa o component, então o vscode irá importar o component.
    
    Exemplo:
    - Crie um menu de navegação e passe o routerLink como propriedade para os links (ao invés de usar o href).
    navbar.component.html
        <a routerLink="/cadastro">Cadastro</a>

    - Adicione a rota no app-routing.module.ts
        em Routes = [] adicione um objeto:
    { "path": 'cadastro', component: CadastroComponent }

### Formas de percorrer listas no Angular
    - @for (produto of produtos; track $index) {

    }
    - <div *ngFor="let produto of produtos"> -> passado como parâmetro nas tags html

    </div>

### Condicional
    - @if () {} || @else {}
    - *ngIf -> passado como propriedade nas tags html
    
### Criação de classes
    - Como criar uma propriedade: public nomePropriedade: tipo;
    Exemplo:
    public nome: string;
### Como criar um array 
    public produtos: Array<Tipo> = new Array<Tipo>();

### ROTAS DO FRONTEND NAO SÃO ROTAS DO BACKEND