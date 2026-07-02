// Chakill Lab — secciones de la landing (parte B: Galería, Cómo funciona, Color, Footer).

function CLGallery({ gfx }) {
  const { Sticker } = window.ChakillLabDesignSystem_a2a62e;
  // Lookbook: mosaico de slots de distintos tamaños para que el usuario suba sus fotos.
  const slots = [
    { id: 'gal-1', col: 'span 2', row: 'span 2', ph: 'Foto destacada' },
    { id: 'gal-2', col: 'span 1', row: 'span 1', ph: 'Detalle' },
    { id: 'gal-3', col: 'span 1', row: 'span 1', ph: 'En contexto' },
    { id: 'gal-4', col: 'span 1', row: 'span 1', ph: 'Color' },
    { id: 'gal-5', col: 'span 1', row: 'span 1', ph: 'Empaque' },
  ];
  return (
    <section id="galeria" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border-warm)', borderBottom: '1px solid var(--border-warm)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <span style={{
              fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-caps)', fontSize: 13, color: 'var(--azul-medio)',
            }}>Lookbook</span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--azul-tinta)',
              margin: '8px 0 0', letterSpacing: '-0.02em',
            }}>En espacios chicos</h2>
            {gfx.showStickers && (
              <div style={{ position: 'absolute', top: -28, right: -64 }}>
                <Sticker tone="ink" rotate={7}>New in</Sticker>
              </div>
            )}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', maxWidth: 360, margin: 0, fontSize: 15 }}>
            Así se ven nuestras piezas en casas reales. Sube tus fotos para armar el lookbook.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '180px', gap: 16,
        }}>
          {slots.map((s) => (
            <image-slot key={s.id} id={s.id} shape="rounded" radius="18"
              placeholder={s.ph}
              style={{ display: 'block', gridColumn: s.col, gridRow: s.row, background: 'var(--azul-polvo)' }}>
            </image-slot>
          ))}
        </div>
      </div>
    </section>
  );
}

function CLHowItWorks() {
  const steps = [
    ['01', 'Elige tu pieza', 'Mira el catálogo y escoge la que va con tu espacio.'],
    ['02', 'Color a elección', 'Nos dices el color por WhatsApp y lo ajustamos a tu depa.'],
    ['03', 'Hecho a pedido', 'La imprimimos en 3D y te la enviamos con empaque cuidado.'],
  ];
  return (
    <section id="como-funciona" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '64px 32px' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 40px)', color: 'var(--azul-tinta)',
        margin: '0 0 32px', letterSpacing: '-0.02em',
      }}>Cómo funciona</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {steps.map(([n, t, d]) => (
          <div key={n} style={{
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: 26, boxShadow: 'var(--shadow-xs)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--azul-chakill)', marginBottom: 14 }}>{n} ✕</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--azul-tinta)', margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CLColor() {
  const { Button } = window.ChakillLabDesignSystem_a2a62e;
  const colors = ['#6CA0CF', '#1E3653', '#D9C0A0', '#BFD2E6', '#ECE6D6', '#5E7CA6'];
  const [sel, setSel] = React.useState(colors[0]);
  return (
    <section style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '8px 32px 64px' }}>
      <div style={{
        background: 'var(--surface-soft)', borderRadius: 'var(--radius-xl)', padding: 'clamp(28px, 4vw, 52px)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-caps)', fontSize: 13, color: 'var(--azul-tinta)', opacity: 0.7,
          }}>Personaliza</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 40px)', color: 'var(--azul-tinta)', margin: '8px 0 12px', letterSpacing: '-0.02em' }}>
            Tú eliges el color
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-strong)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 420 }}>
            Cada pieza se imprime en el tono que combine con tu espacio. Prueba la paleta y pídela en tu color favorito.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
            {colors.map((c) => (
              <button key={c} onClick={() => setSel(c)} aria-label={c} style={{
                width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: c, cursor: 'pointer',
                border: sel === c ? '3px solid var(--azul-tinta)' : '1px solid rgba(30,54,83,0.15)',
                boxShadow: 'var(--shadow-xs)', transition: 'transform var(--dur-fast)',
                transform: sel === c ? 'scale(1.08)' : 'scale(1)',
              }} />
            ))}
          </div>
          <Button variant="primary" size="lg" onClick={() => window.open(window.waLink(), '_blank')}>Pídela en tu color</Button>
        </div>
        <div style={{
          aspectRatio: '1/1', borderRadius: 'var(--radius-xl)', background: sel,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-md)', transition: 'background var(--dur-slow) var(--ease-out)',
        }}>
          <img src={(window.__resources && window.__resources.isotipoMono) || "assets/logos/isotipo-mono.png"} alt="" style={{ height: 120, opacity: 0.32 }} />
        </div>
      </div>
    </section>
  );
}

function CLFooter() {
  const { Barcode } = window.ChakillLabDesignSystem_a2a62e;
  const link = (label) => (
    <a href={window.waLink()} target="_blank" rel="noreferrer" style={{
      fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--crema-hueso)', opacity: 0.85,
      textDecoration: 'none', display: 'block', marginBottom: 8,
    }}>{label}</a>
  );
  return (
    <footer style={{ background: 'var(--azul-tinta)', color: 'var(--crema-hueso)' }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '56px 32px 40px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <img src={(window.__resources && window.__resources.wordmarkBlanco) || "assets/logos/wordmark-blanco.png"} alt="Chakill Lab" style={{ height: 38, marginBottom: 18 }} />
          <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 18, opacity: 0.9, margin: '0 0 20px', maxWidth: 280 }}>
            Piezas para ordenar y embellecer tus espacios.
          </p>
          <Barcode code="CHK · LAB · 0042" />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', fontSize: 12, opacity: 0.6, marginBottom: 14 }}>Tienda</div>
          <a href="#catalogo" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--crema-hueso)', opacity: 0.85, textDecoration: 'none', display: 'block', marginBottom: 8 }}>Catálogo</a>
          <a href="#galeria" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--crema-hueso)', opacity: 0.85, textDecoration: 'none', display: 'block', marginBottom: 8 }}>Galería</a>
          <a href="#como-funciona" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--crema-hueso)', opacity: 0.85, textDecoration: 'none', display: 'block', marginBottom: 8 }}>Cómo funciona</a>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', fontSize: 12, opacity: 0.6, marginBottom: 14 }}>Contacto</div>
          {link('WhatsApp — Haz tu pedido')}
          <a href="mailto:hola@chakill.lab" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--crema-hueso)', opacity: 0.85, textDecoration: 'none', display: 'block', marginBottom: 8 }}>hola@chakill.lab</a>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, opacity: 0.85, display: 'block', marginBottom: 8 }}>@chakill.lab</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, opacity: 0.6 }}>Lima, Perú</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(236,230,214,0.15)', padding: '18px 32px' }}>
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.55 }}>
          © 2026 Chakill Lab ✕
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CLGallery, CLHowItWorks, CLColor, CLFooter });
