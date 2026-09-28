/* =========================================
   GLOBAL NAVBAR
========================================= */

const normalizedPath = window.location.pathname.replaceAll("\\", "/");
const isInnerPage = normalizedPath.includes("/solar/");
const solarBase = normalizedPath.endsWith("/solar/index.html") || normalizedPath.endsWith("/solar/") ? "" : "../";

if (isInnerPage) {
  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const activePage = pageName === "index.html" ? "overview" : pageName.replace(".html", "");
  const navItems = [
    ["Solar Overview", "सोलर अवलोकन", `${solarBase}index.html`, "overview"],
    ["Solutions", "समाधान", `${solarBase}pages/services.html`, "services"],
    ["Products", "उत्पाद", `${solarBase}pages/products.html`, "products"],
    ["Projects", "प्रोजेक्ट्स", `${solarBase}pages/projects.html`, "projects"],
    ["Gallery", "गैलरी", `${solarBase}pages/gallery.html`, "gallery"],
    ["Calculator", "कैलकुलेटर", `${solarBase}pages/calculator.html`, "calculator"],
    ["← Rajan Enterprises", "← राजन एंटरप्राइजेज", `${solarBase}../index.html`, "rajan"]
  ];
  const navLinks = navItems.map(([en, hi, href, key]) => `<a href="${href}" class="nav-link${key === activePage ? " active" : ""}" data-en="${en}" data-hi="${hi}">${en}</a>`).join("");
  let header = document.querySelector(".site-header");
  let footer = document.querySelector(".footer, .simple-footer");
  if (!header) { document.body.insertAdjacentHTML("afterbegin", `<header class="site-header" id="siteHeader"></header>`); header = document.querySelector(".site-header"); }
  if (!footer) { document.body.insertAdjacentHTML("beforeend", `<footer class="footer" id="siteFooter"></footer>`); footer = document.querySelector(".footer"); }

        if (header) {
          header.innerHTML = `<div class="header-inner"><a href="${solarBase}index.html" class="logo" aria-label="RJ Enterprises Home"><img src="../assets/logo/rj-enterprises-logo.png" alt="RJ Enterprises logo" class="site-logo-img"></a><nav class="main-nav" id="mainNav" aria-label="Main Navigation">${navLinks}<a href="tel:+918382830598" class="call-now"><span class="call-icon">☎</span><span data-en="Call Now" data-hi="अभी कॉल करें">Call Now</span></a></nav><button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mainNav"><span></span><span></span><span></span></button></div>`;
        }

        if (footer) {
          footer.className = "footer";
          footer.innerHTML = `<div class="footer-grid"><div class="footer-brand"><a href="${solarBase}index.html" class="footer-logo"><img src="../assets/logo/rj-enterprises-logo.svg" alt="RJ Enterprises logo" class="site-logo-img footer-logo-img"></a><p data-en="Complete solar solutions for homes and businesses, from consultation to long-term support." data-hi="घरों और व्यवसायों के लिए सलाह से लेकर लंबे समय तक सहायता तक संपूर्ण सौर ऊर्जा समाधान।">Complete solar solutions for homes and businesses, from consultation to long-term support.</p></div><div class="footer-column"><h3 data-en="Quick Links" data-hi="त्वरित लिंक">Quick Links</h3><a href="${solarBase}index.html" data-en="Solar Overview" data-hi="सोलर अवलोकन">Home</a><a href="${solarBase}../pages/about.html" data-en="About" data-hi="हमारे बारे में">About</a><a href="services.html" data-en="Solutions" data-hi="समाधान">Solutions</a><a href="${solarBase}../pages/contact.html" data-en="Contact" data-hi="संपर्क">Contact</a></div><div class="footer-column"><h3 data-en="Solar Solutions" data-hi="सोलर समाधान">Solar Solutions</h3><a href="products.html" data-en="Solar Products" data-hi="सोलर उत्पाद">Solar Products</a><a href="projects.html" data-en="Our Projects" data-hi="हमारे प्रोजेक्ट्स">Our Projects</a><a href="calculator.html" data-en="Solar Calculator" data-hi="सोलर कैलकुलेटर">Solar Calculator</a></div><div class="footer-column footer-contact"><h3 data-en="Contact Us" data-hi="संपर्क करें">Contact Us</h3><a href="tel:+918382830598">☎ <span data-en="Call us" data-hi="कॉल करें">Call us</span></a><a href="mailto:info@rjenterprises.com">✉ info@rjenterprises.com</a><p>⌖ <span data-en="Your city, India" data-hi="आपका शहर, भारत">Your city, India</span></p><a class="footer-cta" href="${solarBase}../pages/contact.html" data-en="Get a Free Quote" data-hi="मुफ्त कोटेशन लें">Get a Free Quote</a><div class="footer-language"><span data-en="Language" data-hi="भाषा">Language</span> <button class="lang-btn" id="languageToggle" type="button" aria-label="Switch language"><span data-lang="en">EN</span> | <span data-lang="hi">हिन्दी</span></button></div></div></div><div class="footer-bottom"><p>© 2026 RJ Enterprises. <span data-en="All rights reserved." data-hi="सर्वाधिकार सुरक्षित।">All rights reserved.</span></p><div class="footer-social"><a href="https://wa.me/918382830598" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a></div></div>`;
        }

  document.querySelectorAll('[src$="rj-enterprises-logo.svg"]').forEach(element => {
    element.src = element.src.replace("rj-enterprises-logo.svg", "rj-enterprises-logo.png");
  });

  document.querySelectorAll('meta[content$="rj-enterprises-logo.svg"]').forEach(element => {
    element.content = element.content.replace("rj-enterprises-logo.svg", "rj-enterprises-logo.png");
  });

  if (!document.getElementById("aiConsultantButton")) {
    document.body.insertAdjacentHTML("beforeend", `<a href="https://wa.me/918382830598" class="floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat with RJ Enterprises on WhatsApp"><span class="whatsapp-label" data-en="Chat on WhatsApp" data-hi="WhatsApp पर बात करें">Chat on WhatsApp</span></a><button type="button" class="ai-consultant-button" id="aiConsultantButton" aria-label="Open Solar Guide"><span class="ai-label" data-en="Solar Guide" data-hi="सोलर गाइड">Solar Guide</span></button><div class="ai-chat" id="aiChat" aria-hidden="true"><div class="ai-chat-header"><div><strong data-en="RJ Solar Guide" data-hi="RJ सोलर गाइड">RJ Solar Guide</strong><small data-en="Quick solar help" data-hi="तुरंत सोलर सहायता">Quick solar help</small></div><button type="button" id="closeAiChat" aria-label="Close AI Assistant">×</button></div><div class="ai-chat-body" id="aiChatBody"><div class="ai-message" data-en="Hello! 👋 I am RJ Enterprises' Solar Guide. Ask me about solar systems, subsidy, installation or the calculator." data-hi="नमस्ते! 👋 मैं RJ Enterprises का सोलर गाइड हूँ। आप सोलर सिस्टम, सब्सिडी, इंस्टॉलेशन या कैलकुलेटर के बारे में पूछ सकते हैं।">Hello! 👋 I am RJ Enterprises' Solar Guide. Ask me about solar systems, subsidy, installation or the calculator.</div></div><div class="ai-chat-quick"><button type="button" data-en="Which solar system?" data-hi="कौन-सा सोलर सिस्टम?">Which solar system?</button><button type="button" data-en="How does installation work?" data-hi="इंस्टॉलेशन कैसे होता है?">How does installation work?</button></div><div class="ai-chat-input"><input type="text" id="aiChatInput" placeholder="Ask your question..." data-placeholder-en="Ask your question..." data-placeholder-hi="अपना सवाल लिखें..." autocomplete="off"><button type="button" id="aiChatSend" aria-label="Send message">➤</button></div></div>`);
  }

  const pageTranslations = {
    "About Us": "हमारे बारे में", "Solar Services": "सोलर सेवाएं", "Solar Products": "सोलर उत्पाद", "Our Projects": "हमारे प्रोजेक्ट्स", "Solar Calculator": "सोलर कैलकुलेटर", "Contact Us": "संपर्क करें", "Solar subsidy guidance": "सोलर सब्सिडी मार्गदर्शन", "Solar Gallery": "सोलर गैलरी",
    "Learn about RJ Enterprises and our approach to dependable solar solutions.": "RJ Enterprises और भरोसेमंद सोलर समाधानों के प्रति हमारे दृष्टिकोण को जानें।", "Residential, commercial, installation and maintenance services designed around real requirements.": "वास्तविक जरूरतों के अनुरूप घरेलू, कमर्शियल, इंस्टॉलेशन और मेंटेनेंस सेवाएं।", "A dedicated place for solar panels, inverters, structures and other system components.": "सोलर पैनल, इन्वर्टर, स्ट्रक्चर और अन्य सिस्टम कंपोनेंट्स के लिए समर्पित जगह।", "Showcase real completed installations with project capacity, location and useful details.": "क्षमता, स्थान और उपयोगी जानकारी के साथ पूरे हुए वास्तविक इंस्टॉलेशन देखें।", "Estimate system requirements, generation, savings and payback using practical inputs.": "उपयोगी इनपुट के साथ सिस्टम जरूरत, जनरेशन, बचत और पेबैक का अनुमान लगाएं।", "Get in touch for a solar consultation, site survey or project enquiry.": "सोलर कंसल्टेशन, साइट सर्वे या प्रोजेक्ट पूछताछ के लिए संपर्क करें।", "Understand the rooftop solar scheme, eligibility, subsidy and installation journey.": "रूफटॉप सोलर योजना, पात्रता, सब्सिडी और इंस्टॉलेशन की प्रक्रिया को समझें।", "Explore residential, commercial, rooftop and agricultural solar solutions from our solar portfolio.": "हमारे सोलर पोर्टफोलियो में घरेलू, कमर्शियल, रूफटॉप और कृषि समाधान देखें।",
    "Solar made simple, dependable and personal.": "सोलर सरल, भरोसेमंद और आपके अनुसार।", "We help homes and businesses take a confident step toward clean, cost-effective energy.": "हम घरों और व्यवसायों को स्वच्छ और किफायती ऊर्जा की ओर भरोसेमंद कदम उठाने में मदद करते हैं।", "From the first conversation to long-term system support, our work is built around practical advice, quality execution and clear communication.": "पहली बातचीत से लेकर लंबे समय की सिस्टम सहायता तक, हमारा काम उपयोगी सलाह, गुणवत्ता और स्पष्ट संवाद पर आधारित है।", "Right-fit planning": "सही जरूरत के अनुसार प्लानिंग", "Every recommendation starts with your roof, consumption and energy goals—not a one-size-fits-all package.": "हर सुझाव आपकी छत, बिजली खपत और ऊर्जा लक्ष्यों के अनुसार दिया जाता है।", "Careful execution": "सावधानी से काम", "Our installation approach keeps safety, clean workmanship and lasting performance at the centre.": "हमारे इंस्टॉलेशन में सुरक्षा, साफ काम और लंबे समय के प्रदर्शन को प्राथमिकता दी जाती है।", "Support that stays": "हमेशा साथ रहने वाली सहायता", "We remain available after commissioning for guidance, checks and help with your solar journey.": "कमीशनिंग के बाद भी मार्गदर्शन, जांच और सहायता के लिए हम उपलब्ध रहते हैं।", "Let’s plan your solar system.": "आइए आपका सोलर सिस्टम प्लान करें।", "Speak with RJ Enterprises for a clear, no-pressure consultation.": "स्पष्ट और सहज कंसल्टेशन के लिए RJ Enterprises से बात करें।", "Get a free quote": "मुफ्त कोटेशन लें",
    "Who we are": "हम कौन हैं", "Built on trust, quality and long-term energy savings.": "विश्वास, गुणवत्ता और लंबी अवधि की ऊर्जा बचत पर आधारित।", "RJ Enterprises is a growing solar energy company dedicated to helping families, shop owners, offices and industrial setups transition to smarter and greener power solutions.": "RJ Enterprises एक बढ़ता हुआ सोलर ऊर्जा कंपनी है, जो परिवारों, दुकानदारों, कार्यालयों और औद्योगिक संस्थानों को स्मार्ट और हरित बिजली समाधान की ओर ले जाने के लिए समर्पित है।", "Our work combines expert consultation, premium solar products, clean installation practices and dependable post-sales support. We believe every client deserves a system that fits their real energy needs, budget and future goals.": "हमारा काम विशेषज्ञ सलाह, प्रीमियम सोलर उत्पाद, साफ-सुथरी इंस्टॉलेशन प्रक्रिया और भरोसेमंद बिक्री के बाद की सहायता को जोड़ता है। हम मानते हैं कि हर ग्राहक को ऐसी सिस्टम मिले जो उसकी वास्तविक ऊर्जा जरूरतों, बजट और भविष्य के लक्ष्यों के अनुरूप हो।", "Customized solar recommendations": "कस्टमाइज़्ड सोलर सुझाव", "Premium-quality panels and components": "प्रीमियम क्वालिटी के पैनल और कंपोनेंट", "Professional installation and guidance": "पेशेवर इंस्टॉलेशन और मार्गदर्शन", "Long-term service and support": "लंबे समय तक सेवा और सहायता", "10+ Years": "10+ वर्ष", "Energy expertise": "ऊर्जा विशेषज्ञता", "Our impact": "हमारा प्रभाव", "Numbers that reflect our commitment.": "संभावना को दर्शाने वाले आंकड़े।", "Projects delivered": "प्रोजेक्ट्स पूरा हुआ", "Installed solar capacity": "इंस्टॉल्ड सोलर कैपेसिटी", "Client satisfaction": "क्लाइंट संतुष्टि", "Support availability": "सपोर्ट उपलब्धता", "Our values": "हमारे मूल सिद्धांत", "Why clients choose RJ Enterprises.": "क्यों ग्राहक RJ Enterprises चुनते हैं।", "Right-fit planning": "सही फिट की योजना", "Careful execution": "सावधानीपूर्ण निष्पादन", "Support that stays": "साथ रहने वाली सहायता", "Our mission": "हमारा मिशन", "To make solar energy practical, affordable and accessible.": "सोलर ऊर्जा को व्यवहारिक, किफायती और सुलभ बनाना।", "Vision": "दृष्टि", "To be a trusted solar partner known for dependable design, smart solutions and honest guidance.": "विश्वसनीय डिजाइन, स्मार्ट समाधान और ईमानदार मार्गदर्शन के लिए भरोसेमंद सोलर पार्टनर बनना।", "Mission": "मिशन", "To deliver durable solar systems that create measurable value for homes, businesses and communities.": "ऐसे टिकाऊ सोलर सिस्टम देना जो घरों, व्यवसायों और समुदायों के लिए मापने योग्य मूल्य बनाएं।", "Promise": "वादा", "To provide transparent consultation, premium execution and long-term support at every stage.": "हर चरण में स्पष्ट सलाह, प्रीमियम निष्पादन और लंबे समय तक सहायता प्रदान करना।", "How we work": "हम कैसे काम करते हैं", "Simple process, clear communication and better results.": "सरल प्रक्रिया, स्पष्ट संवाद और बेहतर परिणाम।", "Consultation": "कंसल्टेशन", "We understand your property, consumption trends, budget and future power goals.": "हम आपकी प्रॉपर्टी, बिजली खपत, बजट और भविष्य की बिजली जरूरतों को समझते हैं।", "Site analysis": "साइट विश्लेषण", "Our team evaluates the site, roof condition and technical requirements before recommending the best setup.": "हमारा टीम साइट, छत की स्थिति और तकनीकी आवश्यकताओं का मूल्यांकन करता है, उसके बाद सबसे सही सेटअप की सिफारिश करता है।", "Installation": "इंस्टॉलेशन", "We handle system design, setup and quality checks to ensure safe and efficient performance.": "हम सिस्टम डिजाइन, सेटअप और गुणवत्ता जाँच संभालते हैं ताकि सुरक्षित और कुशल प्रदर्शन सुनिश्चित हो।", "After-sales support": "बिक्री के बाद सहायता", "We continue to guide you with monitoring, maintenance advice and long-term energy support.": "हम निगरानी, रखरखाव सलाह और लंबे समय तक ऊर्जा सहायता के साथ आपका मार्गदर्शन करते रहते हैं।", "Why trust us": "हमें क्यों भरोसा करें", "We focus on long-term performance, not just installation.": "हम सिर्फ इंस्टॉलेशन नहीं, लंबे समय तक प्रदर्शन पर ध्यान देते हैं।", "Transparent pricing and honest recommendations": "स्पष्ट मूल्य निर्धारण और ईमानदार सुझाव", "Quality-driven work with safety-first execution": "सुरक्षा-प्रथम निष्पादन के साथ गुणवत्ता आधारित कार्य", "Tailored solutions for homes, shops and commercial spaces": "घरों, दुकानों और व्यावसायिक जगहों के लिए अनुकूलित समाधान", "Reliable guidance from planning to post-installation support": "प्लानिंग से लेकर इंस्टॉलेशन के बाद की सहायता तक भरोसेमंद मार्गदर्शन", "Leadership": "नेतृत्व", "People who guide every solar decision.": "वे लोग जो हर सोलर निर्णय में मार्गदर्शन करते हैं।", "Founder & Director": "फाउंडर और डायरेक्टर", "Project Consultant": "प्रोजेक्ट कंसल्टेंट", "Operations Lead": "ऑपरेशन लीड", "Credentials": "साख", "Standards, certifications and trusted work practices.": "मानक, प्रमाणपत्र और भरोसेमंद कार्य praksal।", "Quality-first installation process": "गुणवत्ता-प्रथम इंस्टॉलेशन प्रक्रिया", "Every project follows a disciplined installation workflow with safety and efficiency in focus.": "हर प्रोजेक्ट एक अनुशासित इंस्टॉलेशन प्रक्रिया का पालन करता है, जिसमें सुरक्षा और दक्षता मुख्य होती है।", "Premium component sourcing": "प्रीमियम कंपोनेंट सोर्सिंग", "We work with dependable solar equipment selected for performance, durability and long-term value.": "हम भरोसेमंद सोलर उपकरणों के साथ काम करते हैं, जिन्हें प्रदर्शन, स्थायित्व और लंबे समय के मूल्य के लिए चुना जाता है।", "Customer-first support model": "ग्राहक-प्रथम सहायता मॉडल", "From consultation to after-sales guidance, our support remains practical, responsive and transparent.": "सलाह से लेकर बिक्री के बाद की सहायता तक, हमारी समर्थन प्रणाली व्यावहारिक, प्रतिक्रिया देने वाली और पारदर्शी रहती है।", "Client feedback": "ग्राहक प्रतिक्रिया", "What customers say about working with us.": "ग्राहक हमारे साथ काम करने के बारे में क्या कहते हैं।", "Homeowner": "घर मालिक", "Commercial client": "कमर्शियल ग्राहक", "FAQs": "सामान्य प्रश्न", "Common questions about solar and our process.": "सोलर और हमारी प्रक्रिया के बारे में सामान्य प्रश्न।", "How do I know which solar system is right for me?": "मुझे पता कैसे चलेगा कि कौन-सा सोलर सिस्टम मेरे लिए सही है?", "We assess your electricity usage, roof area, budget and desired savings to recommend the right system size and setup.": "हम आपकी बिजली खपत, छत का क्षेत्रफल, बजट और इच्छित बचत को देखकर सही सिस्टम साइज़ और सेटअप की सलाह देते हैं।", "Do you provide support after installation?": "क्या इंस्टॉलेशन के बाद भी सहायता देते हैं?", "Yes. We continue to support clients with guidance, maintenance suggestions and assistance whenever needed after commissioning.": "हाँ। हम इंस्टॉलेशन के बाद भी मार्गदर्शन, रखरखाव सुझाव और जरूरत पड़ने पर सहायता प्रदान करते रहते हैं।", "Can solar work for homes and businesses alike?": "क्या सोलर घर और व्यवसाय दोनों के लिए काम करता है?", "Absolutely. We design solutions for residential rooftops, commercial buildings, shops, offices and industrial properties.": "बिल्कुल। हम आवासीय छत, कमर्शियल बिल्डिंग, दुकानों, कार्यालयों और औद्योगिक संपत्तियों के लिए समाधान डिजाइन करते हैं।", "Get a free quote": "मुफ्त कोटेशन लें"
    , "Residential Solar": "घरेलू सोलर", "Modern Home System": "मॉडर्न होम सिस्टम", "Hybrid Solar System": "हाइब्रिड सोलर सिस्टम", "Commercial Rooftop Solar": "कमर्शियल रूफटॉप सोलर", "Commercial Solar Building": "कमर्शियल सोलर बिल्डिंग", "Rooftop Solar Panels": "रूफटॉप सोलर पैनल", "Professional Installation": "पेशेवर इंस्टॉलेशन", "Site Survey": "साइट सर्वे", "Inverter Maintenance": "इन्वर्टर मेंटेनेंस", "Home Inverter System": "होम इन्वर्टर सिस्टम", "Solar Irrigation Pump": "सोलर सिंचाई पंप", "Solar Water Pump": "सोलर वाटर पंप", "Solar-Powered Home": "सोलर से चलने वाला घर", "Solar Consultation": "सोलर कंसल्टेशन", "Rooftop Inverter Setup": "रूफटॉप इन्वर्टर सेटअप", "Residential Rooftop Solar": "घरेलू रूफटॉप सोलर"
  };

  document.querySelectorAll("main h1, main h2, main h3, main p, main figcaption, main a").forEach(element => {
    const english = element.textContent.trim().replace(/\s+/g, " ");
    if (pageTranslations[english] && !element.dataset.en) {
      element.dataset.en = english;
      element.dataset.hi = pageTranslations[english];
    }
  });
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav") || document.getElementById("nav");
const siteHeader = document.getElementById("siteHeader");

/* Mobile Menu */

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

  });

}

