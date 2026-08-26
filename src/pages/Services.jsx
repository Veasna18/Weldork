import { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import useTemplateEffects from '../hooks/useTemplateEffects.js';

export default function Services() {
  useTemplateEffects();

  useEffect(() => {
    document.title = 'Services - WELDORK';
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
                Services
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
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid service pt-6 pb-6">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="display-6 text-uppercase mb-5">
            Reliable & High-Quality Welding Services
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-1.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Metal Works
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-2.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Steel welding
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-3.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    pipe welding
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-4.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Custom welding
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-5.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Steel welding
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-6.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Metal Work
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-7.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Custom Welding
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-inner pb-5">
                <img className="img-fluid w-100" src="/img/service-8.jpg" alt="" />
                <div className="service-text px-5 pt-4">
                  <h5 className="text-uppercase">
                    Pipe Welding
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="">
                  Read More
                  <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid appoinment mt-6 mb-6 py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container pt-5">
        <div className="row gy-5 gx-0">
          <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-uppercase text-white mb-4">
              We Complete Welding & Metal Projects in Time
            </h1>
            <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus
                        augue, iaculis id elit eget, ultrices pulvinar tortor.
            </p>
            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.5s">
              <div className="btn-lg-square bg-white">
                <i className="bi bi-geo-alt text-dark fs-3"></i>
              </div>
              <div className="ms-3">
                <h6 className="text-white text-uppercase">
                  Office Address
                </h6>
                <span className="text-white">
                  123 Street, New York, USA
                </span>
              </div>
            </div>
            <hr className="bg-body" />
            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.6s">
              <div className="btn-lg-square bg-white">
                <i className="bi bi-clock text-dark fs-3"></i>
              </div>
              <div className="ms-3">
                <h6 className="text-white text-uppercase">
                  Office Time
                </h6>
                <span className="text-white">
                  Mon-Sat 09am-5pm, Sun Closed
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
            <div className="bg-white p-5">
              <h2 className="text-uppercase mb-4">
                Online Appoinment
              </h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name" />
                    <label htmlFor="name">
                      Your Name
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email" />
                    <label htmlFor="mail">
                      Your Email
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control border-0 bg-light" id="mobile" placeholder="Your Mobile" />
                    <label htmlFor="mobile">
                      Your Mobile
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-select border-0 bg-light" id="service">
                      <option selected>
                        Steel Welding
                      </option>
                      <option value="">
                        Pipe Welding
                      </option>
                    </select>
                    <label htmlFor="service">
                      Choose A Service
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{ height: '130px' }}></textarea>
                    <label htmlFor="message">
                      Message
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Submit Now
                  </button>
                </div>
              </div>
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
