'use client'

import { useEffect } from 'react'

/**
 * Tawk.to Live Chat Integration with Albanian Language
 * Configured with API key for programmatic control
 */

export default function TawkTo() {
  useEffect(() => {
    // Only load on client side
    if (typeof window === 'undefined') return

    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID
    const apiKey = 'c9a95f1c69a1c7759a423dffb04e60a712c62eb4'

    if (!propertyId || !widgetId) {
      console.warn('Tawk.to: Property ID or Widget ID not found. Please add them to .env.local')
      return
    }

    // Check if Tawk.to script is already loaded
    if (window.Tawk_API) {
      // If already loaded, just configure it
      configureTawkTo(apiKey)
      return
    }

    // Create and inject Tawk.to script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)

    // Initialize Tawk.to API before script loads
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Set API key for authentication
    window.Tawk_API.apiKey = apiKey

    // Configure widget appearance
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'br', // bottom-right
          xOffset: 20,
          yOffset: 20
        },
        mobile: {
          position: 'br',
          xOffset: 10,
          yOffset: 10
        }
      },
      zIndex: 1000
    }

    // Configure widget when it loads
    window.Tawk_API.onLoad = function() {
      console.log('Tawk.to chat widget loaded')
      configureTawkTo(apiKey)
    }

    // Cleanup function
    return () => {
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget()
      }
    }
  }, [])

  // Function to configure Tawk.to with Albanian text
  function configureTawkTo(apiKey) {
    if (!window.Tawk_API) return

    try {
      // Set language to Albanian
      window.Tawk_API.setLocale = 'sq'

      // Set visitor attributes with Albanian locale
      if (window.Tawk_API.setAttributes) {
        window.Tawk_API.setAttributes({
          'locale': 'sq',
          'language': 'sq'
        }, function(error) {
          if (error) {
            console.log('Tawk.to: Could not set locale', error)
          } else {
            console.log('Tawk.to: Albanian locale set successfully')
          }
        })
      }

      // Set custom messages using Tawk.to API
      // Note: Some customization requires dashboard, but we set what we can via API
      
      // Set custom greeting message
      if (window.Tawk_API.setCustomAttributes) {
        window.Tawk_API.setCustomAttributes({
          'welcomeMessage': 'Përshëndetje! Si mund t\'ju ndihmojë?',
          'offlineMessage': 'Jemi jashtë zyrës. Lëni një mesazh dhe do t\'ju përgjigjemi së shpejti.',
          'placeholder': 'Shkruani mesazhin tuaj...',
          'sendButton': 'Dërgo'
        })
      }

      // Use Tawk.to's widget customization API
      // This requires the widget to be fully loaded
      setTimeout(() => {
        try {
          // Set widget text via API if available
          if (window.Tawk_API && window.Tawk_API.widget) {
            // Customize widget text
            const widgetConfig = {
              welcomeMessage: 'Përshëndetje! Si mund t\'ju ndihmojë?',
              offlineMessage: 'Jemi jashtë zyrës. Lëni një mesazh dhe do t\'ju përgjigjemi së shpejti.',
              placeholder: 'Shkruani mesazhin tuaj...',
              sendButton: 'Dërgo',
              sendOfflineButton: 'Dërgo Mesazh',
              typingIndicator: 'Duke shkruar...'
            }

            // Apply customizations
            if (window.Tawk_API.widget && window.Tawk_API.widget.setCustomText) {
              Object.keys(widgetConfig).forEach(key => {
                try {
                  window.Tawk_API.widget.setCustomText(key, widgetConfig[key])
                } catch (e) {
                  // Some methods may not be available
                }
              })
            }
          }

          // Alternative: Use Tawk.to's REST API to update widget settings
          // NOTE: This is optional - widget works fine without it
          // Uncomment if you have proper REST API access
          // updateWidgetSettingsViaAPI(apiKey)
        } catch (error) {
          console.log('Tawk.to: Advanced customization not available', error)
        }
      }, 2000) // Wait for widget to fully load

    } catch (error) {
      console.log('Tawk.to: Configuration error', error)
    }
  }

  // Function to update widget settings via REST API
  // NOTE: This is optional - widget works fine with JavaScript API only
  // Tawk.to REST API requires special authentication and may not be publicly available
  function updateWidgetSettingsViaAPI(apiKey) {
    // Call our API route to update widget settings
    // This is done server-side for security
    // Silently fail if API is not available - widget still works
    fetch('/api/tawk-config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      // Silently handle - widget works without REST API
      if (response.ok) {
        // Success, but don't log to avoid console noise
      }
      // Fail silently - widget is already configured via JavaScript API
    }).catch(error => {
      // Fail silently - widget works without REST API
      // No need to log errors as widget is functional
    })
  }

  return null // This component doesn't render anything
}
