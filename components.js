/* ═══════════════════════════════════════════════════
   UPASANA — Shared Components (Header + Footer)
   ═══════════════════════════════════════════════════ */

const SITE = {
  name: 'Upasana',
  phone: '+91 80875 90902',
  email: 'connect@myupasana.com',
  address: 'Rose Gardenia, Mumbai-Pune Hwy, Kiwale, Pune – 412101',
  hours: 'Mon – Sun: 9:00 AM – 7:00 PM',
  whatsapp: 'https://wa.me/918087590902?text=Hello,%20I%20Want%20To%20Book%20A%20Pandit',
};

/* ═══════════════════════════════════════════════════════
   i18n — Translation Dictionary
   ═══════════════════════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    /* Nav */
    'nav.services':    'Services',
    'nav.astrology':   'Astrology',
    'nav.muhurat':     'Muhurat',
    'nav.blog':        'Blog',
    'nav.about':       'About Us',
    'nav.contact':     'Contact',
    'nav.book':        'Book A Pandit',
    'nav.login':       'Login',
    /* Hero */
    'hero.title':      'Book Verified Pandits for\nEvery Sacred Occasion',
    'hero.sub':        'Trusted by 50,000+ devotees across India. Expert pandits for Puja, Havan, Wedding & more.',
    'hero.search.placeholder': 'Search for Puja, Rituals, Ceremonies...',
    'hero.search.btn': 'Search',
    'hero.ql.astrology': 'Astrology',
    'hero.ql.muhurat':   'Muhurat',
    'hero.ql.kundali':   'Kundali',
    'hero.ql.book':      'Book Pandit',
    /* Section headings */
    'sec.services.tag':   'PUJA SERVICES',
    'sec.services.title': 'Sacred Services for Every Occasion',
    'sec.services.sub':   'From daily pujas to grand ceremonies — we have verified pandits for every ritual',
    'sec.hiw.tag':        'Simple Process',
    'sec.hiw.title':      'How It Works',
    'sec.hiw.sub':        'Book a pandit in just 4 easy steps',
    'sec.hiw.1.title':    'Select Puja',
    'sec.hiw.1.desc':     'Search for your puja or ceremony and select from verified pandits in your area.',
    'sec.hiw.2.title':    'Pick Date & Time',
    'sec.hiw.2.desc':     'Choose your date, time and location. Pay securely online or cash on the day.',
    'sec.hiw.3.title':    'Get Pandit Assigned',
    'sec.hiw.3.desc':     'We match you with a verified, experienced pandit for your ceremony.',
    'sec.hiw.4.title':    'Perform Puja',
    'sec.hiw.4.desc':     'Enjoy an authentic ceremony at home or online via live stream.',
    'sec.testimonials.tag':   'Testimonials',
    'sec.testimonials.title': 'What Our Devotees Say',
    'sec.faq.tag':        'FAQs',
    'sec.faq.title':      'Frequently Asked Questions',
    /* Stats */
    'stat.pandits':  'Verified Pandits',
    'stat.pujas':    'Pujas Completed',
    'stat.cities':   'Cities Served',
    'stat.rating':   'Average Rating',
    /* Buttons */
    'btn.book.now':  'Book Now',
    'btn.learn.more':'Learn More',
    'btn.view.all':  'View All Services',
    'btn.whatsapp':  'Chat on WhatsApp',
    'btn.call':      'Call Us',
    /* Footer */
    'footer.tagline': 'Connecting devotees with authentic Vedic pandits for every sacred occasion.',
    'footer.services':'PUJA SERVICES',
    'footer.quick':   'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.rights':  '© 2025 Upasana. All rights reserved.',
    /* Booking */
    'book.title':     'Book a Pandit for Your Ceremony',
    'book.sub':       'Fill in the details and our team will connect you with a verified pandit',
    'book.puja.label':'Select Puja / Ceremony',
    'book.date.label':'Preferred Date',
    'book.time.label':'Preferred Time',
    'book.name.label':'Your Full Name',
    'book.phone.label':'Mobile Number',
    'book.city.label': 'City / Location',
    'book.submit':    'Book My Pandit Now',
  },

  hi: {
    /* Nav */
    'nav.services':    'सेवाएं',
    'nav.astrology':   'ज्योतिष',
    'nav.muhurat':     'मुहूर्त',
    'nav.blog':        'ब्लॉग',
    'nav.about':       'हमारे बारे में',
    'nav.contact':     'संपर्क करें',
    'nav.book':        'पंडित बुक करें',
    'nav.login':       'लॉगिन',
    /* Hero */
    'hero.title':      'हर शुभ अवसर के लिए\nसत्यापित पंडित बुक करें',
    'hero.sub':        'भारत भर में 50,000+ भक्तों का विश्वास। पूजा, हवन, विवाह और बहुत कुछ के लिए विशेषज्ञ पंडित।',
    'hero.search.placeholder': 'पूजा, अनुष्ठान खोजें... (जैसे गृह प्रवेश)',
    'hero.search.btn': 'खोजें',
    'hero.ql.astrology': 'ज्योतिष',
    'hero.ql.muhurat':   'मुहूर्त',
    'hero.ql.kundali':   'कुंडली',
    'hero.ql.book':      'पंडित बुक करें',
    /* Section headings */
    'sec.services.tag':   'हमारी सेवाएं',
    'sec.services.title': 'हर अवसर के लिए पवित्र सेवाएं',
    'sec.services.sub':   'दैनिक पूजा से लेकर भव्य समारोह तक — हर अनुष्ठान के लिए सत्यापित पंडित',
    'sec.hiw.tag':        'सरल प्रक्रिया',
    'sec.hiw.title':      'यह कैसे काम करता है',
    'sec.hiw.sub':        'केवल 3 आसान चरणों में पंडित बुक करें',
    'sec.hiw.1.title':    'खोजें और चुनें',
    'sec.hiw.1.desc':     'अपनी पूजा या समारोह खोजें और अपने क्षेत्र में सत्यापित पंडितों में से चुनें।',
    'sec.hiw.2.title':    'बुक करें और पुष्टि करें',
    'sec.hiw.2.desc':     'अपनी तिथि, समय और स्थान चुनें। ऑनलाइन या दिन पर नकद सुरक्षित रूप से भुगतान करें।',
    'sec.hiw.3.title':    'पंडित आते हैं',
    'sec.hiw.3.desc':     'आपके सत्यापित पंडित पूजा के लिए आवश्यक सामग्री के साथ समय पर आते हैं।',
    'sec.testimonials.tag':   'प्रशंसापत्र',
    'sec.testimonials.title': 'हमारे भक्त क्या कहते हैं',
    'sec.faq.tag':        'सामान्य प्रश्न',
    'sec.faq.title':      'अक्सर पूछे जाने वाले प्रश्न',
    /* Stats */
    'stat.pandits':  'सत्यापित पंडित',
    'stat.pujas':    'पूजाएं पूर्ण',
    'stat.cities':   'शहर सेवा में',
    'stat.rating':   'औसत रेटिंग',
    /* Buttons */
    'btn.book.now':  'अभी बुक करें',
    'btn.learn.more':'और जानें',
    'btn.view.all':  'सभी सेवाएं देखें',
    'btn.whatsapp':  'WhatsApp पर चैट करें',
    'btn.call':      'हमें कॉल करें',
    /* Footer */
    'footer.tagline': 'हर पवित्र अवसर के लिए भक्तों को प्रामाणिक वैदिक पंडितों से जोड़ना।',
    'footer.services':'हमारी सेवाएं',
    'footer.quick':   'त्वरित लिंक',
    'footer.contact': 'संपर्क करें',
    'footer.rights':  '© 2025 उपासना। सर्वाधिकार सुरक्षित।',
    /* Booking */
    'book.title':     'अपने समारोह के लिए पंडित बुक करें',
    'book.sub':       'विवरण भरें और हमारी टीम आपको सत्यापित पंडित से जोड़ेगी',
    'book.puja.label':'पूजा / समारोह चुनें',
    'book.date.label':'पसंदीदा तिथि',
    'book.time.label':'पसंदीदा समय',
    'book.name.label':'आपका पूरा नाम',
    'book.phone.label':'मोबाइल नंबर',
    'book.city.label': 'शहर / स्थान',
    'book.submit':    'अभी पंडित बुक करें',
  },

  mr: {
    /* Nav */
    'nav.services':    'सेवा',
    'nav.astrology':   'ज्योतिष',
    'nav.muhurat':     'मुहूर्त',
    'nav.blog':        'ब्लॉग',
    'nav.about':       'आमच्याबद्दल',
    'nav.contact':     'संपर्क',
    'nav.book':        'पंडित बुक करा',
    'nav.login':       'लॉगिन',
    /* Hero */
    'hero.title':      'प्रत्येक शुभ प्रसंगासाठी\nप्रमाणित पंडित बुक करा',
    'hero.sub':        'भारतभरातील ५०,०००+ भाविकांचा विश्वास. पूजा, हवन, विवाह व अधिकसाठी तज्ज्ञ पंडित.',
    'hero.search.placeholder': 'पूजा, विधी शोधा... (उदा. गृहप्रवेश)',
    'hero.search.btn': 'शोधा',
    'hero.ql.astrology': 'ज्योतिष',
    'hero.ql.muhurat':   'मुहूर्त',
    'hero.ql.kundali':   'कुंडली',
    'hero.ql.book':      'पंडित बुक करा',
    /* Section headings */
    'sec.services.tag':   'आमच्या सेवा',
    'sec.services.title': 'प्रत्येक प्रसंगासाठी पवित्र सेवा',
    'sec.services.sub':   'दैनंदिन पूजेपासून भव्य समारंभापर्यंत — प्रत्येक विधीसाठी प्रमाणित पंडित',
    'sec.hiw.tag':        'सोपी प्रक्रिया',
    'sec.hiw.title':      'हे कसे कार्य करते',
    'sec.hiw.sub':        'फक्त ३ सोप्या चरणांमध्ये पंडित बुक करा',
    'sec.hiw.1.title':    'शोधा आणि निवडा',
    'sec.hiw.1.desc':     'तुमची पूजा किंवा समारंभ शोधा आणि तुमच्या परिसरातील प्रमाणित पंडितांमधून निवडा.',
    'sec.hiw.2.title':    'बुक करा आणि पुष्टी करा',
    'sec.hiw.2.desc':     'तारीख, वेळ आणि ठिकाण निवडा. ऑनलाइन किंवा दिवशी रोखीने पेमेंट करा.',
    'sec.hiw.3.title':    'पंडित येतात',
    'sec.hiw.3.desc':     'तुमचे प्रमाणित पंडित पूजेसाठी आवश्यक सामग्रीसह वेळेवर येतात.',
    'sec.testimonials.tag':   'अभिप्राय',
    'sec.testimonials.title': 'आमचे भाविक काय म्हणतात',
    'sec.faq.tag':        'वारंवार विचारले जाणारे प्रश्न',
    'sec.faq.title':      'सामान्य प्रश्न',
    /* Stats */
    'stat.pandits':  'प्रमाणित पंडित',
    'stat.pujas':    'पूर्ण पूजा',
    'stat.cities':   'शहरे सेवेत',
    'stat.rating':   'सरासरी रेटिंग',
    /* Buttons */
    'btn.book.now':  'आत्ता बुक करा',
    'btn.learn.more':'अधिक जाणून घ्या',
    'btn.view.all':  'सर्व सेवा पहा',
    'btn.whatsapp':  'WhatsApp वर चॅट करा',
    'btn.call':      'आम्हाला कॉल करा',
    /* Footer */
    'footer.tagline': 'प्रत्येक पवित्र प्रसंगासाठी भाविकांना प्रामाणिक वैदिक पंडितांशी जोडणे.',
    'footer.services':'आमच्या सेवा',
    'footer.quick':   'द्रुत दुवे',
    'footer.contact': 'संपर्क करा',
    'footer.rights':  '© 2025 उपासना. सर्व हक्क राखीव.',
    /* Booking */
    'book.title':     'तुमच्या समारंभासाठी पंडित बुक करा',
    'book.sub':       'तपशील भरा आणि आमची टीम तुम्हाला प्रमाणित पंडितांशी जोडेल',
    'book.puja.label':'पूजा / समारंभ निवडा',
    'book.date.label':'पसंतीची तारीख',
    'book.time.label':'पसंतीची वेळ',
    'book.name.label':'तुमचे पूर्ण नाव',
    'book.phone.label':'मोबाइल नंबर',
    'book.city.label': 'शहर / स्थान',
    'book.submit':    'आत्ता पंडित बुक करा',
  },

  gu: {
    /* Nav */
    'nav.services':    'સેવાઓ',
    'nav.astrology':   'જ્યોતિષ',
    'nav.muhurat':     'મુહૂર્ત',
    'nav.blog':        'બ્લોગ',
    'nav.about':       'અમારા વિશે',
    'nav.contact':     'સંપર્ક',
    'nav.book':        'પંડિત બુક કરો',
    'nav.login':       'લૉગિન',
    /* Hero */
    'hero.title':      'દરેક શુભ પ્રસંગ માટે\nચકાસેલ પંડિત બુક કરો',
    'hero.sub':        'ભારતભرما ૫૦,૦૦૦+ ભક્તોનો વિશ્વાસ. પૂજા, હવન, લગ્ન અને વધુ માટે નિષ્ણાત પંડિત.',
    'hero.search.placeholder': 'પૂજા, વિધિ શોધો... (જેમ કે ગૃહ પ્રવેશ)',
    'hero.search.btn': 'શોધો',
    'hero.ql.astrology': 'જ્યોતિષ',
    'hero.ql.muhurat':   'મુહૂર્ત',
    'hero.ql.kundali':   'કુંડળી',
    'hero.ql.book':      'પંડિત બુક કરો',
    /* Section headings */
    'sec.services.tag':   'અમારી સેવાઓ',
    'sec.services.title': 'દરેક પ્રસંગ માટે પવિત્ર સેવાઓ',
    'sec.services.sub':   'રોજિંદી પૂજાથી ભવ્ય સમારોહ સુધી — દરેક વિધિ માટે ચકાસેલ પંડિત',
    'sec.hiw.tag':        'સરળ પ્રક્રિયા',
    'sec.hiw.title':      'તે કેવી રીતે કાર્ય કરે છે',
    'sec.hiw.sub':        'ફક્ત ૩ સરળ પગલામાં પંડિત બુક કરો',
    'sec.hiw.1.title':    'શોધો અને પસંદ કરો',
    'sec.hiw.1.desc':     'તમારી પૂજા અથવા સમારોહ શોધો અને તમારા વિસ્તારમાં ચકાસેલ પંડિતોમાંથી પસંદ કરો.',
    'sec.hiw.2.title':    'બુક કરો અને પુષ્ટિ કરો',
    'sec.hiw.2.desc':     'તારીખ, સમય અને સ્થળ પસંદ કરો. ઓનલાઇન અથવા રોકડ ચૂકવો.',
    'sec.hiw.3.title':    'પંડિત આવે છે',
    'sec.hiw.3.desc':     'તમારા ચકાસેલ પંડિત પૂજા માટે જરૂરી સામગ્રી સાથે સમયસર આવે છે.',
    'sec.testimonials.tag':   'પ્રશંસાપત્ર',
    'sec.testimonials.title': 'અમારા ભક્તો શું કહે છે',
    'sec.faq.tag':        'વારંવાર પૂછાતા પ્રશ્નો',
    'sec.faq.title':      'સામાન્ય પ્રશ્નો',
    /* Stats */
    'stat.pandits':  'ચકાસેલ પંડિત',
    'stat.pujas':    'પૂર્ણ પૂજા',
    'stat.cities':   'શહેરો',
    'stat.rating':   'સરેરાશ રેટિંગ',
    /* Buttons */
    'btn.book.now':  'હમણાં બુક કરો',
    'btn.learn.more':'વધુ જાણો',
    'btn.view.all':  'બધી સેવાઓ જુઓ',
    'btn.whatsapp':  'WhatsApp પર ચેટ કરો',
    'btn.call':      'અમને કૉલ કરો',
    /* Footer */
    'footer.tagline': 'દરેક પવિત્ર પ્રસંગ માટે ભક્તોને અધિકૃત વૈદિક પંડિત સાથે જોડવું.',
    'footer.services':'અમારી સેવાઓ',
    'footer.quick':   'ઝડપી લિંક્સ',
    'footer.contact': 'સંપર્ક કરો',
    'footer.rights':  '© 2025 ઉપાસના. સર્વ હક્કો સુરક્ષિત.',
    /* Booking */
    'book.title':     'તમારા સમારોહ માટે પંડિત બુક કરો',
    'book.sub':       'વિગતો ભરો અને અમારી ટીમ તમને ચકાસેલ પંડિત સાથે જોડશે',
    'book.puja.label':'પૂજા / સમારોહ પસંદ કરો',
    'book.date.label':'પસંદ કરેલ તારીખ',
    'book.time.label':'પસંદ કરેલ સમય',
    'book.name.label':'તમારું પૂરું નામ',
    'book.phone.label':'મોબાઇल નંબર',
    'book.city.label': 'શહેર / સ્થળ',
    'book.submit':    'હમણાં પંડિત બુક કરો',
  }
};

