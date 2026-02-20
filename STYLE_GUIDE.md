# Guía de Estilos - KUSI Fútbol Tours

Esta guía detalla el sistema de diseño y los estilos visuales utilizados en el MVP de KUSI Fútbol Tours para facilitar su réplica y mantenimiento.

---

## 1. Identidad Visual (Logo)

El logo se compone de un isotipo (la "K") y un logotipo (texto).

### Isotipo (La "K")
- **Contenedor:**
  - Tamaño: `36px x 36px` (`w-9 h-9`)
  - Color de Fondo: `#C4161C` (Rojo KUSI)
  - Bordes: Redondeados `12px` (`rounded-xl`)
  - Sombra: `shadow-sm`
- **Letra "K":**
  - Color: `#FFFFFF`
  - Peso: `font-bold`
  - Tamaño: `text-lg`
- **Interacción:** `transition-transform group-hover:scale-105`

### Logotipo (Texto)
- **Contenedor:** Flexbox vertical (`flex flex-col leading-none`)
- **Texto "KUSI":**
  - Color: `#111111`
  - Tamaño: `text-xl`
  - Peso: `font-bold`
  - Espaciado: `tracking-tighter`
- **Texto "Fútbol Tours":**
  - Color: `#C4161C`
  - Tamaño: `text-[10px]`
  - Peso: `font-bold`
  - Transformación: `uppercase`
  - Espaciado: `tracking-[0.2em]`

---

## 2. Paleta de Colores

| Uso | Hex / Clase Tailwind | Descripción |
| :--- | :--- | :--- |
| **Primario** | `#C4161C` | Rojo KUSI (Pasión y Energía) |
| **Fondo App** | `#F7F8FA` | Gris muy claro (Limpieza) |
| **Texto Principal** | `#111111` | Negro casi puro (Legibilidad) |
| **Texto Secundario**| `#111111/60` | Gris oscuro (Jerarquía) |
| **Bordes** | `#E4E6E8` | Gris suave para separadores |
| **Blanco** | `#FFFFFF` | Fondo de tarjetas y secciones |
| **Acento Amber** | `#F2B705` | Utilizado en Badges de urgencia |
| **Acento Info** | `blue-600` | Utilizado en Badges informativos |

---

## 3. Tipografía

- **Fuente:** `Inter`, sans-serif (Importada de Google Fonts)
- **Pesos utilizados:**
  - `400` (Regular)
  - `500` (Medium)
  - `600` (Semi-bold)
  - `700` (Bold)
  - `900` (Black) - Usado en precios y botones destacados.

---

## 4. Componentes Globales

### Botones (`Button.tsx`)
- **Base:** `rounded-[14px]`, `font-semibold`, `transition-all`, `active:scale-95`.
- **Primario:**
  - Fondo: `#C4161C`
  - Texto: `#FFFFFF`
  - Altura: `44px` (móvil) / `48px` (desktop)
  - Sombra: `shadow-sm`
- **Secundario:**
  - Fondo: `#FFFFFF`
  - Texto: `#111111`
  - Borde: `1px solid #E4E6E8`
  - Hover: `bg-[#F7F8FA]`

### Tarjetas (`Card.tsx`)
- **Fondo:** `#FFFFFF`
- **Borde:** `1px solid #E4E6E8`
- **Radio:** `18px` (`rounded-[18px]`)
- **Padding:** `p-6` (móvil) / `p-8` (desktop)
- **Sombra:** `shadow-sm`

### Badges (`Badge.tsx`)
- **Base:** `px-3 py-1`, `text-xs`, `font-semibold`, `rounded-full`, `border`.
- **Variante Info:** `bg-blue-50 text-blue-600 border-blue-100`
- **Variante Amber:** `bg-[#F2B705]/10 text-[#B7791F] border-[#F2B705]/20`

---

## 5. Secciones Clave

### Header / Navbar
- **Altura:** `72px`
- **Fondo:** `bg-white/95` con `backdrop-blur-md`
- **Borde Inferior:** `1px solid #E4E6E8`
- **Ancho Máximo:** `1120px`

### Hero Section
- **Título (H1):** `text-4xl` a `text-6xl`, `font-bold`, `tracking-tight`.
- **Imagen Hero:** `rounded-[24px]`, `shadow-2xl`, borde blanco de `4px`.
- **Next Match Card:** Flotante, `bg-white`, `rounded-[20px]`, `shadow-xl`.

### Footer
- **Fondo:** `#FFFFFF`
- **Borde Superior:** `1px solid #E4E6E8`
- **Padding:** `pt-16 pb-24` (móvil) / `pb-16` (desktop)
- **Texto Copyright:** `text-sm text-[#111111]/40`

---

## 6. Utilidades de Espaciado y Layout

- **Contenedor Principal:** `max-w-[1120px] mx-auto px-4 md:px-6`
- **Espaciado entre Secciones:** `py-24` (96px)
- **Grillas:**
  - Hero: `grid-cols-1 md:grid-cols-2 gap-12`
  - Beneficios: `grid-cols-1 md:grid-cols-2 gap-8`
  - Pasos: `grid-cols-1 md:grid-cols-5 gap-8`

---

## 7. Efectos y Animaciones

- **Transiciones:** `transition-all duration-200` por defecto en elementos interactivos.
- **Hover Imágenes:** `transform hover:scale-105 transition-transform duration-700`.
- **Entrada Menú Móvil:** `animate-in slide-in-from-top`.
- **Sticky WhatsApp:** Botón flotante con `shadow-lg` y `z-index: 40`.
