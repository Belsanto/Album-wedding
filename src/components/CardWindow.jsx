function CardWindow({ variant = 2 }) {
  const className = variant === 1 ? "card-window" : "home-window";

  return (
    <section>
      <aside className={className}></aside>
    </section>
  );
}

export default CardWindow;
