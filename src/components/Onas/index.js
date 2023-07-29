"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _stylesModule = _interopRequireDefault(require("./styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function SchoolPage() {
  var handleLogin = function handleLogin() {
    window.location.href = '/login';
  };
  var handleCalendar = function handleCalendar() {
    // e.preventDefault();
    // const token = localStorage.getItem('token');

    window.location.href = '/calendar';
  };
  var handleNavigateToOnas = function handleNavigateToOnas() {
    window.location.href = '/onas';
  };
  var handleNavigateToContact = function handleNavigateToContact() {
    window.location.href = '/kontakt';
  };
  var handleLogout = function handleLogout() {
    localStorage.removeItem('token');
    window.location.reload();
  };
  var handleDetails = function handleDetails() {
    window.location.href = '/details';
  };
  var handleCennik = function handleCennik() {
    window.location.href = '/cennik';
  };
  // Zawartość strony głównej szkoły tenisowej
  var isLoggedIn = !!localStorage.getItem('token');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _stylesModule.default.main_container
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: _stylesModule.default.navbar
  }, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Lublin Tenis"))), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleNavigateToOnas
  }, "O nas"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleNavigateToContact
  }, "Kontakt"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleCennik
  }, "Cennik"), isLoggedIn ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleDetails
  }, "Szczeg\xF3\u0142y konta"), /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/_react.default.createElement("button", {
    className: _stylesModule.default.white_btn,
    onClick: handleLogin
  }, "Login")), /*#__PURE__*/_react.default.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/_react.default.createElement("head", null, /*#__PURE__*/_react.default.createElement("meta", {
    charset: "utf-8"
  }), /*#__PURE__*/_react.default.createElement("link", {
    href: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/css/tennisacademy.webflow.30266dbd7.min.css",
    rel: "stylesheet",
    type: "text/css"
  }), /*#__PURE__*/_react.default.createElement("link", {
    href: "https://uploads-ssl.webflow.com/img/favicon.ico",
    rel: "shortcut icon",
    type: "image/x-icon"
  }), /*#__PURE__*/_react.default.createElement("link", {
    href: "https://uploads-ssl.webflow.com/img/webclip.png",
    rel: "apple-touch-icon"
  })), /*#__PURE__*/_react.default.createElement("body", {
    class: "body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "html-embed w-embed"
  }, /*#__PURE__*/_react.default.createElement("style", null)), /*#__PURE__*/_react.default.createElement("div", {
    class: "page-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "main-wrapper"
  }, /*#__PURE__*/_react.default.createElement("header", {
    class: "section_tennis-hero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "hero_image-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop.webp",
    loading: "eager",
    srcset: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop-p-500.webp 500w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop-p-800.webp 800w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop-p-1080.webp 1080w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop-p-1600.webp 1600w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop-p-2000.webp 2000w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop-p-2600.webp 2600w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f70214eaebd680cb66ad_tennis-hero_dktop.webp 2938w",
    sizes: "100vw",
    alt: "tennis racket",
    class: "image_hero hide-on-mobile"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f702af7a3ed53b34e09a_tennis_mobile.webp",
    loading: "eager",
    sizes: "(max-width: 1600px) 100vw, 1600px",
    srcset: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f702af7a3ed53b34e09a_tennis_mobile-p-500.webp 500w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f702af7a3ed53b34e09a_tennis_mobile-p-800.webp 800w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f702af7a3ed53b34e09a_tennis_mobile-p-1080.webp 1080w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f702af7a3ed53b34e09a_tennis_mobile-p-1600.webp 1600w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/6405f702af7a3ed53b34e09a_tennis_mobile.webp 1600w",
    alt: "tennis racket",
    class: "image_hero-on-mobile"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "container-large w-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "hero_content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "hero_content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "align-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "div-hide"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    class: "heading-1",
    style: {
      width: "100%",
      maxWidth: "1400px",
      height: "auto"
    }
  }, "Tenis z Pasj\u0105")), /*#__PURE__*/_react.default.createElement("div", {
    class: "div-dhide"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    text: "",
    class: "heading-2"
  }, "Aleksandra Kuszewska")), /*#__PURE__*/_react.default.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
    integrity: "sha512-...",
    crossorigin: "anonymous"
  }), /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-arrow-down"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "style"
  }, "fghj")), /*#__PURE__*/_react.default.createElement("div", {
    class: "space-16px is-nav-mobile"
  }))))), /*#__PURE__*/_react.default.createElement("section", {
    class: "section_program wf-section",
    id: "omnie"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "padding-global"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container-large"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "space-88 hide-on-mobile"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "align-center"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    "text-split": "",
    "slide-up": "",
    class: "heading-2 is-program"
  }, "O mnie ...", /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement("div", {
    class: "space-88 hide-on-mobile"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    class: "desc"
  }, "Cze\u015B\u0107! Jestem Ola i z wielkim entuzjazmem witam Ci\u0119 na mojej tenisowej stronie. Od zawsze kocha\u0142am tenis i teraz z dum\u0105 i zaanga\u017Cowaniem dziel\u0119 si\u0119 t\u0105 pasj\u0105. Jako certyfikowana instruktorka tenisa poziomu ITF Level 1, moje do\u015Bwiadczenie w nauczaniu pocz\u0105tkuj\u0105cych graczy daje mi ogromn\u0105 satysfakcj\u0119. Jednak najwi\u0119ksz\u0105 rado\u015B\u0107 i spe\u0142nienie czerpi\u0119 z pracy z najm\u0142odszymi adeptami tenisa."), /*#__PURE__*/_react.default.createElement("div", {
    class: "space-44px"
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/Certyfikat.png",
    style: {
      width: "100%",
      maxWidth: "900px",
      height: "auto"
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "div-hide"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-arrow-down"
  }))))), /*#__PURE__*/_react.default.createElement("section", {
    section: "",
    class: "section_grow wf-section",
    id: "zajecia"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "section-grow_image-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/641a02d0ee50318499afbea8_grow_bg.jpg",
    loading: "lazy",
    srcset: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/641a02d0ee50318499afbea8_grow_bg-p-500.jpg 500w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/641a02d0ee50318499afbea8_grow_bg-p-800.jpg 800w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/641a02d0ee50318499afbea8_grow_bg-p-1080.jpg 1080w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/641a02d0ee50318499afbea8_grow_bg-p-1600.jpg 1600w, https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/641a02d0ee50318499afbea8_grow_bg.jpg 1600w",
    sizes: "100vw",
    alt: "tennis racket\n",
    class: "image_grow img_overlay"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "img-overlay"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "padding-global"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container-large"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "padding-vertical padding-large is-grow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "section_grow-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "heading-anim-wrapper is-grow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    "text-split": "",
    class: "heading-2 is-grow"
  }, "Rozwijaj si\u0119 ", /*#__PURE__*/_react.default.createElement("br", null), "na korcie"), /*#__PURE__*/_react.default.createElement("div", {
    class: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    "slide-up": "",
    class: "heading-2 is-hide"
  }, "YOUR SKILLS")))), /*#__PURE__*/_react.default.createElement("div", {
    class: "grow_bottom-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "grow_bottom-right-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text-size-large is-grow"
  }, "Prowadz\u0119 treningi zar\xF3wno indywidualne, jak i grupowe dla uczni\xF3w w ka\u017Cdym wieku, zar\xF3wno dla dzieci, jak i doros\u0142ych. Zaj\u0119cia dla dzieci opieraj\u0105 si\u0119 na programie \"Tenis 10\", kt\xF3ry zosta\u0142 stworzony specjalnie z my\u015Bl\u0105 o najm\u0142odszych. ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Podnie\u015B swoje umiej\u0119tno\u015Bci gry w tenisa, osi\u0105gnij mistrzostwo !"))))))))), /*#__PURE__*/_react.default.createElement("div", {
    class: "space-88 hide-on-mobile"
  })), /*#__PURE__*/_react.default.createElement("footer", {
    section: "",
    class: "footer",
    id: "kontakt"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "align-center"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    "text-split": "",
    "slide-up": "",
    class: "heading-2 is-program"
  }, "Kontakt", /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("h3", {
    class: "phone-nr",
    style: {
      color: "#fff7d6"
    }
  }, "Telefon: 577 160 707"), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("div", {
    class: "space-1 hide-on-mobile"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "footer_component anim"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "padding-global"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#fff7d6"
    }
  }, "Korty na ul. Irydiona:"), /*#__PURE__*/_react.default.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9991.405942347357!2d22.5107503!3d51.24023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472259cc596cc4a3%3A0x248df7853e891b37!2sTenis%204Hand!5e0!3m2!1spl!2spl!4v1690559603029!5m2!1spl!2spl",
    width: "600",
    height: "450",
    style: {
      border: 0
    },
    allowFullScreen: "",
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "padding-vertical padding-xxlarge"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    id: "w-node-_541d2a2f-8c4a-5d5f-097a-40b4c5ef4dc8-1f4856ba",
    class: "footer_logo-link w-nav-brand"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "footer_logo"
  }, "AK")), /*#__PURE__*/_react.default.createElement("div", {
    class: "w-layout-grid footer_link-list"
  }, /*#__PURE__*/_react.default.createElement("a", {
    id: "w-node-_541d2a2f-8c4a-5d5f-097a-40b4c5ef4dcb-1f4856ba",
    href: "#",
    class: "footer_link"
  }, "Programs"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "footer_link"
  }, "Prices"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "footer_link"
  }, "Get in touch")), /*#__PURE__*/_react.default.createElement("div", {
    id: "w-node-_541d2a2f-8c4a-5d5f-097a-40b4c5ef4dd5-1f4856ba",
    class: "w-layout-grid footer_social-list"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "footer_social-link w-inline-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "social-icon w-embed"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }))), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    class: "footer_social-link w-inline-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "social-icon w-embed"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "line-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "padding-top padding-medium"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "w-layout-grid footer_bottom-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "w-node-_541d2a2f-8c4a-5d5f-097a-40b4c5ef4de3-1f4856ba",
    class: "footer_credit-text"
  }, "\xA9 2023 Lublin Tenis.")))))))), /*#__PURE__*/_react.default.createElement("script", {
    src: "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63efc7b910fa36fa6ca158a8",
    type: "text/javascript",
    integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    crossorigin: "anonymous"
  }), /*#__PURE__*/_react.default.createElement("script", {
    src: "https://uploads-ssl.webflow.com/63efc7b910fa36fa6ca158a8/js/webflow.3f3bc1279.js",
    type: "text/javascript"
  }), /*#__PURE__*/_react.default.createElement("script", {
    src: "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.0/bundled/lenis.js"
  }), /*#__PURE__*/_react.default.createElement("script", {
    src: "https://unpkg.com/split-type"
  }), /*#__PURE__*/_react.default.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
  }), /*#__PURE__*/_react.default.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
  }), /*#__PURE__*/_react.default.createElement("script", null, "gsap.registerPlugin(ScrollTrigger); let mm = gsap.matchMedia();"))));
}
var _default = SchoolPage;
exports.default = _default;