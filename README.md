# my-blog

Next.js 16 で構成された個人ブログです。記事データは Notion をデータソースとして取得し、App Router で配信します。

公開サイト:
<https://mk-record.com/>

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Notion API
- Cloudflare Pages

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

## Deployment

現在の本番デプロイ先は Cloudflare Pages です。

Cloudflare Pages 側では Edge Runtime 前提の制約があるため、このリポジトリには Pages 向けの調整が入っています。

- 非 static route は `edge` runtime 前提
- favicon 系ファイルは `public/` 配置
- 記事ページの Markdown 表示は Pages 制約を優先した簡易レンダリング

## Git Workflow

### 基本方針

- `main`: 本番に出すブランチ
- `for-cloudflare-pages`: Cloudflare Pages 向けの調整を含む作業ブランチ
- `platform-neutral-base`: Pages 向けの妥協を入れる前の保存ブランチ

### 今回の考え方

`for-cloudflare-pages` には Cloudflare Pages 用の制約対応が入っています。
将来、Cloudflare Workers や別ホスティングへ切り替える場合は、`main` や `for-cloudflare-pages` をそのまま起点にせず、Pages 対応前の地点から再開した方がきれいです。

### 推奨手順

1. `for-cloudflare-pages` を `main` にマージする
2. Pages 対応前のコミットに保存用ブランチを切る
3. 将来別デプロイ手段を試す時は、その保存用ブランチから新ブランチを切る

例:

```bash
git log --oneline --decorate
git branch platform-neutral-base <pages対応前のコミットSHA>
git tag next16-tailwind4-base <pages対応前のコミットSHA>
```

将来 Workers 向けに再開する場合:

```bash
git switch platform-neutral-base
git switch -c feature/workers-migration
```

### main に入れる時の注意

将来別ブランチを `main` に反映する時は、Pages 対応ブランチをそのまま上書きするのではなく、必要な差分だけを再統合する方が安全です。

よく使う方法:

- `main` から新しい統合ブランチを切る
- 必要なコミットだけ `cherry-pick` する
- もしくは対象ブランチを最新 `main` へ追従させてから調整する

## Notes

- `next lint` は Next.js 16 で削除されているため、lint は ESLint CLI を使います
- `next build` 時に環境変数が不足していると、Notion データ取得系ページの生成で失敗する可能性があります
- Cloudflare Pages 制約のため、記事ページ `/article/[articleId]` は簡易 Markdown レンダラを使っています
