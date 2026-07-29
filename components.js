/* ═══════════════════════════════════════════════════
   UPASANA — Shared Components (Header + Footer)
   ═══════════════════════════════════════════════════ */

const SITE = {
  name: 'Upasana',
  phone: '+91 95117 92924',
  email: 'support@upasana.in',
  address: 'Surat, Gujarat, India – 395009',
  hours: 'Mon – Sun: 9:00 AM – 7:00 PM',
  whatsapp: 'https://wa.me/919511792924?text=Hello,%20I%20Want%20To%20Book%20A%20Pandit',
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
    'sec.services.tag':   '🙏 Our Services',
    'sec.services.title': 'Sacred Services for Every Occasion',
    'sec.services.sub':   'From daily pujas to grand ceremonies — we have verified pandits for every ritual',
    'sec.hiw.tag':        '✨ Simple Process',
    'sec.hiw.title':      'How It Works',
    'sec.hiw.sub':        'Book a pandit in just 3 easy steps',
    'sec.hiw.1.title':    'Search & Select',
    'sec.hiw.1.desc':     'Search for your puja or ceremony and select from verified pandits in your area.',
    'sec.hiw.2.title':    'Book & Confirm',
    'sec.hiw.2.desc':     'Choose your date, time and location. Pay securely online or cash on the day.',
    'sec.hiw.3.title':    'Pandit Arrives',
    'sec.hiw.3.desc':     'Your verified pandit arrives on time with all required samagri for the puja.',
    'sec.testimonials.tag':   '💬 Testimonials',
    'sec.testimonials.title': 'What Our Devotees Say',
    'sec.faq.tag':        '❓ FAQs',
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
    'footer.services':'Our Services',
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
    'book.submit':    'Book My Pandit Now 🙏',
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
    'sec.services.tag':   '🙏 हमारी सेवाएं',
    'sec.services.title': 'हर अवसर के लिए पवित्र सेवाएं',
    'sec.services.sub':   'दैनिक पूजा से लेकर भव्य समारोह तक — हर अनुष्ठान के लिए सत्यापित पंडित',
    'sec.hiw.tag':        '✨ सरल प्रक्रिया',
    'sec.hiw.title':      'यह कैसे काम करता है',
    'sec.hiw.sub':        'केवल 3 आसान चरणों में पंडित बुक करें',
    'sec.hiw.1.title':    'खोजें और चुनें',
    'sec.hiw.1.desc':     'अपनी पूजा या समारोह खोजें और अपने क्षेत्र में सत्यापित पंडितों में से चुनें।',
    'sec.hiw.2.title':    'बुक करें और पुष्टि करें',
    'sec.hiw.2.desc':     'अपनी तिथि, समय और स्थान चुनें। ऑनलाइन या दिन पर नकद सुरक्षित रूप से भुगतान करें।',
    'sec.hiw.3.title':    'पंडित आते हैं',
    'sec.hiw.3.desc':     'आपके सत्यापित पंडित पूजा के लिए आवश्यक सामग्री के साथ समय पर आते हैं।',
    'sec.testimonials.tag':   '💬 प्रशंसापत्र',
    'sec.testimonials.title': 'हमारे भक्त क्या कहते हैं',
    'sec.faq.tag':        '❓ सामान्य प्रश्न',
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
    'book.submit':    'अभी पंडित बुक करें 🙏',
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
    'sec.services.tag':   '🙏 आमच्या सेवा',
    'sec.services.title': 'प्रत्येक प्रसंगासाठी पवित्र सेवा',
    'sec.services.sub':   'दैनंदिन पूजेपासून भव्य समारंभापर्यंत — प्रत्येक विधीसाठी प्रमाणित पंडित',
    'sec.hiw.tag':        '✨ सोपी प्रक्रिया',
    'sec.hiw.title':      'हे कसे कार्य करते',
    'sec.hiw.sub':        'फक्त ३ सोप्या चरणांमध्ये पंडित बुक करा',
    'sec.hiw.1.title':    'शोधा आणि निवडा',
    'sec.hiw.1.desc':     'तुमची पूजा किंवा समारंभ शोधा आणि तुमच्या परिसरातील प्रमाणित पंडितांमधून निवडा.',
    'sec.hiw.2.title':    'बुक करा आणि पुष्टी करा',
    'sec.hiw.2.desc':     'तारीख, वेळ आणि ठिकाण निवडा. ऑनलाइन किंवा दिवशी रोखीने पेमेंट करा.',
    'sec.hiw.3.title':    'पंडित येतात',
    'sec.hiw.3.desc':     'तुमचे प्रमाणित पंडित पूजेसाठी आवश्यक सामग्रीसह वेळेवर येतात.',
    'sec.testimonials.tag':   '💬 अभिप्राय',
    'sec.testimonials.title': 'आमचे भाविक काय म्हणतात',
    'sec.faq.tag':        '❓ वारंवार विचारले जाणारे प्रश्न',
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
    'book.submit':    'आत्ता पंडित बुक करा 🙏',
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
    'sec.services.tag':   '🙏 અમારી સેવાઓ',
    'sec.services.title': 'દરેક પ્રસંગ માટે પવિત્ર સેવાઓ',
    'sec.services.sub':   'રોજિંદી પૂજાથી ભવ્ય સમારોહ સુધી — દરેક વિધિ માટે ચકાસેલ પંડિત',
    'sec.hiw.tag':        '✨ સરળ પ્રક્રિયા',
    'sec.hiw.title':      'તે કેવી રીતે કાર્ય કરે છે',
    'sec.hiw.sub':        'ફક્ત ૩ સરળ પગલામાં પંડિત બુક કરો',
    'sec.hiw.1.title':    'શોધો અને પસંદ કરો',
    'sec.hiw.1.desc':     'તમારી પૂજા અથવા સમારોહ શોધો અને તમારા વિસ્તારમાં ચકાસેલ પંડિતોમાંથી પસંદ કરો.',
    'sec.hiw.2.title':    'બુક કરો અને પુષ્ટિ કરો',
    'sec.hiw.2.desc':     'તારીખ, સમય અને સ્થળ પસંદ કરો. ઓનલાઇન અથવા રોકડ ચૂકવો.',
    'sec.hiw.3.title':    'પંડિત આવે છે',
    'sec.hiw.3.desc':     'તમારા ચકાસેલ પંડિત પૂજા માટે જરૂરી સામગ્રી સાથે સમયસર આવે છે.',
    'sec.testimonials.tag':   '💬 પ્રશંસાપત્ર',
    'sec.testimonials.title': 'અમારા ભક્તો શું કહે છે',
    'sec.faq.tag':        '❓ વારંવાર પૂછાતા પ્રશ્નો',
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
    'book.submit':    'હમણાં પંડિત બુક કરો 🙏',
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

        const savedLang = localStorage.getItem('upasana_lang') || 'en';
        if (savedLang !== 'en') {
          setTimeout(() => window.triggerTranslate(savedLang, false), 300);
        }
      } catch(e) {}
    };
    const s = document.createElement('script');
    s.id = 'gt-script';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }
};

