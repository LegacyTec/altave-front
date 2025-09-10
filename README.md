# Altave Front

Frontend do Projeto Integrador **Altave** — **React + TypeScript + Vite + Tailwind CSS v4**.  
Este README foi escrito para que qualquer pessoa do time consiga clonar, instalar e rodar sem complicação.

---

## 📦 Tecnologias usadas

| Tecnologia | Para que serve |
| --- | --- |
| **React 18** | Biblioteca de UI baseada em componentes. |
| **TypeScript 5** | Tipagem estática para JavaScript. |
| **Vite 7** | Dev server e bundler muito rápido. |
| **Tailwind CSS v4** | Framework CSS baseado em utilitários (ex.: `p-4`, `text-blue-600`). |
| **PostCSS + @tailwindcss/postcss** | Pipeline de CSS usado pelo Tailwind v4. |
| **ESLint** | Padronização e boas práticas no código. |

---

## ✅ Versões recomendadas

- **Node.js**: `23.x` (Current) — Node 20 LTS também funciona
- **npm**: `10.x`
- **Vite**: `7.1.x`
- **Tailwind**: `v4`

Verifique suas versões:
```bash
node -v
npm -v

🚀 Como rodar o projeto

1) Pré-requisitos

Instalar Node.js (inclui o npm):
	•	Windows/Mac: https://nodejs.org → baixar o instalador.
	•	macOS (Homebrew): brew install node
	•	Linux (Ubuntu/Debian):


2) Clonar o repositório
git clone https://github.com/<usuario-ou-org>/altave-front.git
cd altave-front

3) Instalar dependências
npm install

4) Rodar em desenvolvimento
npm run dev
Abra a URL mostrada no terminal, ex.: http://localhost:5173.

🧱 Estrutura de pastas
altave-front/
├─ public/                  # assets estáticos
├─ src/
│  ├─ assets/               # imagens/ícones
│  ├─ App.tsx               # componente raiz
│  ├─ index.css             # Tailwind v4
│  └─ main.tsx              # entrada React
├─ index.html               # HTML base
├─ postcss.config.js        # PostCSS + Tailwind
├─ tailwind.config.js       # config do Tailwind
├─ vite.config.ts           # config do Vite
├─ package.json
└─ README.md

🧰 Scripts npm
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção (gera /dist)
npm run preview   # serve o build localmente

🧯 Problemas comuns
	•	Página em branco: confira se index.html aponta para src/main.tsx e existe <div id="root"></div>.
	•	Port 5173 in use: Vite usa outra porta (5174, 5175). Veja no terminal.
	•	Erro do Tailwind v4/PostCSS: