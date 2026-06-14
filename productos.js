const productos = [
    // Automotores
    {
        nombre: "Batería 12V 45Ah",
        categoria: "automotores",
        descripcion: "Para vehículos compactos y utilitarios livianos. Arranque confiable en condiciones de baja temperatura."
    },
    {
        nombre: "Batería 12V 65Ah",
        categoria: "automotores",
        descripcion: "Ideal para sedanes y SUVs medianos. Alta resistencia a ciclos de carga y descarga repetidos."
    },
    {
        nombre: "Batería 12V 75Ah",
        categoria: "automotores",
        descripcion: "Para vehículos con alto consumo eléctrico. Soporta arranques frecuentes con bajo nivel de carga."
    },
    {
        nombre: "Batería 12V 90Ah",
        categoria: "automotores",
        descripcion: "Para camionetas y 4x4 con muchos accesorios. Máxima corriente de arranque y larga vida útil."
    },
    // Línea Pesada
    {
        nombre: "Batería 12V 150Ah",
        categoria: "pesada",
        descripcion: "Para camiones medianos y micros. Placa reforzada con alta resistencia a vibraciones y golpes."
    },
    {
        nombre: "Batería 12V 180Ah",
        categoria: "pesada",
        descripcion: "Para maquinaria agrícola y vehículos de gran porte. Rendimiento estable en ciclos de trabajo intenso."
    },
    {
        nombre: "Batería 12V 220Ah",
        categoria: "pesada",
        descripcion: "Para camiones de larga distancia y equipos de construcción. Máxima capacidad de arranque en frío."
    },
    // Motocicletas
    {
        nombre: "Batería 12V 5Ah",
        categoria: "motocicletas",
        descripcion: "Para motos de baja cilindrada y scooters. Diseño compacto, liviano y libre de mantenimiento."
    },
    {
        nombre: "Batería 12V 9Ah",
        categoria: "motocicletas",
        descripcion: "Para motos medianas y enduro. Tecnología MF sin relleno de agua con larga vida útil."
    },
    {
        nombre: "Batería 12V 14Ah",
        categoria: "motocicletas",
        descripcion: "Para motos de alta cilindrada y custom. Alta corriente de arranque para motores de gran porte."
    },
    // Náutica
    {
        nombre: "Batería 12V 100Ah Náutica",
        categoria: "nautica",
        descripcion: "Para arranque y servicios en embarcaciones. Resistente a la humedad y la corrosión marina."
    },
    {
        nombre: "Batería 12V 120Ah Deep Cycle",
        categoria: "nautica",
        descripcion: "Para lanchas y veleros con equipos electrónicos a bordo. Soporta descargas profundas reiteradas."
    },
    {
        nombre: "Batería 12V 150Ah Gel Náutica",
        categoria: "nautica",
        descripcion: "Para uso intensivo en embarcaciones. Sin riesgo de derrame, ideal para instalaciones cerradas."
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
    motocicletas: "Motocicletas",
    nautica: "Náutica",
    traccion: "Tracción",
    solar: "Solar",
};

function renderProductos(cat) {
    const grid = document.getElementById("catalogoGrid");
    const filtrados = cat === "todos" ? productos : productos.filter(p => p.categoria === cat);

    if (filtrados.length === 0) {
        grid.innerHTML = '<div class="catalogo__vacio"><p>No hay productos en esta categoría.</p></div>';
        return;
    }

    grid.innerHTML = filtrados.map((p, i) => `
        <article class="prod__card" style="animation-delay: ${i * 60}ms" data-nombre="${p.nombre}" tabindex="0" role="button" aria-label="Ver detalle de ${p.nombre}">
            <div class="prod__img">
                ${p.imagen
                    ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy">`
                    : `<span class="prod__img-icon">🔋</span>`}
            </div>
            <div class="prod__body">
                <span class="prod__badge">${catLabels[p.categoria]}</span>
                <h3 class="prod__nombre">${p.nombre}</h3>
                <p class="prod__desc">${p.descripcion}</p>
            </div>
        </article>
    `).join("");

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
    modalImg.innerHTML = p.imagen
        ? `<img src="${p.imagen}" alt="${p.nombre}">`
        : `<span class="prod__img-icon">🔋</span>`;
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

// Filtros
const filtros = document.querySelectorAll(".filtro__btn");
filtros.forEach(btn => {
    btn.addEventListener("click", () => {
        filtros.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProductos(btn.dataset.cat);
    });
});

// Soporte para ?cat=automotores desde el index
const params = new URLSearchParams(window.location.search);
const catParam = params.get("cat");
if (catParam) {
    const targetBtn = document.querySelector(`.filtro__btn[data-cat="${catParam}"]`);
    if (targetBtn) {
        filtros.forEach(b => b.classList.remove("active"));
        targetBtn.classList.add("active");
        renderProductos(catParam);
    } else {
        renderProductos("todos");
    }
} else {
    renderProductos("todos");
}

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