/* Close menu after clicking a link */

document.querySelectorAll(".nav-link, .nav a").forEach(link => {

  link.addEventListener("click", () => {

    if (!mainNav) return;

    mainNav.classList.remove("open");

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }

  });

});

/* Navbar shadow on scroll */

window.addEventListener("scroll", () => {

  if (!siteHeader) return;

  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }

});

/* =========================================
   LANGUAGE SYSTEM
========================================= */

const languageButtons =
  document.querySelectorAll(".lang-btn");

const languageToggle =
  document.getElementById("languageToggle");

const savedLanguage =
  localStorage.getItem("rjLanguage") || "en";

function setLanguage(selectedLanguage) {

  document.documentElement.lang =
    selectedLanguage === "hi" ? "hi" : "en";

  document.querySelectorAll("[data-en][data-hi]").forEach(element => {
    element.textContent =
      selectedLanguage === "hi"
        ? element.dataset.hi
        : element.dataset.en;
  });

  document.querySelectorAll("[data-placeholder-en][data-placeholder-hi]").forEach(input => {
    input.placeholder =
      selectedLanguage === "hi"
        ? input.dataset.placeholderHi
        : input.dataset.placeholderEn;
  });

  document.querySelectorAll(".language-option").forEach(option => {
    option.classList.toggle(
      "active",
      option.dataset.lang === selectedLanguage
    );
  });

  if (languageToggle) {
    languageToggle.setAttribute(
      "aria-label",
      selectedLanguage === "hi"
        ? "Switch to English"
        : "हिंदी में बदलें"
    );
    languageToggle.setAttribute(
      "aria-pressed",
      selectedLanguage === "hi" ? "true" : "false"
    );
  }

}

