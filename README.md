# Cert Authority Website (GCB)

Multilingual certification authority website built with Next.js 14, featuring internationalization support for multiple regions and locales.

## 📋 Project Overview

**Project Name:** GCB Website  
**Version:** 0.1.0  
**Tech Stack:** Next.js 14, TypeScript, React 18, SCSS Modules  
**Production Directory:** `/var/www/vhosts/cert-authority.com/test4andy.cert-authority.com/httpdocs`

## 🚀 Technology Stack

### Core Dependencies
- **Next.js 14.2.6** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety
- **next-intl 3.19.0** - Internationalization (i18n)
- **Redux Toolkit 2.2.7** - State management
- **React Redux 9.1.2** - React bindings for Redux
- **SCSS/Sass 1.77.8** - CSS preprocessor with module support
- **react-google-recaptcha 3.1.0** - Form protection

## 🌍 Internationalization (i18n)

The application supports multiple locales:

### Supported Locales
- **German variants:** `de`, `de-de`, `de-at`, `de-ch`
- **English variants:** `en`, `en-us`, `en-gb`, `en-ca`, `en-au`

### Translation Files
Located in `/messages/`:
- `de.json` - German translations (48.4KB)
- `en.json` - English translations (42.8KB)

### i18n Configuration
- **Middleware:** Automatic locale detection from browser settings
- **SEO:** Alternate links enabled for multilingual SEO
- **Routing:** Locale-based URL paths (`/de/...`, `/en/...`, etc.)

## 📁 Project Structure

```
.
├── app/[locale]/          # Next.js App Router with locale support
│   ├── Landing/           # Landing page components
│   └── ...                # Other page routes
├── components/            # Reusable React components
│   ├── Header/            # Header component with navigation
│   ├── CertificationComponent/  # Certification display
│   ├── PriceDetails/      # Pricing information
│   └── ...                # 13 total components
├── helpers/               # Utility functions
├── i18n/                  # Internationalization configuration
│   └── routing.ts         # Locale routing setup
├── messages/              # Translation JSON files
│   ├── de.json
│   └── en.json
├── public/                # Static assets (34 files)
├── store/                 # Redux store configuration
├── changes/               # Asset changes and updates
│   └── Assets/SVG/        # New logo assets
├── middleware.ts          # Next.js middleware (i18n)
├── next.config.mjs        # Next.js configuration
├── server.js              # Custom server configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Development Workflow

### Prerequisites
- Node.js (version specified in `.node-version`)
- npm or yarn package manager
- Git access to repository

### Installation

```bash
# Navigate to project directory
cd /var/www/vhosts/cert-authority.com/test4andy.cert-authority.com/httpdocs

# Install dependencies
npm install
```

### Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Local Development

**Note:** The user handles all compilation and build processes via Plesk. Development servers and build commands are managed externally.

For local testing:
1. Make your code changes
2. Build process is handled via Plesk
3. Changes are deployed automatically

## 🔧 Configuration Files

### Next.js Configuration (`next.config.mjs`)
- SCSS modules enabled with custom include paths
- next-intl plugin integrated
- Custom sass options configured

### Middleware (`middleware.ts`)
- Automatic locale detection from browser
- SEO alternate links enabled
- Matches all supported locale paths

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured
- Next.js optimizations applied

## 🎨 Styling

### SCSS Modules
All components use SCSS modules for scoped styling:
- `*.module.scss` files for component-specific styles
- Global styles in `/styles` (if applicable)
- Sass compiler version: 1.77.8

### Modified Style Files
Recent updates to:
- `landing.module.scss`
- `certification.module.scss`
- `Header.module.scss`
- `priceDetails.module.scss`

## 🔐 Git Workflow

### Repository Information
- **Remote:** `git@github.com:dgdatenschutz/next_js.git` (SSH)
- **Branch:** `master`
- **Authentication:** SSH keys required

### Standard Workflow

```bash
# Navigate to project directory
cd /var/www/vhosts/cert-authority.com/test4andy.cert-authority.com/httpdocs

# Check current status
git status

# Pull latest changes
git pull origin master

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: description of changes"

# Push to remote
git push origin master
```

### Commit Message Guidelines
- Use descriptive commit messages
- Document known issues in work-in-progress commits
- Prefix with type: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Always commit before starting new tasks

## 🎯 Component Architecture

### Key Components
1. **Header** - Navigation and branding
2. **Landing** - Main landing page sections
3. **CertificationComponent** - Certification information display
4. **PriceDetails** - Pricing tables and details
5. **LandingBox** - Feature/information boxes

### State Management
- Redux Toolkit for global state
- React Redux for component integration
- Store configuration in `/store`

## 📦 Asset Management

### Logo Assets
New logo assets are available in:
```
/var/www/vhosts/cert-authority.com/test4andy.cert-authority.com/httpdocs/changes/Assets/SVG/
```

Copy assets from this directory when implementing logo updates.

### Public Assets
34 static files available in `/public` directory for images, fonts, and other resources.

## 🧪 Testing & Quality

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript compilation checks types during build process.

## 🚢 Deployment

### Production Environment
- **Server:** Plesk-managed hosting
- **Directory:** `/var/www/vhosts/cert-authority.com/test4andy.cert-authority.com/httpdocs`
- **Build Process:** Managed via Plesk
- **Node Version:** Specified in `.node-version`

### Deployment Steps
1. Commit and push changes to `master` branch
2. Build process handled automatically via Plesk
3. No manual server commands required

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [SCSS Documentation](https://sass-lang.com/documentation)

### Learning Resources
- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React 18 Features](https://react.dev/blog/2022/03/29/react-v18)

## 👥 Team Guidelines

### Before Starting Work
1. ✅ Navigate to correct project directory
2. ✅ Pull latest changes: `git pull origin master`
3. ✅ Check status: `git status`
4. ✅ Create feature branch if needed

### During Development
1. ✅ Follow TypeScript strict mode
2. ✅ Use SCSS modules for component styling
3. ✅ Add translations to both `de.json` and `en.json`
4. ✅ Test all supported locales
5. ✅ Maintain component modularity

### After Development
1. ✅ Commit changes with descriptive messages
2. ✅ Document known issues in commit messages
3. ✅ Push to `master` branch
4. ✅ Verify build via Plesk

## 🐛 Troubleshooting

### Common Issues

**SSH Authentication Failed:**
- Ensure SSH keys are configured for GitHub
- Check: `ssh -T git@github.com`

**Build Errors:**
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Locale Not Working:**
- Check middleware configuration in `middleware.ts`
- Verify translation files in `/messages`
- Ensure locale is added to routing config

**Style Not Applying:**
- Verify SCSS module import: `import styles from './component.module.scss'`
- Check className usage: `className={styles.className}`
- Clear Next.js cache

## 📞 Support

For questions or issues:
1. Check this README
2. Review Next.js documentation
3. Check git commit history for context
4. Contact team lead

---

**Last Updated:** 2025-10-16  
**Maintained by:** DG Datenschutz Team
