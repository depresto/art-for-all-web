'use client'

import { Tabs } from 'antd'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoginForm from '../components/auth/LoginForm'
import SignupForm from '../components/auth/SignupForm'
import { StyledTab } from '../components/common'
import MainLayout from '../components/layouts/MainLayout'
import { useAuth } from '../contexts/AuthContext'

const LoginPage: NextPage = () => {
  const router = useRouter()
  const { isAuthenticating, isAuthenticated } = useAuth()
  const [activeTabKey, setActiveTabKey] = useState('login')

  useEffect(() => {
    if (!isAuthenticating && isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticating, isAuthenticated, router])

  return (
    <MainLayout title="登入/註冊" activeKey="auth">
      <StyledTab activeKey={activeTabKey} onChange={activeKey => setActiveTabKey(activeKey)} centered>
        <Tabs.TabPane tab="登入" key="login">
          <LoginForm
            onChangeTab={pageName => {
              if (pageName === 'register') {
                setActiveTabKey('register')
              } else if (pageName === 'forgotPassword') {
                router.push('/forgot-password')
              }
            }}
          />
        </Tabs.TabPane>

        <Tabs.TabPane tab="註冊" key="register">
          <SignupForm
            onChangeTab={pageName => {
              if (pageName === 'login') {
                setActiveTabKey('login')
              }
            }}
          />
        </Tabs.TabPane>
      </StyledTab>
    </MainLayout>
  )
}

export default LoginPage
