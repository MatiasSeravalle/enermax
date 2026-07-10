/*
 * ============================================================
 *  CÓMO CARGAR LAS IMÁGENES DE CADA PRODUCTO
 * ============================================================
 *  Cada producto puede tener un arreglo "imagenes" con las rutas
 *  de sus fotos. Con esas fotos se arma el carrusel automáticamente:
 *
 *    imagenes: [
 *        "baterias-sin-fondo/enermax e50 fre.webp",
 *        "baterias-sin-fondo/enermax e50 diago.webp",
 *        "baterias-sin-fondo/enermax e50 arriba.webp",
 *    ],
 *
 *  Reglas:
 *   - Sin "imagenes" (o vacío)  -> se muestra el ícono 🔋 (como antes).
 *   - 1 sola imagen             -> se muestra fija, sin flechas.
 *   - 2 o más imágenes          -> aparece el carrusel (flechas + puntos).
 *
 *  La ruta es relativa a productos.html. Tus recortes están en la
 *  carpeta "baterias-sin-fondo/". Poné las que quieras, en el orden
 *  que quieras; la primera es la que se ve primero.
 * ============================================================
 */
const productos = [
    // Automotores
    {
        nombre: "Batería Enermax E36    ",
        categoria: "automotores",
        descripcion: "Para vehículos compactos y utilitarios livianos. Arranque confiable en condiciones de baja temperatura.",
        // Ejemplo real usando tus imágenes ya recortadas. Reemplazá/agregá las que quieras:
        imagenes: [
            "baterias-sin-fondo/enermax e36 diago.webp",
            "baterias-sin-fondo/enermax e36 frente.webp",
            "baterias-sin-fondo/enermax e36 arriba.webp",
        ],
    },
    {
        nombre: "Batería Enermax E50",
        categoria: "automotores",
        descripcion: "Para vehículos con alto consumo eléctrico. Soporta arranques frecuentes con bajo nivel de carga.",
        imagenes: [
            "baterias-sin-fondo/enermax e50 diago.webp",    
            "baterias-sin-fondo/enermax e50 arr fre.webp",
            "baterias-sin-fondo/enermax e50 fre.webp",
            "baterias-sin-fondo/enermax e50 arriba.webp",   
        ]
    },
    {
        nombre: "Batería Enermax E52",
        categoria: "automotores",
        descripcion: "Ideal para sedanes y SUVs medianos. Alta resistencia a ciclos de carga y descarga repetidos.",
        imagenes: [
            "baterias-sin-fondo/enermax 52 diago.webp",
            "baterias-sin-fondo/enermax 52 arr fre.webp",
            "baterias-sin-fondo/enermax 52 fre.webp",
            "baterias-sin-fondo/enermax 52 arr.webp",
        ],
    },
    {
        nombre: "Batería Enermax E55",
        categoria: "automotores",
        descripcion: "Para vehículos con alto consumo eléctrico. Soporta arranques frecuentes con bajo nivel de carga.",
        imagenes: [
            "baterias-sin-fondo/enermax e55 diago.webp",
            "baterias-sin-fondo/enermax e55 fre arr.webp    ",
            "baterias-sin-fondo/enermax e50 fre.webp",
            "baterias-sin-fondo/enermax e55 arriba.webp     ",
        ]
    },
    {
        nombre: "Batería Enermax E65",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/enermax 65 diago.webp",
            "baterias-sin-fondo/enermax 65 arr fre.webp",
            "baterias-sin-fondo/enermax 65 fre.webp",
            "baterias-sin-fondo/enermax 65 arr.webp",
        ],
    },
    {
        nombre: "Batería Enermax E70",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/enermax 70 diago.webp",
            "baterias-sin-fondo/enermax 70 arr fre.webp",
            "baterias-sin-fondo/enermax 70 fre.webp",
            "baterias-sin-fondo/enermax 70 arr.webp",
        ],
    },
    {
        nombre: "Batería Placord P65",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/placord 65 diago.webp",
            "baterias-sin-fondo/placord 65 fre arr.webp",
            "baterias-sin-fondo/placord 65 fre.webp",
            "baterias-sin-fondo/placord 65 arr.webp",
        ],
    },
    {
        nombre: "Batería Placord P75",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/placord 75 diago.webp",
            "baterias-sin-fondo/placord 75 arr fre.webp",
            "baterias-sin-fondo/placord 75 fre.webp",
            "baterias-sin-fondo/placord 75 arr.webp",
        ],
    },
    {
        nombre: "Batería GH 60",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/gh 60 diago.webp",
            "baterias-sin-fondo/gh 60 arr fre.webp",
            "baterias-sin-fondo/gh 60 fre.webp",
            "baterias-sin-fondo/gh 60 arr.webp",
        ],
    },
    {
        nombre: "Batería GH 75",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/gh 75 diago.webp",
            "baterias-sin-fondo/gh 75 fre arr.webp",
            "baterias-sin-fondo/gh 75 fre.webp",
            "baterias-sin-fondo/gh 75 arr.webp",
        ],
    },
    // Línea Pesada
    {
        nombre: "Batería Enermax E90",
        categoria: "pesada",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/enermax 90 diago.webp",
            "baterias-sin-fondo/enermax 90 arr fre.webp",
            "baterias-sin-fondo/enermax 90 fre.webp",
            "baterias-sin-fondo/enermax 90 arr.webp",
        ],
    },
   {
        nombre: "Batería Enermax E110",
        categoria: "pesada",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/enermax 110 diago.webp",
            "baterias-sin-fondo/enermax 110 arr fre.webp",
            "baterias-sin-fondo/enermax 110 frente.webp",
            "baterias-sin-fondo/enermax 110 arr.webp",
        ],
    },
    {
        nombre: "Batería Enermax E160",
        categoria: "pesada",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/enermax 160 diago.webp",
            "baterias-sin-fondo/enermax 160 arr fre.webp",
            "baterias-sin-fondo/enermax 160 fre.webp",
            "baterias-sin-fondo/enermax 160 arr.webp",
        ],
    },
    {
        nombre: "Batería Placord P90",
        categoria: "pesada",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/placord 90 diago.webp",
            "baterias-sin-fondo/placord 90 arr fre.webp",
            "baterias-sin-fondo/placord 90 fre.webp",
            "baterias-sin-fondo/placord 90 arr.webp",
        ],
    },
    {
        nombre: "Batería Placord P110",
        categoria: "pesada",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/placord 110 diago.webp",
            "baterias-sin-fondo/placord 110 arr fre.webp",
            "baterias-sin-fondo/placord 110 frente.webp",
            "baterias-sin-fondo/placord 110 arr.webp",
        ],
    },
    {
        nombre: "Batería Placord P180",
        categoria: "pesada",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/placord 180 diago.webp",
            "baterias-sin-fondo/placord 180 arr fre.webp",
            "baterias-sin-fondo/placord 180 fre.webp",
            "baterias-sin-fondo/placord 180 arr.webp",
        ],
    },
    // Náutica
    {
        nombre: "Batería Enermax Nautica 65",
        categoria: "nautica",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/nautica 65 diago.webp",
            "baterias-sin-fondo/nautica 65 arr fre.webp",
            "baterias-sin-fondo/nautica 65 fre.webp",
            "baterias-sin-fondo/nautica 65 arr.webp ",
        ],
    },
    {
        nombre: "Batería Moto de Agua",
        categoria: "nautica",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil.",
        imagenes: [
            "baterias-sin-fondo/agua diago.webp",
            "baterias-sin-fondo/agua arr fre.webp",
            "baterias-sin-fondo/agua fre.webp",
        ],
    },
    // Tracción
    {
        nombre: "Batería 6V 200Ah Tracción",
        categoria: "traccion",
        descripcion: "Para autoelevadores y vehículos eléctricos industriales. Diseñada para ciclos profundos diarios."
    },
    {
        nombre: "Batería 6V 280Ah Tracción",
        categoria: "traccion",
        descripcion: "Para uso intensivo en depósitos y logística. Alta capacidad de ciclo con mínima degradación."
    },
    {
        nombre: "Batería 12V 150Ah Tracción",
        categoria: "traccion",
        descripcion: "Para carretillas eléctricas y equipamiento de planta. Resistente a sobrecargas y vibraciones."
    },
    // Solar
    {
        nombre: "Batería 12V 100Ah Solar",
        categoria: "solar",
        descripcion: "Almacenamiento de energía para sistemas fotovoltaicos domésticos. Compatible con paneles de hasta 400W."
    },
    {
        nombre: "Batería 12V 200Ah AGM Solar",
        categoria: "solar",
        descripcion: "Para instalaciones medianas. Sin mantenimiento, mayor durabilidad y resistencia a temperaturas extremas."
    },
    {
        nombre: "Batería 12V 250Ah Gel Solar",
        categoria: "solar",
        descripcion: "Para sistemas solares críticos y fuera de red. Tecnología gel para mayor seguridad y vida útil prolongada."
    },
];

