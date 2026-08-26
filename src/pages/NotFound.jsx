import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import useTemplateEffects from '../hooks/useTemplateEffects.js';

export default function NotFound() {
  useTemplateEffects();

  useEffect(() => {
    document.title = '404 Page Not Found - WELDORK';
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
                404
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
                    404
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid pt-6 pb-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1 text-uppercase">
              404
            </h1>
            <h2 className="text-uppercase mb-4">
              Page Not Found
            </h2>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?
            </p>
            <a className="btn btn-primary py-3 px-4" href="">
              Go Back To Home
            </a>
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
