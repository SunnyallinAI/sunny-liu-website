'use client'

import { useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Google Analytics ID (placeholder - replace with actual ID)
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <>
      {children}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  )
}