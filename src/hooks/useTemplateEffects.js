import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Re-implements Weldork's original js/main.js, adapted to run on every
// route change instead of once on window load, since page content is now
// swapped in by React Router instead of a full page reload.
export default function useTemplateEffects() {
  const location = useLocation();

  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Spinner
    const spinnerTimer = setTimeout(() => {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);

    // WOW.js scroll animations
    if (window.WOW) {
      new window.WOW().init();
    }

    // Sticky navbar
    const onScrollSticky = () => {
      if ($(window).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
      } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
      }
    };
    $(window).on('scroll.stickyNav', onScrollSticky);

    // Facts counter
    if ($.fn.counterUp) {
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
      });
    }

    // Experience progress bars
    if ($.fn.waypoint) {
      $('.experience').waypoint(
        function () {
          $('.progress .progress-bar').each(function () {
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
          });
        },
        { offset: '80%' }
      );
    }

    // Back to top button
    const onScrollBackToTop = () => {
      if ($(window).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    };
    $(window).on('scroll.backToTop', onScrollBackToTop);

    $('.back-to-top').off('click.backToTop').on('click.backToTop', function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });

    // Testimonial owl carousel (present on Home, Services, Testimonials pages)
    if ($.fn.owlCarousel && $('.testimonial-carousel').length) {
      $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
      });
    }

    // Bootstrap's own header carousel (Home page) needs manual (re)instantiation
    // since it is mounted after Bootstrap's initial DOMContentLoaded data-api scan.
    const carouselEl = document.getElementById('header-carousel');
    if (carouselEl && window.bootstrap) {
      const existing = window.bootstrap.Carousel.getInstance(carouselEl);
      if (existing) existing.dispose();
      new window.bootstrap.Carousel(carouselEl, { ride: 'carousel' });
    }

    return () => {
      clearTimeout(spinnerTimer);
      $(window).off('scroll.stickyNav', onScrollSticky);
      $(window).off('scroll.backToTop', onScrollBackToTop);
      if ($.fn.owlCarousel && $('.testimonial-carousel').length) {
        $('.testimonial-carousel').trigger('destroy.owl.carousel');
      }
    };
  }, [location.pathname]);
}
