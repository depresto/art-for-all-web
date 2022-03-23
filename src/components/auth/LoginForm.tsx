import { Form, message } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {
  AuthFormStyledDiv,
  StyledBtnsDiv,
  StyledFrom,
  StyledInput,
  StyledLinkButton,
  StyledOutlinedButton,
  StyledSolidButton,
  StyleFormItem,
} from '../common'

const LoginForm: React.FC<{ onChangeTab?: (pageName: string) => void }> = ({ onChangeTab }) => {
  const router = useRouter()
  const [form] = Form.useForm()
  const { login } = useAuth()
  const [isHintVisible, setIsHintVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    form.validateFields().then(async values => {
      const { account, password } = values
      setLoading(true)
      try {
        await login?.({ account, password })
        form.resetFields()
        try {
          const afterLoginPath = localStorage.getItem('redirectAfterLogin')
          localStorage.removeItem('redirectAfterLogin')

          if (afterLoginPath) {
            router.push(afterLoginPath)
          } else {
            router.push('/')
          }
        } catch {
          router.push('/')
        }
      } catch (error) {
        switch ((error as any).message) {
          case 'E_NO_MEMBER':
            message.error('找不到使用者')
            break
        }
        setIsHintVisible(true)
      }
      setLoading(false)
    })
  }

  return (
    <div>
      <AuthFormStyledDiv>
        <StyledFrom layout="vertical" form={form} onFinish={handleLogin}>
          <StyleFormItem
            label="帳號(信箱)"
            name="account"
            required={false}
            rules={[{ required: true, message: '請輸入帳號' }]}
          >
            <StyledInput />
          </StyleFormItem>
          <StyleFormItem
            label="密碼"
            name="password"
            required={false}
            rules={[{ required: true, message: '請輸入密碼' }]}
          >
            <StyledInput type="password" />
          </StyleFormItem>

          <StyledBtnsDiv className="d-flex">
            <StyledOutlinedButton onClick={() => router.push('/')}>取消</StyledOutlinedButton>
            <StyledSolidButton loading={loading} htmlType="submit">
              登入
            </StyledSolidButton>
          </StyledBtnsDiv>

          {isHintVisible && (
            <div className="d-flex justify-content-center flex-column">
              <StyledLinkButton
                type="link"
                onClick={() => {
                  onChangeTab?.('register')
                  form.resetFields()
                }}
              >
                還沒註冊？按這裡註冊新帳號
              </StyledLinkButton>
              <StyledLinkButton
                type="link"
                onClick={() => {
                  onChangeTab?.('forgotPassword')
                  form.resetFields()
                }}
              >
                忘記密碼？
              </StyledLinkButton>
            </div>
          )}
        </StyledFrom>
      </AuthFormStyledDiv>
    </div>
  )
}

export default LoginForm