const catLabels = {
    automotores: "Automotores",
    pesada: "Línea Pesada",
    nautica: "Náutica",
    traccion: "Tracción",
    solar: "Solar",
};

// Marcas conocidas. La clave es el valor interno; el valor, la etiqueta visible.
const marcaLabels = {
    enermax: "Enermax",
    placord: "Placord",
    gh: "GH",
};

// Detecta la marca a partir del nombre del producto.
function detectarMarca(nombre) {
    const n = nombre.toLowerCase();
    if (n.includes("enermax")) return "enermax";
    if (n.includes("placord")) return "placord";
    if (/\bgh\b/.test(n)) return "gh";
    return null;
}

// Normaliza espacios sobrantes que puedan quedar al editar los datos a mano
// (nombres y rutas de imágenes) y completa la marca de cada producto.
// Si un producto ya trae "marca" definida a mano, se respeta; si no, se detecta
// desde el nombre. Los productos sin marca conocida quedan con marca = null.
productos.forEach(p => {
    p.nombre = p.nombre.trim();
    if (Array.isArray(p.imagenes)) {
        p.imagenes = p.imagenes.map(src => src.trim());
    }
    if (!p.marca) p.marca = detectarMarca(p.nombre);
});

// Devuelve el HTML del área de imagen: ícono, imagen fija o carrusel
// según cuántas fotos tenga el producto.
function carruselHTML(imagenes, alt) {
    if (!imagenes || imagenes.length === 0) {
        return `<span class="prod__img-icon">🔋</span>`;
    }
    if (imagenes.length === 1) {
        return `<img src="${encodeURI(imagenes[0])}" alt="${alt}" loading="lazy">`;
    }
    const slides = imagenes.map(src =>
        `<div class="carrusel__slide"><img src="${encodeURI(src)}" alt="${alt}" loading="lazy"></div>`
    ).join("");
    const puntos = imagenes.map((_, i) =>
        `<button class="carrusel__punto${i === 0 ? " active" : ""}" type="button" aria-label="Ir a la imagen ${i + 1}"></button>`
    ).join("");
    return `
        <div class="carrusel">
            <div class="carrusel__track">${slides}</div>
            <button class="carrusel__flecha carrusel__flecha--prev" type="button" aria-label="Imagen anterior">&#8249;</button>
            <button class="carrusel__flecha carrusel__flecha--next" type="button" aria-label="Imagen siguiente">&#8250;</button>
            <div class="carrusel__puntos">${puntos}</div>
        </div>`;
}

