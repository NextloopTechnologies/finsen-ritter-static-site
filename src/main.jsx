import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Helmet>
      <title>FINSEN RITTER | Industrial Turnkey Solutions in India</title>
      <meta
        name="description"
        content="FINSEN RITTER provides industrial turnkey solutions in India, specializing in plant engineering services and chemical plants installation."
      />
      <meta
        name="keywords"
        content="biogass solution, Turnkey projects in Indore, Biogas plant in Indore, Biogas solutions in Indore, Bio CNG plants in India, Biogas plant CNG manufacture Indore, Bio CNG plant in Indore"
      />
      <meta
        name="keywords"
        content="industrial turnkey solutions in india, Plant Engineering Services & Solutions, Leading Chemical Intermediates Company, Chemical Plants Installation Services, Top Chemical Plants Maintenance Services in india, Turnkey Solution Companies, Top Gas Plant Installation Services in india"
      />
      <link rel="canonical" href="https://www.finsenritter.com/" />
      <meta name="robots" content="index, follow" />
    </Helmet>
    <App />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-1LDWFSPQN2"
    ></script>
    <script>
      {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1LDWFSPQN2');`}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "FINSEN RITTER",
        url: "https://www.finsenritter.com/",
        logo: "https://www.finsenritter.com/assets/LogoFR-C4JF0djb.png",
        sameAs: [
          "https://www.linkedin.com/company/finsenritter",
          "https://www.instagram.com/finsenritter/",
        ],
      })}
    </script>
  </StrictMode>
);
