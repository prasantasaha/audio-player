import styled from "styled-components";
import { Box, Button, Spinner } from 'grommet';
import { Image } from 'grommet/components/Image';
import { Text } from 'grommet/components/Text';
import React, { useEffect, useState } from 'react';
import { areEqual, IChannelInfo } from "./util";
import { Share, Favorite } from 'grommet-icons'
import { useAppContext } from "./AppContext";



const Container = styled.div<{ expanded: boolean }>`
  display: flex;
  align-items: center;
  font-size: 16px;
  flex: 1;
  gap:  ${props => (props.expanded ? '50px' : '10px')};
  padding: ${props => (props.expanded ? '50px' : undefined)};
  width: ${props => (props.expanded ? '100%' : undefined)};
  flex-direction: ${props => (props.expanded ? 'column' : 'row')};
  cursor: pointer;
`

interface IChannelInfoProps {
    isLoading: boolean;
    hasError: boolean;
    isExpanded: boolean;
    currentChannel: IChannelInfo;
    onClick: (expanded: boolean) => void;
}

const ChannelInfo = ({ isExpanded, isLoading, hasError, currentChannel, onClick }: IChannelInfoProps) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    const { favouriteChannels, toggleFavouriteChannel } = useAppContext()

    useEffect(() => {
        setExpanded(isExpanded)
    }, [isExpanded])

    useEffect(() => {
        if (!currentChannel?.id || !favouriteChannels) {
            return;
        }
        const favouriteChannel = favouriteChannels.find(channel => areEqual(channel.id, currentChannel.id));
        if (favouriteChannel && favouriteChannel.id) {
            setIsFavourite(true)
            return;
        }
        setIsFavourite(false);
    }, [favouriteChannels, currentChannel])
    const handleOnClick = () => {
        setExpanded(true);
        onClick(true);
    }

    const handleToggleFavourite = () => {
        toggleFavouriteChannel(currentChannel);
    }

    const onHandleShare = async () => {
        if (!currentChannel || !currentChannel.id) {
            return;
        }

        if (navigator.share) {
            const params = new URLSearchParams();
            params.set('channelId', currentChannel.id);

            try {
                await navigator.share({
                    title: currentChannel.title,
                    text: 'Check out this online radio channel',
                    url: `${window.location.href.replace(window.location.search, '')}?${params.toString()}`,
                })
            } catch (error) {
                console.log(`Unable to share ${error}`)
            }
        }
    }

    return (
        <Container
            expanded={expanded}
            onClick={handleOnClick}>

            {currentChannel?.imageSrc &&
                <Image src={currentChannel.imageSrc}
                    width={expanded ? '70%' : 60}
                    style={{ maxHeight: '30vh', maxWidth: '30vh' }} />}

            {expanded && <Box direction='row'
                justify='between'
                width='100%'
                pad='0 15px'
                margin='-80px 0 0'>
                <Button size={'large'} icon={<Favorite />} primary={isFavourite} onClick={handleToggleFavourite} />
                <Button size={'large'} icon={<Share />} onClick={onHandleShare} />
            </Box>}

            <Text size={expanded ? 'xlarge' : 'small'}
                textAlign={'start'}>{currentChannel?.title}
            </Text>

            {isLoading
                && !hasError && <Spinner />}
        </Container>
    )
}

export default ChannelInfo;