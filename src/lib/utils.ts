// ユーティリティ関数


export const mode = process.env.NODE_ENV;
export const isProd = process.env.NODE_ENV === "production";
export const isDev = process.env.NODE_ENV === "development";
export const API_URL = import.meta.env.VITE_API_BASE_URL;

// console.log("mode: ", mode);
// console.log("isProd: ", isProd);
// console.log("isDev: ", isDev);
// console.log("API_URL: ", API_URL);

/**
 * Capitalizes the first letter of a string and converts the rest of the string to lowercase.
 * 
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
    if (typeof str !== "string" || !str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Formats a date string into the format "YYYY.MM.DD".
 * @param dateStr - The date string to format.
 * @returns The formatted date string.
 */
export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
};
