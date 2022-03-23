import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import AddImageImg from "../../assets/images/addimage.png";
import ImagePlaceholderImg from "../../assets/images/image.png";
import MoreImg from "../../assets/images/more.png";
import RecordImg from "../../assets/images/record.png";
import VoiceImg from "../../assets/images/voice.png";
import {
  StyledAddImageImg,
  StyledModal,
  StyledRecordingAreaDiv,
  StyledRecordingBtnsDiv,
  StyledRecordingImg,
  StyledRow,
} from "../artwork/ArtworkComment";

const StyledActiveDiv = styled.div`
  background: #b0d8b1;
  margin-bottom: 3px;
  width: 100%;
  cursor: pointer;
`;
const StyledAddItemDiv = styled(StyledActiveDiv)`
  padding: 20px 30px;
`;
const StyledActiveItemDiv = styled(StyledActiveDiv)`
  padding: 10px 30px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.16em;
  color: #1e5285;

  position: relative;
`;
const StyledInactiveDiv = styled.div`
  background: rgba(176, 216, 177, 0.7);
  margin-bottom: 3px;
  width: 100%;
  height: 50px;
`;
const StyledIcon = styled(PlusOutlined)`
  color: #1f507f;
  font-size: 30px;

  vertical-align: middle;
`;
const StyledAddItemSpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.16em;
  color: #1e5285;

  vertical-align: middle;
  margin-left: 15px;
`;
const StyledImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;
export const MoreBtnImg = styled.img`
  width: 40px;
  margin-top: 0px;
  padding: 15px 5px;
  float: right;
`;
export const MoreBtnGroupDiv = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;

  div {
    background: #ffb53c;
    padding: 5px 40px;
    border: 1px solid #ffffff;
    border-radius: 3px;
  }
`;

const ModalFooter: React.FC<{
  onSave?: () => void;
}> = ({ onSave }) => {
  return (
    <>
      <StyledRecordingAreaDiv>
        <StyledRecordingImg {...VoiceImg} alt="播放錄音" />
        <StyledRecordingImg {...RecordImg} alt="開始錄音" />
      </StyledRecordingAreaDiv>

      <StyledRecordingBtnsDiv>
        <Button onClick={onSave} type="primary">
          儲存
        </Button>
      </StyledRecordingBtnsDiv>
    </>
  );
};

const CollectionListItem: React.FC<{
  name: string;
  imageUrl: string;
  onEdit?: (name: string) => void;
  onClick?: () => void;
}> = ({ name, imageUrl, onEdit, onClick }) => {
  const [moreBtnActive, setMoreBtnActive] = useState(false);
  const onItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (e.target as any).dataset?.selectable && onClick && onClick();
  };

  return (
    <StyledActiveItemDiv data-selectable onClick={onItemClick}>
      <StyledImage data-selectable src={imageUrl} alt={name} />
      <span data-selectable>{name}</span>
      <MoreBtnImg
        {...MoreImg}
        alt="查看更多"
        onClick={() => setMoreBtnActive(!moreBtnActive)}
      />

      {moreBtnActive && (
        <MoreBtnGroupDiv>
          <div onClick={() => onEdit && onEdit(name)}>編輯</div>
          <div>刪除</div>
        </MoreBtnGroupDiv>
      )}
    </StyledActiveItemDiv>
  );
};

const collectionListItems = [
  {
    id: "01",
    name: "淡水風景",
    imageUrl: ImagePlaceholderImg,
  },
];

const CollectionList: React.FC<{
  onSelectItem?: (id: string) => void;
}> = ({ onSelectItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState("");
  const onOpenModal = () => {
    setListName("");
    setModalVisible(true);
  };
  const onSave = () => {
    setModalVisible(false);
    // onSaveComment && onSaveComment(commentText)
    setListName("");
  };
  const onItemEdit = (name: string) => {
    setListName(name);
    setModalVisible(true);
  };

  return (
    <>
      <StyledAddItemDiv onClick={onOpenModal}>
        <StyledIcon />
        <StyledAddItemSpan>建立新清單</StyledAddItemSpan>
      </StyledAddItemDiv>

      {collectionListItems.map((collectionItem) => {
        const { id, name, imageUrl } = collectionItem;
        return (
          <CollectionListItem
            key={id}
            name={name}
            imageUrl={imageUrl.src}
            onEdit={onItemEdit}
            onClick={() => onSelectItem && onSelectItem(id)}
          />
        );
      })}

      {[...Array(10)].map((e, i) => (
        <StyledInactiveDiv key={i} />
      ))}

      <StyledModal
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        okText="儲存"
        footer={<ModalFooter onSave={onSave} />}
      >
        <StyledRow>
          <Col span={18}>
            <Input.TextArea
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="建立新清單........."
              autoSize={{ minRows: 3, maxRows: 10 }}
            />
          </Col>
          <Col span={6}>
            <StyledAddImageImg {...AddImageImg} alt="新增圖片" />
          </Col>
        </StyledRow>
      </StyledModal>
    </>
  );
};

export default CollectionList;
