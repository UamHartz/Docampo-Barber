# 💈‍♂️ Oinatz Docampo - Peluquero Profesional Premium

Una web moderna y ultra-profesional para el negocio de peluquería de Oinatz Docampo, peluquero con 16 años de experiencia que trabaja de forma independiente en Errenteria.

## ✨ Características Premium

- 🎯 **Diseño Moderno Premium**: Interfaz elegante con animaciones suaves y efectos visuales avanzados
- 📱 **Totalmente Responsive**: Funciona perfectamente en móviles, tablets y ordenadores
- 📅 **Sistema de Reservas Inteligente**: Formulario de citas con validación avanzada y confirmaciones
- 💰 **Catálogo de Servicios Ampliado**: 3 servicios principales con características detalladas
- 📞 **Contacto Directo**: WhatsApp flotante y formulario de contacto con validación
- 🖼️ **Galería Profesional**: Placeholders animados con efectos shimmer
- ⚡ **Ultra Optimizada**: SEO mejorado, microdatos y rendimiento optimizado
- 🎨 **Efectos Visuales**: Partículas flotantes, animaciones typing, parallax y micro-interacciones
- 🔧 **Validación Avanzada**: Formularios con errores detallados y estados de carga
- 📊 **Analytics Ready**: Estructura preparada para Google Analytics y herramientas de marketing

## 🚀 Cómo Usar

1. **Abrir la web**: Simplemente abre el archivo `index.html` en tu navegador
2. **Navegación**: Usa el menú superior para moverte entre secciones
3. **Reservar cita**: Rellena el formulario en la sección "Reserva"
4. **Contacto**: Usa el formulario de contacto o llama directamente

## 📁 Estructura de Archivos

```
docampo barber/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
└── README.md          # Este archivo
```

## 🎨 Secciones de la Web

### 1. Header y Navegación
- Logo con icono de tijeras
- Menú responsive para móviles
- Efecto de scroll con fondo semitransparente

### 2. Hero Section
- Título principal llamativo
- Descripción profesional
- Botones de acción directa

### 3. Servicios Premium
- **Corte de Pelo Premium** (10€): Corte moderno con consulta de estilo
- **Corte + Arreglo Barba** (15€): Combo completo con diseño de barba
- **Estilo Juvenil Moderno** (12€): Últimas tendencias con degradados técnicos
- Tarjetas animadas con hover effects avanzados
- Iconos con fondos animados y características detalladas

### 4. Sistema de Reservas Inteligente
- Formulario completo con validación avanzada en tiempo real
- Selector de fechas (solo permite lunes, martes y jueves)
- Horarios dinámicos según día seleccionado
- Confirmación con modal animado y efectos de carga
- Almacenamiento local con timestamps

### 5. Galería Profesional
- 6 placeholders animados con efectos shimmer
- Diseño de grid responsive con hover effects
- Efectos de escala y brillo en las tarjetas
- Sistema lightbox para visualización ampliada

### 6. Contacto Directo
- WhatsApp flotante con animación pulse
- Botón de scroll-to-top inteligente
- Formulario de contacto con validación avanzada
- Mensajes de error y éxito animados
- Enlaces directos para llamada automática

## 🔧 Personalización Avanzada

### Cambiar Información de Contacto
Edita estos valores en `index.html`:
- Teléfono: `+34 678 11 94 92` (actualizado en múltiples lugares)
- Ubicación: `Errenteria, Maria de Lezo, portal 3, 4 derecha`
- Horario: Lunes (16:45-19:30), Martes (17:30-19:30), Jueves (18:00-19:30)
- WhatsApp: Enlace flotante y formulario de contacto

### Modificar Servicios y Precios
En la sección "services" de `index.html`:
```html
<div class="service-card" onclick="selectServiceAndNavigate()">
    <div class="service-icon">
        <i class="fas fa-cut"></i>
        <div class="icon-bg"></div>
    </div>
    <h3>Nombre del Servicio</h3>
    <p>Descripción detallada del servicio</p>
    <div class="price">XX€</div>
    <div class="service-features">
        <span><i class="fas fa-check"></i> Característica 1</span>
        <span><i class="fas fa-check"></i> Característica 2</span>
        <span><i class="fas fa-check"></i> Característica 3</span>
    </div>
</div>
```

