const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          Curiosidades<span className="text-primary">DeHackers</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © CuriosidadesDeHackers 2023-2026. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
