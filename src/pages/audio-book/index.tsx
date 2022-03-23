import { Breadcrumb, Col, Row, Skeleton } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import AudioBookListSlider from "../../components/audio-book/AudioBookListSlider";
import AudioBookListSmallSlider from "../../components/audio-book/AudioBookListSmallSlider";
import AudioBookTypeTag from "../../components/audio-book/AudioBookTypeTag";
import TitleBlock from "../../components/common/TitleBlock";
import MainLayout from "../../components/layouts/MainLayout";
import { useAudioBooksWithCategories } from "../../hooks/audioBook";
import { useTags } from "../../hooks/tag";

const StyledTextDiv = styled.div`
  color: black;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const AudioBookHomePage: React.FC = () => {
  const { loadingTags, tags } = useTags("audioBook");
  const [activeTagName, setActiveTagName] = useState<string | undefined>();
  const { loadingAudioBookCategories, audioBookCategories } =
    useAudioBooksWithCategories({
      tagName: activeTagName,
      limit: 6,
    });

  return (
    <MainLayout title="有聲書" activeKey="audioBookHome">
      <Breadcrumb className="px-4 py-4" separator=">">
        <Link href="/" passHref>
          <Breadcrumb.Item>首頁</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>有聲書</Breadcrumb.Item>
      </Breadcrumb>

      <Skeleton loading={loadingTags}>
        <div className="mb-3 px-1 d-flex">
          <AudioBookTypeTag
            className="mx-1"
            index={0}
            onClick={() => setActiveTagName(undefined)}
          >
            全部
          </AudioBookTypeTag>

          {tags.map((tag, index) => (
            <AudioBookTypeTag
              key={index}
              className="mx-1"
              index={index + 1}
              active={tag.name === activeTagName}
              onClick={() => setActiveTagName(tag.name)}
            >
              {tag.name}
            </AudioBookTypeTag>
          ))}
        </div>
      </Skeleton>

      <Skeleton loading={loadingAudioBookCategories}>
        <div>
          {audioBookCategories.map((audioBookCategory, index) => {
            if (index % 2 === 0) {
              return (
                <div className="mb-3" key={index}>
                  <TitleBlock className="mb-3">
                    {audioBookCategory.name}
                  </TitleBlock>
                  <StyledTextDiv className="px-3">
                    {audioBookCategory.description}
                  </StyledTextDiv>
                  <div className="px-2 mt-2">
                    <AudioBookListSlider
                      audioBooks={audioBookCategory.audioBooks}
                      categoryId={audioBookCategory.id}
                    />
                  </div>
                </div>
              );
            } else {
              const audioBooks = [...audioBookCategory.audioBooks];
              const audioBookHalfCount = Math.floor(audioBooks.length / 2);

              const audioBookPart1 = audioBooks.slice(0, audioBookHalfCount);
              const audioBookPart2 = audioBooks.slice(audioBookHalfCount);
              return (
                <div className="mb-3" key={index}>
                  <TitleBlock className="mb-3">
                    {audioBookCategory.name}
                  </TitleBlock>
                  <div className="px-1 mt-2">
                    <Row>
                      <Col span={12} className="px-1">
                        <AudioBookListSmallSlider
                          audioBooks={audioBookPart1}
                          categoryId={audioBookCategory.id}
                        />
                      </Col>

                      <Col span={12} className="px-1">
                        <AudioBookListSmallSlider
                          audioBooks={audioBookPart2}
                          categoryId={audioBookCategory.id}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Skeleton>
    </MainLayout>
  );
};

export default AudioBookHomePage;
