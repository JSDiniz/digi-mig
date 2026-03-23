# DigiMig - Agência Digital

Website institucional da DigiMig, uma agência digital especializada em desenvolvimento web, landing pages, automação e aplicativos.

## 📋 Sobre o Projeto

O DigiMig é um website moderno e responsivo desenvolvido com Next.js, apresentando os serviços da agência digital. O site conta com design moderno, animações suaves, modo escuro e uma experiência de usuário otimizada.

## 🚀 Tecnologias Utilizadas

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e sem estilo
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI construídos com Radix UI
- **[Lucide React](https://lucide.dev/)** - Ícones
- **[Vercel Analytics](https://vercel.com/analytics)** - Analytics e monitoramento

## 📁 Estrutura do Projeto

```
digi-mig/
├── src/
│   ├── app/                    # Páginas e rotas (App Router)
│   │   ├── contato/           # Página de contato
│   │   ├── privacidade/       # Política de privacidade
│   │   ├── servicos/          # Página de serviços
│   │   ├── sobre/             # Página sobre a empresa
│   │   ├── termos/            # Termos de uso
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── page.tsx           # Página inicial
│   │   └── globals.css        # Estilos globais
│   ├── components/            # Componentes React
│   │   ├── about/             # Componentes da página sobre
│   │   ├── contact/           # Componentes da página de contato
│   │   ├── home/              # Componentes da página inicial
│   │   ├── legal/             # Componentes legais
│   │   ├── services/          # Componentes da página de serviços
│   │   ├── ui/                # Componentes UI reutilizáveis
│   │   ├── footer.tsx         # Rodapé
│   │   ├── navbar.tsx         # Navegação
│   │   ├── scroll-to-top.tsx  # Botão scroll to top
│   │   └── theme-provider.tsx # Provedor de tema
│   └── lib/                   # Utilitários
│       └── utils.ts           # Funções auxiliares
├── public/                     # Arquivos estáticos
├── components.json             # Configuração shadcn/ui
├── next.config.mjs            # Configuração Next.js
├── package.json                # Dependências do projeto
└── tsconfig.json              # Configuração TypeScript
```

## 🎨 Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Modo escuro (dark mode)
- ✅ Animações suaves com Framer Motion
- ✅ Navegação responsiva com menu mobile
- ✅ Scroll to top automático
- ✅ Formulário de contato
- ✅ Páginas legais (Privacidade e Termos)
- ✅ SEO otimizado
- ✅ Analytics integrado

## 📄 Páginas

- **Home** (`/`) - Página inicial com hero, serviços, diferenciais e CTA
- **Serviços** (`/servicos`) - Detalhamento dos serviços oferecidos
- **Sobre** (`/sobre`) - Informações sobre a empresa
- **Contato** (`/contato`) - Formulário de contato
- **Privacidade** (`/privacidade`) - Política de privacidade
- **Termos** (`/termos`) - Termos de uso

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ ou superior
- pnpm (gerenciador de pacotes recomendado)

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd digi-mig
```

2. Instale as dependências:
```bash
pnpm install
```

### Executar em Desenvolvimento

```bash
pnpm dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
pnpm build
```

### Executar Build de Produção

```bash
pnpm start
```

### Linting

```bash
pnpm lint
```

## 🌐 Deploy

O projeto está configurado para deploy na Vercel. Para fazer deploy:

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. O deploy será feito automaticamente a cada push

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o linter ESLint

## 🤝 Contribuindo

Este é um projeto privado da DigiMig. Para sugestões ou melhorias, entre em contato através da página de contato do site.

## 📄 Licença

Este projeto é propriedade da DigiMig. Todos os direitos reservados.

## 📧 Contato

Para mais informações, visite [https://digimig.com.br](https://digimig.com.br) ou entre em contato através da página de contato.

---

## 👤 Autor

Junielson S. Diniz
