# Descrição do MVP Heart Failures

Este projeto foi desenvolvido com o objetivo de oferecer uma solução para classificar a probabilidade de um paciente desenvolver uma doença cardíaca, com base em informações obtidas através de exames realizados. O desenvolvimento faz parte do currículo da Pós-Graduação em Engenharia de Software da PUC-Rio, iniciado no módulo de Qualidade de Software, Segurança e Sistemas Inteligentes.

Este repositório contém o Frontend do MVP Heart Failures. Para você utilizar este Frontend é necessário instanciar a API do MVP Heart Failures que se encontra no repositório https://github.com/valkcastellani/heart_failure_api (https://github.com/valkcastellani/heart_failure_api).

---

# Como executar

Será necessário ter todos pacotes listados no `package.json` instalados.
Após clonar o repositório, é necessário ir ao diretório raiz, pelo terminal, para poder executar os comandos descritos abaixo.

```
npm install
```

Este comando instala todas as dependências/bibliotecas, descritas no arquivo `package.json`.

Para executar o Frontend do MVP, basta executar:

```
npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador para verificar o Frontend em execução.

---

# Executando Frontend em Contêineres Docker

## Docker Build e Run

Para construir e executar uma imagem Docker a partir de um Dockerfile, siga os passos abaixo:

1. Construindo a imagem com Docker Build:

   Primeiro, navegue até o diretório onde está localizado o Dockerfile e execute o seguinte comando para construir a imagem:

   ```bash
   docker build -t heart_failures_frontend:latest .
   ```

   - **heart_failures_frontend** é o nome da imagem.
   - **latest** é a tag de identificação da versão da imagem. Nessa caso, foi utilizado latest, pois é a versão mais recente disponibilizada.
   - **.** indica que o Dockerfile está no diretório atual.

2. Iniciando a Imagem com Docker Run:

   Após construir a imagem, você pode iniciar um contêiner a partir dessa imagem com o comando:

   ```bash
   docker run -d -p 3000:3000 heart_failures_frontend:latest
   ```

   - **-d** inicia o contêiner em modo _detached_ (em segundo plano).
   - **-p 3000:3000** mapeia a porta do host para a porta do contêiner, no formato _porta-do-host:porta-do-contêiner_.
   - **heart_failures_frontend:latest** é a imagem que criamos com o comando _docker build_ no item 1, no format _nome-da-imagem:tag_.

3. Verificando o Contêiner em Execução:

   Para verificar se o contêiner está em execução, use:

   ```bash
   docker ps
   ```

   Ou

   ```bash
   docker container ls -a
   ```

   Isso mostrará uma lista dos contêineres em execução.

## Docker Compose

O Docker Compose simplifica a definição e execução de aplicativos Docker de múltiplos contêineres. Ele usa um arquivo docker-compose.yml para configurar os serviços da sua aplicação.

1. Criando e Iniciando os Serviços:

   Para construir e iniciar todos os serviços definidos no arquivo `docker-compose.yml`, use:

   ```bash
   docker-compose up --build -d
   ```

   - **--build** reconstrói as imagens se necessário.
   - **-d** inicia os contêineres em segundo plano (_detached mode_).

2. Parando os Serviços:

   Para parar e remover os contêineres definidos no arquivo `docker-compose.yml`, execute:

   ```bash
   docker-compose down
   ```

   Isso irá parar todos os contêineres e remover os recursos criados pelo _docker-compose up_.

---

# Contribuindo

Se você encontrar qualquer problema ou tiver sugestões para melhorar este Frontend, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.
