import Head from "next/head";
import React from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  openGraphImageUrl?: string;
  jsonLd?: object | object[];
};

export default function SEO({
  title,
  description,
  canonical,
  openGraphImageUrl,
  jsonLd,
}: SEOProps) {
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {openGraphImageUrl ? (
        <meta property="og:image" content={openGraphImageUrl} />
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {openGraphImageUrl ? (
        <meta name="twitter:image" content={openGraphImageUrl} />
      ) : null}

      {jsonLdArray.map((snippet, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(snippet) }}
        />
      ))}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.ico" />
    </Head>
  );
}
