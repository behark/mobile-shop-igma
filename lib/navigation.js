/**
 * Navigation Utilities
 * Shared functions for smooth scrolling and page navigation
 */

/**
 * Smooth scroll to an element on the page
 * @param {string} selector - CSS selector for the target element
 * @param {number} offset - Offset from top (default 80px for navbar)
 */
export function smoothScrollTo(selector, offset = 80) {
  const element = document.querySelector(selector)
  if (element) {
    const offsetTop = element.offsetTop - offset
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
    return true
  }
  return false
}

/**
 * Handle navigation link click
 * - If on homepage and target is anchor, smooth scroll
 * - If on other page, navigate to homepage with anchor
 * @param {Event} e - Click event
 * @param {string} href - Target href (e.g., '#services' or '/about')
 * @param {object} router - Next.js router instance
 */
export function handleNavigation(e, href, router) {
  // External links - let browser handle
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return
  }

  // Anchor links
  if (href.startsWith('#')) {
    e.preventDefault()
    
    // If on homepage, smooth scroll
    if (router.pathname === '/') {
      smoothScrollTo(href)
    } else {
      // Navigate to homepage with hash
      router.push('/' + href)
    }
    return
  }

  // Page links with anchors (e.g., '/contact#booking')
  if (href.includes('#')) {
    // Let Next.js handle navigation, scroll will happen after page load
    return
  }

  // Regular page links - let Next.js Link handle normally
}

/**
 * Scroll to hash on page load (for navigating from other pages)
 * Call this in useEffect on pages that might receive hash navigation
 */
export function scrollToHashOnLoad() {
  if (typeof window !== 'undefined' && window.location.hash) {
    // Small delay to ensure page is rendered
    setTimeout(() => {
      smoothScrollTo(window.location.hash)
    }, 100)
  }
}