// Conecta flechas y puntos de un carrusel ya presente en el DOM.
// stopPropagation evita que el clic abra el modal cuando el carrusel
// está dentro de una tarjeta.
function initCarrusel(car) {
    const track = car.querySelector(".carrusel__track");
    const slides = car.querySelectorAll(".carrusel__slide");
    const puntos = car.querySelectorAll(".carrusel__punto");
    const total = slides.length;
    let idx = 0;

    function ir(n) {
        idx = (n + total) % total;
        track.style.transform = `translateX(-${idx * 100}%)`;
        puntos.forEach((p, i) => p.classList.toggle("active", i === idx));
    }

    car.querySelector(".carrusel__flecha--prev").addEventListener("click", e => {
        e.stopPropagation();
        ir(idx - 1);
    });
    car.querySelector(".carrusel__flecha--next").addEventListener("click", e => {
        e.stopPropagation();
        ir(idx + 1);
    });
    puntos.forEach((p, i) => p.addEventListener("click", e => {
        e.stopPropagation();
        ir(i);
    }));
}

// === Estado de los filtros ===
let catActual = "todos";     // categoría (tipo de vehículo) seleccionada
let marcaActual = "todas";   // marca seleccionada

// Devuelve las marcas presentes en una categoría (o en todo el catálogo si es
// "todos"), sin repetir y en el orden de marcaLabels.
function marcasDe(cat) {
    const enCat = cat === "todos" ? productos : productos.filter(p => p.categoria === cat);
    const presentes = new Set(enCat.map(p => p.marca).filter(Boolean));
    return Object.keys(marcaLabels).filter(m => presentes.has(m));
}

