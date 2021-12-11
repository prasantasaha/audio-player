import { Button } from 'grommet';
import { Down } from 'grommet-icons';
import Hls, { ErrorData, ErrorTypes } from 'hls.js';
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from './AppContext';
import ChannelInfo from './ChannelInfo';
import PlayerControls from './PlayerControls';
import { areEqual } from './util';

const Wrapper = styled.div<{ expanded: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(64, 64, 64, ${props => (props.expanded ? 100 : 80)}%);
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  padding:  ${props => (props.expanded ? '80px 0' : '6px 10px')};
  flex-direction: ${props => (props.expanded ? 'column' : 'row')};
  justify-content: ${props => (props.expanded ? 'space-around' : 'space-between')};
  box-sizing: border-box;
  filter: drop-shadow(0 0 0.20rem black);
  height: ${props => (props.expanded ? '100%' : '80px')};
  transition: height 0.15s ease-in;
`;

export interface IPlayerProps {
  autoPlay?: boolean
}

const Player = (props: IPlayerProps): JSX.Element => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const channelId = params.get('channelId');
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const { currentChannel, isPlaying } = useAppContext();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const playerRef = useRef<HTMLMediaElement>(null);

  const init = useCallback((audioSrc: string): Hls | undefined => {
    const hls = new Hls({
      enableWorker: true
    });

    if (playerRef.current != null) {
      hls.attachMedia(playerRef.current);
    }

    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      setHasError(false);
      setIsLoading(true);

      hls.loadSource(audioSrc);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        if (props.autoPlay) {
          playerRef?.current
            ?.play()
            .catch(() =>
              console.log(
                'Unable to autoplay prior to user interaction with the dom.'
              )
            );
        }
      });
    });

    hls.on(Hls.Events.ERROR, (event, data: ErrorData) => {
      setHasError(true);

      // if ((data.type === ErrorTypes.NETWORK_ERROR || data.type === ErrorTypes.MEDIA_ERROR) && isPlaying) {
      //   // togglePlayBack()
      // }

      if (data.fatal) {
        switch (data.type) {
          case ErrorTypes.NETWORK_ERROR:
            hls.stopLoad()
            break;
          case ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError();
            break;
          default:
            break;
        }
      }
    });

    return hls;
  }, [props.autoPlay]);

  const getAudioElement = () => {
    // If Media Source is supported, use HLS.js to play video
    if (Hls.isSupported()) {
      return <audio ref={playerRef} />
    }
    // Fallback to using a regular video player if HLS is supported by default in the user's browser
    return <audio ref={playerRef} src={currentChannel?.audioSrc} autoPlay={props.autoPlay} />;
  }

  useEffect(() => {
    let hls: Hls | undefined;
    // Check for Media Source support
    if (Hls.isSupported() && currentChannel?.audioSrc) {
      hls = init(currentChannel?.audioSrc);

      document.title = `Radio - ${currentChannel.title}`
    }

    return () => {
      if (hls != null) {
        hls.destroy();
      }
    };
  }, [init, currentChannel]);

  useEffect(() => {
    if (currentChannel && areEqual(currentChannel.id, channelId)) {
      setIsExpanded(true);
    }
  }, [currentChannel, channelId])

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        if (playerRef.current?.paused && !isLoading) {
          playerRef?.current.play();
        }
      }, 0)

      return;
    }
    playerRef.current?.pause()
  }, [isPlaying, isLoading])

  if (!currentChannel?.audioSrc) {
    return <Fragment />
  }

  return (
    <Wrapper expanded={isExpanded}>
      {getAudioElement()}
      {isExpanded && <Button
        icon={<Down size={'large'} />}
        onClick={() => setIsExpanded(false)}
      />}
      <ChannelInfo hasError={hasError}
        isExpanded={isExpanded}
        isLoading={isLoading}
        currentChannel={currentChannel}
        onClick={(expanded: boolean) => { setIsExpanded(expanded) }} />
      <PlayerControls />
    </Wrapper>);
}


export default Player;