setLanguage(savedLanguage);

languageButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedLanguage =
      document.documentElement.lang === "hi" ? "en" : "hi";

    localStorage.setItem(
      "rjLanguage",
      selectedLanguage
    );

    setLanguage(selectedLanguage);

  });

});

/* =========================================
   AI SOLAR CONSULTANT
========================================= */

const aiConsultantButton =
  document.getElementById("aiConsultantButton");

const aiChat = document.getElementById("aiChat");
const closeAiChat = document.getElementById("closeAiChat");
const aiChatBody = document.getElementById("aiChatBody");
const aiChatInput = document.getElementById("aiChatInput");
const aiChatSend = document.getElementById("aiChatSend");

function addAiMessage(message, className) {

  if (!aiChatBody) return;

  const messageElement = document.createElement("div");
  messageElement.className = className;
  messageElement.textContent = message;

  aiChatBody.appendChild(messageElement);
  aiChatBody.scrollTop = aiChatBody.scrollHeight;

}

function getAiResponse(question) {

  const normalizedQuestion = question.toLowerCase();
  const isHindi = document.documentElement.lang === "hi";

  if (normalizedQuestion.includes("subsidy") || normalizedQuestion.includes("surya")) {
    return isHindi
      ? "सोलर सब्सिडी आपकी क्षमता, राज्य और पात्रता पर निर्भर करती है। सही जानकारी के लिए हमारी टीम से संपर्क करें।"
      : "Solar subsidy guidance depends on your system capacity, state and eligibility. Contact our team for accurate guidance.";
  }

  if (normalizedQuestion.includes("install") || normalizedQuestion.includes("कैसे")) {
    return isHindi
      ? "हम site survey, system design, installation और commissioning में आपकी मदद करते हैं। शुरुआत के लिए मुफ्त कोटेशन पर click करें।"
      : "We help with site survey, system design, installation and commissioning. Click Get a Free Quote to get started.";
  }

  if (normalizedQuestion.includes("system") || normalizedQuestion.includes("कौन")) {
    return isHindi
      ? "आपके बिजली bill, roof space और backup requirement के आधार पर सही On-Grid, Off-Grid या Hybrid system चुना जाता है।"
      : "The right On-Grid, Off-Grid or Hybrid system is selected based on your electricity bill, roof space and backup requirement.";
  }

  return isHindi
    ? "धन्यवाद! आपकी जरूरत के अनुसार सही solar solution के लिए हमारी टीम से संपर्क करें या मुफ्त कोटेशन लें।"
    : "Thank you! Contact our team or request a free quote for the right solar solution for your needs.";

}

