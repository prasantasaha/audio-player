import { Box, Image, Text, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from './AppContext';
import { IChannelInfo } from './util';

const OuterWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  background-color: var(--bg-primary-color);
  filter: drop-shadow(0 0 0.20rem black);
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 72px;
  border-bottom: 1px solid #ccc;
  background-color: black;
  align-items: center;
`;

interface ISuggestion {
  label: JSX.Element, value: string, channel: IChannelInfo
}

const formatSuggestions = (suggestedChannels: IChannelInfo[], value: string = ''): ISuggestion[] =>
  suggestedChannels
    .filter(
      suggestedChannel =>
        suggestedChannel.title.toLowerCase().indexOf(value.toLowerCase()) >= 0
    )
    .map((suggestedChannel, index, list) => ({
      label: (
        <Box
          direction="row"
          align="center"
          gap="small"
          border={index < list.length - 1 ? 'bottom' : undefined}
          pad="small"
        >
          <Image
            width="80px"
            src={suggestedChannel.imageSrc}
            style={{ borderRadius: '8px' }}
          />
          <Text size={'small'}>
            {suggestedChannel?.title}
          </Text>
        </Box>
      ),
      value: suggestedChannel.title,
      channel: suggestedChannel
    }));

const Header = (): JSX.Element => {
  const { channels, updateCurrentChannel } = useAppContext();
  const [selectedChannel, setSelectedChannel] = useState<IChannelInfo>();
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);
  const [selectedChannelTitle, setSelectedChannelTitle] = useState<string>('')

  useEffect(() => {
    if (selectedChannel && selectedChannel.id) {
      updateCurrentChannel(selectedChannel.id)
    }

  }, [selectedChannel, updateCurrentChannel])

  const onInputChange = useCallback(
    event => {
      const { value: newValue } = event.target;
      setSelectedChannelTitle(newValue);
      setSelectedChannel(newValue)

      if (!newValue.trim()) {
        setSuggestions([]);
      } else {
        setSuggestions(formatSuggestions(channels, newValue));
      }
    },
    [channels]
  );

  const onSuggestionSelect = useCallback(
    event => {
      setSelectedChannel(event.suggestion.channel);
      setSelectedChannelTitle(event.suggestion.value);
    },
    []
  );

  const onSuggestionsOpen = useCallback(() => {
    setSuggestions(formatSuggestions(channels, selectedChannel?.title));
    setSuggestionOpen(true);
  }, [channels, selectedChannel]);

  const onSuggestionsClose = useCallback(() => {
    setSuggestions([]);
    setSuggestionOpen(false);
    setSelectedChannel(undefined);
    setSelectedChannelTitle('')
  }, []);

  return (
    <OuterWrapper>
      <InnerWrapper>
        <h1>Radio</h1>
        <Box
          width="medium"
          gap="medium"
          direction="row"
          align="center"
          elevation={suggestionOpen ? 'medium' : undefined}
          style={
            suggestionOpen
              ? {
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
              }
              : undefined
          } pad={{ 'left': 'large' }}>
          <TextInput
            icon={<Search />}
            reverse
            placeholder="search"
            suggestions={suggestions}
            value={selectedChannelTitle}
            onChange={onInputChange}
            onSuggestionsOpen={onSuggestionsOpen}
            onSuggestionsClose={onSuggestionsClose}
            onSuggestionSelect={onSuggestionSelect}
          />
        </Box>

      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Header;
