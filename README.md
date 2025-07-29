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
- 🛒 **State Management** - Zustand stores for client-side state
- 🔧 **Developer Experience** - Hot reload, type checking, and more

## 🛠️ Tech Stack

### Core

- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime
- **Monorepo**: [Turbo](https://turbo.build) - High-performance build system
- **Language**: [TypeScript](https://typescriptlang.org) - Type-safe JavaScript

### Frontend

- **Framework**: [React 19](https://react.dev) - Latest React with concurrent features
- **Router**: [TanStack Router](https://tanstack.com/router) - Type-safe routing
- **Data Fetching**: [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) - Simple state management
- **Build Tool**: [Vite](https://vitejs.dev) - Next generation frontend tooling
- **Styling**: [SCSS](https://sass-lang.com) - Enhanced CSS with variables and mixins

### Backend

- **Framework**: [Hono](https://hono.dev) - Fast, lightweight web framework
- **Database**: [Drizzle ORM](https://orm.drizzle.team) - Type-safe SQL toolkit _(planned)_

### Marketing

- **Framework**: [Astro](https://astro.build) - Static site generator with island architecture
- **Content**: [MDX](https://mdxjs.com) - Markdown with JSX components

### Code Quality

- **Linting & Formatting**: [Biome](https://biomejs.dev) - Fast toolchain for web projects
- **Testing**: [Bun Test](https://bun.sh/docs/cli/test) - Built-in test runner _(planned)_
- **Schema Validation**: [Zod](https://zod.dev) - TypeScript-first schema validation

## 📁 Project Structure

```
fullstack-starter/
├── apps/
│   ├── client/          # React frontend application
│   │   ├── src/
│   │   │   ├── routes/  # TanStack Router routes
│   │   │   └── main.tsx # App entry point
│   │   └── package.json
│   ├── server/          # Hono backend API
│   │   ├── src/
│   │   │   └── index.ts # Basic Hono server
│   │   └── package.json
│   ├── marketing/       # Astro marketing website
│   │   ├── src/
│   │   │   ├── blog/    # MDX blog posts
│   │   │   ├── pages/   # Astro pages
│   │   │   └── components/
│   │   └── package.json
│   └── docs/           # Documentation (empty - ready for your docs)
├── packages/
│   ├── ui/             # Shared React components
│   │   ├── components/ # Button component + SCSS modules
│   │   ├── tokens/     # Design tokens (spacing, colors)
│   │   └── styles/     # Shared SCSS utilities
│   ├── store/          # Zustand state management
│   │   └── src/        # Store modules (auth, ui, app)
│   ├── zod-schemas/    # Shared validation schemas
│   ├── tsconfig/       # Shared TypeScript configurations
│   ├── db/             # Database schemas and migrations (empty - ready for Drizzle)
│   └── utils/          # Shared utilities (empty - ready for your utils)
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

# Testing (when implemented)
bun test             # Run all tests
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

**Current Components:**

- `Button` - Customizable button component with variants and sizes

**Exports:**

- `./components` - React components
- `./styles` - SCSS stylesheets
- `./tokens` - Design tokens (spacing, colors, etc.)

**Features:**

- CSS custom properties for consistent spacing (xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 2rem)
- SCSS modules for component styling
- TypeScript definitions for all components

### `@repo/store`

State management package using Zustand with Immer for immutable updates.

**Store Modules:**

- `auth` - Authentication state _(ready for implementation)_
- `ui` - UI state (modals, themes, etc.) _(ready for implementation)_
- `app` - Application-wide state _(ready for implementation)_

### `@repo/zod-schemas`

Shared validation schemas for type-safe data handling across apps.

### `@repo/tsconfig`

Centralized TypeScript configurations for consistent type checking across all packages.

## 🔧 Development Workflow

1. **Make changes** in any app or package
2. **Hot reload** automatically updates your browser
3. **Type checking** runs in the background
4. **Linting** with Biome ensures code quality
5. **Build** with Turbo for optimized performance

## ⚙️ Code Quality Configuration

The project uses [Biome](https://biomejs.dev) for fast linting and formatting with special configurations:

- **Astro files**: Custom rules disabled for `noUnusedImports` and `noUnusedVariables` due to template usage patterns
- **Generated files**: Automatically excluded from linting (e.g., `routeTree.gen.ts`)
- **Consistent formatting**: 2-space indentation, double quotes, semicolons
- **Import organization**: Automatic import sorting and cleanup

Run `bun run check` to see all linting results across the monorepo.

## 🏗️ Architecture Decisions

- **Bun over Node.js** - Faster runtime and package management
- **Hono over Express** - Modern, lightweight, and fast
- **TanStack Router over React Router** - Type-safe routing with excellent DX
- **Zustand over Redux** - Simpler state management with less boilerplate
- **Biome over ESLint + Prettier** - Single tool, better performance
- **Turbo over Lerna** - Superior caching and build orchestration
- **SCSS over CSS-in-JS** - Better performance and designer-friendly

## 🚧 Roadmap

### Near Term (Ready to Implement)

- [ ] Complete Zustand store implementations
- [ ] Add more UI components (Input, Modal, etc.)
- [ ] Set up testing with Bun Test
- [ ] Environment variable handling
- [ ] Error boundaries and error handling

### Medium Term

- [ ] Database setup with Drizzle ORM
- [ ] Authentication system
- [ ] API integration between client and server
- [ ] Docker containerization

### Long Term

- [ ] CI/CD pipeline
- [ ] Deployment guides
- [ ] Documentation site
- [ ] E2E testing setup

## 🤔 Common Next Steps

1. **Add Database Layer**:

   ```bash
   cd apps/server
   bun add drizzle-orm drizzle-kit
   bun add sqlite3  # or your preferred database
   ```

2. **Implement Store Logic**:
   - Fill in `packages/store/src/auth.ts` with authentication state
   - Add UI state management in `packages/store/src/ui.ts`

3. **Add More Components**:
   - Create Input, Modal, Card components in `packages/ui`

4. **Set Up Testing**:
   - Add test files using Bun's built-in test runner
   - Create test utilities and setup files

## 📚 Empty Directories Explained

Some directories are intentionally empty and ready for you to implement:

- `apps/docs/` - Ready for your documentation site
- `packages/db/` - Ready for Drizzle schemas and migrations
- `packages/utils/` - Ready for shared utility functions
- Store implementations in `packages/store/src/` are empty but configured

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
