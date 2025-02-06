import { useEffect, useState } from "react";

export const useMap = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_APP_MAPPLS_API_KEY;
  const baseUrl = import.meta.env.VITE_APP_MAPPLS_BASE_URL;

  useEffect(() => {
    if (!apiKey || !baseUrl) {
      console.error("Mappls API key or base URL is missing!");
      return;
    }

    const scriptUrl = `${baseUrl}/${apiKey}/map_sdk?layer=vector&v=3.0`;

    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => console.error("Map script failed to load.");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [apiKey, baseUrl]);

  return scriptLoaded;
};
