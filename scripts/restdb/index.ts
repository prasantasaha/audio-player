import axios, { AxiosError } from 'axios'
import { IChannelInfo } from 'scripts/scrapper'

const DB_URL = `https://player-b7f2.restdb.io/rest`
const COLLECTION_NAME = 'air-channels'
const resetChannelsList = async (): Promise<void> => {
    // delete all channels
    try {
        await axios.delete(`${DB_URL}/${COLLECTION_NAME}/*?q={}`, {
            headers: {
                'x-apikey': process.env['FULL_ACCESS_RESTDB_API_KEY'],
            },
        })
    } catch (error) {
        console.log((error as AxiosError).message)
        throw error as Error
    }
}

const addChannels = async (channels: IChannelInfo[]): Promise<void> => {
    try {
        await axios.post(`${DB_URL}/${COLLECTION_NAME}`, channels, {
            headers: {
                'x-apikey': process.env['FULL_ACCESS_RESTDB_API_KEY'],
            },
        })
    } catch (error) {
        console.log((error as AxiosError).message)
        throw error as Error
    }
}

export { resetChannelsList, addChannels }
