// ユーティリティ class
import fetch from "node-fetch";
import { getCrumbs } from "@lib/api";

export class myUtils {
  static mode = process.env.NODE_ENV;
  static isProd = process.env.NODE_ENV === "production" ? true : false;
  static isDev = process.env.NODE_ENV === "development" ? true : false;
  static API_URL = import.meta.env.VITE_API_BASE_URL;

  /**
   * The base path of the application.
   * If the base URL is "/", the base path is an empty string.
   * Otherwise, it is the value of import.meta.env.BASE_URL.
   */
  static basePath =
    import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;

  /**
   * Capitalizes the first letter of a string and converts the rest of the string to lowercase.
   *
   * @param str - The string to capitalize.
   * @returns The capitalized string.
   */
  static capitalize(str: string): string {
    if (typeof str !== "string" || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * Formats a date string into the format "YYYY.MM.DD".
   * @param dateStr - The date string to format.
   * @returns The formatted date string.
   */
  static formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
  }

  /**
   * Retrieves the breadcrumbs for a given content ID.
   * @param contentId The ID of the content.
   * @returns A Promise that resolves to the breadcrumbs.
   */
//   ToDo: ブログ関係の画面ではパンくずリストが上手く取得できない。APIの取得方法がドキュメントにないので保留
  static async myCrumbs(contentId: number): Promise<string[]> {
    try {
      const crumbs = await getCrumbs(contentId);
      return crumbs;
    } catch (error) {
      console.error("Error retrieving breadcrumbs:", error);
      return [];
    }
  }
}
