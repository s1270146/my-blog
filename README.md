個人ブログ作成リポジトリ

[MK勉強記](https://mk-record.com/)

## 環境

- Docker
- Node 20.11.0
- Next.js 14.0.4
- React 18

## 利用サービス

- Notion(DB)
- Cloudflare(Hosting)

## ブランチ

- main
  - 本番環境
  - マージのみ
- develop
  - 開発の主軸
  - featureの派生元
  - マージのみ
- feature
  - 機能の追加や変更
  - 基本このブランチで作業
- release
  - 検証環境
  - 作業可能
 
## コミットメッセージ(v2.1.0以降)
- feat:       仕様や機能の追加、修正
- fix:        バグ、不具合修正
- refactor:   コードの機能を変更しないリファクタリング、パフォーマンス改善修正
- style:      コードの意味に影響を与えない変更(コメント追加、修正やコードのフォーマットなど)
- docs:       コードを変更しない、文書のみの修正
