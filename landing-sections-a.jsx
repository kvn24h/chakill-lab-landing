// Chakill Lab — secciones de la landing (parte A: Header, Hero, Catálogo).
// Cada sección lee componentes de window.ChakillLabDesignSystem_a2a62e.

function CLHeader({ accent }) {
  const { Button } = window.ChakillLabDesignSystem_a2a62e;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = (href, label) => (
    <a href={href} style={{
      fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase',
      letterSpacing: '0.08em', fontSize: 14, color: 'var(--azul-tinta)', textDecoration: 'none',
    }}>{label}</a>
  );
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(236,230,214,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(1.1) blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-warm)' : '1px solid transparent',
      transition: 'background var(--dur-base), border-color var(--dur-base)',
    }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '16px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={(window.__resources && window.__resources.wordmarkPrincipal) || "assets/logos/wordmark-principal.png"} alt="Chakill Lab" style={{ height: 34 }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {link('#catalogo', 'Catálogo')}
          {link('#galeria', 'Galería')}
          {link('#como-funciona', 'Cómo funciona')}
        </nav>
        <Button variant="primary" size="sm" onClick={() => window.open(window.waLink(), '_blank')}>
          Pídelo por WhatsApp
        </Button>
      </div>
    </header>
  );
}

function CLHero({ copy, gfx }) {
  const { Button, Pill, Sticker } = window.ChakillLabDesignSystem_a2a62e;
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '72px 32px 56px',
        display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
            <Pill>Lab</Pill>
            <span style={{
              fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-caps)', fontSize: 13, color: 'var(--azul-medio)',
            }}>{copy.eyebrow}</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 0.98,
            letterSpacing: '-0.02em', color: 'var(--azul-tinta)', margin: '0 0 18px', textWrap: 'balance',
          }}>{copy.title}</h1>
          <p style={{
            fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 22, color: 'var(--azul-medio)',
            margin: '0 0 16px',
          }}>{copy.accent}</p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-body)',
            maxWidth: 460, margin: '0 0 30px',
          }}>{copy.body}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' })}>
              Ver catálogo
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open(window.waLink(), '_blank')}>
              Hacer un pedido
            </Button>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'var(--azul-tinta)', borderRadius: 'var(--radius-xl)', padding: 18,
            boxShadow: 'var(--shadow-lg)', width: 396, height: 329,
          }}>
            <image-slot id="hero-photo" shape="rounded" radius="18"
              placeholder="Arrastra aquí tu foto principal"
              style={{ display: 'block', width: '100%', height: '100%', background: 'var(--azul-medio)' }}>
            </image-slot>
          </div>
          {gfx.showStickers && (
            <div style={{ position: 'absolute', top: -18, left: -22 }}>
              <Sticker tone="brand" rotate={-8}>Orden con actitud</Sticker>
            </div>
          )}
          {gfx.showStickers && (
            <div style={{ position: 'absolute', bottom: -16, right: -14 }}>
              <Sticker tone="sand" rotate={6}>Hecho a pedido</Sticker>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CLCatalog({ gfx }) {
  const { Card, Badge, Button, Barcode } = window.ChakillLabDesignSystem_a2a62e;
  return (
    <section id="catalogo" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '24px 32px 64px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-label)', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-caps)', fontSize: 13, color: 'var(--azul-medio)',
          }}>Catálogo · Impreso en 3D</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--azul-tinta)',
            margin: '8px 0 0', letterSpacing: '-0.02em',
          }}>Elige tu pieza</h2>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', maxWidth: 380, margin: 0, fontSize: 15 }}>
          Cada pieza se imprime a pedido en el color que tú quieras. Elige una y la concretamos por WhatsApp.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {window.CL_CATALOG.map((p) => (
          <CLProductCard key={p.id} p={p} gfx={gfx} />
        ))}
      </div>
    </section>
  );
}

function CLProductCard({ p, gfx }) {
  const { Card, Badge, Button } = window.ChakillLabDesignSystem_a2a62e;
  const [hover, setHover] = React.useState(false);
  return (
    <Card pad={false}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        overflow: 'hidden',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      }}>
      <div style={{ position: 'relative' }}>
        <image-slot id={`prod-${p.id}`} shape="rect"
          placeholder="Foto del producto"
          style={{ display: 'block', width: '100%', aspectRatio: '4/3', background: p.tone }}>
        </image-slot>
        {p.tag && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge tone="ink">{p.tag}</Badge>
          </div>
        )}
      </div>
      <div style={{ padding: 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, color: 'var(--azul-tinta)', margin: 0 }}>{p.name}</h3>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--azul-medio)' }}>${p.price}</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.5, margin: '8px 0 16px' }}>{p.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>{p.sku}</span>
          <Button size="sm" variant="primary" onClick={() => window.open(window.waLink(p), '_blank')}>Pídelo</Button>
        </div>
      </div>
    </Card>
  );
}

Object.assign(window, { CLHeader, CLHero, CLCatalog, CLProductCard });
