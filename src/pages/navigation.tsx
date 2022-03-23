import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import MainLayout from '../components/layouts/MainLayout'

const StyledContainer = styled.div`
  width: 80%;
  margin: 20px auto;

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1em;

  color: #000000;
`

const StyledRow = styled(Row)`
  margin-bottom: 5px;
  margin-left: 10px;
`
const StyledPaddingDiv = styled.div`
  padding: 10px 25px;
`
const StyledBlockDiv = styled(StyledPaddingDiv)`
  background: #ffb53c;
  text-align: center;

  position: relative;
  sup {
    position: absolute;
    top: 10px;
    right: 5px;
  }
`

const NavigationPage: React.FC = () => {
  return (
    <MainLayout title="網站導覽" activeKey="navigation">
      <StyledContainer>
        <p>Art For All是一個提供參觀、展覽、策展、分享的平台，主要概念為促進公民文化平權與提升藝術參與。</p>
        <p>本網站依無障礙網頁設計原則而建置，網站的主要樣版內容分為三個大區塊： </p>
        <StyledRow>
          <Col span={6}>
            <StyledBlockDiv>1</StyledBlockDiv>
          </Col>
          <Col span={18}>
            <StyledPaddingDiv>上方選單連結區</StyledPaddingDiv>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col span={6}>
            <StyledBlockDiv>2</StyledBlockDiv>
          </Col>
          <Col span={18}>
            <StyledPaddingDiv>主要內容顯示區</StyledPaddingDiv>
          </Col>
        </StyledRow>
        <StyledRow className="mb-3">
          <Col span={6}>
            <StyledBlockDiv>3</StyledBlockDiv>
          </Col>
          <Col span={18}>
            <StyledPaddingDiv>下方功能顯示區</StyledPaddingDiv>
          </Col>
        </StyledRow>
        <p>本網站的便捷鍵﹝Accesskey，也稱為快速鍵﹞設定如下：</p>
        <StyledRow>
          <Col span={6}>
            <StyledBlockDiv>
              1<sup>L</sup>
            </StyledBlockDiv>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col span={6}>
            <StyledBlockDiv>
              2<sup>C</sup>
            </StyledBlockDiv>
          </Col>
        </StyledRow>
        <StyledRow className="mb-3">
          <Col span={6}>
            <StyledBlockDiv>
              3<sup>R</sup>
            </StyledBlockDiv>
          </Col>
        </StyledRow>
        <p>Alt+L (IE), Alt+Shift+L (Firefox)：上方選單連結區，此區塊列有網頁的基本相關連結。</p>
        <p>Alt+C (IE), Alt+Shift+C (Firefox)：主要內容顯示區，此區塊呈現各網頁的資訊內容。</p>
        <p>Alt+R (IE), Alt+Shift+R (Firefox)：下方功能顯示區，此區塊呈現各功能的相應資訊內容。</p>
        <br />
        <p>1 功能列</p>
        <span>1.1 登出</span> <br />
        <span>1.2 關於</span> <br />
        <span>1.3 FAQ</span> <br />
        <br />
        <br />
        <p>2 策展</p>
        <span>2.1 個人策展</span> <br />
        <span>2.2 聆聽策展</span> <br />
        <br />
        <br />
        <p>3 首頁</p>
        <span>3.1 典藏資料庫系統</span> <br />
        <span>3.2 當期展覽</span> <br />
        <span>3.3 展覽語音導覽</span> <br />
        <span>3.4 展覽語音回饋</span> <br />
        <br />
        <br />
        <p>4 收藏</p>
        <span>4.1 建立收藏清單</span> <br />
      </StyledContainer>
    </MainLayout>
  )
}

export default NavigationPage
