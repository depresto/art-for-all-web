'use client'

import { Form, message, Tabs, Typography } from 'antd'
import Axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  StyledBtnsDiv,
  StyledFrom,
  StyledInput,
  StyledLinkButton,
  StyledSolidButton,
  StyledTab,
  StyleFormItem,
} from '../components/common'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { useAuth } from '../contexts/AuthContext'

const ForgotPasswordPage: React.FC = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const { isAuthenticating, isAuthenticated } = useAuth()
  const [loading, setLoading] = useState(false)

  if (!isAuthenticating && isAuthenticated) {
    router.push('/')
  }

  const handleForgotPassword = () => {
    form.validateFields().then(values => {
      setLoading(true)
      Axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/forgot-password`,
        { account: values.email },
        { withCredentials: true },
      )
        .then(({ data: { code, message } }) => {
          if (code === 'SUCCESS') {
            router.push(`/check-email?email=${values.email}`)
          } else {
            switch (code) {
              case 'E_NO_MEMBER':
                message.error('找不到該使用者')
                break
              case 'E_SEND_EMAIL':
                message.error('寄信時出現錯誤，請聯絡AFA團隊')
                break
            }
          }
        })
        .catch(error => {
          message.error(error)
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }

  return (
    <DefaultLayout>
      <StyledTab>
        <Tabs.TabPane tab="忘記密碼" key="forgotPassword">
          <div className="py-4">
            <StyledFrom layout="vertical" form={form} onFinish={handleForgotPassword}>
              <div className="mb-4 text-center">
                <Typography.Text>請輸入您的註冊信箱，以收信來重設密碼</Typography.Text>
              </div>
              <StyleFormItem
                label="註冊信箱"
                name="email"
                required={false}
                rules={[{ required: true, message: '請輸入註冊信箱' }]}
              >
                <StyledInput />
              </StyleFormItem>

              <StyledBtnsDiv className="d-flex">
                <StyledSolidButton loading={loading} htmlType="submit">
                  寄送驗證信
                </StyledSolidButton>
              </StyledBtnsDiv>

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

export default ForgotPasswordPage
