import { Layout, Menu } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'

export const StyledLayout = styled(Layout)`
  background: #fff;
  position: relative;
  min-height: 100vh;
  .ant-layout-has-sider {
    flex-direction: column;
  }
`

const StyledSider = styled(Layout.Sider)`
  height: 100vh;
  background: #1f507f;
  position: fixed;
  top: 80px;

  .ant-menu.ant-menu-dark {
    background: #1f507f;
  }
  .ant-layout-sider-zero-width-trigger {
    display: none;
  }
`
export const StyledLayoutContent = styled(Layout.Content)`
  width: 100% !important;
`
const StyledMenuItem = styled(Menu.Item)`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #fff !important;

  padding-top: 35px !important;
  padding-bottom: 35px !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  border-bottom: 1px solid #fff;
  height: auto !important;

  border-radius: 0 !important;
`

type LayoutProps = {
  collapsed?: boolean
}

const LayoutContainer: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children, collapsed }) => {
  const router = useRouter()
  const { logout, currentMemberId } = useAuth()

  const handleLogout = async () => {
    logout?.().then(() => {
      router.push('/')
    })
  }

  var logoutButton = (
    <StyledMenuItem key="logout" onClick={() => handleLogout()}>
      登出
    </StyledMenuItem>
  )
  if (currentMemberId === null) {
    logoutButton = <></>
  }

  return (
    <StyledLayout>
      <StyledLayoutContent>{children}</StyledLayoutContent>

      <StyledSider collapsedWidth={0} width={160} collapsed={collapsed}>
        <Menu theme="dark" mode="inline">
          <StyledMenuItem key="guide" onClick={() => router.push('/navigation')}>
            網站導覽
          </StyledMenuItem>
          {logoutButton}
        </Menu>
      </StyledSider>
    </StyledLayout>
  )
}

const DefaultLayout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children, collapsed = true }) => {
  return <LayoutContainer collapsed={collapsed}>{children}</LayoutContainer>
}

export default DefaultLayout
