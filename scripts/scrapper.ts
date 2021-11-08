const cheerio: cheerio.CheerioAPI = require('cheerio');
const axios = require('axios');

export interface IChannelInfo {
    id: string;
    title: string;
    imageSrc: string;
    audioSrc: string;
}

interface IChannelItemValue {
    name: string;
    image: string;
    live_url: string
}

const getChannelsFromScriptTag = (root: cheerio.Root) => {
    const script = root('script').get()[7].children[0].data;
    return JSON.parse(
        script
            .match(/\{(.*?);/)[0]
            // Replace ":" with "@colon@" if it's between double-quotes
            .replace(/:\s*"([^"]*)"/g, (_: unknown, p1: string) => {
                return ': "' + p1.replace(/:/g, '@colon@') + '"';
            })

            // Replace ":" with "@colon@" if it's between single-quotes
            .replace(/:\s*'([^']*)'/g, (_: unknown, p1: string) => {
                return ': "' + p1.replace(/:/g, '@colon@') + '"';
            })

            // Add double-quotes around any tokens before the remaining ":"
            .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

            // Turn "@colon@" back into ":"
            .replace(/@colon@/g, ':')
            .replace(/,(?!\s*?[{["'\w])/g, '')
            .replace(';', '')
    );
};

const fetchChannels = async (): Promise<IChannelInfo[]> => {
    const response = await axios.get(
        'https://newsonair.com/playersource.php'
    );
    // console.log(response);
    const root = cheerio.load(response, { recognizeSelfClosing: true, decodeEntities: false, _useHtmlParser2: true });
    const channels = getChannelsFromScriptTag(root) as IChannelItemValue[];
    const list = Object.entries(channels).map(
        (item: [string, IChannelItemValue]) => {
            const [key, value] = item;
            return {
                id: key,
                title: value.name,
                imageSrc: value.image,
                audioSrc: value.live_url
            };
        }
    );
    return list;
};

(async () => {
    const response = await fetchChannels();
    console.log(response);
})();