/* ── Apply translations to all [data-i18n] elements ── */
window.applyTranslations = function(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(!dict[key]) return;
    const attr = el.getAttribute('data-i18n-attr');
    if(attr) {
      el.setAttribute(attr, dict[key]);
    } else {
      el.textContent = dict[key];
    }
  });
  document.documentElement.lang = lang;
};

/* ── Full-Page Automatic Translation Engine ── */
window.initGoogleTranslate = function() {
  if (!document.getElementById('google_translate_element')) {
    const div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.display = 'none';
    document.body.appendChild(div);
  }

  if (!document.getElementById('gt-styles')) {
    const st = document.createElement('style');
    st.id = 'gt-styles';
    st.textContent = `
      .goog-te-banner-frame, .goog-te-balloon-frame, .VIpgJd-ZJuSc-RLrBProject-sjh28b { display: none !important; }
      body { top: 0px !important; position: static !important; }
      .goog-tooltip, .goog-tooltip:hover { display: none !important; }
      .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
      #goog-gt-tt, .goog-te-spinner-pos { display: none !important; }
      font { background-color: transparent !important; box-shadow: none !important; }
      .VIpgJd-yDsffb-LgpyHd-LgpyHd { display: none !important; }
      iframe.skiptranslate { display: none !important; }
    `;
    document.head.appendChild(st);
  }

  if (!document.getElementById('gt-script')) {
    window.googleTranslateElementInit = function() {
      try {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,mr,gu',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');

        // After GT loads, apply saved language ONCE using the combo directly
        const savedLang = localStorage.getItem('upasana_lang') || 'en';
        if (savedLang !== 'en') {
          // Wait for combo box to be ready
          let attempts = 0;
          const tryApply = setInterval(() => {
            const sel = document.querySelector('.goog-te-combo');
            if (sel) {
              clearInterval(tryApply);
              sel.value = savedLang;
              sel.dispatchEvent(new Event('change'));
            } else if (++attempts > 20) {
              clearInterval(tryApply);
            }
          }, 200);
        }
      } catch(e) {}
    };
    const s = document.createElement('script');
    s.id = 'gt-script';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }
};