window.triggerTranslate = function(langCode, isUserClick = false) {
  const host = window.location.hostname;
  const cookieVal = "/en/" + langCode;
  document.cookie = "googtrans=" + cookieVal + "; path=/;";
  if (host) document.cookie = "googtrans=" + cookieVal + "; domain=" + host + "; path=/;";

  let sel = document.querySelector('.goog-te-combo');
  if (sel) {
    if (sel.value !== langCode) {
      sel.value = langCode;
      sel.dispatchEvent(new Event('change'));
    }
  } else if (isUserClick) {
    // Only reload ONCE on explicit user click if element isn't in memory yet
    window.location.reload();
  }
};

/* ── Get current language ── */
window.getCurrentLang = function() {
  return localStorage.getItem('upasana_lang') || 'en';
};


/* ── Detect active page ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

/* ── Logo HTML (supports custom logo file) ── */
function logoHTML(lightClass = '') {
  return `
    <a href="index.html" class="logo-link" aria-label="Upasana Home">
      <img src="assets/logo.png" alt="Upasana Logo" class="logo-img" onerror="this.src='Logo.jpeg';this.onerror=null;">
    </a>`;
}

/* ── Service mega-menu items ── */
const SERVICES = [
  { icon:'🔱', label:'Rudrabhishek Puja',  href:'rudrabhishek.html' },
  { icon:'🏠', label:'Griha Pravesh',        href:'griha-pravesh.html' },
  { icon:'💍', label:'Vivah Sanskar',        href:'vivah.html' },
  { icon:'📖', label:'Satyanarayan Katha',   href:'satyanarayan.html' },
  { icon:'🔥', label:'Havan / Homa',         href:'havan.html' },
  { icon:'🐘', label:'Ganesh Puja',           href:'ganesh-puja.html' },
  { icon:'🌟', label:'Navgraha Puja',         href:'navgraha.html' },
  { icon:'👶', label:'Namkaran Sanskar',      href:'namkaran.html' },
  { icon:'🪔', label:'Lakshmi Puja',          href:'lakshmi-puja.html' },
  { icon:'🙏', label:'Shradh / Pitru Puja',  href:'shradh-puja.html' },
];

