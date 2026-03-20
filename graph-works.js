:root {
  --bg: #f5f8fc;
  --surface: #ffffff;
  --text: #1f2937;
  --muted: #5b6472;
  --primary: #1f4e79;
  --accent: #2e8b8b;
  --line: #d9e2ec;
  --shadow: 0 10px 30px rgba(23, 43, 77, 0.08);
  --radius: 20px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #f7fbff 0%, #eef4fb 100%);
  line-height: 1.6;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.88);
  border-bottom: 1px solid rgba(217, 226, 236, 0.8);
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}

.brand {
  font-weight: 800;
  color: var(--primary);
  text-decoration: none;
  font-size: 1.1rem;
}

nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
}

.nav-cta {
  padding: 0.7rem 1rem;
  background: var(--primary);
  color: white;
  border-radius: 999px;
}

.hero {
  padding: 4.5rem 0 2.5rem;
}

.hero-grid, .grid {
  display: grid;
  gap: 1.25rem;
}

.hero-grid {
  grid-template-columns: 1.7fr 1fr;
  align-items: start;
}

.two-col { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 800;
  margin: 0 0 0.6rem;
}

h1, h2, h3, h4 { line-height: 1.2; margin-top: 0; }
h1 { font-size: clamp(2rem, 4vw, 3.3rem); margin-bottom: 1rem; }
h2 { font-size: clamp(1.6rem, 2vw, 2.2rem); margin-bottom: 1rem; }
h3 { font-size: 1.2rem; margin-bottom: 0.65rem; }

.lead {
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 65ch;
}
.lead.smaller { max-width: 75ch; }

.profile-card,
.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.profile-card ul,
.clean-list {
  padding-left: 1.1rem;
  margin: 0;
}

.soft-accent {
  border-top: 5px solid var(--accent);
}

.section {
  padding: 1.4rem 0 2.3rem;
}

.section-heading {
  margin-bottom: 1rem;
}

.button {
  display: inline-block;
  text-decoration: none;
  padding: 0.85rem 1.15rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  font-weight: 700;
}

.button.primary {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.hero-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 1.2rem;
}

.callout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, rgba(31,78,121,0.06), rgba(46,139,139,0.08));
  border-radius: var(--radius);
  padding: 1.5rem;
  border: 1px solid var(--line);
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,0.85);
  margin-top: 2rem;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0 2rem;
  color: var(--muted);
}

.graph-year {
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.35rem;
}

.tag-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;
}

.tag {
  background: #eef5fb;
  color: var(--primary);
  border: 1px solid #d6e6f5;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.88rem;
  font-weight: 700;
}

.inline-link {
  color: var(--primary);
  font-weight: 700;
}

code {
  background: #eef5fb;
  border-radius: 8px;
  padding: 0.15rem 0.4rem;
}

@media (max-width: 850px) {
  .hero-grid,
  .two-col,
  .three-col,
  .grid {
    grid-template-columns: 1fr;
  }

  .callout,
  .nav-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
