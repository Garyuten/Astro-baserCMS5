/**
 * 文字列の先頭のみ大文字に変換
 * @param {string} str 対象の文字列
 * @return {string} 変換された文字列を返す
 */
export const capitalize = function(str) {
  if (typeof str !== "string" || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * 日付のフォーマットを変換
 * ISO 8601形式の日付を日本語表記に変換
 * @param {string} dateStr 対象の日付文字列
 * @return {string} 変換された日付文字列を返す
 */
export const formatDate = function(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

// コンテンツ一覧を取得
const res = await fetch(
  `${import.meta.env.API_BASE_URL}/baser-core/contents.json`,
);
const json = await res.json();
const contents = json.contents;
// console.log(contents);
// コンテンツ一覧をエクスポート
export const myPages = contents;

/*
  {
    id: 12,
    name: 'service2',
    plugin: 'BaserCore',
    type: 'Page',
    entity_id: 6,
    url: '/service/service2',
    site_id: 1,
    alias_id: null,
    main_site_content_id: null,
    parent_id: 6,
    lft: 11,
    rght: 12,
    level: 2,
    title: 'サービス２',
    description: '',
    eyecatch: '',
    author_id: 1,
    layout_template: '',
    status: true,
    publish_begin: null,
    publish_end: null,
    self_status: true,
    self_publish_begin: null,
    self_publish_end: null,
    exclude_search: false,
    created_date: null,
    modified_date: null,
    site_root: false,
    deleted_date: null,
    exclude_menu: false,
    blank_link: false,
    created: '2023-11-03T15:58:29+09:00',
    modified: null
  },
*/
