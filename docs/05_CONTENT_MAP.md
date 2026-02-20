# Content Map: KUSI Fútbol Tours Web MVP

**Versión:** 1.1  
**Última actualización:** 24 de Mayo, 2024  
**Responsable:** UX Writer / Frontend Lead  

---

## 0. Convenciones y Reglas de Sincronización
- **IDs de Sección:** Deben usarse como `id=""` en el HTML/React para navegación por anclas.
- **Naming de Rutas:** Kebab-case para slugs de páginas (ej: `/how-it-works`).
- **Naming de Imágenes:** `[seccion]-[descripcion].[extension]` (ej: `hero-stadium.webp`).
- **Sync:** Este documento manda sobre el código. Cualquier cambio aquí debe verse reflejado en `translations.ts` y en el orden de los componentes en `Home.tsx`.

---

## 1. Arquitectura de Páginas

### Página: / (Home)
- **Slug:** `/`
- **ID Secciones:** `hero`, `about`, `includes`, `how-it-works`, `pricing`, `trust`, `faq`, `final-cta`

#### Zona: Hero (id: hero)
- **H1:** Vive un partido de Universitario **sin improvisar.**
- **Subcopy:** Punto de encuentro, van privada, entrada asegurada y acompañamiento completo. Tu única misión es alentar.
- **CTA Primary:** [Reservar por WhatsApp] -> `cta_whatsapp_primary`
- **CTA Secondary:** [Ver qué incluye] -> anchor: `#includes`
- **Trust Chips:** 
  - 🛡️ 100% Seguro
  - 🚐 Transporte Privado
  - 🎟️ Entrada Garantizada

#### Zona: Qué es KUSI (id: about)
- **H2:** La logística del fútbol, simplificada.
- **Body:** Somos la solución para quienes aman el fútbol pero odian la logística caótica de Lima. Gestionamos tu traslado y seguridad dentro del estadio para que disfrutes de la mística crema con tranquilidad y estilo.

#### Zona: Qué incluye / Qué no incluye (id: includes)
- **H2:** Transparencia total.
- **H3: Incluye**
  - Punto de encuentro en zona segura (Miraflores/San Isidro).
  - Van privada ida y vuelta con aire acondicionado.
  - Entrada física o digital gestionada y garantizada.
  - Acompañamiento bilingüe durante todo el tour.
  - 1 Bebida de cortesía.
  - Camiseta oficial KUSI Matchday.
- **H3: No incluye**
  - Comidas adicionales.
  - Bebidas extras dentro del estadio.
  - Acceso a zonas VIP o Palcos.
  - Interacción con jugadores.

#### Zona: Cómo funciona (id: how-it-works)
- **H2:** 5 pasos para llegar al Monumental.
- **Step 1 (Reserva):** Separa tu cupo vía WhatsApp con el pago total anticipado.
- **Step 2 (Encuentro):** Llega al punto de encuentro 15 min antes de la salida.
- **Step 3 (Traslado):** Viaja cómodo y seguro en nuestra unidad privada.
- **Step 4 (El Partido):** Disfruta el juego con tu host y el grupo de 10 personas.
- **Step 5 (Retorno):** Regresamos al punto inicial apenas termine el encuentro.

#### Zona: Precio (id: pricing)
- **H2:** Inversión de la experiencia.
- **Precio:** S/ 400 por persona.
- **Copy:** Pago único. Incluye movilidad, entrada y seguridad. Sin cargos ocultos.

#### Zona: Seguridad y orden (id: trust)
- **H2:** Por qué elegir KUSI.
- **Body:** Ir al estadio en Lima puede ser intimidante. KUSI elimina esa barrera con rutas validadas, ingresos en bloque y monitoreo constante. No somos un tour improvisado, somos profesionales del fútbol.

#### Zona: FAQ (id: faq)
- **H2:** Preguntas frecuentes.
- **Items:** Ver sección global de FAQ.

#### Zona: Final CTA (id: final-cta)
- **H2:** ¿Listo para la próxima fecha?
- **Copy:** Los cupos son limitados (máx. 10 personas por grupo). Asegura tu lugar hoy mismo.
- **CTA:** [Reservar mi lugar ahora] -> `cta_whatsapp_primary`

---

## 2. Catálogo de CTAs (Global)

| ID CTA | Label (ES) | Label (EN) | Acción / Destino |
|:---|:---|:---|:---|
| `cta_whatsapp_primary` | Reservar por WhatsApp | Book via WhatsApp | `https://wa.me/51900000000?text=...` |
| `cta_whatsapp_sticky` | Reservar ahora | Book Now | (Mismo destino, fijo en mobile) |
| `cta_view_includes` | Ver qué incluye | See what's included | Anchor: `#includes` |
| `cta_faq_ask` | Preguntar por WhatsApp | Ask via WhatsApp | Destino WA con mensaje de duda |

---

## 3. Especificación de Imágenes

Para el MVP, las imágenes se gestionan mediante **URLs externas** en `constants.ts`. Al pasar a producción local, deben colocarse en la ruta física indicada abajo.

| Uso | Archivo Destino | Ruta Física | Tamaño (px) | Formato | Alt Text (ES) |
|:---|:---|:---|:---|:---|:---|
| Hero Home | `hero-universitario.webp` | `/public/images/` | 1200x800 | WebP | Hinchada de Universitario en el Monumental |
| Seguridad | `trust-van.webp` | `/public/images/` | 600x600 | WebP | Van privada de KUSI en punto de encuentro |
| Experiencia | `stadium-view.webp` | `/public/images/` | 1400x600 | WebP | Vista desde la tribuna del Estadio Monumental |
| Hostels | `hostel-partner.webp` | `/public/images/` | 600x400 | WebP | Turistas listos para el tour en un hostel |

---

## 4. Contrato "Doc → Código"

1. **Un solo lugar:** Todo texto que aparezca en la web DEBE estar en este archivo.
2. **Componentes:** Cada zona definida (ej: `id: pricing`) corresponde a un componente React en `Home.tsx`.
3. **Mapeo i18n:** El objeto `translations` en `translations.ts` debe estructurarse siguiendo las claves de este documento.
4. **Carpeta /public:** Si estás en un entorno local, **debes crear manualmente** la carpeta `public/images/` y subir allí tus archivos con los nombres indicados arriba. El código está preparado para buscar en `ASSETS` de `constants.ts`.
