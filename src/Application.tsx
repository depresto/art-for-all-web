import React from 'react'
import ScrollToTop from './components/common/ScrollToTop'
import AppContainer from './components/layouts/AppContainer'
import { ApiProvider } from './contexts/ApiContext'
import { AudioPlayerProvider } from './contexts/AudioPlayerContext'
import { AuthProvider } from './contexts/AuthContext'

const Application: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AppContainer>
      <AuthProvider>
        <ApiProvider>
          <AudioPlayerProvider>
            <ScrollToTop />
            {children}
          </AudioPlayerProvider>
        </ApiProvider>
      </AuthProvider>
    </AppContainer>
  )
}

export default Application
