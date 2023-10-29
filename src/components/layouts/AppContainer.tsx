import { Layout } from 'antd'
import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  background: #fff;
  position: relative;
  .ant-layout-has-sider {
    flex-direction: column;
  }
`
const StyledDesktopLayout = styled(StyledLayout)`
  max-width: 500px;
  margin: 0 auto;
  footer,
  header {
    max-width: 500px;
  }
`
const StyledMobileLayout = styled(StyledLayout)``

const AppContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MediaQuery query="(min-device-width: 768px)">
        <StyledDesktopLayout>{children}</StyledDesktopLayout>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 767px)">
        <StyledMobileLayout>{children}</StyledMobileLayout>
      </MediaQuery>
    </>
  )
}

export default AppContainer
