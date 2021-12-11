import { Spinner } from 'grommet'
import { Favorite, Share, StatusWarning } from 'grommet-icons'
import { Text } from 'grommet/components/Text'
import React, { useEffect, useState } from 'react'
import { useAppContext } from './AppContext'
import { areEqual, IChannelInfo } from './util'
import {
    Container,
    IconButton,
    MediaArt,
    MediaArtContainer,
} from './ChannelInfo.styles'

interface IChannelInfoProps {
    isLoading: boolean
    hasError: boolean
    isExpanded: boolean
    currentChannel: IChannelInfo
    onClick: (expanded: boolean) => void
}

const ChannelInfo = ({
    isExpanded,
    isLoading,
    hasError,
    currentChannel,
    onClick,
}: IChannelInfoProps) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [isFavourite, setIsFavourite] = useState<boolean>(false)

    const { favouriteChannels, toggleFavouriteChannel } = useAppContext()

    useEffect(() => {
        setExpanded(isExpanded)
    }, [isExpanded])

    useEffect(() => {
        if (!currentChannel?.id || !favouriteChannels) {
            return
        }
        const favouriteChannel = favouriteChannels.find((channel) =>
            areEqual(channel.id, currentChannel.id)
        )
        if (favouriteChannel && favouriteChannel.id) {
            setIsFavourite(true)
            return
        }
        setIsFavourite(false)
    }, [favouriteChannels, currentChannel])

    const handleOnClick = () => {
        setExpanded(true)
        onClick(true)
    }

    const handleToggleFavourite = () => {
        toggleFavouriteChannel(currentChannel)
    }

    const onHandleShare = async () => {
        if (!currentChannel || !currentChannel.id) {
            return
        }

        if (navigator.share) {
            const params = new URLSearchParams()
            params.set('channelId', currentChannel.id)

            try {
                await navigator.share({
                    title: currentChannel.title,
                    text: 'Check out this online radio channel',
                    url: `${window.location.href.replace(
                        window.location.search,
                        ''
                    )}?${params.toString()}`,
                })
            } catch (error) {
                console.log(`Unable to share ${error}`)
            }
        }
    }

    return (
        <Container expanded={expanded} onClick={handleOnClick}>
            <MediaArtContainer expanded={expanded}>
                {expanded && (
                    <IconButton
                        icon={<Favorite />}
                        primary={isFavourite}
                        onClick={handleToggleFavourite}
                    />
                )}
                {currentChannel?.imageSrc && (
                    <MediaArt
                        expanded={expanded}
                        src={currentChannel.imageSrc}
                        alt="Media art"
                    />
                )}
                {expanded && (
                    <IconButton icon={<Share />} onClick={onHandleShare} />
                )}
            </MediaArtContainer>

            <Text size={expanded ? 'xlarge' : 'small'} textAlign={'start'}>
                {currentChannel?.title}
            </Text>

            {isLoading && !hasError && <Spinner />}
            {hasError && <StatusWarning />}
        </Container>
    )
}

export default ChannelInfo
