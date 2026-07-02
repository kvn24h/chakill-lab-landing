/* @ds-bundle: {"format":3,"namespace":"ChakillLabDesignSystem_a2a62e","components":[{"name":"Barcode","sourcePath":"components/brand/Barcode.jsx"},{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"Sticker","sourcePath":"components/brand/Sticker.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"}],"sourceHashes":{"components/brand/Barcode.jsx":"459e25892fef","components/brand/Marquee.jsx":"aababca7c45f","components/brand/Sticker.jsx":"b2f56fae9fce","components/core/Badge.jsx":"71453720f5c9","components/core/Button.jsx":"e2151d292a8e","components/core/Card.jsx":"53fdba2921f2","components/core/Input.jsx":"6b6ebef1a3e1","components/core/Pill.jsx":"87020c44ff92","ui_kits/shop/Chrome.jsx":"9de13d4afd32","ui_kits/shop/Products.jsx":"337883e6af48","ui_kits/shop/Screens.jsx":"2bd8a5c5801c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChakillLabDesignSystem_a2a62e = window.ChakillLabDesignSystem_a2a62e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Barcode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Barcode motif with code label — toolbox "04 · CÓDIGO DE BARRAS". */
function Barcode({
  code = 'CHK · LAB · 0042',
  color = 'var(--azul-tinta)',
  style,
  ...rest
}) {
  // Deterministic pseudo-random bar widths from the code string.
  const bars = [];
  let seed = 0;
  for (let i = 0; i < code.length; i++) seed += code.charCodeAt(i);
  for (let i = 0; i < 42; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const w = 1 + seed % 4;
    bars.push({
      w,
      gap: 1 + (seed >> 3) % 3,
      on: seed % 3 !== 0
    });
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '5px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      height: 38
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: b.w,
      height: '100%',
      marginRight: b.gap,
      background: b.on ? color : 'transparent'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.18em',
      color,
      textTransform: 'uppercase'
    }
  }, code));
}
Object.assign(__ds_scope, { Barcode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Barcode.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Repeated-type marquee strip — toolbox "05 · TIPO REPETIDA" (e.g. NEW IN ✕). */
function Marquee({
  text = 'NEW IN',
  sep = '✕',
  tone = 'ink',
  speed = 18,
  style,
  ...rest
}) {
  const tones = {
    ink: {
      background: 'var(--azul-tinta)',
      color: 'var(--crema-hueso)'
    },
    brand: {
      background: 'var(--brand)',
      color: '#fff'
    },
    sand: {
      background: 'var(--arena)',
      color: 'var(--azul-tinta)'
    },
    cream: {
      background: 'var(--crema-hueso)',
      color: 'var(--azul-tinta)'
    }
  };
  const item = `${text} ${sep} `;
  const run = item.repeat(10);
  const id = 'cl-mq-' + Math.random().toString(36).slice(2, 8);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      padding: '9px 0',
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes ${id}{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion: reduce){.${id}{animation:none !important}}`), /*#__PURE__*/React.createElement("div", {
    className: id,
    style: {
      display: 'inline-block',
      animation: `${id} ${speed}s linear infinite`,
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: 'var(--text-sm)'
    }
  }, run, run));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rotated die-cut sticker label — the "01 · STICKER" toolbox element. */
function Sticker({
  children = 'ORDEN',
  tone = 'ink',
  rotate = -6,
  style,
  ...rest
}) {
  const tones = {
    ink: {
      background: 'var(--azul-tinta)',
      color: 'var(--crema-hueso)'
    },
    brand: {
      background: 'var(--brand)',
      color: '#fff'
    },
    cream: {
      background: 'var(--crema-hueso)',
      color: 'var(--azul-tinta)'
    },
    sand: {
      background: 'var(--arena)',
      color: 'var(--azul-tinta)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontSize: 'var(--text-base)',
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--crema-hueso)',
      boxShadow: 'var(--shadow-md)',
      transform: `rotate(${rotate}deg)`,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category badge. */
function Badge({
  tone = 'brand',
  children,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: 'var(--surface-soft)',
      color: 'var(--azul-tinta)'
    },
    ink: {
      background: 'var(--azul-tinta)',
      color: 'var(--crema-hueso)'
    },
    sand: {
      background: 'var(--arena)',
      color: 'var(--azul-tinta)'
    },
    solid: {
      background: 'var(--brand)',
      color: '#fff'
    },
    success: {
      background: 'rgba(78,140,106,0.16)',
      color: 'var(--success)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      fontSize: 'var(--text-xs)',
      letterSpacing: '0.08em',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chakill Lab primary button. Soft, rounded, brand-blue.
 */
function Button({
  variant = 'primary',
  size = 'md',
  pill = true,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '15px 30px',
      fontSize: 'var(--text-lg)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--surface-soft)',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--fw-semibold)',
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const enter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-strong)';
    if (variant === 'secondary') e.currentTarget.style.background = 'var(--azul-polvo)';
    if (variant === 'outline' || variant === 'ghost') e.currentTarget.style.background = 'rgba(108,160,207,0.12)';
  };
  const leave = e => {
    if (!disabled) e.currentTarget.style.background = variants[variant].background;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: enter,
    onMouseLeave: leave,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Soft rounded surface card. */
function Card({
  tone = 'white',
  pad = true,
  children,
  style,
  ...rest
}) {
  const tones = {
    white: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    cream: {
      background: 'var(--bg-page-warm)',
      border: '1px solid var(--border-warm)'
    },
    soft: {
      background: 'var(--surface-soft)',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--surface-ink)',
      color: 'var(--text-on-ink)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: pad ? 'var(--space-5)' : 0,
      overflow: 'hidden',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with brand focus ring. */
function Input({
  label,
  hint,
  style,
  id,
  ...rest
}) {
  const inputId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (focus ? 'var(--brand)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-md)',
      padding: '11px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 var(--ring-width) rgba(108,160,207,0.30)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The signature Chakill "Lab"-style pill label. */
function Pill({
  children = 'Lab',
  tone = 'brand',
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: 'var(--brand)',
      color: '#fff'
    },
    ink: {
      background: 'var(--azul-tinta)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-lg)',
      letterSpacing: '0.01em',
      padding: '4px 18px',
      borderRadius: 'var(--radius-md)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Chrome.jsx
try { (() => {
// Chakill Lab — shop chrome (header + footer). Exposes to window.
function CLHeader({
  route,
  setRoute,
  cart
}) {
  const link = (to, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute(to),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: route === to ? 'var(--azul-tinta)' : 'var(--text-muted)',
      padding: '4px 2px',
      borderBottom: route === to ? '2px solid var(--brand)' : '2px solid transparent'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px',
      background: 'rgba(252,250,245,0.86)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-warm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-principal.png",
    alt: "Chakill Lab",
    onClick: () => setRoute('home'),
    style: {
      height: 30,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center'
    }
  }, link('home', 'Inicio'), link('shop', 'Colección'), link('about', 'Nosotros')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--azul-tinta)',
      background: 'var(--surface-soft)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Carrito \xB7 ", cart)));
}
function CLFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--azul-tinta)',
      color: 'var(--crema-hueso)',
      padding: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-blanco.png",
    alt: "Chakill Lab",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      opacity: 0.85,
      maxWidth: 320
    }
  }, "Piezas decorativas en impresi\xF3n 3D, hechas a pedido. Env\xEDos a todo el pa\xEDs. \uD83E\uDDE1"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "Instagram"), /*#__PURE__*/React.createElement("span", null, "TikTok"), /*#__PURE__*/React.createElement("span", null, "WhatsApp")));
}
Object.assign(window, {
  CLHeader,
  CLFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Products.jsx
try { (() => {
// Chakill Lab — shared fake product data + product card.
const CL_PRODUCTS = [{
  id: 1,
  name: 'Maceta Onda',
  price: 18,
  tag: 'Nuevo',
  tone: '#6CA0CF',
  desc: 'Maceta ondulada para suculentas. Drenaje incluido.'
}, {
  id: 2,
  name: 'Florero Espiral',
  price: 24,
  tag: 'Edición',
  tone: '#5E7CA6',
  desc: 'Florero de espiral continua, impresión sin costuras.'
}, {
  id: 3,
  name: 'Portavelas Duna',
  price: 14,
  tag: null,
  tone: '#D9C0A0',
  desc: 'Portavelas con textura de duna, luz cálida y difusa.'
}, {
  id: 4,
  name: 'Organizador Nido',
  price: 21,
  tag: 'Hecho a pedido',
  tone: '#BFD2E6',
  desc: 'Bandeja organizadora para escritorio o entrada.'
}, {
  id: 5,
  name: 'Lámpara Geo',
  price: 39,
  tag: 'Top',
  tone: '#1E3653',
  desc: 'Pantalla geométrica que proyecta patrones suaves.'
}, {
  id: 6,
  name: 'Maceta Mini',
  price: 11,
  tag: null,
  tone: '#ECE6D6',
  desc: 'Mini maceta para cactus, ideal en repisas.'
}];
function CLProductTile({
  p,
  onOpen,
  onAdd
}) {
  const {
    Card,
    Badge,
    Button
  } = window.ChakillLabDesignSystem_a2a62e;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    pad: false,
    style: {
      cursor: 'pointer',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onOpen(p)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: p.tone,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/isotipo-mono.png",
    alt: "",
    style: {
      height: 64,
      opacity: 0.28
    }
  }), p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, p.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--azul-tinta)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--azul-medio)',
      fontSize: 16
    }
  }, "$", p.price), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: e => {
      e.stopPropagation();
      onAdd(p);
    }
  }, "Agregar")))));
}
Object.assign(window, {
  CL_PRODUCTS,
  CLProductTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Screens.jsx
try { (() => {
// Chakill Lab — shop screens (Home, Shop, Product, About). Exposes to window.
function CLHome({
  setRoute,
  onOpen,
  onAdd
}) {
  const {
    Button,
    Badge,
    Pill
  } = window.ChakillLabDesignSystem_a2a62e;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 40,
      alignItems: 'center',
      padding: '64px 40px',
      background: 'linear-gradient(180deg, var(--crema-hueso), var(--off-white))'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: 'var(--azul-medio)'
    }
  }, "Colecci\xF3n \xB7 Hecho en 3D")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 49,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--azul-tinta)',
      margin: '0 0 16px'
    }
  }, "Piezas decorativas para tu espacio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'var(--text-body)',
      maxWidth: 440,
      lineHeight: 1.55,
      margin: '0 0 26px'
    }
  }, "Dise\xF1o propio, impreso en 3D y personalizado en el color que t\xFA quieras. Cada pieza es \xFAnica y hecha a pedido."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setRoute('shop')
  }, "Ver colecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => setRoute('about')
  }, "Nuestra historia"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--azul-tinta)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/isotipo-mono.png",
    alt: "",
    style: {
      height: 200,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 20,
      left: 20
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "Lab")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--azul-tinta)',
      margin: 0
    }
  }, "Lo m\xE1s querido"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute('shop'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--azul-medio)',
      fontSize: 15
    }
  }, "Ver todo \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, window.CL_PRODUCTS.slice(0, 3).map(p => /*#__PURE__*/React.createElement(window.CLProductTile, {
    key: p.id,
    p: p,
    onOpen: onOpen,
    onAdd: onAdd
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      gap: 18,
      padding: '8px 40px 56px',
      flexWrap: 'wrap'
    }
  }, [['Hecho a pedido', 'Imprimimos tu pieza cuando la pides, sin stock de sobra.'], ['Color a elección', 'Elige el color que combine con tu espacio.'], ['Envío a todo el país', 'Empaque cuidado y seguimiento por WhatsApp.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: '1 1 240px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--azul-tinta)',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, d)))));
}
function CLShop({
  onOpen,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--azul-tinta)',
      margin: '0 0 6px'
    }
  }, "Colecci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      margin: '0 0 26px'
    }
  }, "Todas nuestras piezas, listas para personalizar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, window.CL_PRODUCTS.map(p => /*#__PURE__*/React.createElement(window.CLProductTile, {
    key: p.id,
    p: p,
    onOpen: onOpen,
    onAdd: onAdd
  }))));
}
function CLProduct({
  product,
  onAdd,
  setRoute
}) {
  const {
    Button,
    Badge
  } = window.ChakillLabDesignSystem_a2a62e;
  const p = product || window.CL_PRODUCTS[0];
  const colors = ['#6CA0CF', '#1E3653', '#D9C0A0', '#ECE6D6', '#BFD2E6'];
  const [color, setColor] = React.useState(colors[0]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      background: color,
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-md)',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/isotipo-mono.png",
    alt: "",
    style: {
      height: 150,
      opacity: 0.3
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute('shop'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      padding: 0,
      marginBottom: 14
    }
  }, "\u2190 Volver a la colecci\xF3n"), p.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, p.tag)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--azul-tinta)',
      margin: '0 0 10px'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--azul-medio)',
      marginBottom: 18
    }
  }, "$", p.price), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      maxWidth: 440,
      marginBottom: 24
    }
  }, p.desc, " Impresa en 3D bajo pedido, con materiales de calidad y acabado cuidado."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Color"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 28
    }
  }, colors.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setColor(c),
    "aria-label": c,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: c,
      cursor: 'pointer',
      border: color === c ? '3px solid var(--azul-tinta)' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onAdd(p)
  }, "Agregar al carrito"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Personalizar"))));
}
function CLAbout() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-apilado.png",
    alt: "Chakill Lab",
    style: {
      height: 120,
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      color: 'var(--azul-tinta)',
      margin: '0 0 16px'
    }
  }, "Hecho en el lab, pensado para tu casa"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-body)',
      lineHeight: 1.65
    }
  }, "En Chakill Lab nos encargamos de crear piezas decorativas en impresi\xF3n 3D. Cada dise\xF1o es propio y lo imprimimos a pedido para que llegue justo como lo imaginaste. Vendemos en l\xEDnea a trav\xE9s de nuestras redes y esta web, con env\xEDos a todo el pa\xEDs."));
}
Object.assign(window, {
  CLHome,
  CLShop,
  CLProduct,
  CLAbout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Barcode = __ds_scope.Barcode;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Pill = __ds_scope.Pill;

})();
