import { Breadcrumb } from 'antd'
import React from 'react'
import styled from 'styled-components'
import AboutIcon01 from '../assets/images/about-icon-01.svg'
import AboutIcon02 from '../assets/images/about-icon-02.svg'
import AboutIcon03 from '../assets/images/about-icon-03.svg'
import AboutIcon04 from '../assets/images/about-icon-04.svg'
import AboutIcon05 from '../assets/images/about-icon-05.svg'
import LogoImg from '../assets/images/logo-img.svg'
import LogoText from '../assets/images/logo-text.svg'
import UsersIcon from '../assets/images/users.svg'
import TitleBlock from '../components/common/TitleBlock'
import MainLayout from '../components/layouts/MainLayout'

const StyledTitleBlockDiv = styled.div`
  .about-title-block .title-text {
    background-color: #ffcd7d;
  }
`
const StyledAboutDiv = styled.div`
  .caption {
    font-size: 12px;
    text-align: center;
    color: #b1b1b1;
  }

  line-height: 1.8;
  letter-spacing: 0.1em;
`
const StyledBlockTitle = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1em;
  margin-bottom: 8px;

  color: #1e5285;

  span {
    position: relative;
  }

  &:before {
    position: absolute;
    content: '';
    width: 78px;
    height: 10px;
    left: -1px;
    bottom: -1px;
    z-index: 0;

    background: #ffcd7d;
  }
`
const StyledIntroDiv = styled.div`
  .block-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0;
  }

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
`

const AboutPage: React.FC = () => {
  return (
    <MainLayout title="關於我們" activeKey="aboutUs">
      <Breadcrumb className="px-4 py-4" separator=">">
        <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
        <Breadcrumb.Item>關於我們</Breadcrumb.Item>
      </Breadcrumb>

      <StyledTitleBlockDiv>
        <TitleBlock className="about-title-block">關於Art For All 文化棲地</TitleBlock>
      </StyledTitleBlockDiv>

      <div className="px-3">
        <StyledAboutDiv>
          <div>我們的願景是，在每個人心中，建立一座美術館。 透過聲音平台服務，陪伴長者及視障者，擁有一段文化時光。</div>

          <div className="py-3 mt-2">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center">
                <LogoImg className="mr-3" />
                <LogoText />
              </div>
              <div className="caption mt-1">文化棲地標誌</div>
            </div>
          </div>

          <div className="mt-4">
            <StyledBlockTitle>
              <span>關於團隊</span>
            </StyledBlockTitle>

            <div>
              由在科技、教育、文化界的10位網友跨界組成，以推動文化平權為使命，期望不同的族群、不一樣的聲音，都有機會相遇。
            </div>
          </div>

          <div className="mt-4">
            <StyledBlockTitle>
              <span>平台特色</span>
            </StyledBlockTitle>

            <div>
              由在科技、教育、文化界的10位網友跨界組成，以推動文化平權為使命，期望不同的族群、不一樣的聲音，都有機會相遇。
            </div>

            <div className="d-flex justify-content-center mt-4">
              <UsersIcon />
            </div>
          </div>
        </StyledAboutDiv>

        <StyledIntroDiv className="mt-3 mb-5">
          <div>
            <h2 className="block-title">01.館際資料庫</h2>
            <div>上架不同博物館的語音資源，使用者能一站體驗。</div>
            <div className="d-flex justify-content-center mt-4">
              <AboutIcon01 />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="block-title">02.支援視障輔助系統</h2>
            <div>視障者開啟語音輔助系統，替代文字及功能旁白報讀提示清楚。</div>
            <div className="d-flex justify-content-center mt-4">
              <AboutIcon02 />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="block-title">03.無障礙設計</h2>
            <div>以 NCC 「無障礙網頁開發規範」指引進行設計，提高色彩對比度等，讓使用者更易瀏覽。</div>
            <div className="d-flex justify-content-center mt-4">
              <AboutIcon03 />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="block-title">04.口述影像</h2>
            <div>提供中文口述影像，適合視障者、視力不佳的長者和所有觀眾聆聽。</div>
            <div className="d-flex justify-content-center mt-4">
              <AboutIcon04 />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="block-title">05.流暢體驗</h2>
            <div>使用者依照視力需求及螢幕尺寸，縮放文字大小。並進行使用測試，根據回饋修正流程。</div>
            <div className="d-flex justify-content-center mt-4">
              <AboutIcon05 />
            </div>
          </div>
        </StyledIntroDiv>
      </div>
    </MainLayout>
  )
}

export default AboutPage
