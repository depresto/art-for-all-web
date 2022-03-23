import { Divider } from "antd";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import PauseIcon from "../../assets/images/pause.svg";
import PlayIcon from "../../assets/images/play.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import {
  AudioPlaylistProps,
  useAudioPlayer,
} from "../../contexts/AudioPlayerContext";
import { useAuth } from "../../contexts/AuthContext";
import { AudioBookProps } from "../../hooks/audioBook";
import TitleBlock from "../common/TitleBlock";

const StyledAudioBookPlayerDiv = styled.div`
  width: 100%;
  .player-wrapper {
    position: relative;
    .player-background {
      width: 100%;
      border-radius: 20px;
    }
    .player-control {
      position: absolute;
      bottom: -25px;
      display: flex;
      background-color: #1e5285;
      border: 1px solid #ffffff;
      border-radius: 25px;
      width: 80%;
      height: 50px;
      margin-left: 10%;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .player-button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      font-size: 16px;
      letter-spacing: 0.1em;
      &:active {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .play-button {
      flex-grow: 1;
      height: 100%;
      border-right: 1px solid #ffffff;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .shuffle-button {
      width: 70px;
      border-right: 1px solid #ffffff;
    }
    .record-button {
      width: 70px;
    }
    svg {
      path {
        fill: white;
      }
    }
  }
`;

const StyledAudioBookPlayListDiv = styled.div`
  .audio-book-playlist-item {
    cursor: pointer;

    .audio-book-playlist-title {
      padding: 10px 0;
      flex: 1;
    }
  }
`;

const AudioBookPlayer: React.FC<{
  audioBooks: AudioBookProps[];
  onChangeAudioId?: (id: number) => void;
}> = ({ audioBooks, onChangeAudioId }) => {
  const router = useRouter();
  const bookId = router.query.bookId as string;
  const categoryId = router.query.categoryId as string;
  const { currentMemberId } = useAuth();

  const audioPlaylistItems = audioBooks.map(
    ({ featuredImageUrl, audioUrl, ...audioBook }) => ({
      audioUrl: audioUrl || "",
      audioCoverImageUrl: featuredImageUrl || "",
      ...audioBook,
    })
  );

  const [currentAudioPlayListItems, setCurrentAudioPlayListItems] = useState<
    AudioPlaylistProps[]
  >([]);
  const {
    setAudio,
    setAudioPlaylist,
    audioPlaylist,
    currentAudio,
    isPlaying,
    setIsPlayerShown,
    setIsPlaying,
  } = useAudioPlayer();

  useEffect(() => {
    const audioPlaylistItems = audioBooks.map(
      ({ featuredImageUrl, audioUrl, ...audioBook }) => ({
        audioUrl: audioUrl || "",
        audioCoverImageUrl: featuredImageUrl || "",
        ...audioBook,
      })
    );
    setCurrentAudioPlayListItems(audioPlaylistItems);
  }, [audioBooks]);

  useEffect(() => {
    const [audio, ...restAudios] = currentAudioPlayListItems;

    if (audio) {
      setAudio?.({
        id: audio.id,
        title: audio.title,
        audioUrl: audio.audioUrl,
        audioCoverImageUrl: audio.audioCoverImageUrl,
      });
    }
    if (restAudios.length > 0) {
      setAudioPlaylist?.(
        restAudios.map((audio) => ({
          id: audio.id,
          title: audio.title,
          audioUrl: audio.audioUrl,
          audioCoverImageUrl: audio.audioCoverImageUrl,
        }))
      );
    }
  }, [currentAudioPlayListItems, setAudio, setAudioPlaylist]);

  useEffect(() => {
    return () => {
      setAudio?.(null);
    };
  }, [setAudio]);

  useEffect(() => {
    if (currentAudio?.id) {
      onChangeAudioId?.(currentAudio.id);
    }
  }, [currentAudio?.id, onChangeAudioId]);

  useEffect(() => {
    if (currentAudio?.audioUrl) {
      setIsPlayerShown?.(true);
    }

    return () => {
      setIsPlayerShown?.(false);
    };
  }, [currentAudio?.audioUrl, setIsPlayerShown]);

  const onPlayClick = () => {
    setIsPlaying?.((isPlaying) => !isPlaying);
  };

  const onShuffleClick = () => {
    const shuffledAudioPlayListItems = [...audioPlaylistItems];
    shuffledAudioPlayListItems.sort(() => Math.random() - 0.5);
    setCurrentAudioPlayListItems(shuffledAudioPlayListItems);
  };

  const onChangePlayItem = (index: number) => {
    const newAudioPlayListItems = [...audioPlaylistItems];
    const currentAudio = newAudioPlayListItems.splice(index + 1, 1);
    setCurrentAudioPlayListItems([...currentAudio, ...newAudioPlayListItems]);
  };

  return (
    <div>
      <TitleBlock>{currentAudio?.title}</TitleBlock>

      <StyledAudioBookPlayerDiv className="mb-5">
        <div className="player-wrapper">
          {currentAudio?.audioCoverImageUrl && (
            <img
              className="player-background"
              src={currentAudio.audioCoverImageUrl}
              alt={currentAudio.title}
            />
          )}

          <div className="player-control">
            <div className="play-button player-button" onClick={onPlayClick}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>
            <div
              className="shuffle-button player-button"
              onClick={onShuffleClick}
            >
              <ShuffleIcon />
            </div>
            <div
              className="record-button player-button"
              onClick={() => {
                const recordingPath = `/audio-book/${categoryId}/${bookId}/recording`;

                if (currentMemberId) {
                  router.push(recordingPath);
                } else {
                  router.push("/auth");
                  try {
                    localStorage.setItem("redirectAfterLogin", recordingPath);
                  } catch {}
                }
              }}
            >
              錄製
            </div>
          </div>
        </div>
      </StyledAudioBookPlayerDiv>

      <StyledAudioBookPlayListDiv className="px-2">
        {audioPlaylist.map((audio, index) => (
          <div key={index}>
            <div className="d-flex justify-content-between px-2 audio-book-playlist-item">
              <div
                className="audio-book-playlist-title"
                onClick={() => onChangePlayItem(index)}
              >
                {audio.title}
              </div>
              <div></div>
            </div>
            <Divider className="my-0" />
          </div>
        ))}
      </StyledAudioBookPlayListDiv>
    </div>
  );
};

export default memo(
  AudioBookPlayer,
  (prev, next) =>
    JSON.stringify(prev.audioBooks) === JSON.stringify(next.audioBooks)
);
