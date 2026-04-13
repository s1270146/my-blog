# my-blog

Next.js 16 で構成された個人ブログです。記事データは Notion をデータソースとして取得し、App Router で配信します。

公開サイト:
https://mk-record.com/

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 3
- Notion API
- Cloudflare Hosting

## Requirements

- Node.js `20.11.0`
- npm `10.9.8`

このリポジトリでは `package.json` に Volta 設定を入れているため、Volta を使うとバージョンを揃えやすいです。

## Setup

### 1. Node.js を揃える

Volta を使う場合:

```bash
volta install node@20.11.0 npm@10.9.8
volta pin node@20.11.0 npm@10.9.8
```

nvm を使う場合:

```bash
nvm install 20.11.0
nvm use 20.11.0
```

### 2. 依存をインストールする

```bash
npm ci
```

### 3. 環境変数を設定する

リポジトリ直下に `.env.local` を配置してください。

必要な環境変数:

```env
NOTION_KEY=
NOTION_DB_ID=
PROFILE_PAGE_ID=
SMALL_PROFILE_PAGE_ID=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_TWITTER_ID=
NEXT_PUBLIC_MY_TWITTER_ID=
NEXT_PUBLIC_SEARCH_CONSOLE_ID=
```

補足:

- `NOTION_KEY` は Notion integration token
- `NOTION_DB_ID` は記事一覧を取得する Notion database ID
- `PROFILE_PAGE_ID` と `SMALL_PROFILE_PAGE_ID` はプロフィール表示に使う Notion page ID
- `NEXT_PUBLIC_` で始まる値はクライアント側でも参照されます

## Development

開発サーバー起動:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

Production server 起動:

```bash
npm run start
```

## Directory Overview

- `app/`: App Router のページ、レイアウト、route handlers
- `components/`: UI コンポーネント
- `utils/`: Notion 連携やメタデータ生成などのユーティリティ
- `models/`: Notion レスポンスや Markdown 表示用のモデル
- `constants/`: 定数定義
- `public/`: 静的アセット

## Notes

- 記事ページ `/article/[articleId]` は依存ライブラリとの相性のため `nodejs` runtime を使用しています
- `next lint` は Next.js 16 で削除されているため、lint は ESLint CLI を使います
- `next build` 時に環境変数が不足していると、Notion データ取得系ページの生成で失敗する可能性があります
