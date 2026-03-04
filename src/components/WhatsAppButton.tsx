import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5551999921833"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#22c55e] transition-colors"
      aria-label="Contato via WhatsApp"
      onClick={() => {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17990045176/3oBdCNuA2oIcEPibqYJD',
            'value': 1.0,
            'currency': 'BRL'
          });
        }
      }}
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
