import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">DigiMig</h3>
            <p className="max-w-80 text-sm text-muted-foreground mb-4 leading-relaxed">
              Transformando ideias em experiências digitais excepcionais. Criamos soluções web modernas e otimizadas
              para impulsionar o crescimento do seu negócio.
            </p>
            {/* <p className="text-sm text-muted-foreground font-medium">CNPJ: XX.XXX.XXX/0001-XX</p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informações Legais</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DigiMig. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
