import { Button } from 'grommet';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useAppContext } from './AppContext';

import { PlayFill, PauseFill, Next, Previous } from 'grommet-icons'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PlayerControls = (): JSX.Element => {
  const {
    currentChannel,
    isPlaying,
    togglePlayBack,
    nextChannel,
    prevChannel
  } = useAppContext();
  if (!currentChannel) {
    return <Fragment />;
  }

  return (
    <Wrapper>
      <Button
        icon={<Previous />}
        onClick={() => prevChannel()}
      />

      <Button
        icon={isPlaying ? <PauseFill /> : <PlayFill />}
        onClick={() => togglePlayBack()}
        plain={false}
        size={'large'}
      />

      <Button
        icon={<Next />}
        onClick={() => nextChannel()}
      />
    </Wrapper>
  );
};

export default PlayerControls;
