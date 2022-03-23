import { Button, Col, Input, Modal, Row } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import UserIconSrc from '../../assets/images/user.png'
import { useAuth } from '../../contexts/AuthContext'
import { CommentProps } from '../../hooks/artwork'

const StyledNewCommentDiv = styled.div`
  background: #f3f3f3;
  border-radius: 3px;

  padding: 10px;
`
const StyledAvatarImg = styled.img`
  width: 30px;
`
const StyledNewCommentSpan = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.15em;

  color: #1e5285;

  border-bottom: 0.5px solid #5f5f5f;

  display: inline-block;
  width: calc(100% - 50px);
  margin-left: 10px;
`
const StyledCommentDiv = styled.div`
  border: 0.25px solid #f3f3f3;
  border-radius: 3px;
  margin-top: 20px;
  padding: 5px 10px;
`
const StyledAuthorNameSpan = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.15em;

  color: #1e5285;
  margin-left: 10px;
`
const StyledCommentContentDiv = styled.div`
  white-space: pre-wrap;
  padding-top: 10px;
  padding-left: 20px;

  font-size: 13px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: 0.14em;
`

export const StyledModal = styled(Modal)`
  .ant-modal-header {
    padding: 10px;
  }
  .ant-modal-body,
  .ant-modal-footer {
    background: #f3f3f3;
  }
`
export const StyledRow = styled(Row)`
  width: 85%;
  margin: 0 auto;
`
export const StyledAddImageImg = styled.img`
  width: 100%;
  padding-left: 10px;
  padding-bottom: 10px;
`
export const StyledRecordingAreaDiv = styled.div`
  float: left;
  margin-left: 35px;
`
export const StyledRecordingImg = styled.img`
  height: 20px;
  margin-right: 20px;
`
export const StyledRecordingBtnsDiv = styled.div`
  margin-right: 35px;
`

const ModalTitle: React.FC = () => {
  const { currentMember } = useAuth()
  return (
    <>
      <StyledAvatarImg src={currentMember?.avatarUrl || UserIconSrc.src || ''} alt="大頭貼" />
      <StyledAuthorNameSpan>{currentMember?.name}</StyledAuthorNameSpan>
    </>
  )
}
const ModalFooter: React.FC<{
  onDraft?: () => void
  onSave?: () => void
}> = ({ onDraft, onSave }) => {
  return (
    <>
      {/* Temporarily halt voice record because function have not start
      <StyledRecordingAreaDiv>
        <StyledRecordingImg src={VoiceImg} alt="播放錄音" />
        <StyledRecordingImg src={RecordImg} alt="開始錄音" />
      </StyledRecordingAreaDiv> */}

      <StyledRecordingBtnsDiv>
        <Button onClick={onDraft}>草稿</Button>
        <Button onClick={onSave} type="primary">
          儲存
        </Button>
      </StyledRecordingBtnsDiv>
    </>
  )
}

const ArtworkComment: React.FC<{
  comments?: CommentProps[]
  onSaveComment?: (content: string) => void
}> = ({ comments, onSaveComment }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [commentText, setCommentText] = useState('')
  const { currentMember } = useAuth()
  const onDraft = () => {
    setModalVisible(false)
  }
  const onSave = () => {
    setModalVisible(false)
    onSaveComment && onSaveComment(commentText)
    setCommentText('')
  }

  return (
    <>
      <StyledNewCommentDiv onClick={() => setModalVisible(true)}>
        <StyledAvatarImg src={currentMember?.avatarUrl || UserIconSrc.src} alt="大頭貼" />
        <StyledNewCommentSpan>我要評論</StyledNewCommentSpan>
      </StyledNewCommentDiv>

      {comments?.map(comment => (
        <StyledCommentDiv key={comment.id}>
          <StyledAvatarImg src={comment.member.avatarUrl || ''} alt="大頭貼" />
          <StyledAuthorNameSpan>{comment.member.name}</StyledAuthorNameSpan>

          <StyledCommentContentDiv>{comment.content}</StyledCommentContentDiv>
        </StyledCommentDiv>
      ))}

      <StyledModal
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        title={<ModalTitle />}
        okText="儲存"
        cancelText="草稿"
        footer={<ModalFooter onDraft={onDraft} onSave={onSave} />}
      >
        <StyledRow>
          <Col span={18 + 6}>
            <Input.TextArea
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="撰寫評論........."
              autoSize={{ minRows: 6, maxRows: 10 }}
            />
          </Col>
          {/* <Col span={6}>
            <StyledAddImageImg src={AddImageImg} alt="新增圖片" />
            <StyledAddImageImg src={AddImageImg} alt="新增圖片" />
          </Col> */}
        </StyledRow>
      </StyledModal>
    </>
  )
}

export default ArtworkComment
