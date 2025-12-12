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

    // Cleanup function to restore overflow when unmounting
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
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

      {/* Iframe ocupando o espaço entre header e badge */}
      <iframe
        src="https://smartparts.egestor.com.br/vitrine/"
        title="Vitrine SMART PARTS NH"
        className="fixed left-0 right-0 w-full border-none"
        style={{
          top: "96px",
          height: "calc(100vh - 159px)",
        }}
        allowFullScreen
      />

      {/* Badge inferior fixo - 63px */}
      <div id="montesite-footer-badge" />
      <script src="https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe" />
    </>
  );
};

export default Vitrine;
