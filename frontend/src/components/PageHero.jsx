export default function PageHero({ title, sub }) {
  return (
    <section className="page-hero">
      <h1 className="page-hero-title">{title}</h1>
      <p className="page-hero-sub">{sub}</p>
    </section>
  );
}
