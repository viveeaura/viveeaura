// components/GoogleTagManager.js
import Script from 'next/script'

const GoogleTagManager = () => {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7PYK215075"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7PYK215075');
          `,
        }}
      />
    </>
  )
}

export default GoogleTagManager