import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import useTemplateEffects from '../hooks/useTemplateEffects.js';

export default function Testimonials() {
  useTemplateEffects();

  useEffect(() => {
    document.title = 'Testimonials - WELDORK';
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
                Testimonial
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
                    Testimonial
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid pt-6 pb-6">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="display-6 text-uppercase mb-5">
            What They’re Talking About Our Welding Work
          </h1>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="testimonial-img">
              <div className="animated flip infinite">
                <img className="img-fluid" src="/img/testimonial-1.jpg" alt="" />
              </div>
              <div className="animated flip infinite">
                <img className="img-fluid" src="/img/testimonial-2.jpg" alt="" />
              </div>
              <div className="animated flip infinite">
                <img className="img-fluid" src="/img/testimonial-3.jpg" alt="" />
              </div>
              <div className="animated flip infinite">
                <img className="img-fluid" src="/img/testimonial-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item">
                <div className="d-flex align-items-center mb-4">
                  <img className="img-fluid" src="/img/testimonial-1.jpg" alt="" />
                  <div className="ms-3">
                    <div className="mb-2">
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                    </div>
                    <h5 className="text-uppercase">
                      Client Name
                    </h5>
                    <span>
                      Profession
                    </span>
                  </div>
                </div>
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </p>
              </div>
              <div className="testimonial-item">
                <div className="d-flex align-items-center mb-4">
                  <img className="img-fluid" src="/img/testimonial-2.jpg" alt="" />
                  <div className="ms-3">
                    <div className="mb-2">
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                    </div>
                    <h5 className="text-uppercase">
                      Client Name
                    </h5>
                    <span>
                      Profession
                    </span>
                  </div>
                </div>
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </p>
              </div>
              <div className="testimonial-item">
                <div className="d-flex align-items-center mb-4">
                  <img className="img-fluid" src="/img/testimonial-3.jpg" alt="" />
                  <div className="ms-3">
                    <div className="mb-2">
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                    </div>
                    <h5 className="text-uppercase">
                      Client Name
                    </h5>
                    <span>
                      Profession
                    </span>
                  </div>
                </div>
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </p>
              </div>
              <div className="testimonial-item">
                <div className="d-flex align-items-center mb-4">
                  <img className="img-fluid" src="/img/testimonial-4.jpg" alt="" />
                  <div className="ms-3">
                    <div className="mb-2">
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                    </div>
                    <h5 className="text-uppercase">
                      Client Name
                    </h5>
                    <span>
                      Profession
                    </span>
                  </div>
                </div>
                <p className="fs-5">
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                </p>
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
