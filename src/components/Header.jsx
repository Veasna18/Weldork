import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
];

const PAGES_DROPDOWN = [
  { to: '/features', label: 'Features' },
  { to: '/team', label: 'Our Team' },
  { to: '/testimonials', label: 'Testimonial' },
  { to: '/appointment', label: 'Appoinment' },
  { to: '/404', label: '404 Page' },
];

export default function Header() {
  const { pathname } = useLocation();
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-primary text-white d-none d-lg-flex wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-3">
          <div className="d-flex align-items-center">
            <Link to="/">
              <h2 className="text-white fw-bold m-0">WELDORK</h2>
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <small className="ms-4"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</small>
              <small className="ms-4"><i className="fa fa-envelope me-3"></i>info@example.com</small>
              <small className="ms-4"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</small>
              <div className="ms-3 d-flex">
                <a className="btn btn-sm-square btn-light text-primary ms-2" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-sm-square btn-light text-primary ms-2" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-sm-square btn-light text-primary ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <Link to="/" className="navbar-brand d-lg-none">
              <h1 className="fw-bold m-0">WELDORK</h1>
            </Link>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-item nav-link${isActive(link.to) ? ' active' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    {PAGES_DROPDOWN.map((link) => (
                      <Link key={link.to} to={link.to} className="dropdown-item">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`nav-item nav-link${isActive('/contact') ? ' active' : ''}`}
                >
                  Contact
                </Link>
              </div>
              <div className="ms-auto d-none d-lg-block">
                <a href="" className="btn btn-primary py-2 px-3">Get A Quote</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
}
