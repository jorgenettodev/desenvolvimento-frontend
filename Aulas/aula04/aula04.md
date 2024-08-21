# Criando api com Node e MongoDB

## Instalando dependencias
    npm init -y
    npm i express
    npm i mongoose

## Criar modelo no mongoose
    - importa o mongoose
    - cria o modelo/schema
    - cria a região na memoria utilizando mongoose.model('nomeDaRegiao', nomeDoSchema);
    - exporta o modelo;

## Async/Await
    Em várias situações no mongoose é necessário usar async/await para não quebrar a aplicação.
    Isto é feito pois é necessário esperar o servidor processar a requisição.

## Recomendacão de leitura
    - Bcrypt
    - nodemon