import { DownOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const StyledMenuBtn = styled.div<{ expanded: boolean }>`
  width: 40px;
  height: 40px;

  background: ${props => (props.expanded ? '#FFA3AB' : '#ffb53c')};
  border: 2px solid ${props => (props.expanded ? '#FFA3AB' : '#ffb53c')};
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`

const StyledRow = styled(Row)`
  padding: 20px;
`

const StyledTitleCol = styled(Col)`
  padding: 2px 0;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 20px;

    text-align: center;
    font-style: normal;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.16em;
    color: #1e5285;
  }
`

type HeaderProps = {
  title: string
  collapse?: boolean
  expanded?: boolean
  noBackButton?: boolean
  onMenuClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ title, expanded = false, noBackButton, onMenuClick }) => {
  const router = useRouter()

  return (
    <header style={{ position: 'fixed', zIndex: 10, width: '100%', background: '#fff' }}>
      <StyledRow>
        <Col span={4}>
          {!noBackButton && (
            <StyledMenuBtn expanded={expanded} onClick={() => router.back()}>
              {expanded ? <DownOutlined /> : <LeftOutlined />}
            </StyledMenuBtn>
          )}
        </Col>
        <StyledTitleCol span={16}>
          <div className="title">{title}</div>
        </StyledTitleCol>
        <Col span={4}>
          <StyledMenuBtn expanded={expanded} onClick={onMenuClick}>
            <MenuOutlined />
          </StyledMenuBtn>
        </Col>
      </StyledRow>
    </header>
  )
}

export default Header
