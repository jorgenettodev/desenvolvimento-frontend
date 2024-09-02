# Criando primeiro projeto com Angular


# Configurações iniciais

## Instalação normal [Global]
    - npm install -g @angular/cli

### Criação da aplicação Angular
    ng new primeoro-programa-angular --no-standalone

### Executar aplicação
    - ng serve -o

### Single Page Application
- Aplicativo de página única é um aplicativo que interage com o usuário carregando dinicamente a pagina atual com novos dados
do servidor web, ao invés de recarregar a página inteira.

# O que são componentes em Angular
    Um componente no Angular é uma unidade reutilizável que combina HTML, CSS e TypeScript para formar uma parte da interface de uma aplicação. Ele representa uma parte específica da aplicação, como um menu, um formulário ou uma barra de pesquisa.

    Referência:
    (Medium)[https://medium.com/@f.marinho162001/angular-parte-1-componentes-ea21520b1f37#:~:text=Um%20componente%20no%20Angular%20%C3%A9%20uma%20unidade%20reutiliz%C3%A1vel,menu%2C%20um%20formul%C3%A1rio%20ou%20uma%20barra%20de%20pesquisa.]

# 
    Um componente em angular, geralmente, sempre terá no mínimo 3 arquivos:
        sendo: html, css, ts

### Como criar um componente
    ng generate component nome-componente
    ng generate componenent components/views/home