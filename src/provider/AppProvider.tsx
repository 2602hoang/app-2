"use client"
import React from 'react'
import AuthProvider from './AuthProvider'
import { SessionProvider } from 'next-auth/react'
import CustomQueryClientProvider from './QueryProvider'


const AppProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <CustomQueryClientProvider>
        <SessionProvider >
          <AuthProvider>
      {children}
          </AuthProvider>
        </SessionProvider>
    </CustomQueryClientProvider>
  )
}

export default AppProvider