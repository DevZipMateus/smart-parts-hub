import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Prevent scroll on html and body
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Hide MonteSite badge on Vitrine page
    const badge = document.getElementById("montesite-footer-badge");
    if (badge) {
      badge.style.display = "none";
    }

    // Cleanup function to restore overflow and badge when unmounting
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      
      // Restore badge visibility
      if (badge) {
        badge.style.display = "";
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - SMART PARTS NH LTDA</title>
        <meta
          name="description"
          content="Confira nossa vitrine completa de produtos"
        />
        <meta property="og:title" content="Demonstração de Vitrine - SMART PARTS NH LTDA" />
        <meta property="og:description" content="Confira nossa vitrine completa de produtos" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header fixo */}
      <Header />

      {/* Iframe ocupando toda a área abaixo do header */}
      <iframe
        src="https://smartparts.egestor.com.br/vitrine/"
        title="Vitrine SMART PARTS NH"
        className="fixed left-0 right-0 w-full border-none"
        style={{
          top: "112px",
          height: "calc(100vh - 112px)",
        }}
        allowFullScreen
      />
    </>
  );
};

export default Vitrine;