/* ── Clear ALL googtrans cookies on every possible domain ── */
function clearGoogTransCookies() {
  const host = window.location.hostname;
  const exp  = '; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'googtrans=' + exp;
  document.cookie = 'googtrans=; domain=' + host + exp;
  document.cookie = 'googtrans=; domain=.' + host + exp;
  // Also clear on parent domain if subdomain (e.g. www.myupasana.com → myupasana.com)
  const parts = host.split('.');
  if (parts.length > 2) {
    const parent = parts.slice(1).join('.');
    document.cookie = 'googtrans=; domain=' + parent + exp;
    document.cookie = 'googtrans=; domain=.' + parent + exp;
  }
}

window.triggerTranslate = function(langCode, isUserClick = false) {
  if (langCode === 'en') {
    // Step 1: clear all cookies
    clearGoogTransCookies();

    // Step 2: try to use GT combo directly (no reload needed)
    const sel = document.querySelector('.goog-te-combo');
    if (sel) {
      sel.value = 'en';
      sel.dispatchEvent(new Event('change'));
      // Force body back to top (GT sometimes shifts body)
      setTimeout(() => { document.body.style.top = '0px'; }, 200);
      return;
    }

    // Step 3: if GT not loaded, reload (cookies cleared so page loads in English)
    if (isUserClick) {
      window.location.reload();
    }
    return;
  }

  // Non-English — set cookie + use combo or reload
  const host     = window.location.hostname;
  const cookieVal = '/en/' + langCode;
  document.cookie = 'googtrans=' + cookieVal + '; path=/;';
  if (host) {
    document.cookie = 'googtrans=' + cookieVal + '; domain=' + host + '; path=/;';
    document.cookie = 'googtrans=' + cookieVal + '; domain=.' + host + '; path=/;';
  }

  const sel = document.querySelector('.goog-te-combo');
  if (sel) {
    sel.value = langCode;
    sel.dispatchEvent(new Event('change'));
  } else if (isUserClick) {
    window.location.reload();
  }
};

/* ── Get current language ── */
window.getCurrentLang = function() {
  return localStorage.getItem('upasana_lang') || 'en';
};


/* ── Detect active page ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

/* ── Logo HTML — Navbar (Head Logo: cream background, fits cream navbar) ── */
function logoHTML(lightClass = '') {
  return `
    <a href="index.html" class="logo-link" aria-label="Upasana Home">
      <img src="assets/head-logo.png" alt="Upasana" class="logo-img logo-head" onerror="this.src='assets/Head Logo.png';this.onerror=null;">
    </a>`;
}

/* ── Logo HTML — Footer (Bottom Logo: dark background, fits dark footer) ── */
function logoHTMLFooter() {
  return `
    <a href="index.html" class="logo-link" aria-label="Upasana Home">
      <img src="assets/bottom-logo.png" alt="Upasana" class="logo-img logo-footer" onerror="this.src='assets/Bottom Logo.png';this.onerror=null;">
    </a>`;
}

/* ── Service mega-menu items ── */
const SERVICES = [
  { icon:'RD', label:'Rudrabhishek Puja',   href:'rudrabhishek.html',  img:'assets/Rudrabhishekpuja.jpg',  sub:'Lord Shiva Worship' },
  { icon:'GP', label:'Griha Pravesh',         href:'griha-pravesh.html', img:'assets/grihapraveshpuja.jpg',  sub:'Home Entering Ritual' },
  { icon:'VS', label:'Vivah Sanskar',         href:'vivah.html',         img:'assets/vivahpuja.jpg',         sub:'Sacred Wedding Rituals' },
  { icon:'SK', label:'Satyanarayan Katha',    href:'satyanarayan.html',  img:'assets/satyanarayanpuja.jpg',  sub:'Vishnu Devotion Katha' },
  { icon:'HV', label:'Havan / Homa',          href:'havan.html',         img:'assets/hanumanpuja.png',        sub:'Sacred Fire Ritual' },
  { icon:'GN', label:'Ganesh Puja',            href:'ganesh-puja.html',   img:'assets/grihapraveshpuja.jpg',  sub:'Obstacle Remover Puja' },
  { icon:'NG', label:'Navgraha Puja',          href:'navgraha.html',      img:'assets/satyanarayanpuja.jpg',  sub:'Nine Planets Ritual' },
  { icon:'NK', label:'Namkaran Sanskar',       href:'namkaran.html',      img:'assets/namkaranpuja.png',       sub:'Baby Naming Ceremony' },
  { icon:'LP', label:'Lakshmi Puja',           href:'lakshmi-puja.html',  img:'assets/mahalamipuja.jpg',      sub:'Wealth & Prosperity' },
  { icon:'SP', label:'Shradh / Pitru Puja',   href:'shradh-puja.html',   img:'assets/Rudrabhishekpuja.jpg',  sub:'Ancestral Rituals' },
  { icon:'AS', label:'Astrology Consultation', href:'astrology.html',     img:'assets/astrology-icon.png',    sub:'Expert Jyotish Reading' },
  { icon:'KD', label:'Free Kundali',           href:'kundali.html',       img:'assets/kundali-icon.png',      sub:'Birth Chart Analysis' },
];

