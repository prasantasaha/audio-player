import { Spinner } from 'grommet'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from './AppContext'
import ChannelsList from './ChannelsList'
import Player from './Player'

const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
`

const Radio = (): JSX.Element => {
    const { channels, isPlaying } = useAppContext()
    const [autoPlay, setAutoPlay] = useState<boolean>(false)

    useEffect(() => {
        if (isPlaying && !autoPlay) {
            setAutoPlay(true)
        }
    }, [autoPlay, isPlaying])

    return (
        <Container>
            {channels && channels.length ? (
                <>
                    <ChannelsList />
                    <Player autoPlay={autoPlay} />
                </>
            ) : (
                <Spinner />
            )}
        </Container>
    )
}

export default Radio
