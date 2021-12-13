import axios, { AxiosResponse } from 'axios'

export interface IChannelInfo {
    id: string
    title: string
    imageSrc: string
    audioSrc: string
}

interface IChannelItemValue {
    name: string
    image: string
    live_url: string
}

const getLastScriptTag = (htmlStr: string): string => {
    const regex = /<script[\s\S]*?>[\s\S]*?<\/script>/gi
    const channels =
        htmlStr
            .match(regex)
            ?.filter((item) => item.indexOf('var channels') > -1) || []
    return channels.slice(-1)[0] || ''
}

const getJSONFromString = (objectString: string) => {
    /**
     * Before: {one : "1:1", two : { three: '3:3' }}
     * After: {"one":  "1:1", "two":  { "three":  "3:3" }}
     * {
     *   "one": "1:1",
     *   "two": {
     *     "three": "3:3"
     *   }
     * }
     */
    const correctJson = objectString
        // Replace ":" with "@:@" if it's between double-quotes
        .replace(/:\s*"([^"]*)"/g, (match, p1) => {
            return ': "' + p1.replace(/:/g, '@:@') + '"'
        })

        // Replace ":" with "@:@" if it's between single-quotes
        .replace(/:\s*'([^']*)'/g, (match, p1) => {
            return ': "' + p1.replace(/:/g, '@:@') + '"'
        })

        // Add double-quotes around any tokens before the remaining ":"
        .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

        // Turn "@:@" back into ":"
        .replace(/@:@/g, ':')

    try {
        return JSON.parse(correctJson)
    } catch (error) {
        // console.log(error)
    }
    return {}
}

const getChannels = (str: string) => {
    const regex = /\{(?:[^{}]|())*\}/g
    return (
        str
            .match(regex)
            ?.map((item) => getJSONFromString(item) as IChannelItemValue)
            .filter((item) => item && item.name) || []
    )
}

const fetchChannels = async (): Promise<IChannelInfo[]> => {
    const { data } = await axios.get<unknown, AxiosResponse<string>>(
        'https://newsonair.com/playersource.php'
    )
    const scriptStr = getLastScriptTag(data)
    const channels = getChannels(scriptStr)
    const list = Object.entries(channels).map(
        (item: [string, IChannelItemValue]) => {
            const [key, value] = item
            return {
                id: key,
                title: value.name,
                imageSrc: value.image,
                audioSrc: value.live_url,
            }
        }
    )
    console.log(`${channels.length} channels found`)
    return list
}

export { fetchChannels }
