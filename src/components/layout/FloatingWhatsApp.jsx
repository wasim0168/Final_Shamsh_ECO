import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Phone number without + sign
  const phoneNumber = "916261196163";
  const message = "Hi! I'd like to know more about your solar panel recycling services.";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    
    // Try multiple URL formats
    const urls = [
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    ];

    // Try to open in new window
    let opened = false;
    for (const url of urls) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow && !newWindow.closed) {
        opened = true;
        break;
      }
    }

    // Fallback if all popups are blocked
    if (!opened) {
      window.location.href = urls[0];
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110">
          <IconBrandWhatsapp size={28} className="text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>

        {/* Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
          1
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;