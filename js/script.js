(function () {
  const cfg = window.SITE_CONFIG || { items: [] };

  // ---- Texto general desde config.js ----
  document.title = cfg.siteName || document.title;
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };
  setText("site-name", cfg.siteName);
  setText("hero-tagline", cfg.tagline);
  setText("footer-note", cfg.footerNote);
  setText("footer-author", cfg.author ? "por " + cfg.author : "");
  const grid = document.getElementById("grid");
  const template = document.getElementById("card-template");
  const emptyState = document.getElementById("empty-state");
  const resultCount = document.getElementById("result-count");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter");

  const items = Array.isArray(cfg.items) ? cfg.items : [];

  // stats en el hero
  const heroStats = document.getElementById("hero-stats");
  if (heroStats) {
    const steam = items.filter((i) => i.type === "steam").length;
    const otros = items.filter((i) => i.type === "otros").length;
    heroStats.innerHTML =
      "<span><b>" + items.length + "</b> juegos</span>" +
      "<span><b>" + steam + "</b> steam</span>" +
      "<span><b>" + otros + "</b> otros</span>";
  }

  const typeLabel = { steam: "Steam", otros: "Otros" };

  function formatDate(str) {
    if (!str) return "";
    const d = new Date(str + "T00:00:00");
    if (isNaN(d)) return str;
    return d.toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" });
  }

  function renderCard(item) {
    const node = template.content.cloneNode(true);
	const cardEl = node.querySelector(".card");
  if (item.image) {
    cardEl.style.backgroundImage = "url('" + item.image + "')";
    cardEl.classList.add("has-image");
  }

  node.querySelector(".card__id").textContent = item.id || "";
  // ... el resto de la función sigue igual
    node.querySelector(".card__id").textContent = item.id || "";
    const typeEl = node.querySelector(".card__type");
    typeEl.textContent = typeLabel[item.type] || item.type || "";
    typeEl.setAttribute("data-type", item.type || "");
    node.querySelector(".card__name").textContent = item.name || "Sin nombre";
    node.querySelector(".card__desc").textContent = item.description || "";

    const tagsWrap = node.querySelector(".card__tags");
    (item.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = "#" + tag;
      tagsWrap.appendChild(span);
    });

    node.querySelector(".card__version").textContent = item.version ? "v" + item.version : "";
    node.querySelector(".card__updated").textContent = formatDate(item.updated);

    const cta = node.querySelector(".card__cta");
    if (item.downloadUrl) {
      cta.href = item.downloadUrl;
    } else {
      cta.href = "#";
      cta.setAttribute("aria-disabled", "true");
      cta.style.opacity = ".5";
      cta.style.pointerEvents = "none";
    }

    return node;
  }

  let activeFilter = "all";
  let query = "";

  function applyFilters() {
    const q = query.trim().toLowerCase();
    const visible = items.filter((item) => {
      const matchesType = activeFilter === "all" || item.type === activeFilter;
      const haystack = [item.name, item.description, ...(item.tags || [])]
        .join(" ")
        .toLowerCase();
      const matchesQuery = q === "" || haystack.includes(q);
      return matchesType && matchesQuery;
    });

    grid.innerHTML = "";
    visible.forEach((item, i) => {
      const card = renderCard(item);
      const el = card.querySelector(".card");
      el.style.animationDelay = Math.min(i * 40, 320) + "ms";
      grid.appendChild(card);
    });

    emptyState.hidden = visible.length !== 0;
    resultCount.textContent =
      visible.length === items.length
        ? items.length + " en total"
        : visible.length + " de " + items.length;
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      activeFilter = btn.getAttribute("data-filter");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value;
      applyFilters();
    });
  }

  applyFilters();
})();
