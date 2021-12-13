import { addChannels, resetChannelsList } from './restdb'
import { fetchChannels } from './scrapper'
import * as dotenv from 'dotenv'
// prettier-ignore
dotenv.config();
// update channels data
// prettier-ignore
(async () => {
    const channels = await fetchChannels()
    if (channels.length) {
        try {
            await resetChannelsList()
        } catch (error) {
            console.error(
                `reset channel data failed: ${(error as Error).message}`
            )
        }

        try {
            await addChannels(channels)
        } catch (error) {
            console.error(`adding channels failed: ${(error as Error).message}`)
        }
    }
})()
