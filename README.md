# TaskFlow Web

Interface web do TaskFlow para gerenciamento de tarefas, desenvolvida com React + Vite e integrada à TaskFlow API.

## Stack

- **Framework:** React
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Estilos:** CSS Modules
- **Deploy:** Vercel
- **CI/CD:** GitHub Actions (trigger via SemVer tags)

---

## Instalação

```bash
git clone https://github.com/seu-usuario/taskflow-web.git
cd taskflow-web
npm install
cp .env.example .env
npm run dev
```

---

## Variáveis de Ambiente

| Variável        | Descrição                  | Padrão                              |
|-----------------|----------------------------|-------------------------------------|
| `VITE_API_URL`  | URL base da TaskFlow API   | `https://taskflow-api.onrender.com` |

---

## Scripts

| Comando           | Descrição                   |
|-------------------|-----------------------------|
| `npm run dev`     | Servidor de desenvolvimento |
| `npm run build`   | Build de produção           |
| `npm run preview` | Preview do build            |

---

## Estrutura do Projeto

```
taskflow-web/
├── .github/workflows/release.yml   # CI/CD — deploy no Vercel via tag
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── TaskCard/
│   │   ├── TaskList/
│   │   ├── TaskForm/
│   │   ├── Loading/
│   │   └── ErrorMessage/
│   ├── pages/
│   │   ├── Home/
│   │   ├── CreateTask/
│   │   └── EditTask/
│   ├── services/
│   │   ├── api.js
│   │   └── tasks.service.js
│   ├── hooks/
│   │   └── useTasks.js
│   ├── utils/
│   │   └── formatDate.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── .env.example
└── package.json
```

---

## CI/CD — GitHub Actions + Vercel

```bash
git tag v1.0.0
git push origin v1.0.0
# O workflow faz build e deploy automático no Vercel
```

### Secrets necessários no GitHub

| Secret               | Descrição                   |
|----------------------|-----------------------------|
| `VERCEL_TOKEN`       | Token de acesso da Vercel   |
| `VERCEL_ORG_ID`      | ID da organização no Vercel |
| `VERCEL_PROJECT_ID`  | ID do projeto no Vercel     |

---

## Commits Semânticos

```
feat: nova funcionalidade
fix: correção de bug
ci: mudanças no pipeline
docs: atualização de documentação
```
