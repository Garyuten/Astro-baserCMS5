// api.ts
import fetch from "node-fetch";


/**
 * Fetches data from the specified URL.
 * 
 * @param url - The URL to fetch data from.
 * @returns A promise that resolves to the fetched data.
 * @throws An error if the fetch request fails or the response is not OK.
 */
export async function fetchData(url: string): Promise<any> {
  try {
    const res = await fetch(url);
    console.log("res.status", res.status, url);
    if (!res.ok) {
      throw new Error(`An error has occurred: ${res.status}`);
    }
    const json: Record<string, any> = (await res.json()) as Record<string, any>;
    return json;
  } catch (error) {
    console.error(error);
    console.error("url: ", url);
    throw error;
  }
}


/**
 * Fetches contents from the API.
 * @returns A promise that resolves to an array of content objects.
 * @throws An error if the API request fails.
 */
export const getMyPages = async (): Promise<any[]> => {
    const API_URL = `${import.meta.env.VITE_API_BASE_URL}/baser-core/contents.json`;
    // console.log("API_URL: ", API_URL);
    const response = await fetchData(API_URL);
    return response.contents;
};

// 全コンテンツ一覧を取得して、myContentsに格納
export const myContents = await getMyPages();


// パンくずリストを作成
// 使い方;
// const myCrumbs = await getCrumbs(contentId);
export const getCrumbs = async (contentId: Number): Promise<any[]> => {
    const API_URL = `${import.meta.env.VITE_API_BASE_URL}/baser-core/contents/get_crumbs/${contentId}.json`;
    console.log("API_URL: ", API_URL);
    const response = await fetchData(API_URL);
    return response.contents;
};

