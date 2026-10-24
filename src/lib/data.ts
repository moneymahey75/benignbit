import {
  Globe,
  Code,
  Smartphone,
  Megaphone,
  Search,
  Palette,
  ShoppingCart,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: typeof Globe;
  features: string[];
  process: { title: string; description: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    short: 'Fast, responsive, SEO-friendly websites that convert visitors into customers.',
    description:
      'We build high-performance websites using modern frameworks like Astro, React, and Next.js. Every site is optimized for Core Web Vitals, search engines, and conversions — giving your business a professional online presence that loads instantly and works flawlessly on every device.',
    icon: Globe,
    features: [
      'Responsive design for mobile, tablet and desktop',
      'Core Web Vitals optimized for speed',
      'Semantic, accessible HTML structure',
      'SEO-friendly architecture and metadata',
      'CMS integration for easy content updates',
      'E-commerce and payment gateway integration',
    ],
    process: [
      { title: 'Discovery', description: 'We understand your business, audience and goals to plan the right website.' },
      { title: 'Design', description: 'We craft a pixel-perfect, brand-aligned UI and review it with you.' },
      { title: 'Develop', description: 'We build the site with clean, fast, modern code and best practices.' },
      { title: 'Deploy', description: 'We launch on your domain with SSL, analytics and monitoring in place.' },
    ],
    benefits: [
      'Faster load times keep visitors engaged',
      'Higher search rankings with SEO built in',
      'More leads with conversion-focused layouts',
      'Easy to manage without technical skills',
    ],
    faqs: [
      { q: 'How long does a website take?', a: 'A standard business website takes 2–4 weeks. Larger platforms with custom features can take 6–10 weeks.' },
      { q: 'Will my website be mobile friendly?', a: 'Yes. Every site we build is fully responsive and tested across phones, tablets and desktops.' },
      { q: 'Do you provide hosting?', a: 'We help you choose and set up reliable hosting and can manage it for you as part of a care plan.' },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    short: 'Custom software, dashboards and internal tools built to fit your operations.',
    description:
      'From CRM systems to inventory management and internal dashboards, we design and build custom software that automates your workflows and scales with your business. Our solutions are secure, maintainable and tailored precisely to how your team works.',
    icon: Code,
    features: [
      'Custom business applications',
      'Admin dashboards and reporting tools',
      'API development and integrations',
      'Role-based access and security',
      'Cloud deployment and CI/CD',
      'Ongoing maintenance and support',
    ],
    process: [
      { title: 'Requirements', description: 'We document your workflows and define the features you need.' },
      { title: 'Architecture', description: 'We design a scalable, secure technical architecture.' },
      { title: 'Build', description: 'We develop in agile sprints with regular demos and feedback.' },
      { title: 'Launch & Support', description: 'We deploy, train your team and provide ongoing support.' },
    ],
    benefits: [
      'Automate repetitive manual work',
      'Single source of truth for your data',
      'Scalable as your business grows',
      'Secure and reliable by design',
    ],
    faqs: [
      { q: 'Do you build cloud-based software?', a: 'Yes. We deploy on AWS, GCP, Supabase and other modern cloud platforms.' },
      { q: 'Can you integrate with our existing tools?', a: 'We integrate with CRMs, ERPs, payment gateways and most third-party APIs.' },
      { q: 'Do you offer post-launch support?', a: 'Yes, we offer flexible maintenance and support retainers.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'Native and cross-platform iOS and Android apps with delightful UX.',
    description:
      'We build mobile apps that users love — from MVPs to full-scale products. Using React Native and modern native tooling, we deliver apps for iOS and Android that are fast, reliable and ready for the app stores.',
    icon: Smartphone,
    features: [
      'iOS and Android cross-platform apps',
      'React Native and native development',
      'Push notifications and real-time updates',
      'Offline support and local storage',
      'App Store and Play Store deployment',
      'Analytics and crash reporting',
    ],
    process: [
      { title: 'Strategy', description: 'We define the app concept, user journey and MVP scope.' },
      { title: 'UX/UI Design', description: 'We design an intuitive, on-brand mobile experience.' },
      { title: 'Development', description: 'We build in sprints with test builds you can try on your phone.' },
      { title: 'Launch', description: 'We publish to the stores and monitor performance post-launch.' },
    ],
    benefits: [
      'Reach customers on the devices they use most',
      'Build brand loyalty with a native feel',
      'Work offline and sync when online',
      'Drive engagement with push notifications',
    ],
    faqs: [
      { q: 'Do you build for both iOS and Android?', a: 'Yes, we use cross-platform tooling to ship to both stores from one codebase.' },
      { q: 'Can you update an existing app?', a: 'Yes, we can audit, refactor and extend existing applications.' },
      { q: 'Will you handle store submission?', a: 'We manage the full App Store and Play Store submission process for you.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Data-driven campaigns across search, social and email that grow revenue.',
    description:
      'We run performance-focused digital marketing campaigns that bring qualified traffic and measurable ROI. From Google Ads to social media and email marketing, we handle strategy, execution and reporting so you always know what is working.',
    icon: Megaphone,
    features: [
      'Google Ads and Meta Ads management',
      'Social media marketing and content',
      'Email marketing automation',
      'Funnel building and landing pages',
      'Conversion rate optimization',
      'Monthly performance reporting',
    ],
    process: [
      { title: 'Audit', description: 'We review your current channels, audience and competitors.' },
      { title: 'Strategy', description: 'We build a channel plan with clear KPIs and budgets.' },
      { title: 'Execute', description: 'We launch campaigns, creatives and landing pages.' },
      { title: 'Optimize', description: 'We continuously test and refine to improve ROI.' },
    ],
    benefits: [
      'Reach the right audience at the right time',
      'Track every rupee and dollar spent',
      'Scale spend with proven campaigns',
      'Build a predictable pipeline',
    ],
    faqs: [
      { q: 'What budget do I need to start?', a: 'We work with a range of budgets and will recommend a realistic starting point based on your goals.' },
      { q: 'How soon will I see results?', a: 'Paid campaigns can show results in weeks; organic channels compound over months.' },
      { q: 'Do you create ad creatives?', a: 'Yes, our team handles copy, design and video creatives for your campaigns.' },
    ],
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    short: 'Rank higher on Google with technical, on-page and off-page SEO.',
    description:
      'Our SEO services help your business rank on the first page of Google for the keywords your customers actually search. We combine technical SEO, content strategy and authoritative link building to deliver sustainable organic growth.',
    icon: Search,
    features: [
      'Technical site audits and fixes',
      'Keyword research and mapping',
      'On-page SEO and content optimization',
      'Local SEO and Google Business Profile',
      'Authority link building',
      'Rank tracking and monthly reports',
    ],
    process: [
      { title: 'Audit', description: 'We run a full technical and content audit of your site.' },
      { title: 'Strategy', description: 'We map keywords to pages and set a content roadmap.' },
      { title: 'Optimize', description: 'We fix technical issues and optimize existing pages.' },
      { title: 'Grow', description: 'We build content and links month over month to climb rankings.' },
    ],
    benefits: [
      'Consistent free traffic from Google',
      'Higher brand credibility and trust',
      'Better-qualified leads than paid ads',
      'Compounding returns over time',
    ],
    faqs: [
      { q: 'How long until I rank?', a: 'Most sites see meaningful movement in 3–6 months, with stronger results over 6–12 months.' },
      { q: 'Do you guarantee rankings?', a: 'No ethical SEO provider can guarantee #1. We guarantee best-practice work and transparent reporting.' },
      { q: 'Is local SEO included?', a: 'Yes, we optimize your Google Business Profile and local citations for your service area.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'User research and interface design that makes products feel effortless.',
    description:
      'We design digital products that are beautiful and easy to use. Through user research, wireframing, prototyping and usability testing, we create interfaces that reduce friction, increase conversions and delight your users.',
    icon: Palette,
    features: [
      'User research and persona development',
      'Wireframing and user flows',
      'High-fidelity UI design in Figma',
      'Interactive prototypes',
      'Design systems and component libraries',
      'Usability testing and iteration',
    ],
    process: [
      { title: 'Research', description: 'We study your users, competitors and business goals.' },
      { title: 'Wireframe', description: 'We map layouts and flows before any visual design.' },
      { title: 'Design', description: 'We create polished, brand-aligned interfaces in Figma.' },
      { title: 'Test & Handoff', description: 'We test with users and hand off developer-ready files.' },
    ],
    benefits: [
      'Reduce user confusion and drop-off',
      'Increase conversions with tested flows',
      'Consistent brand across every screen',
      'Faster development with design systems',
    ],
    faqs: [
      { q: 'Do you design for web and mobile?', a: 'Yes, we design responsive web interfaces and native mobile app screens.' },
      { q: 'What tools do you use?', a: 'We primarily work in Figma and can hand off to any development team.' },
      { q: 'Can you redesign an existing product?', a: 'Absolutely — we audit your current product and design an improved experience.' },
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  summary: string;
  description: string;
  results: { label: string; value: string }[];
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'shopwave-ecommerce',
    title: 'ShopWave E-commerce Platform',
    client: 'ShopWave Retail',
    category: 'Website Development',
    year: '2024',
    image: 'https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['E-commerce', 'React', 'Stripe', 'SEO'],
    summary: 'A full-featured online store with 10,000+ products and a 3x conversion lift.',
    description:
      'ShopWave needed a modern e-commerce platform to replace their legacy system. We built a blazing-fast storefront with intelligent search, one-page checkout, and SEO-optimized product pages. The result was a dramatic increase in both traffic and conversions within three months of launch.',
    results: [
      { label: 'Conversion rate', value: '3.2x' },
      { label: 'Page load time', value: '0.9s' },
      { label: 'Organic traffic', value: '+180%' },
      { label: 'Revenue', value: '+240%' },
    ],
  },
  {
    slug: 'fieldops-dashboard',
    title: 'FieldOps Management Suite',
    client: 'FieldOps Inc.',
    category: 'Software Development',
    year: '2024',
    image: 'https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['SaaS', 'Dashboard', 'React', 'Supabase'],
    summary: 'A field-service management dashboard handling 500+ daily jobs across teams.',
    description:
      'FieldOps manages teams of technicians across multiple cities. We built a real-time dashboard that handles job assignment, GPS tracking, invoicing and reporting — replacing spreadsheets and WhatsApp with a single source of truth.',
    results: [
      { label: 'Jobs managed daily', value: '500+' },
      { label: 'Admin time saved', value: '60%' },
      { label: 'Invoice errors', value: '-92%' },
      { label: 'User adoption', value: '98%' },
    ],
  },
  {
    slug: 'fittrack-mobile-app',
    title: 'FitTrack Fitness App',
    client: 'FitTrack Health',
    category: 'Mobile App Development',
    year: '2023',
    image: 'https://images.pexels.com/photos/20694602/pexels-photo-20694602.png?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['iOS', 'Android', 'React Native', 'Health'],
    summary: 'A cross-platform fitness app with 50,000+ downloads in six months.',
    description:
      'FitTrack wanted to help users build workout habits. We designed and built a cross-platform app with personalized plans, progress tracking and social challenges. The app hit 50,000 downloads and a 4.8-star rating within six months of launch.',
    results: [
      { label: 'Downloads', value: '50,000+' },
      { label: 'App store rating', value: '4.8★' },
      { label: 'Daily active users', value: '32%' },
      { label: 'Retention (30 day)', value: '47%' },
    ],
  },
  {
    slug: 'urbanbites-marketing',
    title: 'UrbanBites Growth Campaign',
    client: 'UrbanBites Restaurant Chain',
    category: 'Digital Marketing',
    year: '2024',
    image: 'https://images.pexels.com/photos/221043/pexels-photo-221043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Google Ads', 'Meta Ads', 'F&B', 'ROAS'],
    summary: 'A multi-channel ad campaign delivering 6x return on ad spend.',
    description:
      'UrbanBites wanted to grow online orders across their 12 locations. We built a hyper-local ad strategy across Google and Meta, paired with landing pages and email remarketing. The campaign delivered a 6x ROAS within the first quarter.',
    results: [
      { label: 'Return on ad spend', value: '6x' },
      { label: 'Online orders', value: '+210%' },
      { label: 'Cost per order', value: '-38%' },
      { label: 'Email list', value: '18,000+' },
    ],
  },
  {
    slug: 'legalpartners-seo',
    title: 'LegalPartners SEO Overhaul',
    client: 'LegalPartners Law Firm',
    category: 'SEO Services',
    year: '2023',
    image: 'https://images.pexels.com/photos/6672290/pexels-photo-6672290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['SEO', 'Local SEO', 'Content', 'Law'],
    summary: 'A technical SEO overhaul that took a law firm from page 5 to page 1.',
    description:
      'LegalPartners was invisible on Google for their key practice areas. We rebuilt their site architecture, fixed technical issues and executed a content and link strategy. Within nine months they ranked on page one for 40+ high-intent keywords.',
    results: [
      { label: 'Page-1 keywords', value: '40+' },
      { label: 'Organic traffic', value: '+320%' },
      { label: 'Inbound leads', value: '+175%' },
      { label: 'Time to rank', value: '9 mo' },
    ],
  },
  {
    slug: 'finpulse-uiux',
    title: 'FinPulse App Redesign',
    client: 'FinPulse Fintech',
    category: 'UI/UX Design',
    year: '2024',
    image: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Fintech', 'Figma', 'Design System', 'UX'],
    summary: 'A complete UX redesign that cut onboarding drop-off by 55%.',
    description:
      'FinPulse users were dropping off during onboarding. We ran user interviews, redesigned the flows, and built a scalable design system. The new experience reduced onboarding drop-off by 55% and lifted activation significantly.',
    results: [
      { label: 'Onboarding drop-off', value: '-55%' },
      { label: 'Activation rate', value: '+41%' },
      { label: 'Support tickets', value: '-30%' },
      { label: 'NPS', value: '+22' },
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'ShopWave Retail',
    quote:
      'BenignBit transformed our online store. Speed, design and conversions all improved dramatically. They felt like part of our team, not an outside vendor.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Operations Director',
    company: 'FieldOps Inc.',
    quote:
      'The dashboard they built replaced five different tools. Our team finally has one place to manage everything. Genuinely the best software investment we have made.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Founder',
    company: 'FitTrack Health',
    quote:
      'From concept to app store, BenignBit delivered. Our app looks great, works flawlessly and our users love it. The 4.8 rating speaks for itself.',
    rating: 5,
  },
  {
    name: 'Marco Bianchi',
    role: 'Marketing Head',
    company: 'UrbanBites',
    quote:
      'A 6x return on ad spend in the first quarter. The team understands performance marketing inside out. Highly recommended for any growing brand.',
    rating: 5,
  },
];

export const stats = [
  { label: 'Projects delivered', value: '250+' },
  { label: 'Happy clients', value: '120+' },
  { label: 'Years in business', value: '8+' },
  { label: 'Countries served', value: '15+' },
];

export const industries = [
  'E-commerce & Retail',
  'Healthcare & Fitness',
  'Finance & Fintech',
  'Education & E-learning',
  'Real Estate',
  'Food & Beverage',
  'Legal & Professional Services',
  'Logistics & Field Service',
];

export const companyInfo = {
  name: 'BenignBit',
  tagline: 'Crafting digital experiences that drive growth',
  email: 'money@benignbit.com',
  phone: '+91 (981) 544-2933',
  address: 'Sector 70, Mohali, Punjab, India',
  hours: 'Mon – Fri, 9:00 AM – 6:00 PM',
  social: {
    twitter: 'https://twitter.com/benignbit',
    linkedin: 'https://linkedin.com/company/benignbit',
    github: 'https://github.com/benignbit',
    instagram: 'https://instagram.com/benignbit',
  },
};
