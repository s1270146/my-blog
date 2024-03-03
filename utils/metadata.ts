import { Metadata } from "next";

export const customMetadata = ({
  title,
  keywords,
  description,
  imagePath,
}: {
  title: string;
  keywords?: string[];
  description?: string;
  imagePath?: string;
}): Metadata => {
  const defaultKeywords: string[] = [
    "森航洋",
    "航洋",
    "森",
    "MK",
    "mk",
    "MK勉強記",
    "ポートフォリオ",
    "ブログ",
    "Koyo",
    "Mori",
    "Koyo Mori",
  ];

  const submitKeywords =
    typeof keywords !== "undefined"
      ? keywords.concat(defaultKeywords)
      : defaultKeywords;

  const defaultDescription: string =
    "MK勉強記ではプログラミングやIT資格等のITに関する勉強やそれ意外のこともブログ形式で紹介しております。勉強していることを中心にアウトプットしていきます。";

  const url: string =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mk-record.com";
  const siteTwitterID: string =
    process.env.NEXT_PUBLIC_SITE_TWITTER_ID ?? "siteTwitterID";
  const myTwitterID: string =
    process.env.NEXT_PUBLIC_MY_TWITTER_ID ?? "myTwitterID";
  const searchConsoleID: string =
    process.env.NEXT_PUBLIC_SEARCH_CONSOLE_ID ?? "グーグルサーチコンソール";
  const defaultImage: string = url + "/favicons/apple-touch-icon.png";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title,
    keywords: submitKeywords,
    description:
      typeof description !== "undefined" ? description : defaultDescription,
    openGraph: {
      title,
      description:
        typeof description !== "undefined" ? description : defaultDescription,
      url,
      siteName: title,
      locale: "ja_JP",
      type: "website",
      images: [{
        url: typeof imagePath !== "undefined" ? imagePath : defaultImage,
      }]
    },
    twitter: {
      card: "summary",
      title,
      description:
        typeof description !== "undefined" ? description : defaultDescription,
      site: siteTwitterID,
      creator: myTwitterID,
      images: typeof imagePath !== "undefined" ? imagePath : defaultImage,
    },
    verification: {
      google: searchConsoleID,
    },
    alternates: {
      canonical: url,
    },
  };
};