/* ── Build Header ── */
function renderHeader() {
  const ddItems = SERVICES.map(s => `
    <a href="${s.href}" class="dd-item">
      <div class="dd-icon" style="background:none;padding:0;width:40px;height:40px;border-radius:10px;overflow:hidden;flex-shrink:0">
        <img src="${s.img}" alt="${s.label}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block"/>
      </div>
      <div style="display:flex;flex-direction:column;gap:1px">
        <span style="font-weight:700;font-size:.84rem;color:var(--text)">${s.label}</span>
        <span style="font-size:.74rem;color:var(--text3);font-weight:400">${s.sub}</span>
      </div>
    </a>`).join('');

  const navLinks = [
    { label:'Astrology', i18n:'nav.astrology', href:'astrology.html' },
    { label:'Muhurat',   i18n:'nav.muhurat',   href:'muhurat.html' },
    { label:'Blog',      i18n:'nav.blog',      href:'blog.html' },
    { label:'About Us',  i18n:'nav.about',     href:'about.html' },
    { label:'Contact',   i18n:'nav.contact',   href:'contact.html' },
  ];

  const navItems = navLinks.map(n => `
    <li class="nav-item">
      <a href="${n.href}" class="nav-link ${currentPage === n.href ? 'active' : ''}" data-i18n="${n.i18n}">${n.label}</a>
    </li>`).join('');

  const mobSubItems = SERVICES.map(s => `<li><a href="${s.href}">${s.icon} ${s.label}</a></li>`).join('');
  const mobNavItems = navLinks.map(n => `<li><a href="${n.href}" data-i18n="${n.i18n}" ${currentPage===n.href?'style="color:var(--dark);font-weight:700"':''}>${n.label}</a></li>`).join('');

  document.getElementById('header-root').innerHTML = `
    <header class="site-header" id="site-header">
      <div class="container">
        <div class="navbar-inner">
          ${logoHTML()}
          <nav class="desktop-nav">
            <ul class="nav-list">
              <li class="nav-item has-dropdown">
                <a href="services.html" class="nav-btn ${currentPage==='services.html'?'active':''}" style="text-decoration:none">
                  <span data-i18n="nav.services">Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </a>
                <div class="dropdown" style="width:480px">
                  <div class="dd-grid" style="grid-template-columns:1fr 1fr">${ddItems}</div>
                  <div style="border-top:1px solid var(--border);margin-top:10px;padding-top:10px;text-align:center">
                    <a href="services.html" style="font-size:.82rem;font-weight:700;color:var(--dark);background:rgba(70,26,25,.07);padding:7px 20px;border-radius:100px;display:inline-block;transition:all .2s">View All Services &rarr;</a>
                  </div>
                </div>
              </li>
              ${navItems}
            </ul>
          </nav>
          <div class="nav-cta">
            <!-- Language Selector -->
            <div class="lang-selector" id="lang-selector">
              <button class="lang-btn" id="lang-btn" aria-label="Select language">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span id="lang-label">EN</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="lang-dropdown" id="lang-dropdown">
                <div class="lang-dd-item active" data-lang="en" data-label="EN">English</div>
                <div class="lang-dd-item" data-lang="hi" data-label="हि">हिंदी</div>
                <div class="lang-dd-item" data-lang="mr" data-label="म">मराठी</div>
                <div class="lang-dd-item" data-lang="gu" data-label="ગુ">ગુજરાતી</div>
              </div>
            </div>
            <a href="book-a-pandit.html" class="btn-gold" style="padding:9px 20px;font-size:.85rem" data-i18n="nav.book">Book A Pandit</a>
            <!-- Login button — becomes avatar dropdown after sign-in -->
            <div class="user-menu-wrap" id="user-menu-wrap" style="position:relative">
              <button class="btn-primary" style="padding:9px 18px;font-size:.85rem" id="login-btn-hdr" data-i18n="nav.login">Login</button>
              <!-- Avatar button (hidden until signed in) -->
              <button id="user-avatar-btn" style="display:none;width:36px;height:36px;border-radius:50%;padding:0;background:transparent;border:2.5px solid var(--gold2);overflow:hidden;cursor:pointer;transition:border-color .2s;flex-shrink:0" aria-label="Profile menu">
                <img id="nav-user-avatar" src="" alt="Profile" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:50%"/>
              </button>
              <!-- Profile dropdown -->
              <div id="user-profile-dropdown" style="display:none;position:absolute;top:calc(100% + 10px);right:0;width:230px;background:var(--white);border-radius:16px;box-shadow:0 12px 40px rgba(70,26,25,.18);border:1.5px solid var(--border);z-index:99999;overflow:hidden">
                <!-- User info -->
                <div style="padding:16px 16px 12px;border-bottom:1px solid var(--border)">
                  <div style="display:flex;align-items:center;gap:10px">
                    <img id="dropdown-avatar" src="" alt="" style="width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid var(--gold2);flex-shrink:0"/>
                    <div style="min-width:0">
                      <div id="dropdown-name" style="font-weight:700;font-size:.88rem;color:var(--dark);white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div>
                      <div id="dropdown-email" style="font-size:.72rem;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px"></div>
                    </div>
                  </div>
                  <div style="margin-top:8px;display:inline-flex;align-items:center;gap:4px;background:rgba(200,146,42,.1);padding:2px 8px;border-radius:20px">
                    <span style="font-size:.65rem;font-weight:700;color:var(--gold);letter-spacing:.04em">DEVOTEE</span>
                  </div>
                </div>
                <!-- Menu items -->
                <div style="padding:6px 0">
                  <a href="book-a-pandit.html" style="display:flex;align-items:center;gap:10px;padding:10px 16px;font-size:.85rem;font-weight:600;color:var(--text);transition:background .15s" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='transparent'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    My Bookings
                  </a>
                  <a href="contact.html" style="display:flex;align-items:center;gap:10px;padding:10px 16px;font-size:.85rem;font-weight:600;color:var(--text);transition:background .15s" onmouseover="this.style.background='var(--cream)'" onmouseout="this.style.background='transparent'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Profile
                  </a>
                </div>
                <div style="padding:6px 0;border-top:1px solid var(--border)">
                  <button onclick="upasanaSignOut()" style="display:flex;align-items:center;gap:10px;padding:10px 16px;font-size:.85rem;font-weight:600;color:#c62828;width:100%;background:transparent;border:none;cursor:pointer;font-family:inherit;transition:background .15s" onmouseover="this.style.background='rgba(198,40,40,.06)'" onmouseout="this.style.background='transparent'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Sidebar -->
    <div class="mob-overlay" id="mob-overlay"></div>
    <aside class="mob-sidebar" id="mob-sidebar">
      <div class="mob-header">
        ${logoHTML()}
        <button class="mob-close" id="mob-close">✕</button>
      </div>
      <ul class="mob-nav">
        <li>
          <button id="mob-svc-btn" style="display:flex;justify-content:space-between;align-items:center">
            <span data-i18n="nav.services">Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <ul class="mob-sub" id="mob-svc-sub">${mobSubItems}</ul>
        </li>
        ${mobNavItems}
      </ul>
      <div class="mob-lang-strip">
        <span style="font-size:.78rem;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em">Language</span>
        <div class="mob-lang-options">
          <button class="mob-lang-opt active" data-lang="en" data-label="EN">English</button>
          <button class="mob-lang-opt" data-lang="hi" data-label="हि">हिंदी</button>
          <button class="mob-lang-opt" data-lang="mr" data-label="म">मराठी</button>
          <button class="mob-lang-opt" data-lang="gu" data-label="ગુ">ગુજરાતી</button>
        </div>
      </div>
      <div class="mob-footer">
        <a href="book-a-pandit.html" class="btn-gold" style="text-align:center;padding:12px" data-i18n="nav.book">Book A Pandit</a>
        <button class="btn-primary" id="mob-login-btn" style="padding:12px" data-i18n="nav.login">Login</button>
      </div>
    </aside>

    <!-- Login Modal -->
    <div class="modal-overlay" id="login-modal">
      <div class="modal-box" style="max-width:420px;padding:32px">
        <button class="modal-close" id="modal-close">✕</button>

        <!-- ── SIGNED OUT ── -->
        <div id="login-signed-out">
          <!-- Header -->
          <div style="text-align:center;margin-bottom:24px">
            <div style="width:48px;height:48px;background:linear-gradient(135deg,var(--dark),var(--dark2));border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h2 style="font-family:var(--font-heading);font-size:1.4rem;font-weight:700;color:var(--dark);margin-bottom:4px">Welcome to Upasana</h2>
            <p style="font-size:.83rem;color:var(--text2)">Sign in to manage your bookings</p>
          </div>

          <!-- Google Button -->
          <button id="google-login-btn" style="width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 18px;background:#fff;border:1.5px solid #dadce0;border-radius:10px;font-size:.9rem;font-weight:600;color:#3c4043;cursor:pointer;transition:all .2s;margin-bottom:18px;font-family:inherit;box-shadow:0 1px 4px rgba(0,0,0,.08)" onmouseover="this.style.boxShadow='0 3px 12px rgba(0,0,0,.15)'" onmouseout="this.style.boxShadow='0 1px 4px rgba(0,0,0,.08)'">
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            Continue with Google
          </button>

          <!-- Divider -->
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
            <div style="flex:1;height:1px;background:var(--border)"></div>
            <span style="font-size:.72rem;color:var(--text3);font-weight:600;white-space:nowrap">or sign in with email</span>
            <div style="flex:1;height:1px;background:var(--border)"></div>
          </div>

          <!-- Email + Password -->
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:14px">
            <div>
              <label style="font-size:.78rem;font-weight:700;color:var(--text);display:block;margin-bottom:5px">Email Address</label>
              <input type="email" id="login-email" class="form-control" placeholder="your@email.com" style="width:100%;padding:11px 13px;font-size:.88rem"/>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
                <label style="font-size:.78rem;font-weight:700;color:var(--text)">Password</label>
                <a href="#" style="font-size:.72rem;color:var(--gold);font-weight:600" onclick="showToast('Password reset link sent to your email','info')">Forgot?</a>
              </div>
              <input type="password" id="login-password" class="form-control" placeholder="Enter your password" style="width:100%;padding:11px 13px;font-size:.88rem"/>
            </div>
          </div>

          <button class="btn-submit" style="width:100%;padding:13px;font-size:.92rem;margin-bottom:14px" onclick="handleEmailLogin()">Sign In</button>

          <p style="font-size:.72rem;color:var(--text3);text-align:center">
            By signing in you agree to our <a href="#" style="color:var(--dark);font-weight:600">Terms</a> &amp; <a href="#" style="color:var(--dark);font-weight:600">Privacy Policy</a>
          </p>
        </div>

        <!-- ── SIGNED IN ── -->
        <div id="login-signed-in" style="display:none">
          <!-- Profile card -->
          <div style="display:flex;align-items:center;gap:16px;padding:16px;background:linear-gradient(135deg,var(--cream),var(--cream2));border-radius:16px;border:1.5px solid var(--border);margin-bottom:20px">
            <img id="user-avatar" src="" alt="Profile" style="width:54px;height:54px;border-radius:50%;object-fit:cover;border:2.5px solid var(--gold2);flex-shrink:0"/>
            <div style="min-width:0">
              <div id="user-name" style="font-family:var(--font-heading);font-size:1.05rem;font-weight:700;color:var(--dark);white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div>
              <div id="user-email" style="font-size:.75rem;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px"></div>
              <div style="display:inline-flex;align-items:center;gap:4px;margin-top:6px;background:rgba(46,125,50,.1);padding:2px 9px;border-radius:20px">
                <svg width="10" height="10" viewBox="0 0 48 48" style="flex-shrink:0"><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="#4285F4" d="M46.98 24.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65 0-1.57-.15-3.09-.38-4.55z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/></svg>
                <span style="font-size:.68rem;font-weight:700;color:#2e7d32">Signed in with Google</span>
              </div>
            </div>
          </div>

          <!-- Quick links -->
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px">
            <a href="book-a-pandit.html" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--cream);border-radius:10px;border:1px solid var(--border);font-size:.85rem;font-weight:600;color:var(--dark);transition:background .2s" onmouseover="this.style.background='var(--cream2)'" onmouseout="this.style.background='var(--cream)'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              My Bookings
            </a>
            <a href="contact.html" style="display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--cream);border-radius:10px;border:1px solid var(--border);font-size:.85rem;font-weight:600;color:var(--dark);transition:background .2s" onmouseover="this.style.background='var(--cream2)'" onmouseout="this.style.background='var(--cream)'">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6"/></svg>
              Support
            </a>
          </div>

          <button onclick="upasanaSignOut()" style="width:100%;padding:11px;border-radius:var(--pill);background:transparent;color:var(--text2);font-weight:600;font-size:.85rem;border:1.5px solid var(--border);cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:7px" onmouseover="this.style.background='rgba(198,40,40,.06)';this.style.borderColor='#f44336';this.style.color='#c62828'" onmouseout="this.style.background='transparent';this.style.borderColor='var(--border)';this.style.color='var(--text2)'">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
          </button>
        </div>
      </div>
    </div>`;

  initHeaderScripts();
  initGoogleAuth();
}

