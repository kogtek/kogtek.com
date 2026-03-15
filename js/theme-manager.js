/**
 * theme-manager.js — Dark/Light Mode Management
 * Kogtek Agency Website
 *
 * Reads system preference, reads localStorage, applies data-theme attribute,
 * toggles between light/dark, saves to localStorage, updates toggle button,
 * and listens for system preference changes.
 */

const ThemeManager = (() => {
  'use strict';

  const STORAGE_KEY = 'kogtek-theme';
  const root = document.documentElement;

  /**
   * Get the preferred theme — localStorage takes precedence over system.
   * @returns {'light'|'dark'}
   */
  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /**
   * Apply a theme to the document.
   * Updates the data-theme attribute and the toggle button's ARIA state.
   * @param {'light'|'dark'} theme
   */
  function apply(theme) {
    root.setAttribute('data-theme', theme);

    // Update all theme toggle buttons on the page
    const toggles = document.querySelectorAll('.btn-theme-toggle');
    toggles.forEach((toggle) => {
      const isDark = theme === 'dark';
      toggle.setAttribute(
        'aria-label',
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
      );
      toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');

      // Animate icon swap
      toggle.classList.add('switching');
      setTimeout(() => toggle.classList.remove('switching'), 300);
    });
  }

  /**
   * Toggle between light and dark mode.
   * Saves the new preference to localStorage.
   */
  function toggle() {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  /**
   * Initialize the ThemeManager.
   * Must be called after DOM is ready.
   */
  function init() {
    // Apply current preference
    apply(getPreferred());

    // Wire up all toggle buttons
    document.querySelectorAll('.btn-theme-toggle').forEach((btn) => {
      btn.addEventListener('click', toggle);
    });

    // Listen for system-level preference changes (only when user hasn't
    // explicitly set a preference via the toggle)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        apply(e.matches ? 'dark' : 'light');
      }
    };

    // Use addEventListener for modern browsers, addListener as fallback
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleSystemChange);
    }
  }

  // Public API
  return { init, toggle, apply, getPreferred };
})();

// Initialize once the DOM is ready
document.addEventListener('DOMContentLoaded', ThemeManager.init);
