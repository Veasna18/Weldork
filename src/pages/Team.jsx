import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import useTemplateEffects from '../hooks/useTemplateEffects.js';

export default function Team() {
  useTemplateEffects();

  useEffect(() => {
    document.title = 'Our Team - WELDORK';
  }, []);

  return (
    <>
      <Header />
    <div className="container-fluid page-header pt-5 mb-6 wow fadeIn" data-wow-delay="0.1s">
      <div className="container text-center pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="bg-white p-5">
              <h1 className="display-6 text-uppercase mb-3 animated slideInDown">
                Team
              </h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">
                      Pages
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Team
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid team pt-6 pb-6">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="display-6 text-uppercase mb-5">
            Meet Our Professional and Experience Welder
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="/img/team-1.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">
                  Alex Robin
                </h5>
                <span>
                  Welder
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="/img/team-2.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">
                  Andrew Bon
                </h5>
                <span>
                  Welder
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="/img/team-3.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">
                  Martin Tompson
                </h5>
                <span>
                  Welder
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="/img/team-4.jpg" alt="" />
                <div className="team-social">
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square btn-dark mx-1" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-1">
                  Clarabelle Samber
                </h5>
                <span>
                  Welder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid newsletter mt-6 wow fadeIn" data-wow-delay="0.1s">
      <div className="container pb-5">
        <div className="bg-white p-5 mb-5">
          <div className="row g-5">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 text-uppercase mb-4">
                Newsletter
              </h1>
              <div className="d-flex">
                <i className="far fa-envelope-open fa-3x text-primary me-4"></i>
                <p className="fs-5 fst-italic mb-0">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore lorem ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="form-floating mb-3">
                <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email" />
                <label htmlFor="mail">
                  Your Email
                </label>
              </div>
              <button className="btn btn-primary w-100 py-3" type="submit">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
