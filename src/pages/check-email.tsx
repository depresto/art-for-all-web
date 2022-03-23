import { MailOutlined } from '@ant-design/icons'
import { Tabs, Typography } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { StyledBtnsDiv, StyledFrom, StyledLinkButton, StyledSolidButton, StyledTab } from '../components/common'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { useAuth } from '../contexts/AuthContext'
const linkToInbox = require('link-to-inbox')

const CheckEmailPage: React.FC = () => {
  const router = useRouter()
  const email = router.query.email as string
  const { isAuthenticating, isAuthenticated } = useAuth()
  const [emailLink, setEmailLink] = useState('')

  useEffect(() => {
    if (email) {
      const _emailLink = linkToInbox.getHref(email)
      console.log(_emailLink)
      setEmailLink(_emailLink)
    }
  }, [email])

  if (!isAuthenticating && isAuthenticated) {
    router.push('/')
  }

  return (
    <DefaultLayout>
      <StyledTab>
        <Tabs.TabPane tab="寄信成功" key="forgotPassword">
          <div className="py-4">
            <StyledFrom layout="vertical">
              <MailOutlined className="mb-3" style={{ fontSize: 30 }} />

              <div className="mb-4 text-center">
                <Typography.Text>
                  請至您的信箱
                  <a href={emailLink} target="_blank" rel="noopener noreferrer">
                    {email}
                  </a>
                  收信以重設密碼
                </Typography.Text>
              </div>

              <StyledBtnsDiv className="d-flex">
                <StyledSolidButton href={emailLink} target="_blank" rel="noopener noreferrer">
                  重設密碼
                </StyledSolidButton>
              </StyledBtnsDiv>

              <StyledLinkButton type="link" onClick={() => router.push('/forgot-password')}>
                重新寄送驗證信
              </StyledLinkButton>
              <StyledLinkButton type="link" onClick={() => router.push('/auth')}>
                返回登入頁面
              </StyledLinkButton>
            </StyledFrom>
          </div>
        </Tabs.TabPane>
      </StyledTab>
    </DefaultLayout>
  )
}

export default CheckEmailPage
