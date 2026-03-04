# 📅 Sistema de Agendamento - ChamaJá

 Este módulo foca especificamente no gerenciamento de compromissos, priorizando uma experiência de usuário fluida e persistência de dados no lado do cliente.

Desenvolvido com **HTML, CSS e JavaScript puros (Vanilla JS)**, o projeto foca em manipulação de DOM, validação  de dados e armazenamento local.

---

## 🚀 Sobre o Projeto

O sistema permite uma gestão completa de ciclos de agendamentos de forma intuitiva:

- ✅ **Criação Dinâmica:** Registro de novos agendamentos com título, data e horário.
- ✅ **Interface Nativa:** Uso da API `<dialog>` do HTML5 para modais leves e acessíveis.
- ✅ **Validação Inteligente:** - Bloqueio de campos vazios.
  - Impedimento de agendamentos em datas ou horários retroativos.
  - Sanitização de strings para manter a consistência visual.
- ✅ **Gestão de Estado:** Exclusão de itens com atualização automática da interface.
- ✅ **Persistência Offline:** Os dados permanecem salvos no navegador mesmo após o fechamento da aba ou atualização da página (F5).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e componentes de diálogo.
- **CSS3** – Estilização moderna (Glassmorphism, SF Pro, Responsividade).
- **JavaScript (Vanilla JS)** – Lógica de negócio, manipulação de Arrays e DOM.
- **LocalStorage API** – Persistência de dados `NoSQL-like` no browser.

---

## 💡 Conceitos Técnicos Aplicados

### 📌 Manipulação de DOM & Eventos
O projeto utiliza métodos modernos para garantir performance:
- `querySelector` e `getElementById` para captura de elementos.
- `createElement` e fragmentos para renderização dinâmica de listas.
- `addEventListener` para delegação de eventos e interatividade.

### 📌 Persistência com LocalStorage
Os dados são serializados em JSON para armazenamento e desserializados para manipulação em memória:

```javascript
// Salvando os dados
localStorage.setItem("chamaJa:agendamentos", JSON.stringify(agendamentos));

// Recuperando os dados
const agendamentos = JSON.parse(localStorage.getItem("chamaJa:agendamentos")) || [];
```

### 📌 Lógica de Validação
Implementação de regras de negócio para integridade dos dados:
- Comparação de timestamps usando o objeto `Date()`.
- Verificação de redundância de informações.

---

## 📂 Estrutura do Projeto

```text
📁 sistema-agendamento
 ├── index.html   # Estrutura e Modais
 ├── style.css    # Design System e Layout
 ├── script.js    # Core Logic e State Management
 └── README.md    # Documentação
```

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/raoni-silla/sistema-agendamento.git](https://github.com/raoni-silla/sistema-agendamento.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd sistema-agendamento
   ```

3. **Inicie a aplicação:**
   Basta abrir o arquivo `index.html` em qualquer navegador moderno. Não requer servidores ou dependências externas (Node.js/NPM).

---

## 👨‍💻 Autor

Desenvolvido por **Raoni Silla** *Estudante de Análise e Desenvolvimento de Sistemas - FEMA (Assis/SP)*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/raoni-silla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raoni-silla)

---
## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de estudo (TCC).
