'use client'

import Script from 'next/script'

export function Analytics() {
  return (
    <Script
      async
      defer
      data-domain="themicroscope.ai" // replace with your domain
      src="https://plausible.io/js/script.js"
    />
  )
}
