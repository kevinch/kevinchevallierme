function Intro() {
  return (
    <div className="intro-container container">
      <span className="code-help">{"<Intro>"}</span>
      <div className="intro-text">
        <p>Hi, hola, oi, salut.</p>
        <p>
          Kevin here, french frontend engineer and engineering manager living in
          Rio de Janeiro, Brazil.
        </p>

        <p>My past experiences include:</p>
        <ul>
          <li>
            <a
              style={{ color: "#ffe600" }}
              href="https://www.mercadolivre.com.br/"
            >
              Mercado Livre
            </a>{" "}
            where I pushed to production features for one of the biggest fintech
            apps in Latin America,{" "}
            <a
              style={{ color: "#009ee3" }}
              href="https://www.mercadopago.com.br/"
            >
              Mercado Pago
            </a>
            .
          </li>
          <li>
            <a style={{ color: "#E31C58" }} href="https://vtex.com/us-en/">
              VTEX
            </a>
            , a fast growing eCommerce platform where I managed part of the
            admin system and its Design System.
          </li>
          <li>
            <a style={{ color: "#f9008e" }} href="https://www.hugeinc.com/">
              Huge Inc
            </a>
            , a global digital agency where I coded projects for Brazilian and
            international clients.
          </li>
        </ul>
        <p>
          More about my career path at{" "}
          <a
            style={{ color: "#0a66c2" }}
            href="https://www.linkedin.com/in/kevinchevallier/"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Here you will find links to several projects I work on or have
          developed and some extra bits.
        </p>
      </div>
      <span className="code-help">{"</Intro>"}</span>
    </div>
  )
}

export default Intro
