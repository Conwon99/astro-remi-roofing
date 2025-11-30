/**
 * Phone Number Tracking Utility
 * 
 * Replaces canonical phone numbers with tracking numbers after page load.
 * This ensures search engines see the canonical number in initial HTML,
 * while users see the tracking number after JavaScript executes.
 */

import { PHONE_CONFIG } from '@/config/phone';

/**
 * Formats a phone number for display
 */
function formatPhoneForDisplay(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // If it starts with 44 (UK country code), format as +44 XXXX XXXXXX
  if (digits.startsWith('44')) {
    const withoutCountry = digits.substring(2);
    if (withoutCountry.length === 10) {
      return `+44 ${withoutCountry.substring(0, 4)} ${withoutCountry.substring(4)}`;
    }
  }
  
  // If it's 11 digits starting with 0, format as 0XXXX XXXXXX
  if (digits.length === 11 && digits.startsWith('0')) {
    return `${digits.substring(0, 5)} ${digits.substring(5)}`;
  }
  
  // Return as-is if we can't format it
  return phone;
}

/**
 * Replaces phone numbers in text content
 */
function replacePhoneInText(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent || '';
    const canonicalDisplay = PHONE_CONFIG.canonical.display;
    const canonicalShort = PHONE_CONFIG.canonical.short;
    const trackingDisplay = PHONE_CONFIG.tracking.display;
    const trackingShort = PHONE_CONFIG.tracking.short;
    
    let newText = text;
    
    // Replace full display format
    if (text.includes(canonicalDisplay)) {
      newText = newText.replace(new RegExp(canonicalDisplay.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), trackingDisplay);
    }
    
    // Replace short format
    if (text.includes(canonicalShort)) {
      newText = newText.replace(new RegExp(canonicalShort.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), trackingShort);
    }
    
    // Replace E.164 format (without spaces)
    const canonicalE164 = PHONE_CONFIG.canonical.e164;
    const trackingE164 = PHONE_CONFIG.tracking.e164;
    if (text.includes(canonicalE164)) {
      newText = newText.replace(new RegExp(canonicalE164.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), trackingE164);
    }
    
    if (newText !== text) {
      node.textContent = newText;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element;
    
    // Skip script and style tags
    if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
      return;
    }
    
    // Replace in href attributes (tel: links)
    if (element.hasAttribute('href')) {
      const href = element.getAttribute('href');
      if (href && href.startsWith('tel:')) {
        const canonicalE164 = PHONE_CONFIG.canonical.e164;
        const trackingE164 = PHONE_CONFIG.tracking.e164;
        if (href.includes(canonicalE164)) {
          element.setAttribute('href', href.replace(canonicalE164, trackingE164));
        }
      }
    }
    
    // Recursively process child nodes
    Array.from(node.childNodes).forEach(child => {
      replacePhoneInText(child);
    });
  }
}

/**
 * Initializes phone number tracking
 * Replaces canonical numbers with tracking numbers after DOM is ready
 */
export function initPhoneTracking(): void {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      replaceAllPhoneNumbers();
    });
  } else {
    // DOM is already loaded
    replaceAllPhoneNumbers();
  }
  
  // Also watch for dynamically added content (for React components)
  // Use MutationObserver to handle React hydration
  const observer = new MutationObserver(() => {
    replaceAllPhoneNumbers();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
  // Run once after a short delay to catch React hydration
  setTimeout(() => {
    replaceAllPhoneNumbers();
  }, 100);
}

/**
 * Replaces all phone numbers in the document
 */
function replaceAllPhoneNumbers(): void {
  // Replace in all text nodes and attributes
  replacePhoneInText(document.body);
  
  // Also replace in data attributes if any components use them
  const phoneElements = document.querySelectorAll('[data-phone-canonical]');
  phoneElements.forEach(element => {
    const canonical = element.getAttribute('data-phone-canonical');
    if (canonical === PHONE_CONFIG.canonical.e164 || canonical === PHONE_CONFIG.canonical.display) {
      // Update href if it's a link
      if (element.tagName === 'A' && element.hasAttribute('href')) {
        const href = element.getAttribute('href') || '';
        if (href.startsWith('tel:')) {
          element.setAttribute('href', `tel:${PHONE_CONFIG.tracking.e164}`);
        }
      }
      // Update text content
      if (element.textContent) {
        element.textContent = element.textContent.replace(
          PHONE_CONFIG.canonical.display,
          PHONE_CONFIG.tracking.display
        ).replace(
          PHONE_CONFIG.canonical.short,
          PHONE_CONFIG.tracking.short
        );
      }
    }
  });
}


