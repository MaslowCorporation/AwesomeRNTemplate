import * as WebBrowser from 'expo-web-browser';

export async function OpenPageInBrowser({ url }) {
    await WebBrowser.openBrowserAsync(url);

}