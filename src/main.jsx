import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Helmet>
      <title>FINSEN RITTER | Biogas Plant Manufacturers In Indore</title>
      <meta
        name="description"
        content=
        "At Finsen Ritter, we specialize in delivering exceptional design and technology services and Biogas plant manufacturers in indore. Join us to enhance your projects with our innovative"
      />
      <meta
        name="keywords"
        content="biogass solution, Turnkey projects in Indore, Biogas plant in Indore, Biogas solutions in Indore, Bio CNG plants in India, Biogas plant CNG manufacture Indore, Bio CNG plant in Indore"
      />
      <meta
        name="keywords"
        content="industrial turnkey solutions in india, Plant Engineering Services & Solutions, Leading Chemical Intermediates Company, Chemical Plants Installation Services
        , Top CheBiogas Plant Manufacturers in Indore , Biogas Plant in Indore.  , Biogas Plant Suppliers in Indore, Best Biogas Plant in Indore, Best Bio CNG Plant in Indore, Biogas Plant Manufacturers"
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