/* ── Google OAuth 2.0 via Google Identity Services ── */
function initGoogleAuth() {
  // ⚠️  Replace this with your actual Google OAuth Client ID
  // Get it from: https://console.cloud.google.com → APIs & Services → Credentials → OAuth 2.0 Client IDs
  const CLIENT_ID = '309206834222-vtder0m1dakfiticf4prb3ivg6b4qfsm.apps.googleusercontent.com';

  // Load Google Identity Services script
  if (!document.getElementById('gsi-script')) {
    const s = document.createElement('script');
    s.id  = 'gsi-script';
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.defer = true;
    s.onload = () => setupGoogleAuth(CLIENT_ID);
    document.head.appendChild(s);
  } else {
    setupGoogleAuth(CLIENT_ID);
  }

  // Restore session from localStorage
  const saved = localStorage.getItem('upasana_user');
  if (saved) {
    try { showUserProfile(JSON.parse(saved)); } catch(e) { localStorage.removeItem('upasana_user'); }
  }
}

function setupGoogleAuth(clientId) {
  if (typeof google === 'undefined') return;

  google.accounts.id.initialize({
    client_id: clientId,
    callback: handleGoogleCredential,
    auto_select: false,
    cancel_on_tap_outside: true,
  });

  const btn = document.getElementById('google-login-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          // Fallback: render button in a temporary container
          const tmp = document.createElement('div');
          tmp.style.cssText = 'position:absolute;opacity:0;pointer-events:none';
          document.body.appendChild(tmp);
          google.accounts.id.renderButton(tmp, { theme:'outline', size:'large', width:360 });
          setTimeout(() => { tmp.querySelector('[role="button"]')?.click(); }, 100);
          setTimeout(() => tmp.remove(), 3000);
        }
      });
    });
  }
}

function handleGoogleCredential(response) {
  try {
    // Decode JWT payload (base64)
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    const user = {
      name:    payload.name  || 'User',
      email:   payload.email || '',
      picture: payload.picture || '',
      sub:     payload.sub,
    };
    localStorage.setItem('upasana_user', JSON.stringify(user));
    showUserProfile(user);
    // Close modal after short delay
    setTimeout(() => {
      document.getElementById('login-modal')?.classList.remove('active');
      showToast('Welcome, ' + user.name + '! You are signed in.', 'success');
    }, 800);
  } catch(e) {
    showToast('Sign-in failed. Please try again.', 'error');
  }
}

function showUserProfile(user) {
  // Update the modal signed-in view
  const avatar  = document.getElementById('user-avatar');
  const nameEl  = document.getElementById('user-name');
  const emailEl = document.getElementById('user-email');
  if (avatar)  { avatar.src = user.picture || ''; }
  if (nameEl)  nameEl.textContent  = user.name;
  if (emailEl) emailEl.textContent = user.email;
  document.getElementById('login-signed-out')?.style.setProperty('display','none');
  document.getElementById('login-signed-in')?.style.setProperty('display','block');

  // Navbar — hide Login button, show avatar button + populate dropdown
  const loginBtn   = document.getElementById('login-btn-hdr');
  const avatarBtn  = document.getElementById('user-avatar-btn');
  const navAvatar  = document.getElementById('nav-user-avatar');
  const ddAvatar   = document.getElementById('dropdown-avatar');
  const ddName     = document.getElementById('dropdown-name');
  const ddEmail    = document.getElementById('dropdown-email');

  if (loginBtn)  loginBtn.style.display  = 'none';
  if (avatarBtn) avatarBtn.style.display = 'flex';
  if (navAvatar && user.picture)  navAvatar.src = user.picture;
  if (ddAvatar  && user.picture)  ddAvatar.src  = user.picture;
  if (ddName)  ddName.textContent  = user.name;
  if (ddEmail) ddEmail.textContent = user.email;

  // Toggle dropdown on avatar click
  if (avatarBtn && !avatarBtn._dropdownBound) {
    avatarBtn._dropdownBound = true;
    avatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dd = document.getElementById('user-profile-dropdown');
      if (dd) dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
    });
    document.addEventListener('click', () => {
      const dd = document.getElementById('user-profile-dropdown');
      if (dd) dd.style.display = 'none';
    });
  }
}

