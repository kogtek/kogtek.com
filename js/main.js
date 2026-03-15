/**
 * main.js — Primary JavaScript Entry Point
 * Kogtek Agency Website
 *
 * Handles:
 * - IntersectionObserver scroll-reveal animations
 * - Navbar background change on scroll
 * - Mobile hamburger menu toggle
 * - Smooth scroll for nav links
 * - Active nav link highlighting on scroll
 *
 * No jQuery. No external dependencies.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // Scroll Reveal — IntersectionObserver
  // -------------------------------------------------------------------------
  function initScrollReveal() {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Make all reveal elements visible immediately
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });
  }

  // -------------------------------------------------------------------------
  // Navbar — Scroll State & Active Link Tracking
  // -------------------------------------------------------------------------
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Add .scrolled class when page scrolls past 60px
    const handleNavScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // Run on load in case page starts scrolled

    // Active link tracking via IntersectionObserver on sections
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              if (href === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: '-72px 0px 0px 0px', // Account for sticky nav height
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // -------------------------------------------------------------------------
  // Mobile Hamburger Menu
  // -------------------------------------------------------------------------
  function initMobileMenu() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    function closeMenu() {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function toggleMenu() {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a mobile nav link is clicked
    mobileMenu.querySelectorAll('.navbar__mobile-link').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close menu when clicking outside (on the overlay area)
    document.addEventListener('click', (e) => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // -------------------------------------------------------------------------
  // Smooth Scroll — Nav Links
  // -------------------------------------------------------------------------
  function initSmoothScroll() {
    const NAV_HEIGHT = 72; // Match the navbar height from CSS

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return; // Skip bare # links

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const targetTop = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      });
    });
  }

  // -------------------------------------------------------------------------
  // DOM Ready — Initialize All Modules
  // -------------------------------------------------------------------------
  function init() {
    initScrollReveal();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready (script loaded with defer)
    init();
  }
})();
