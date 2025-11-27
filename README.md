# 🎨 Oinatz Docampo - Peluquero Profesional

Una web moderna y profesional para el negocio de peluquería de Oinatz Docampo, peluquero de 16 años que trabaja de forma independiente.

## ✨ Características

- 🎯 **Diseño Moderno**: Interfaz elegante y profesional con animaciones suaves
- 📱 **Totalmente Responsive**: Funciona perfectamente en móviles, tablets y ordenadores
- 📅 **Sistema de Reservas Integrado**: Formulario de citas completo sin necesidad de apps externas
- 💰 **Catálogo de Servicios**: Muestra clara de precios y servicios
- 📞 **Contacto Directo**: Información de contacto fácilmente accesible
- 🖼️ **Galería de Trabajos**: Espacio para mostrar los mejores cortes
- ⚡ **Rápida y Ligera**: Optimizada para cargarse rápidamente

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

### 3. Servicios
- 4 tipos de servicios con precios
- Tarjetas animadas con hover effects
- Iconos representativos para cada servicio

### 4. Sistema de Reservas
- Formulario completo con validaciones
- Selector de fechas (no permite domingos)
- Horarios disponibles
- Confirmación con modal animado

### 5. Galería
- Espacio para mostrar fotos de trabajos
- Diseño de grid responsive
- Efectos hover en las imágenes

### 6. Contacto
- Información de contacto directa
- Formulario de mensajes
- Enlace para llamada automática

## 🔧 Personalización

### Cambiar Información de Contacto
Edita estos valores en `index.html`:
- Teléfono: `+34 678 11 94 92`
- Ubicación: Texto en sección "contacto"
- Horario: Ajustar según disponibilidad

### Modificar Servicios y Precios
En la sección "services" de `index.html`:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-user"></i>
    </div>
    <h3>Nombre del Servicio</h3>
    <p>Descripción del servicio</p>
    <div class="price">XX€</div>
</div>
```

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #3498db;
    /* ... otros colores */
}
```

## 📱 Características Técnicas

### Validaciones Implementadas
- ✅ Formato de teléfono español (6xx xxx xxx o 7xx xxx xxx)
- ✅ No permitir domingos en el calendario
- ✅ Fecha mínima: día actual
- ✅ Fecha máxima: 3 meses desde hoy
- ✅ Campos obligatorios

### Animaciones y Efectos
- ✅ Scroll suave entre secciones
- ✅ Hover effects en tarjetas
- ✅ Animaciones de entrada con Intersection Observer
- ✅ Modal de confirmación animado
- ✅ Loading states en botones

### Almacenamiento Local
- Las citas se guardan en `localStorage` del navegador
- Los mensajes de contacto también se almacenan localmente
- **Nota**: Para un sitio real, necesitarías un backend para guardar los datos permanentemente

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
