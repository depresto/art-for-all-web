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

const ResetPasswordPage: React.FC = () => {
  const router = useRouter()
  const token = router.query.token as string

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  if (!token) {
    message.error('該連結無效，請再試一次')
    router.push('/forgot-password')
  }

  const handleForgotPassword = () => {
    form.validateFields().then(values => {
      setLoading(true)
      Axios.post(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/auth/reset-password`,
        { newPassword: values.newPassword },
        { headers: { authorization: `Bearer ${token}` } },
      )
        .then(({ data: { code, message: responseMessage } }) => {
          if (code === 'SUCCESS') {
            message.success('密碼更新成功，請再次登入')
            router.push(`/auth`)
          } else {
            switch (code) {
              case 'E_NO_MEMBER':
                message.error('找不到該使用者')
                break
              case 'E_UPDATE_PASSWORD':
                message.error('密碼更新錯誤，請聯絡AFA團隊')
                break
            }
          }
        })
        .catch(error => {
          console.log(error)
          message.error('該連結已失效，請再試一次')
          router.push('/forgot-password')
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }

  return (
    <DefaultLayout>
      <StyledTab>
        <Tabs.TabPane tab="重設密碼" key="forgotPassword">
          <div className="py-4">
            <StyledFrom layout="vertical" form={form} onFinish={handleForgotPassword}>
              <div className="mb-4 text-center">
                <Typography.Text>請輸入新密碼，並以新密碼登入</Typography.Text>
              </div>
              <StyleFormItem
                label="新密碼"
                name="newPassword"
                required={false}
                rules={[{ required: true, message: '請輸入密碼' }]}
              >
                <StyledInput type="password" />
              </StyleFormItem>

              <StyleFormItem
                label="密碼確認"
                name="passwordConfirmation"
                required={false}
                rules={[
                  { required: true, message: '請輸入密碼' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('密碼需與新密碼相符'))
                    },
                  }),
                ]}
              >
                <StyledInput type="password" />
              </StyleFormItem>

              <StyledBtnsDiv className="d-flex">
                <StyledSolidButton loading={loading} htmlType="submit">
                  重設密碼
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

export default ResetPasswordPage