function sendAiMessage(message) {

  const question = message.trim();

  if (!question) return;

  addAiMessage(question, "user-message");
  addAiMessage(getAiResponse(question), "ai-message");

}

if (aiConsultantButton && aiChat) {

  aiConsultantButton.addEventListener("click", () => {
    const isOpen = aiChat.classList.contains("open");

    aiChat.classList.toggle("open", !isOpen);
    aiChat.setAttribute("aria-hidden", isOpen ? "true" : "false");

    if (!isOpen) {
      aiChatInput?.focus();
    }
  });

}

if (closeAiChat && aiChat) {

  closeAiChat.addEventListener("click", () => {
    aiChat.classList.remove("open");
    aiChat.setAttribute("aria-hidden", "true");
    aiConsultantButton?.focus();
  });

}

if (aiChatSend && aiChatInput) {

  aiChatSend.addEventListener("click", () => {
    sendAiMessage(aiChatInput.value);
    aiChatInput.value = "";
  });

  aiChatInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;

    sendAiMessage(aiChatInput.value);
    aiChatInput.value = "";
  });

}

document.querySelectorAll(".ai-chat-quick button").forEach(button => {

  button.addEventListener("click", () => {
    sendAiMessage(button.textContent || "");
  });

});

/* =========================================
   HERO IMAGE SLIDER
========================================= */

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {

  const slides = Array.from(heroSlider.querySelectorAll(".hero-slide"));
  const dots = Array.from(heroSlider.querySelectorAll(".slider-dot"));
  const previousSlide = heroSlider.querySelector(".slider-prev");
  const nextSlide = heroSlider.querySelector(".slider-next");
  const sliderCaption = heroSlider.querySelector("#sliderCaption");
  const sliderCounter = heroSlider.querySelector("#sliderCounter");
  let activeSlide = 0;
  let sliderTimer;

  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeSlide);
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeSlide;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    if (sliderCaption) {
      const activeImage = slides[activeSlide];
      sliderCaption.textContent = document.documentElement.lang === "hi"
        ? activeImage.dataset.captionHi
        : activeImage.dataset.captionEn;
    }

    if (sliderCounter) {
      sliderCounter.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }
  }

  function restartSlider() {
    window.clearInterval(sliderTimer);
    sliderTimer = window.setInterval(() => showSlide(activeSlide + 1), 3500);
  }

  previousSlide?.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    restartSlider();
  });

  nextSlide?.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    restartSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      restartSlider();
    });
  });

  showSlide(activeSlide);
  restartSlider();

}