### Cambiar Colores y Tema
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #d4af37;
    --accent-color: #2c3e50;
    --success-color: #27ae60;
    --error-color: #e74c3c;
    --gradient-primary: linear-gradient(135deg, var(--secondary-color), #f39c12, #d4af37);
    --transition-smooth: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* ... más variables avanzadas */
}
```

## 📱 Características Técnicas Avanzadas

### SEO y Optimización
- ✅ Meta tags optimizados para SEO
- ✅ Open Graph para redes sociales
- ✅ Microdatos Schema.org para Google
- ✅ URL canónica y estructura semántica
- ✅ Font Poppins preconectada para rendimiento

### Validaciones Inteligentes
- ✅ Validación en tiempo real de formularios
- ✅ Mensajes de error detallados y animados
- ✅ No permite fines de semana en calendario
- ✅ Validación de formato de email
- ✅ Longitud mínima de campos requerida
- ✅ Fechas pasadas bloqueadas

### Animaciones y Efectos Premium
- ✅ Partículas flotantes de fondo
- ✅ Efecto typing en título hero
- ✅ Parallax en sección hero
- ✅ Hover effects 3D en tarjetas
- ✅ Ripple effects en botones
- ✅ Loading states con spinners
- ✅ Scroll animations con Intersection Observer
- ✅ Modal animations mejoradas
- ✅ Shimmer effects en galería

### Almacenamiento y Gestión
- ✅ localStorage con timestamps
- ✅ Estructura de datos para citas y mensajes
- ✅ IDs únicos generados automáticamente
- ✅ Estados de tracking (pending, confirmed)
- ✅ Preparado para backend integration

## 🌐 Subir a Internet

Para hacer tu web accesible online, tienes varias opciones gratuitas:

### Opción 1: GitHub Pages (Recomendado)
1. Crea una cuenta en GitHub
2. Sube los archivos a un repositorio
3. Activa GitHub Pages en los settings del repositorio
4. Tu web estará disponible en: `https://tu-usuario.github.io/nombre-repo`

### Opción 2: Netlify
1. Ve a netlify.com
2. Arrastra tu carpeta al sitio
3. Obtendrás una URL automáticamente

### Opción 3: Vercel
1. Ve a vercel.com
2. Importa tu proyecto desde GitHub o sube los archivos
3. Despliega automáticamente

## 🎯 Mejoras Futuras Sugeridas

### Para Implementar Cuando Tengas Más Experiencia

1. **Backend con Base de Datos**
   - Guardar citas permanentemente
   - Sistema de autenticación
   - Panel de administración

2. **Integración con WhatsApp**
   - Confirmación automática por WhatsApp
   - Recordatorios de citas

3. **Sistema de Pagos Online**
   - Integración con Stripe o PayPal
   - Pago anticipado de citas

4. **Galería Real**
   - Subir fotos de tus trabajos
   - Categorizar por tipo de corte

5. **Sistema de Valoraciones**
   - Clientes pueden dejar reseñas
   - Estrellas y comentarios

## 📞 Soporte

Si necesitas ayuda con la web:
- Revisa este archivo README
- Busca tutoriales en YouTube sobre desarrollo web
- Practica modificando los archivos

## 🎓 Aprende Más

Como eres joven y estás empezando, te recomiendo aprender:

1. **HTML Básico** - Estructura de páginas web
2. **CSS Fundamental** - Estilos y diseño
3. **JavaScript Esencial** - Interactividad
4. **Responsive Design** - Webs para todos los dispositivos

Recursos recomendados:
- freeCodeCamp (gratuito)
- MDN Web Docs (documentación oficial)
- YouTube: Canal "Fazt", "pildorasinformaticas"

---

**¡Felicitaciones por tu negocio de peluquería!** 🎨✂️
Esta web te ayudará a profesionalizar tu servicio y atraer más clientes. ¡Sigue así!
