# 🏦 Banco Virtual - Lab2

Una aplicación web moderna de banco virtual construida con Next.js 15, React 19 y TypeScript.

## ✨ Características

- **Interfaz moderna y responsiva** con Tailwind CSS
- **Sistema de autenticación** con páginas de login y registro
- **Diseño atractivo** con gradientes y componentes UI personalizados
- **Navegación fluida** entre páginas
- **Componentes reutilizables** con Radix UI

## 🚀 Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, CSS Modules
- **UI Components**: Radix UI, Lucide React
- **Herramientas**: ESLint, PostCSS
- **Animaciones**: tw-animate-css

## 📋 Prerrequisitos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd lab2
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
lab2/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── login/          # Página de inicio de sesión
│   │   ├── register/       # Página de registro
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globales
│   ├── components/         # Componentes reutilizables
│   │   ├── navbar.tsx      # Barra de navegación
│   │   └── ui/             # Componentes UI base
│   └── lib/                # Utilidades y helpers
├── public/                 # Archivos estáticos
└── package.json            # Dependencias y scripts
```

## 🎯 Funcionalidades

### Página Principal
- Landing page atractiva con logo del banco
- Mensaje principal: "Tu dinero, tu control"
- Botones de navegación a login y registro
- Diseño responsivo y moderno

### Sistema de Autenticación
- **Login**: Acceso para usuarios existentes
- **Registro**: Creación de nuevas cuentas
- Navegación fluida entre páginas

### Componentes UI
- Botones personalizados con variantes
- Barra de navegación responsive
- Sistema de diseño consistente

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter para verificar código

## 🎨 Personalización

### Colores y Temas
El proyecto utiliza Tailwind CSS con un sistema de colores personalizado:
- Color primario configurado en `tailwind.config.js`
- Gradientes personalizados para textos
- Paleta de colores consistente

### Componentes
- Los componentes UI están en `src/components/ui/`
- Utiliza Radix UI para accesibilidad
- Sistema de variantes con class-variance-authority

## 📱 Responsividad

- Diseño mobile-first
- Componentes adaptativos
- Navegación optimizada para dispositivos móviles

## 🔧 Configuración de Desarrollo

### ESLint
Configurado con reglas de Next.js y TypeScript para mantener la calidad del código.

### TypeScript
Configuración estricta para detectar errores temprano y mejorar la experiencia de desarrollo.

### PostCSS
Configurado para optimizar CSS y compatibilidad con navegadores.

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. El despliegue se realizará automáticamente
3. Configura variables de entorno si es necesario

### Otros Proveedores
- **Netlify**: Compatible con Next.js
- **Railway**: Soporte para aplicaciones Node.js
- **Heroku**: Despliegue tradicional

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [TuUsuario](https://github.com/TuUsuario)

## 🙏 Agradecimientos

- Next.js por el framework increíble
- Tailwind CSS por el sistema de diseño
- Radix UI por los componentes accesibles
- La comunidad de React por el ecosistema

---

⭐ Si este proyecto te gustó, ¡dale una estrella!