/* Email/password login (UI demo — wire to backend when ready) */
window.handleEmailLogin = function() {
  const email = document.getElementById('login-email')?.value.trim();
  const pass  = document.getElementById('login-password')?.value.trim();
  if (!email) { showToast('Please enter your email address.', 'error'); return; }
  if (!pass)  { showToast('Please enter your password.', 'error'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email.', 'error'); return; }
  // For now show a coming-soon message — replace with actual auth when backend is ready
  showToast('Email login coming soon. Please use Continue with Google.', 'info');
};

window.upasanaSignOut = function() {
  localStorage.removeItem('upasana_user');
  document.getElementById('login-signed-out')?.style.setProperty('display','block');
  document.getElementById('login-signed-in')?.style.setProperty('display','none');

  // Restore navbar
  const loginBtn  = document.getElementById('login-btn-hdr');
  const avatarBtn = document.getElementById('user-avatar-btn');
  const dropdown  = document.getElementById('user-profile-dropdown');
  if (loginBtn)  { loginBtn.style.display  = ''; }
  if (avatarBtn) { avatarBtn.style.display = 'none'; }
  if (dropdown)  { dropdown.style.display  = 'none'; }

  if (typeof google !== 'undefined') google.accounts.id.disableAutoSelect();
  document.getElementById('login-modal')?.classList.remove('active');
  showToast('You have been signed out.', 'info');
};

/* ── Build Footer ── */
function renderFooter() {
  const svcLinks = SERVICES.slice(0, 8).map(s => `<li><a href="${s.href}">${s.label}</a></li>`).join('');

  document.getElementById('footer-root').innerHTML = `
    <footer class="site-footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div>
              ${logoHTMLFooter()}
              <p class="footer-tagline">Connecting devotees with authentic Vedic pandits for every sacred occasion — with love, trust, and tradition.</p>
              <div class="social-links">
                <a href="#" class="soc-link" aria-label="Facebook" onclick="openComingSoon();return false;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/my.upasana" target="_blank" class="soc-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
                </a>
                <a href="#" class="soc-link" aria-label="YouTube" onclick="openComingSoon();return false;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 class="footer-heading">PUJA SERVICES</h4>
              <ul class="footer-links">${svcLinks}</ul>
            </div>
            <div>
              <h4 class="footer-heading">Explore</h4>
              <ul class="footer-links">
                <li><a href="astrology.html">Astrology</a></li>
                <li><a href="muhurat.html">Muhurat Finder</a></li>
                <li><a href="kundali.html">Free Kundali</a></li>
                <li><a href="blog.html">Blog & Articles</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 class="footer-heading">Contact</h4>
              <div class="footer-contact">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:.7;margin-right:4px"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> ${SITE.address}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:.7;margin-right:4px"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> <a href="tel:${SITE.phone}">${SITE.phone}</a></p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:.7;margin-right:4px"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> <a href="mailto:${SITE.email}">${SITE.email}</a></p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:.7;margin-right:4px"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg> ${SITE.hours}</p>
              </div>
              <div class="footer-badges">
                <div class="ftr-badge" onclick="openComingSoon()" style="cursor:pointer">&#9654; Google Play Store</div>
                <div class="ftr-badge" onclick="openComingSoon()" style="cursor:pointer">&#63743; Apple App Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-btm-inner">
            <p>© 2025 Upasana. All rights reserved.</p>
            <div class="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Float -->
    <a href="${SITE.whatsapp}" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
    <button class="back-top" id="back-top" aria-label="Back to top">↑</button>

    <!-- Coming Soon Modal -->
    <div class="coming-soon-overlay" id="coming-soon-modal" onclick="closeComingSoon(event)">
      <div class="coming-soon-box" onclick="event.stopPropagation()">
        <button class="coming-soon-close" onclick="closeComingSoon()">✕</button>
        <div class="cs-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h3 class="cs-title">Coming Soon</h3>
        <p class="cs-sub">We're working on something wonderful.<br/>Stay tuned — launching very soon!</p>
        <div class="cs-dots"><span></span><span></span><span></span></div>
        <a href="https://wa.me/918087590902" class="cs-notify-btn" target="_blank">Get Notified on WhatsApp</a>
      </div>
    </div>`;
}

/* ── Header JS ── */
function initHeaderScripts() {
  const hdr      = document.getElementById('site-header');
  const ham      = document.getElementById('hamburger');
  const sidebar  = document.getElementById('mob-sidebar');
  const overlay  = document.getElementById('mob-overlay');
  const closeBtn = document.getElementById('mob-close');
  const svcBtn   = document.getElementById('mob-svc-btn');
  const svcSub   = document.getElementById('mob-svc-sub');
  const loginModal  = document.getElementById('login-modal');
  const loginBtnHdr = document.getElementById('login-btn-hdr');
  const mobLogin    = document.getElementById('mob-login-btn');
  const modalClose  = document.getElementById('modal-close');

  // Scroll header
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  // Sidebar
  const openSidebar  = () => { sidebar.classList.add('open'); overlay.classList.add('active'); ham.classList.add('open'); document.body.style.overflow='hidden'; };
  const closeSidebar = () => { sidebar.classList.remove('open'); overlay.classList.remove('active'); ham.classList.remove('open'); document.body.style.overflow=''; };
  ham.addEventListener('click', openSidebar);
  closeBtn?.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
  sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', closeSidebar));
  document.addEventListener('keydown', e => { if(e.key==='Escape'){ closeSidebar(); closeLogin(); } });

  // Mobile services sub-menu
  svcBtn?.addEventListener('click', () => {
    svcSub.classList.toggle('open');
    const svg = svcBtn.querySelector('svg');
    if(svg) svg.style.transform = svcSub.classList.contains('open') ? 'rotate(180deg)' : '';
  });

  // Login Modal
  const openLogin  = () => loginModal.classList.add('active');
  const closeLogin = () => loginModal.classList.remove('active');
  loginBtnHdr?.addEventListener('click', openLogin);
  mobLogin?.addEventListener('click', () => { closeSidebar(); openLogin(); });
  modalClose?.addEventListener('click', closeLogin);
  loginModal?.addEventListener('click', e => { if(e.target===loginModal) closeLogin(); });

  // Modal tabs
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // ── Language Selector ──
  const langBtn  = document.getElementById('lang-btn');
  const langDd   = document.getElementById('lang-dropdown');
  const langLabel= document.getElementById('lang-label');

  function setLang(lang, label) {
    localStorage.setItem('upasana_lang', lang);
    localStorage.setItem('upasana_lang_label', label);
    if(langLabel) langLabel.textContent = label;

    document.querySelectorAll('.lang-dd-item').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    document.querySelectorAll('.mob-lang-opt').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    if(langDd) langDd.classList.remove('open');

    window.applyTranslations(lang);
    if(window.triggerTranslate) window.triggerTranslate(lang, true);

    const langNames = { en:'English', hi:'हिंदी', mr:'मराठी', gu:'ગુજરાતી' };
    showToast(`Language: ${langNames[lang] || 'English'}`, 'success');
  }

  // Restore saved language
  const savedLang  = localStorage.getItem('upasana_lang')  || 'en';
  const savedLabel = localStorage.getItem('upasana_lang_label') || 'EN';
  if(langLabel) langLabel.textContent = savedLabel;
  document.querySelectorAll('.lang-dd-item').forEach(el => el.classList.toggle('active', el.dataset.lang === savedLang));
  document.querySelectorAll('.mob-lang-opt').forEach(el => el.classList.toggle('active', el.dataset.lang === savedLang));
  // Apply saved language translations immediately
  window.applyTranslations(savedLang);

  // Desktop dropdown toggle
  langBtn?.addEventListener('click', e => {
    e.stopPropagation();
    langDd?.classList.toggle('open');
  });
  document.querySelectorAll('.lang-dd-item').forEach(el => {
    el.addEventListener('click', () => setLang(el.dataset.lang, el.dataset.label));
  });
  // Mobile buttons
  document.querySelectorAll('.mob-lang-opt').forEach(el => {
    el.addEventListener('click', () => setLang(el.dataset.lang, el.dataset.label));
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if(langDd && !document.getElementById('lang-selector')?.contains(e.target)) {
      langDd.classList.remove('open');
    }
  });
}

window.switchTab = function(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab===tab));
  document.getElementById('tab-login').style.display  = tab==='login'    ? '' : 'none';
  document.getElementById('tab-register').style.display = tab==='register' ? '' : 'none';
};

