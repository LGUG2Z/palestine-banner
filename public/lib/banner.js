class TFPBannerClass {
  constructor() {
    this.options = {
      id: undefined,
      theme: "auto",
      fixed: true,
    };

    document.head.innerHTML +=
      '<link rel="stylesheet" href="https://banner.techforpalestine.org/lib/banner.min.css" type="text/css"/>';
  }
  create(options) {
    this.options = { ...this.options, ...options };

    const { id, theme, fixed } = this.options;

    let mount;

    if (id) {
      mount = document.getElementById(id);
    } else {
      mount = document.createElement("div");
      mount.setAttribute(
        "id",
        "tfp__banner_" + Math.random().toString(36).substr(2, 9)
      );
      document.body.prepend(mount);
    }

    mount.innerHTML = `
      <div class="tfp__banner ${theme} ${fixed && "fixed"}">
        <p class="tfp__banner__description">🇵🇸 #SaveGaza: Call For A Ceasefire Now! 🇵🇸</p>
        <a class="tfp__banner__link" href="https://techforpalestine.org" target="_blank">Learn</a>
      </div>
    `;
  }
}

window.TFPBanner = new TFPBannerClass();
