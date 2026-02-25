const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">BSynt - Command & Syntax Documentation</p>
            <p className="text-xs">© 2024 Bezn Project. All rights reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-xs font-semibold text-foreground mb-1">Developer Contact:</p>
            <a href="https://nafiurohman.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs">
              nafiurohman.pages.dev
            </a>
            <a href="mailto:nafiurohman@beznproject.web.id" className="hover:text-primary transition-colors text-xs">
              nafiurohman@beznproject.web.id
            </a>
            <a href="https://wa.me/6281358198565" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs">
              WhatsApp: 081358198565
            </a>
          </div>
        </div>
        <div className="text-center pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Bezn Project • 
            <a href="https://www.beznproject.web.id" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors ml-1">
              www.beznproject.web.id
            </a>
            {" • "}
            <a href="mailto:hello@beznproject.web.id" className="hover:text-primary transition-colors">
              hello@beznproject.web.id
            </a>
            {" • "}
            <a href="https://wa.me/6285189643588" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              085189643588
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
