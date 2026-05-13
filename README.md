# TaskFlow Front

Front-end do TaskFlow para gerenciamento de tarefas, desenvolvido com Vite.

## Stack

- **Framework:** Vite
- **Runtime:** Node.js ≥ 18
- **Deploy:** Render
- **CI/CD:** GitHub Actions (trigger via SemVer tags)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/OtavioColimo/taskflow-front.git
cd taskflow-front

# Instale as dependências
npm install

# Inicie em modo desenvolvimento
npm run dev
```

## Deployment

### Release via Tags

1. Crie uma tag com versionamento semântico:
```bash
git tag v1.0.0
git push origin v1.0.0
```

2. O GitHub Actions dispara automaticamente:
   - Instala dependências
   - Faz build da aplicação
   - Dispara deploy no Render

### Variáveis de Ambiente Necessárias

No Render, configure os secrets do GitHub Actions:
- `SERVICE_ID`: ID do serviço no Render
- `RENDER_API_KEY`: Chave de API do Render
