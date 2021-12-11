export interface IChannelInfo {
    id: string
    title: string
    imageSrc: string
    audioSrc: string
}

const fetchChannels = async (): Promise<IChannelInfo[]> => {
    const response = await (
        await fetch('https://player-b7f2.restdb.io/rest/air-channels', {
            headers: {
                'x-apikey': process.env.REACT_APP_RESTDB_API_KEY || '',
            },
        })
    ).json()
    return response as IChannelInfo[]
}

const areEqual = (
    id1: string | number | null,
    id2: string | number | null
): boolean => {
    if (!id1 || !id2) {
        return false
    }
    return id1.toString() === id2.toString()
}

const resizeToMinimum = (): void => {
    const minimum: [number, number] = [500, 640]
    const current: [number, number] = [window.outerWidth, window.outerHeight]
    const restricted: [number, number] = current

    for (let index = 0; index < restricted.length; index++) {
        restricted[index] =
            minimum[index] > current[index] ? minimum[index] : current[index]
    }

    window.resizeTo(restricted[0], restricted[1])
}

export { fetchChannels, areEqual, resizeToMinimum }