/* ── Coming Soon Modal ── */
window.openComingSoon = function() {
  const m = document.getElementById('coming-soon-modal');
  if(m) { m.classList.add('active'); document.body.style.overflow='hidden'; }
};
window.closeComingSoon = function(e) {
  if(e && e.target !== document.getElementById('coming-soon-modal') && !e.target.classList.contains('coming-soon-close')) return;
  const m = document.getElementById('coming-soon-modal');
  if(m) { m.classList.remove('active'); document.body.style.overflow=''; }
};

/* ── Toast Notification ── */
window.showToast = function(msg, type='info') {
  document.querySelectorAll('.u-toast').forEach(t => t.remove());
  const colors = { success:'#2e7d32', error:'#c62828', info:'#461a19', warn:'#e65100' };
  if(!document.getElementById('toast-kf')) {
    const s = document.createElement('style');
    s.id = 'toast-kf';
    s.textContent = '@keyframes tIn{from{transform:translateX(110%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes tOut{from{transform:translateX(0);opacity:1}to{transform:translateX(110%);opacity:0}}';
    document.head.appendChild(s);
  }
  const t = document.createElement('div');
  t.className = 'u-toast';
  t.style.cssText = `position:fixed;top:96px;right:22px;z-index:99999;background:${colors[type]||colors.info};color:#fff;padding:14px 20px;border-radius:14px;max-width:340px;font-size:.88rem;font-weight:600;line-height:1.5;box-shadow:0 8px 30px rgba(0,0,0,.25);font-family:'Inter',sans-serif;animation:tIn .4s ease both`;
  t.innerHTML = `<span>${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.animation='tOut .4s ease both'; setTimeout(()=>t.remove(),400); }, 4200);
};

/* ── Back To Top ── */
function initBackTop() {
  const btn = document.getElementById('back-top');
  if(!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY>500), { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/* ── Scroll Reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold:0.1, rootMargin:'0px 0px -30px 0px' });
  document.querySelectorAll('.reveal,.reveal-l').forEach(el => obs.observe(el));
}

/* ── Stat Counters ── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target;
      const targetStr = el.dataset.target || '0';
      const isFloat = targetStr.includes('.');
      const target = parseFloat(targetStr);
      let cur = 0;
      const duration = 1200;
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        cur = progress * target;
        el.textContent = isFloat ? cur.toFixed(1) + '+' : Math.floor(cur) + '+';
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold:.5 });
  document.querySelectorAll('.stat-num[data-target]').forEach(el => obs.observe(el));
}

/* ── FAQ Accordion ── */
/* ── Search Routing Map ── */
const SEARCH_MAP = [
  { keywords: ['rudra', 'shiva', 'abhishek', 'rudrabhishek'], url: 'rudrabhishek.html' },
  { keywords: ['griha', 'house', 'pravesh', 'home', 'grihapravesh'], url: 'griha-pravesh.html' },
  { keywords: ['vivah', 'wedding', 'marriage', 'shaadi', 'vivaah'], url: 'vivah.html' },
  { keywords: ['satyanarayan', 'katha', 'satyanarayana'], url: 'satyanarayan.html' },
  { keywords: ['havan', 'homa', 'yagna', 'yajna'], url: 'havan.html' },
  { keywords: ['ganesh', 'ganpati', 'vighnaharta', 'ganesha'], url: 'ganesh-puja.html' },
  { keywords: ['navgraha', 'planet', 'graha', 'navgrah'], url: 'navgraha.html' },
  { keywords: ['namkaran', 'baby', 'naming', 'naamkaran'], url: 'namkaran.html' },
  { keywords: ['lakshmi', 'laxmi', 'wealth'], url: 'lakshmi-puja.html' },
  { keywords: ['shradh', 'pitru', 'ancestor', 'pitra'], url: 'shradh-puja.html' },
  { keywords: ['astro', 'astrology', 'horoscope', 'zodiac', 'rashifal'], url: 'astrology.html' },
  { keywords: ['kundali', 'birth chart', 'janam', 'kundli'], url: 'kundali.html' },
  { keywords: ['muhurat', 'choghadiya', 'auspicious', 'panchang'], url: 'muhurat.html' }
];

/* ── Sync Hero Search Inputs Across Slides ── */
document.addEventListener('input', (e) => {
  if (e.target && e.target.classList.contains('puja-search-input')) {
    const val = e.target.value;
    document.querySelectorAll('.puja-search-input').forEach(input => {
      if (input !== e.target) {
        input.value = val;
      }
    });
  }
});

window.routeSearch = function(term) {
  if(!term) {
    window.location.href = 'book-a-pandit.html';
    return;
  }
  const q = term.toLowerCase().trim();
  for(let item of SEARCH_MAP) {
    if(item.keywords.some(k => q.includes(k))) {
      window.location.href = item.url;
      return;
    }
  }
  window.location.href = 'book-a-pandit.html';
};

/* ── Search Suggestions & Router ── */
function initSearch(inputId) {
  const inp = document.getElementById(inputId);
  if(!inp) return;

  const suggs = [
    { label: 'Rudrabhishek Puja', icon: '', category: 'Puja' },
    { label: 'Griha Pravesh Puja', icon: '', category: 'Puja' },
    { label: 'Vivah Sanskar (Wedding)', icon: '', category: 'Ceremony' },
    { label: 'Satyanarayan Katha', icon: '', category: 'Katha' },
    { label: 'Havan / Homa', icon: '', category: 'Ritual' },
    { label: 'Ganesh Puja', icon: '', category: 'Puja' },
    { label: 'Navgraha Puja', icon: '', category: 'Shanti' },
    { label: 'Namkaran Sanskar', icon: '', category: 'Ceremony' },
    { label: 'Lakshmi Puja', icon: '', category: 'Puja' },
    { label: 'Shradh / Pitru Puja', icon: '', category: 'Puja' },
    { label: 'Astrology Consultation', icon: '', category: 'Service' },
    { label: 'Free Janam Kundali', icon: '', category: 'Report' },
    { label: 'Today\'s Shubh Muhurat', icon: '', category: 'Timing' }
  ];

  let dd = inp.parentElement.querySelector('.search-dd-box');
  if(!dd) {
    dd = document.createElement('div');
    dd.className = 'search-dd-box';
    dd.style.cssText = `
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: #ffffff;
      border-radius: 14px;
      box-shadow: 0 12px 40px rgba(0,0,0,.35);
      border: 1.5px solid #d4b88a;
      max-height: 280px;
      overflow-y: auto;
      display: none;
      z-index: 99999;
      color: #2a1210;
      padding: 6px 0;
    `;
    inp.parentElement.style.position = 'relative';
    inp.parentElement.appendChild(dd);
  }

  function renderList(items) {
    if(!items.length) {
      const currentVal = inp.value.trim();
      if(!currentVal) {
        dd.style.display = 'none';
        return;
      }
      dd.innerHTML = `
        <div class="s-dd-item" data-val="${currentVal}" style="
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-size: .88rem;
          font-weight: 600;
          color: #2a1210;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span>Search for "<strong>${currentVal}</strong>"</span>
        </div>
      `;
      dd.style.display = 'block';
      const fallbackEl = dd.querySelector('.s-dd-item');
      fallbackEl.addEventListener('mouseover', () => fallbackEl.style.background = 'rgba(70,26,25,.07)');
      fallbackEl.addEventListener('mouseout', () => fallbackEl.style.background = 'transparent');
      fallbackEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        dd.style.display = 'none';
        routeSearch(currentVal);
      });
      return;
    }

    dd.innerHTML = items.map(item => `
      <div class="s-dd-item" data-val="${item.label}" style="
        padding: 10px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-size: .88rem;
        font-weight: 600;
        color: #2a1210;
        transition: background .2s;
      ">
        <span style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.1rem">${item.icon}</span>
          <span>${item.label}</span>
        </span>
        <span style="font-size:.72rem;color:#8a3d3b;background:rgba(70,26,25,.08);padding:3px 8px;border-radius:10px;font-weight:700">${item.category}</span>
      </div>
    `).join('');

    dd.style.display = 'block';

    dd.querySelectorAll('.s-dd-item').forEach(el => {
      el.addEventListener('mouseover', () => el.style.background = 'rgba(70,26,25,.07)');
      el.addEventListener('mouseout', () => el.style.background = 'transparent');
      el.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const val = el.dataset.val;
        inp.value = val;
        dd.style.display = 'none';
        routeSearch(val);
      });
    });
  }

  function filterAndShow() {
    const q = inp.value.trim().toLowerCase();
    if(!q) {
      renderList(suggs.slice(0, 6));
      return;
    }
    const matches = suggs.filter(s => s.label.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    renderList(matches);
  }

  inp.addEventListener('focus', filterAndShow);
  inp.addEventListener('input', filterAndShow);

  const goBtn = inp.parentElement.querySelector('.btn-search-go');
  if(goBtn) {
    goBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dd.style.display = 'none';
      routeSearch(inp.value);
    });
  }

  document.addEventListener('mousedown', e => {
    if(!inp.parentElement.contains(e.target)) dd.style.display = 'none';
  });

  inp.addEventListener('keydown', e => {
    if(e.key === 'Escape') dd.style.display = 'none';
    if(e.key === 'Enter') {
      e.preventDefault();
      dd.style.display = 'none';
      routeSearch(inp.value);
    }
  });
}

/* ── Smooth Anchor Scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if(id==='#') return;
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior:'smooth' }); }
    });
  });
}

/* ── Hero Slider ── */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  const prev   = document.getElementById('slide-prev');
  const next   = document.getElementById('slide-next');
  if(!slides.length) return;
  let cur=0, timer=null;
  const go=i=>{
    slides[cur].classList.remove('active'); dots[cur]?.classList.remove('active');
    cur=(i+slides.length)%slides.length;
    slides[cur].classList.add('active'); dots[cur]?.classList.add('active');
    const c=slides[cur].querySelector('.hero-content');
    if(c){c.style.animation='none';c.offsetHeight;c.style.animation='';}
  };
  const startAuto=()=>{ clearInterval(timer); timer=setInterval(()=>go(cur+1),5500); };
  prev?.addEventListener('click',()=>{go(cur-1);startAuto();});
  next?.addEventListener('click',()=>{go(cur+1);startAuto();});
  dots.forEach((d,i)=>d.addEventListener('click',()=>{go(i);startAuto();}));
  let tx=0;
  const hero=document.getElementById('hero');
  hero?.addEventListener('touchstart',e=>{tx=e.changedTouches[0].clientX;},{passive:true});
  hero?.addEventListener('touchend',e=>{const d=tx-e.changedTouches[0].clientX;if(Math.abs(d)>50){d>0?go(cur+1):go(cur-1);startAuto();}},{passive:true});
  startAuto();
}

/* ── Booking Form ── */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if(!form) return;
  const dateInp = document.getElementById('puja-date');
  if(dateInp) dateInp.min = new Date().toISOString().split('T')[0];
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = document.getElementById('full-name')?.value?.trim();
    const phone = document.getElementById('phone')?.value?.trim();
    const puja  = document.getElementById('puja-type')?.value;
    const date  = document.getElementById('puja-date')?.value;
    if(!puja)  { showToast('Please select a puja type.','error'); return; }
    if(!date)  { showToast('Please select a date.','error'); return; }
    if(!name)  { showToast('Please enter your full name.','error'); return; }
    if(!phone||phone.replace(/\D/g,'').length<10) { showToast('Please enter a valid 10-digit mobile number.','error'); return; }
    const btn = form.querySelector('.btn-submit');
    btn.textContent='Booking Confirmed'; btn.style.background='linear-gradient(135deg,#2e7d32,#43a047)'; btn.disabled=true;
    showToast('Booking submitted! Our team will contact you within 30 minutes.','success');
    setTimeout(()=>{ btn.textContent='Book Pandit Now'; btn.style.background=''; btn.disabled=false; form.reset(); },4000);
  });
  // Radio toggles
  document.querySelectorAll('.radio-opt').forEach(opt=>{
    opt.addEventListener('click',()=>{
      const name=opt.querySelector('input')?.name;
      document.querySelectorAll(`.radio-opt input[name="${name}"]`).forEach(r=>{r.closest('.radio-opt')?.classList.remove('checked');});
      opt.querySelector('input').checked=true; opt.classList.add('checked');
    });
  });
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent! We will reply within 24 hours.','success');
    form.reset();
  });
}

/* ── REAL-TIME CALENDAR & MUHURAT WIDGET ── */
/* ── FAQ Accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-a').style.maxHeight = '0';
      });
      if(!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
}

function initRealtimeCalendar() {
  const calDays = document.getElementById('cal-days-grid');
  const monthTitle = document.getElementById('cal-month-title');
  const liveClock = document.getElementById('live-clock-time');
  const liveDate = document.getElementById('live-clock-date');
  const chogTitle = document.getElementById('chog-current-title');
  const chogTime = document.getElementById('chog-current-time');
  if (!calDays || !monthTitle) return;

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // Live Ticking Clock
  function updateClock() {
    const now = new Date();
    if (liveClock) liveClock.textContent = now.toLocaleTimeString('en-US', { hour12: true });
    if (liveDate) liveDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
    
    // Live Choghadiya Status based on current hour
    const hrs = now.getHours();
    let currentChog = { name: 'Amrit (Most Auspicious)', time: '09:00 AM – 10:30 AM' };
    if (hrs >= 6 && hrs < 7.5) currentChog = { name: 'Udveg (Avoid New Start)', time: '06:00 AM – 07:30 AM' };
    else if (hrs >= 7.5 && hrs < 9) currentChog = { name: 'Char (Good for Travel)', time: '07:30 AM – 09:00 AM' };
    else if (hrs >= 9 && hrs < 10.5) currentChog = { name: 'Labh (Best for Business)', time: '09:00 AM – 10:30 AM' };
    else if (hrs >= 10.5 && hrs < 12) currentChog = { name: 'Amrit (All Auspicious)', time: '10:30 AM – 12:00 PM' };
    else if (hrs >= 12 && hrs < 13.5) currentChog = { name: 'Kaal (Inauspicious)', time: '12:00 PM – 01:30 PM' };
    else if (hrs >= 13.5 && hrs < 15) currentChog = { name: 'Shubh (Religious Work)', time: '01:30 PM – 03:00 PM' };
    else if (hrs >= 15 && hrs < 16.5) currentChog = { name: 'Rog (Avoid Major Work)', time: '03:00 PM – 04:30 PM' };
    else if (hrs >= 16.5 && hrs < 18) currentChog = { name: 'Udveg (Govt Work)', time: '04:30 PM – 06:00 PM' };
    else currentChog = { name: 'Shubh / Amrit (Evening Shubh Muhurat)', time: '06:00 PM – 09:00 PM' };

    if (chogTitle) chogTitle.textContent = currentChog.name;
    if (chogTime) chogTime.textContent = currentChog.time;
  }

  setInterval(updateClock, 1000);
  updateClock();

  // Render Calendar Grid
  function renderCalendar(year, month) {
    monthTitle.textContent = `${monthNames[month]} ${year}`;
    calDays.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();
    const today = new Date();

    // Previous month padding
    for (let i = firstDay - 1; i >= 0; i--) {
      const cell = document.createElement('div');
      cell.className = 'cal-day-cell other-month';
      cell.textContent = prevDays - i;
      calDays.appendChild(cell);
    }

    // Days in month
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement('div');
      cell.className = 'cal-day-cell';
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      if (isToday) cell.classList.add('today');
      
      cell.innerHTML = `<span>${day}</span><div class="cal-day-dot"></div>`;
      cell.addEventListener('click', () => {
        document.querySelectorAll('.cal-day-cell.selected').forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
        showToast(`Selected ${monthNames[month]} ${day}, ${year} for Muhurat check`, 'info');
      });
      calDays.appendChild(cell);
    }
  }

  document.getElementById('cal-prev')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentYear, currentMonth);
  });

  document.getElementById('cal-next')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar(currentYear, currentMonth);
  });

  renderCalendar(currentYear, currentMonth);
}

/* ── Init All ── */
function initAll() {
  if(document.getElementById('header-root')) renderHeader();
  if(document.getElementById('footer-root')) renderFooter();
  initBackTop();
  initReveal();
  initCounters();
  initFAQ();
  initSearch('puja-search');
  initSearch('puja-search-2');
  initSmoothScroll();
  initSlider();
  initBookingForm();
  initContactForm();
  initRealtimeCalendar();
  if(window.initGoogleTranslate) window.initGoogleTranslate();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
