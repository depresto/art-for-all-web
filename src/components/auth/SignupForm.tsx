import { Form, message } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {
  AuthFormStyledDiv,
  StyledBtnsDiv,
  StyledFrom,
  StyledInput,
  StyledOutlinedButton,
  StyledSolidButton,
  StyleFormItem,
} from '../common'

const SignupForm: React.FC<{ onChangeTab?: (pageName: string) => void }> = ({ onChangeTab }) => {
  const [form] = Form.useForm()
  const { register } = useAuth()
  const router = useRouter()

  const handleSignUp = async () => {
    form.validateFields().then(async values => {
      const { username: name, email, password } = values
      try {
        await register?.({ name, email, password })
        form.resetFields()
        message.success('註冊成功')

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
        switch (error.message) {
          case 'E_EMAIL_EXISTS':
            message.error('該信箱已註冊，請直接登入')
            onChangeTab?.('login')
            break
          default:
            message.error('註冊錯誤，請聯絡AFA團隊')
        }
      }
    })
  }

  return (
    <div>
      <AuthFormStyledDiv>
        <StyledFrom layout="vertical" form={form}>
          <StyleFormItem label="信箱" name="email">
            <StyledInput />
          </StyleFormItem>
          <StyleFormItem label="帳號" name="username">
            <StyledInput />
          </StyleFormItem>
          <StyleFormItem label="密碼" name="password">
            <StyledInput type="password" />
          </StyleFormItem>
          <StyleFormItem label="密碼確認" name="password_confirm">
            <StyledInput type="password" />
          </StyleFormItem>
        </StyledFrom>

        <StyledBtnsDiv>
          <StyledOutlinedButton onClick={async () => router.push('/')}>取消</StyledOutlinedButton>
          <StyledSolidButton onClick={() => handleSignUp()}>註冊</StyledSolidButton>
        </StyledBtnsDiv>
      </AuthFormStyledDiv>
    </div>
  )
}

export default SignupForm
