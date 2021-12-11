import styled from 'styled-components'
import { Box, Button } from 'grommet'

const Container = styled.div<{ expanded: boolean }>`
    display: flex;
    justify-content: ${(props) => (props.expanded ? 'center' : 'left')};
    align-items: center;
    font-size: 16px;
    gap: ${(props) => (props.expanded ? '50px' : '10px')};
    padding: ${(props) => (props.expanded ? '10px' : undefined)};
    width: ${(props) => (props.expanded ? '100%' : undefined)};
    flex-direction: ${(props) => (props.expanded ? 'column' : 'row')};
    cursor: pointer;
`

const MediaArtContainer = styled(Box)<{ expanded: boolean }>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width ${(props) => (props.expanded ? '100%' : undefined)};
    padding: 0 15px
`

const MediaArt = styled.img<{ expanded: boolean }>`
    width: ${(props) => (props.expanded ? '30vh' : '60px')};
    max-height: 30vh;
    max-width: ${(props) => (props.expanded ? '50vh' : '60px')};
    transition: max-width 0.15s ease-in-out;
    border-radius: 6px;
`

const IconButton = styled(Button)`
    padding: 18px;
`

export { Container, MediaArtContainer, MediaArt, IconButton }
