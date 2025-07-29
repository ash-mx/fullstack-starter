# 🚀 Fullstack Starter

A modern, opinionated fullstack monorepo template built with cutting-edge technologies for rapid development and deployment.

## ✨ Features

- 🏗️ **Monorepo Architecture** - Organized with Turbo for optimal build performance
- ⚡ **Bun Runtime** - Lightning-fast JavaScript runtime and package manager
- 🎯 **Type-Safe** - End-to-end TypeScript with shared schemas
- 🎨 **Modern UI** - React 19 with reusable component library
- 🌐 **Multi-App Setup** - Client app, marketing site, and API server
- 📝 **Content Management** - Astro-powered marketing site with MDX blog
- 🔍 **Code Quality** - Biome for lightning-fast linting and formatting
- 🔧 **Developer Experience** - Hot reload, type checking, and more

## 🛠️ Tech Stack

### Core

- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime
- **Monorepo**: [Turbo](https://turbo.build) - High-performance build system
- **Language**: [TypeScript](https://typescriptlang.org) - Type-safe JavaScript

### Frontend

- **Framework**: [React 19](https://react.dev) - Latest React with concurrent features
- **Build Tool**: [Vite](https://vitejs.dev) - Next generation frontend tooling
- **Styling**: [SCSS](https://sass-lang.com) - Enhanced CSS with variables and mixins

### Backend

- **Framework**: [Hono](https://hono.dev) - Fast, lightweight web framework
- **Database**: [Drizzle ORM](https://orm.drizzle.team) - Type-safe SQL toolkit _(coming soon)_

### Marketing

- **Framework**: [Astro](https://astro.build) - Static site generator with island architecture
- **Content**: [MDX](https://mdxjs.com) - Markdown with JSX components

### Code Quality

- **Linting & Formatting**: [Biome](https://biomejs.dev) - Fast toolchain for web projects
- **Schema Validation**: [Zod](https://zod.dev) - TypeScript-first schema validation

## 📁 Project Structure

```
fullstack-starter/
├── apps/
│   ├── client/          # React frontend application
│   ├── server/          # Hono backend API
│   ├── marketing/       # Astro marketing website
│   └── docs/           # Documentation (planned)
├── packages/
│   ├── ui/             # Shared React components
│   ├── zod-schemas/    # Shared validation schemas
│   ├── tsconfig/       # Shared TypeScript configurations
│   ├── db/             # Database schemas and migrations (planned)
│   ├── store/          # State management (planned)
│   └── utils/          # Shared utilities (planned)
└── [config files]
```

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) v1.2.19 or later

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd fullstack-starter
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development servers**
   ```bash
   bun run dev
   ```

This will start:

- 🌐 Client app at `http://localhost:5173`
- 🚀 Server API at `http://localhost:3000`
- 📄 Marketing site at `http://localhost:4321`

## 📜 Available Scripts

### Root Level Commands

```bash
# Development
bun run dev          # Start all apps in development mode
bun run build        # Build all apps for production

# Code Quality
bun run lint         # Lint all packages
bun run lint:fix     # Fix linting issues automatically
bun run format      # Format code with Biome
bun run check       # Check code quality

# Database (when implemented)
bun run db:generate  # Generate database migrations
bun run db:migrate   # Run database migrations
```

### Individual App Commands

```bash
# Client (React app)
cd apps/client
bun run dev         # Development server
bun run build       # Production build
bun run preview     # Preview production build

# Server (Hono API)
cd apps/server
bun run dev         # Development server with hot reload
bun run build       # Production build
bun run start       # Start production server

# Marketing (Astro site)
cd apps/marketing
bun run dev         # Development server
bun run build       # Production build
bun run preview     # Preview production build
```

## 📦 Package Details

### `@repo/ui`

Shared React component library with SCSS styling and design tokens.

**Exports:**

- `./components` - React components
- `./styles` - SCSS stylesheets
- `./tokens` - Design tokens

### `@repo/zod-schemas`

Shared validation schemas for type-safe data handling across apps.

### `@repo/tsconfig`

Centralized TypeScript configurations for consistent type checking.

## 🔧 Development Workflow

1. **Make changes** in any app or package
2. **Hot reload** automatically updates your browser
3. **Type checking** runs in the background
4. **Linting** with Biome ensures code quality
5. **Build** with Turbo for optimized performance

## 🏗️ Architecture Decisions

- **Bun over Node.js** - Faster runtime and package management
- **Hono over Express** - Modern, lightweight, and fast
- **Biome over ESLint + Prettier** - Single tool, better performance
- **Turbo over Lerna** - Superior caching and build orchestration
- **SCSS over CSS-in-JS** - Better performance and designer-friendly

## 🚧 Roadmap

- [ ] Database setup with Drizzle ORM
- [ ] Authentication system
- [ ] State management with Zustand/Jotai
- [ ] Testing setup (Vitest + Testing Library)
- [ ] CI/CD pipeline
- [ ] Docker containerization
- [ ] Deployment guides

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run `bun run check` to ensure code quality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using [Bun](https://bun.sh) and modern web technologies.**
