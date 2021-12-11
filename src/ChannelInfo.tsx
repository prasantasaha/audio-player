import { Spinner } from 'grommet'
import { StatusWarning } from 'grommet-icons'
import { Text } from 'grommet/components/Text'
import React, { useEffect, useState } from 'react'
import { Container, MediaArt, MediaArtContainer } from './ChannelInfo.styles'
import { IChannelInfo } from './util'

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

    useEffect(() => {
        setExpanded(isExpanded)
    }, [isExpanded])

    const handleOnClick = () => {
        setExpanded(true)
        onClick(true)
    }

    return (
        <Container expanded={expanded} onClick={handleOnClick}>
            <MediaArtContainer expanded={expanded}>
                {currentChannel?.imageSrc && (
                    <MediaArt
                        expanded={expanded}
                        src={currentChannel.imageSrc}
                        alt="Media art"
                    />
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
