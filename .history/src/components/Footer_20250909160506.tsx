import iconLogo from "../assets/icon-logo.svg";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-14 text-center">
        <a
          rel="noreferrer noopener"
          href="/"
          className="font-bold text-xl flex items-center justify-center"
        >
          <img src={iconLogo} alt="Icon Logo" className="w-6 h-6 mr-2" />
          Renove Receitas
        </a>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 Feito por {" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/gustavo-seigi-bressanin-a044ba1b6/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Agenc.iA
          </a>
        </h3>
      </section>
    </footer>
  );
};
