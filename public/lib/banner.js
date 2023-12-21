class PBanner {
  constructor() {
    this.options = {
      theme: "system",
      fixed: true,
    };

    document.head.innerHTML +=
      '<link rel="stylesheet" href="https://banner.levepalestina.net/lib/banner.min.css" type="text/css"/>';
  }
  create(options) {
    this.options = { ...this.options, ...options };
    const mount = document.createElement("div");
    const id = "fp__banner" + Math.random().toString(36).substr(2, 9);
    mount.setAttribute("id", id);
    document.body.prepend(mount);
    const { theme, fixed } = this.options;
    mount.innerHTML = `
      <div class="fp__banner ${theme} ${fixed && "fixed"}">
        <p class="fp__banner__description">🇵🇸 #FreePalestine: End the occupation now! 🇵🇸</p>
        <a href="#" class="fp__banner__link" href="https://ceasefiretoday.com/" target="_blank">🍉 Act Now</a>
      </div>
    `;
  }
}

window.PBanner = new PBanner();