/* ── Build Header ── */
function renderHeader() {
  const ddItems = SERVICES.map(s => `
    <a href="${s.href}" class="dd-item">
      <div class="dd-icon">${s.icon}</div>
      <span>${s.label}</span>
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
                <button class="nav-btn">
                  <span data-i18n="nav.services">Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div class="dropdown">
                  <div class="dd-grid" style="grid-template-columns:1fr 1fr">${ddItems}</div>
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
                <div class="lang-dd-item active" data-lang="en" data-label="EN">🇬🇧 English</div>
                <div class="lang-dd-item" data-lang="hi" data-label="हि">🇮🇳 हिंदी</div>
                <div class="lang-dd-item" data-lang="mr" data-label="म">🇮🇳 मराठी</div>
                <div class="lang-dd-item" data-lang="gu" data-label="ગુ">🇮🇳 ગુજરાતી</div>
              </div>
            </div>
            <a href="book-a-pandit.html" class="btn-gold" style="padding:9px 20px;font-size:.85rem" data-i18n="nav.book">Book A Pandit</a>
            <button class="btn-primary" style="padding:9px 18px;font-size:.85rem" id="login-btn-hdr" data-i18n="nav.login">Login</button>
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
        <span style="font-size:.78rem;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em">🌐 Language</span>
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
      <div class="modal-box">
        <button class="modal-close" id="modal-close">✕</button>
        <h2>Welcome Back 🙏</h2>
        <p>Sign in to manage your bookings and access premium features</p>
        <div class="modal-tabs">
          <div class="modal-tab active" data-tab="login">Login</div>
          <div class="modal-tab" data-tab="register">Register</div>
        </div>
        <div id="tab-login">
          <div class="form-group" style="margin-bottom:14px">
            <label>Mobile Number</label>
            <input type="tel" class="form-control" placeholder="+91 XXXXX XXXXX">
          </div>
          <div class="form-group" style="margin-bottom:14px">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Enter your password">
          </div>
          <button class="btn-primary" style="width:100%;padding:13px;margin-top:4px" onclick="showToast('OTP sent to your mobile!','success')">Send OTP & Login</button>
          <p style="font-size:.8rem;color:var(--text3);text-align:center;margin-top:14px">Don't have an account? <a href="#" style="color:var(--dark);font-weight:700" onclick="switchTab('register')">Register here</a></p>
        </div>
        <div id="tab-register" style="display:none">
          <div class="form-row" style="margin-bottom:14px">
            <div class="form-group"><label>First Name</label><input type="text" class="form-control" placeholder="First name"></div>
            <div class="form-group"><label>Last Name</label><input type="text" class="form-control" placeholder="Last name"></div>
          </div>
          <div class="form-group" style="margin-bottom:14px">
            <label>Mobile Number</label>
            <input type="tel" class="form-control" placeholder="+91 XXXXX XXXXX">
          </div>
          <div class="form-group" style="margin-bottom:14px">
            <label>Email Address</label>
            <input type="email" class="form-control" placeholder="your@email.com">
          </div>
          <button class="btn-gold" style="width:100%;padding:13px;margin-top:4px" onclick="showToast('Registration successful! OTP sent.','success')">Create Account</button>
        </div>
      </div>
    </div>`;

  initHeaderScripts();
}

/* ── Build Footer ── */
function renderFooter() {
  const svcLinks = SERVICES.slice(0, 8).map(s => `<li><a href="${s.href}">${s.label}</a></li>`).join('');

  document.getElementById('footer-root').innerHTML = `
    <footer class="site-footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div>
              ${logoHTML('logo-text-light')}
              <p class="footer-tagline">Connecting devotees with authentic Vedic pandits for every sacred occasion — with love, trust, and tradition.</p>
              <div class="social-links">
                <a href="#" class="soc-link" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="#" class="soc-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
                </a>
                <a href="#" class="soc-link" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                </a>
                <a href="#" class="soc-link" aria-label="Twitter/X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.259 5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 class="footer-heading">Our Services</h4>
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
                <p>📍 ${SITE.address}</p>
                <p>📞 <a href="tel:${SITE.phone}">${SITE.phone}</a></p>
                <p>📧 <a href="mailto:${SITE.email}">${SITE.email}</a></p>
                <p>🕘 ${SITE.hours}</p>
              </div>
              <div class="footer-badges">
                <div class="ftr-badge">▶ Google Play Store</div>
                <div class="ftr-badge"> Apple App Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-btm-inner">
            <p>© 2025 Upasana. All rights reserved. 🙏</p>
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
    <button class="back-top" id="back-top" aria-label="Back to top">↑</button>`;
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
    const curLang = localStorage.getItem('upasana_lang') || 'en';
    if(curLang === lang && langLabel && langLabel.textContent === label) {
      if(langDd) langDd.classList.remove('open');
      return;
    }

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
    showToast(`Language set to ${langNames[lang] || 'English'}`, 'success');
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

/* ── Toast Notification ── */
window.showToast = function(msg, type='info') {
  document.querySelectorAll('.u-toast').forEach(t => t.remove());
  const colors = { success:'#2e7d32', error:'#c62828', info:'#461a19', warn:'#e65100' };
  const icons  = { success:'✅', error:'❌', info:'🙏', warn:'⚠️' };
  if(!document.getElementById('toast-kf')) {
    const s = document.createElement('style');
    s.id = 'toast-kf';
    s.textContent = '@keyframes tIn{from{transform:translateX(110%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes tOut{from{transform:translateX(0);opacity:1}to{transform:translateX(110%);opacity:0}}';
    document.head.appendChild(s);
  }
  const t = document.createElement('div');
  t.className = 'u-toast';
  t.style.cssText = `position:fixed;top:96px;right:22px;z-index:99999;background:${colors[type]||colors.info};color:#fff;padding:14px 20px;border-radius:14px;max-width:340px;font-size:.88rem;font-weight:600;line-height:1.5;box-shadow:0 8px 30px rgba(0,0,0,.25);display:flex;align-items:flex-start;gap:10px;font-family:'Inter',sans-serif;animation:tIn .4s ease both`;
  t.innerHTML = `<span style="font-size:1.1rem;flex-shrink:0">${icons[type]||'🙏'}</span><span>${msg}</span>`;
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
  const fmt = n => n>=1000 ? (n/1000).toFixed(0)+'K' : n.toString();
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target, target = parseInt(el.dataset.target,10);
      let cur=0; const step=target/(2000/16);
      const tick=()=>{ cur=Math.min(cur+step,target); el.textContent=fmt(Math.floor(cur))+'+'; if(cur<target) requestAnimationFrame(tick); };
      tick(); obs.unobserve(el);
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
    { label: 'Rudrabhishek Puja', icon: '🔱', category: 'Puja' },
    { label: 'Griha Pravesh Puja', icon: '🏠', category: 'Puja' },
    { label: 'Vivah Sanskar (Wedding)', icon: '💍', category: 'Ceremony' },
    { label: 'Satyanarayan Katha', icon: '📖', category: 'Katha' },
    { label: 'Havan / Homa', icon: '🔥', category: 'Ritual' },
    { label: 'Ganesh Puja', icon: '🐘', category: 'Puja' },
    { label: 'Navgraha Puja', icon: '🌟', category: 'Shanti' },
    { label: 'Namkaran Sanskar', icon: '👶', category: 'Ceremony' },
    { label: 'Lakshmi Puja', icon: '🪔', category: 'Puja' },
    { label: 'Shradh / Pitru Puja', icon: '🙏', category: 'Puja' },
    { label: 'Astrology Consultation', icon: '🔮', category: 'Service' },
    { label: 'Free Janam Kundali', icon: '🪐', category: 'Report' },
    { label: 'Today\'s Shubh Muhurat', icon: '📅', category: 'Timing' }
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
          <span>🔍</span>
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
    btn.textContent='Booking Confirmed ✅'; btn.style.background='linear-gradient(135deg,#2e7d32,#43a047)'; btn.disabled=true;
    showToast('🙏 Booking submitted! Our team will contact you within 30 minutes.','success');
    setTimeout(()=>{ btn.textContent='Book Pandit Now 🙏'; btn.style.background=''; btn.disabled=false; form.reset(); },4000);
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
    showToast('🙏 Message sent! We will reply within 24 hours.','success');
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
    else currentChog = { name: 'Shubh / Amrit (Evening Choghadiya)', time: '06:00 PM – 09:00 PM' };

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
        showToast(`📅 Selected ${monthNames[month]} ${day}, ${year} for Muhurat check`, 'info');
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
