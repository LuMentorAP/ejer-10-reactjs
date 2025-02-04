

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()} Te-Chomerce. Todos los derechos reservados.</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-light btn-sm mx-1">Términos</button>
          <button className="btn btn-outline-light btn-sm mx-1">Privacidad</button>
          <button className="btn btn-outline-light btn-sm mx-1">Ayuda</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