// Dibuja la fila de filtros de marca según la categoría actual.
// Solo aparece si esa categoría tiene 2 o más marcas (así Náutica, Tracción y
// Solar no muestran filtro de marca, y GH aparece únicamente en Automotores).
function renderMarcas() {
    const cont = document.getElementById("marcasContainer");
    const marcas = marcasDe(catActual);

    if (marcas.length < 2) {
        cont.innerHTML = "";
        cont.hidden = true;
        marcaActual = "todas";
        return;
    }

    cont.hidden = false;
    const botones = ["todas", ...marcas].map(m => {
        const label = m === "todas" ? "Todas las marcas" : marcaLabels[m];
        const activa = m === marcaActual ? " active" : "";
        return `<button class="filtro__btn filtro__btn--marca${activa}" type="button" data-marca="${m}">${label}</button>`;
    }).join("");
    cont.innerHTML = botones;

    cont.querySelectorAll(".filtro__btn--marca").forEach(btn => {
        btn.addEventListener("click", () => {
            marcaActual = btn.dataset.marca;
            cont.querySelectorAll(".filtro__btn--marca").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProductos();
        });
    });
}

function renderProductos() {
    const grid = document.getElementById("catalogoGrid");
    const filtrados = productos.filter(p =>
        (catActual === "todos" || p.categoria === catActual) &&
        (marcaActual === "todas" || p.marca === marcaActual)
    );

    if (filtrados.length === 0) {
        grid.innerHTML = '<div class="catalogo__vacio"><p>No hay productos con estos filtros.</p></div>';
        return;
    }

    grid.innerHTML = filtrados.map((p, i) => `
        <article class="prod__card" style="animation-delay: ${i * 60}ms" data-nombre="${p.nombre}" tabindex="0" role="button" aria-label="Ver detalle de ${p.nombre}">
            <div class="prod__img">
                ${carruselHTML(p.imagenes, p.nombre)}
            </div>
            <div class="prod__body">
                <span class="prod__badge">${catLabels[p.categoria]}</span>
                <h3 class="prod__nombre">${p.nombre}</h3>
                <p class="prod__desc">${p.descripcion}</p>
            </div>
        </article>
    `).join("");

    // Activar los carruseles de las tarjetas
    grid.querySelectorAll(".carrusel").forEach(initCarrusel);

    // Abrir el modal al hacer clic (o Enter/Espacio) sobre una tarjeta
    grid.querySelectorAll(".prod__card").forEach(card => {
        const prod = filtrados.find(p => p.nombre === card.dataset.nombre);
        card.addEventListener("click", () => abrirModal(prod));
        card.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                abrirModal(prod);
            }
        });
    });
}

// === Modal de detalle ===
const WHATSAPP_NUM = "5493534066268";
const modal = document.getElementById("prodModal");
const modalImg = document.getElementById("modalImg");
const modalBadge = document.getElementById("modalBadge");
const modalNombre = document.getElementById("modalNombre");
const modalDesc = document.getElementById("modalDesc");
const modalWsp = document.getElementById("modalWsp");
const modalClose = document.getElementById("modalClose");

function abrirModal(p) {
    if (!p) return;
    modalImg.innerHTML = carruselHTML(p.imagenes, p.nombre);
    const carModal = modalImg.querySelector(".carrusel");
    if (carModal) initCarrusel(carModal);
    modalBadge.textContent = catLabels[p.categoria];
    modalNombre.textContent = p.nombre;
    modalDesc.textContent = p.descripcion;

    const mensaje = `Hola! Quiero consultar por la ${p.nombre} de Enermax.`;
    modalWsp.href = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensaje)}`;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalClose.focus();
}

function cerrarModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", cerrarModal);
modal.addEventListener("click", e => {
    if (e.target === modal) cerrarModal();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("active")) cerrarModal();
});

// === Filtros por tipo de vehículo ===
// Se seleccionan por [data-cat] para no confundirlos con los chips de marca,
// que comparten la clase .filtro__btn pero usan [data-marca].
const filtrosTipo = document.querySelectorAll(".filtro__btn[data-cat]");
filtrosTipo.forEach(btn => {
    btn.addEventListener("click", () => seleccionarCategoria(btn.dataset.cat));
});

function seleccionarCategoria(cat) {
    catActual = cat;
    marcaActual = "todas"; // al cambiar de tipo se reinicia la marca
    filtrosTipo.forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
    renderMarcas();
    renderProductos();
}

// Estado inicial (soporta ?cat=automotores desde el index)
const params = new URLSearchParams(window.location.search);
const catParam = params.get("cat");
const catInicial = (catParam && [...filtrosTipo].some(b => b.dataset.cat === catParam))
    ? catParam
    : "todos";
seleccionarCategoria(catInicial);

// Menú hamburguesa
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
    });
});
