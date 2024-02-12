<h1 align="center">Fleet Control</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>



<br>

<p align="center">
  <img alt="pharma-kontroll" src="./assets/logo.png" width="40%" >
</p>

## 🚀 Tecnologias

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)       

## 💻 Projeto

**Uma aplicação front-end para controle de frotas.** Oferece telas das funcionalidades de cadastro de motoristas, veículos, viagens, despesas de viagens, pneus, notas fiscais, produtos, peças, serviços, ordens de serviço e clientes. É possível listar e editar os registros inseridos na aplicação.

## 🔖 Layout

Para implementação das funcionalidades apresento algumas das páginas desenvolvidas:

### 1. Cadastro de Despesa de Viagem
Permite inserir despesas de viagens classificadas por categoria.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/create-trip-expense.png" width="35%">
</p>

### 2. Cadastro de Ordem de Serviço
Permite inserir ordend de serviço de manutenção dos veículos da frota com inclusão de pe;cas e serviços a serem realizados.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/create-service-order.png" width="35%">
</p>

### 3. Cadastro de Pneu
Cadastro de pneus dos veículos com registro de posição de montagem.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/create-tyre.png" width="35%">
</p>

### 4. Cadastro de Desgaste de Pneu
Registro da condição de desgaste do pneu para controle de vida útil.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/create-tyre-depth.png" width="35%">
</p>

### 5. Cadastro de Nota Fiscal
Cadastro de nota fiscal contendo cliente de origem e destino, produtos e valores.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/create-invoice.png" width="35%">
</p>

### 6. Lista de Ordens de Serviço
Exibe as ordens de serviço para manutenção dos veículos.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/list-service-orders.png" width="35%">
</p>

### 6. Lista de Desgaste de Pneu
Exibe os registros realizados com medição do desgaste do pneu.
<p align="center">
  <img alt="fleet-control-screen" src="./assets/list-tyre-depth.png" width="35%">
</p>

## 🏃 Iniciando o Projeto
Primeiro clone este repositório remoto em sua máquina local:

[git@github.com:denisonkolling/fleet-control-ui.git](https://github.com/denisonkolling/fleet-control-ui.git)

Lembre-se de adicionar as dependências do projeto:

```bash
npm install
# ou
yarn install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn run dev
```

Acesse [http://localhost:5173/](http://localhost:5173/) com seu navegador para acessar a aplicação.

## 💹 Melhorias em Desenvolvimento

Cronograma de melhorias e desenvolvimento de novas funcionalidades da aplicação:

⏳ - Atualizar design dos cards em listagem de ordens de serviço.<br/>
🧱 - Alterar inserção de serviços e peças na criação de ordens de serviço.<br/>
🌍 - Criar página de mapa com posicionamento do rastreamento de veículos.<br/>

## 📝 Licença

Esse projeto está sob a licença MIT.

---