/* =========================================
   SOLAR CALCULATOR
========================================= */

const solarCalculator = document.getElementById("solarCalculator");

if (solarCalculator) {
  const monthlyBill = document.getElementById("monthlyBill");
  const unitRate = document.getElementById("unitRate");
  const roofArea = document.getElementById("roofArea");
  const backupNeed = document.getElementById("backupNeed");
  const systemSize = document.getElementById("systemSize");
  const monthlyGeneration = document.getElementById("monthlyGeneration");
  const monthlySavings = document.getElementById("monthlySavings");
  const paybackPeriod = document.getElementById("paybackPeriod");
  const calculatorMessage = document.getElementById("calculatorMessage");
  const calculatorReset = document.getElementById("calculatorReset");

  const formatCurrency = value => `₹${Math.round(value).toLocaleString("en-IN")}`;

  function calculateSolarEstimate(event) {
    event?.preventDefault();

    const bill = Math.max(500, Number(monthlyBill.value) || 500);
    const rate = Math.max(3, Number(unitRate.value) || 8);
    const area = Math.max(100, Number(roofArea.value) || 100);
    const backupMultiplier = backupNeed.value === "high" ? 1.18 : backupNeed.value === "some" ? 1.08 : 1;
    const monthlyUnits = bill / rate;
    const demandSize = (monthlyUnits / 120) * backupMultiplier;
    const areaLimit = area / 90;
    const recommendedSize = Math.max(1, Math.min(20, Math.min(demandSize, areaLimit)));
    const generation = recommendedSize * 120;
    const savings = Math.min(bill * 0.92, generation * rate * 0.9);
    const installedCost = recommendedSize * (backupNeed.value === "none" ? 62000 : 85000);
    const payback = savings > 0 ? installedCost / (savings * 12) : 0;

    systemSize.textContent = `${recommendedSize.toFixed(1)} kW`;
    monthlyGeneration.textContent = `${Math.round(generation).toLocaleString("en-IN")} units`;
    monthlySavings.textContent = formatCurrency(savings);
    paybackPeriod.textContent = `${payback.toFixed(1)} yrs`;
    calculatorMessage.textContent = document.documentElement.lang === "hi"
      ? "यह आपके दिए गए इनपुट पर आधारित शुरुआती अनुमान है।"
      : "This is an early estimate based on the inputs you provided.";
  }

  solarCalculator.addEventListener("submit", calculateSolarEstimate);
  [monthlyBill, unitRate, roofArea, backupNeed].forEach(input => input?.addEventListener("change", calculateSolarEstimate));

  calculatorReset?.addEventListener("click", () => {
    monthlyBill.value = 5000;
    unitRate.value = 8;
    roofArea.value = 600;
    backupNeed.value = "none";
    calculateSolarEstimate();
  });

  calculateSolarEstimate();
}



// Solar division navigation normalization and footer-only language control.
(function(){
  const base = (location.pathname.endsWith('/solar/index.html') || location.pathname.endsWith('/solar/')) ? '' : '../';
  document.querySelectorAll('.site-header a.logo').forEach(a => { a.href = base + 'index.html'; });
  document.querySelectorAll('.site-header a[href="../index.html"]').forEach(a => { if(!a.classList.contains('logo')) a.href='../index.html'; });
  document.querySelectorAll('.footer-logo').forEach(a => { if(a.tagName==='A') a.href=base+'index.html'; });
  document.querySelectorAll('.footer a[href="../pages/about.html"], .footer a[href="../pages/contact.html"]').forEach(a => {});
})();

// Open the Solar AI directly when a Rajan floating AI button links to #ai.
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#ai") {
    const aiButton = document.getElementById("aiConsultantButton");
    if (aiButton) setTimeout(() => aiButton.click(), 120);
  }
});
