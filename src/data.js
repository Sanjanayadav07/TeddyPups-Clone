export const PHONE = '+971 54 167 6733';
export const PHONE_HREF = 'tel:+971541676733';
// Original site pe email Cloudflare se protected hai, isliye placeholder. Apna/real email daalo.
export const EMAIL = 'hello@teddypups.example';

export const wa = (text = "Hi TeddyPups! I'd love to know more about your puppies.") =>
  `https://wa.me/971541676733?text=${encodeURIComponent(text)}`;

// Images abhi original site se load ho rahi hain. Final submission se pehle
// inhe download karke /public/media me rakh lena aur yeh helper badal dena.
const BASE = 'https://puppy.instabizweb.com/_next/image';
export const img = (path, w = 828) => `${BASE}?url=${encodeURIComponent(path)}&w=${w}&q=75`;

export const LOGO = img('/brand/logo.png', 128);

export const BREEDS = [
  { id: 'maltipoo', label: 'Maltipoo' },
  { id: 'pomeranian', label: 'Pomeranian' },
  { id: 'poodle', label: 'Poodle' },
  { id: 'cavapoo', label: 'Cavapoo' },
  { id: 'shih-tzu', label: 'Shih Tzu' },
];

export const PUPPIES = [
  { slug: 'maltipoo-max-male', name: 'Max', title: 'Max', breed: 'Maltipoo', breeds: ['maltipoo'], gender: 'boy', age: '3 months', video: true, origin: 'local', alt: 'Max, male Maltipoo puppy', src: '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp' },
  { slug: 'korean-teacup-maltipoo-female', title: 'Korean Teacup Maltipoo', breed: 'Korean Teacup Maltipoo', breeds: ['maltipoo'], gender: 'girl', age: '2 months', video: true, origin: 'imported', alt: 'Female Korean Teacup Maltipoo puppy', src: '/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg' },
  { slug: 'korean-teacup-poodle-female', title: 'Korean Teacup Poodle', breed: 'Korean Teacup Poodle', breeds: ['poodle'], gender: 'girl', age: '2 months', origin: 'imported', alt: 'Female Korean Teacup Poodle puppy', src: '/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg' },
  { slug: 'maltipoo-cavapoo-male', title: 'Maltipoo & Cavapoo', breed: 'Maltipoo & Cavapoo', breeds: ['maltipoo', 'cavapoo'], gender: 'boy', age: '3 months Maltipoo & 2 months Cavapoo', video: true, origin: 'local', alt: 'Male Maltipoo & Cavapoo puppy', src: '/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg' },
  { slug: 'toy-poodle-male-female', title: 'Toy Poodle', breed: 'Toy Poodle', breeds: ['poodle'], gender: 'boy & girl', age: '2 months', origin: 'local', alt: 'Toy Poodle puppy', src: '/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg' },
  { slug: 'maltipoo-female-2', title: 'Maltipoo', breed: 'Maltipoo', breeds: ['maltipoo'], gender: 'girl', age: '3 months', video: true, origin: 'local', alt: 'Female Maltipoo puppy', src: '/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg' },
  { slug: 'pomeranian-female', title: 'Pomeranian', breed: 'Pomeranian', breeds: ['pomeranian'], gender: 'girl', age: '3 months', origin: 'local', alt: 'Female Pomeranian puppy', src: '/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg' },
  { slug: 'copper-male', name: 'Copper', title: 'Copper', breed: 'Cavapoo', breeds: ['cavapoo'], gender: 'boy', age: '2 months', origin: 'local', alt: 'Copper, male Cavapoo puppy', src: '/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg' },
  { slug: 'shitzu-female', title: 'Shih Tzu', breed: 'Shih Tzu', breeds: ['shih-tzu'], gender: 'girl', age: '2 months', origin: 'local', alt: 'Female Shih Tzu puppy', src: '/media/qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg' },
  { slug: 'shitzu-male', title: 'Shih Tzu', breed: 'Shih Tzu', breeds: ['shih-tzu'], gender: 'boy', age: '2 months', origin: 'local', alt: 'Male Shih Tzu puppy', src: '/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg' },
  { slug: 'maltipoo-female-1', title: 'Maltipoo', breed: 'Maltipoo', breeds: ['maltipoo'], gender: 'girl', age: '2.5 months', origin: 'local', alt: 'Female Maltipoo puppy', src: '/media/wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg' },
  { slug: 'maltipoo-female', title: 'Maltipoo', breed: 'Maltipoo', breeds: ['maltipoo'], gender: 'girl', age: '2 months', origin: 'local', alt: 'Female Maltipoo puppy', src: '/media/lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg' },
  { slug: 'korean-teacup-pomeranian-1', title: 'Korean Teacup Pomeranian', breed: 'Korean Teacup Pomeranian', breeds: ['pomeranian'], gender: 'girl', age: '2 months', origin: 'imported', alt: 'Female Korean Teacup Pomeranian puppy', src: '/media/EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg' },
  { slug: 'korean-teacup-pomeranian', title: 'Korean Teacup Pomeranian', breed: 'Korean Teacup Pomeranian', breeds: ['pomeranian'], gender: 'girl', age: '2 months', origin: 'imported', alt: 'Female Korean Teacup Pomeranian puppy', src: '/media/vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg' },
  { slug: 'korean-teacup-pomeranian-male', title: 'Korean Teacup Pomeranian', breed: 'Korean Teacup Pomeranian', breeds: ['pomeranian'], gender: 'boy', age: '2 months', origin: 'imported', alt: 'Male Korean Teacup Pomeranian puppy', src: '/media/nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg' },
];

export const SHOWROOM = [
  '/media/FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg',
  '/media/Vi-kzyvemRl4/e740ed8a24/27b888_323008bb0f6a41d4bde2a0da7206cd98f001.jpg',
  '/media/g_e4ebbc7fyG/8276289ae7/27b888_323008bb0f6a41d4bde2a0da7206cd98f002.jpg',
  '/media/skvodl2NZiKq/cefab5eee9/27b888_323008bb0f6a41d4bde2a0da7206cd98f003.jpg',
];

export const FAMILIES = [
  { src: '/media/dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg', cap: 'Lulu 🧸 with her new mummy ❤️' },
  { src: '/media/TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg', cap: 'Adorable Maltipoo baby 🧸❤️' },
  { src: '/media/j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg', cap: 'My new teddy puppy 🥰🧸' },
  { src: '/media/HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg', cap: 'Our new puppies 🧸🥰🤗' },
  { src: '/media/uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg', cap: 'New puppy 🧸😍' },
  { src: '/media/pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg', cap: 'Gang of 3 😍🧸' },
  { src: '/media/4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg', cap: 'So happy 😍😍' },
  { src: '/media/3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg', cap: 'New pup 🤗💫' },
];

export const FAQS = [
  ['Are your puppies vaccinated and health-checked?', 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.'],
  ['Can I meet a puppy before I decide?', 'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.'],
  ['Can I take my puppy home the same day?', 'Local puppies are available immediately, so you can take your puppy home the same day.'],
  ['Do you import puppies from abroad?', 'Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you.'],
  ['How does an imported puppy travel to Dubai?', 'We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free.'],
  ['Will I see photos and health details first?', 'Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp.'],
  ['Do you deliver?', 'Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world.'],
  ['Which breeds do you usually have?', 'Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie.'],
  ['Is there help after my puppy comes home?', 'Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.'],
];