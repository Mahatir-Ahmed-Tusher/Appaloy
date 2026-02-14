import gaanlyIcon from "@/assets/gaanly-icon.png";
import khojIcon from "@/assets/khoj-icon.png";
import genzDictIcon from "@/assets/genz-dictionary-icon.png";
import wordviaIcon from "@/assets/wordvia-icon.png";
import gamequestIcon from "@/assets/gamequest-icon.png";

export interface AppReview {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppData {
  id: number;
  name: string;
  developer: string;
  icon: string;
  rating: number;
  downloads: string;
  verified?: boolean;
  category?: string;
  description?: string;
  shortDescription?: string;
  version?: string;
  size?: string;
  downloadUrl?: string;
  screenshots?: string[];
  reviews?: AppReview[];
  features?: string[];
}

// Custom apps with full details
export const gaanlyApp: AppData = {
  id: 100,
  name: "Gaanly",
  developer: "Mahathir Ahmed Tusher",
  icon: gaanlyIcon,
  rating: 4.5,
  downloads: "50K+",
  verified: true,
  category: "music",
  shortDescription: "Free, ad-free music streaming without limits",
  description: `**Gaanly** is a revolutionary free music streaming app that delivers unlimited songs without advertisements or subscription fees. Built with Kotlin for optimal Android performance, it features offline downloads, crystal-clear audio playback, and a clean intuitive interface. Perfect for music lovers who refuse to compromise on their listening experience. Stream millions of tracks, create playlists, and enjoy uninterrupted music anywhere. Developed with ❤️ by Mahathir Ahmed Tusher.`,
  version: "1.0.0",
  size: "12 MB",
  downloadUrl: "https://github.com/Mahatir-Ahmed-Tusher/Gaanly-APP/releases/download/v1.0.0/Gaanly.apk",
  features: [
    "🎧 Stream unlimited songs for free",
    "🚫 Zero ads — ever",
    "⬇️ Download for offline listening",
    "🔍 Clean, intuitive interface",
    "⚡ Lightning-fast performance",
    "🎵 High-quality audio playback"
  ],
  reviews: [
    {
      id: 1,
      userName: "Naimur Durjoy",
      rating: 5,
      comment: "Sheii! I suggested it to my cousins. He used to use Spotify. Now he has cancelled the Spotify subscription. Hell yeah! 🔥",
      date: "2025-01-15"
    },
    {
      id: 2,
      userName: "Saket Kongara",
      rating: 5,
      comment: "Finally a music app that saved my wallet! 💰 Been looking for something like this for ages.",
      date: "2025-01-20"
    },
    {
      id: 3,
      userName: "Mashrufa Nourin",
      rating: 4,
      comment: "A bit laggy, but it is what it is... Bangali free te paile alaktrau khaite parbe, and I am up for it! 😂",
      date: "2025-01-22"
    },
    {
      id: 4,
      userName: "Jamiul Fattah Punno",
      rating: 5,
      comment: "Mathai nosto pura! 🤯 This is insane!",
      date: "2025-01-25"
    }
  ]
};

export const khojApp: AppData = {
  id: 101,
  name: "Khoj",
  developer: "Khoj Team",
  icon: khojIcon,
  rating: 4.7,
  downloads: "100K+",
  verified: true,
  category: "education",
  shortDescription: "AI-powered Bengali fact-checking platform",
  description: `**Khoj** is Bangladesh's first comprehensive AI-powered fact-checking platform designed to combat misinformation. Features include AI fact-checking with source verification, myth-busting with scientific evidence, reverse image search, text authenticity analysis, and an AI chat assistant. The Liberation War Corner provides verified historical information. Built for Bengali-speaking communities to verify claims, debunk rumors, and promote digital literacy. Visit khoj-bd.com for more. Developed by the Khoj Team under founder Mahathir Ahmed Tusher.`,
  version: "1.0.0",
  size: "25 MB",
  downloadUrl: "https://github.com/Mahatir-Ahmed-Tusher/Khoj-Apk/releases/download/v1.0.0/Khoj.apk",
  features: [
    "🤖 AI-powered fact-checking",
    "🧠 Myth-busting with explanations",
    "🔎 Reverse image search",
    "📝 Text authenticity verification",
    "💬 AI chat assistant",
    "🇧🇩 Liberation War history engine"
  ],
  reviews: [
    {
      id: 1,
      userName: "Nusrat Jahan",
      rating: 5,
      comment: "Khoj is a lifesaver! I check every WhatsApp forward now. Stopped me from sharing a fake flood alert last week. Highly recommended!",
      date: "2025-01-10"
    },
    {
      id: 2,
      userName: "Tanvir Ahmed",
      rating: 5,
      comment: "The Liberation War corner is excellent. Finally getting proper, unbiased history instead of distorted info online.",
      date: "2025-01-12"
    },
    {
      id: 3,
      userName: "Priya Rani Das",
      rating: 5,
      comment: "Very easy interface. Even my mother can now verify news herself. Great job team!",
      date: "2025-01-15"
    },
    {
      id: 4,
      userName: "Arif Hossain",
      rating: 5,
      comment: "AI fact-check is surprisingly accurate and fast. Gives proper sources too. Best app for fighting misinformation.",
      date: "2025-01-18"
    },
    {
      id: 5,
      userName: "Sadiqur Rahman",
      rating: 2,
      comment: "Sometimes the AI gives wrong or incomplete answers on complicated political claims. Needs better training.",
      date: "2025-01-20"
    },
    {
      id: 6,
      userName: "Sumaiya Islam",
      rating: 3,
      comment: "Works well but feels slow and laggy on my older Android phone. Hope they optimize it soon.",
      date: "2025-01-22"
    }
  ]
};

export const genZDictionaryApp: AppData = {
  id: 102,
  name: "Your Gen Z Dictionary",
  developer: "Mahathir Ahmed Tusher",
  icon: genzDictIcon,
  rating: 4.5,
  downloads: "25K+",
  verified: true,
  category: "education",
  shortDescription: "Master Gen Z slang, memes, and internet culture",
  description: `**Your Gen Z Dictionary** is the ultimate guide to understanding Gen Z slang, memes, and internet culture. Features 1,000+ terms with definitions, origins, and real-world examples, plus daily trending updates. Includes interactive quizzes, smart categorization by context (dating, school, social media), dark mode, and offline access. Perfect for parents understanding teens, teachers connecting with students, or anyone wanting to stay culturally relevant. Version 2.0 brings improved usability and expanded database. Built with ❤️ by Mahathir Ahmed Tusher.`,
  version: "2.0.0",
  size: "15 MB",
  downloadUrl: "https://github.com/Mahatir-Ahmed-Tusher/Your-GenZ-Dictionary-V-2/releases/download/v2.0.0/your-gen-z-dictionary-2-0.apk",
  features: [
    "📚 1,000+ Gen Z terms explained",
    "🔥 Daily trending slang updates",
    "🎮 Interactive quizzes",
    "😂 Meme illustrations",
    "🌙 Dark mode support",
    "📶 Offline dictionary access"
  ],
  reviews: [
    {
      id: 1,
      userName: "Rafi Islam",
      rating: 5,
      comment: "Much more polished than the previous version. The improvement in usability, design, and overall vibe is quite impressive. Highly recommended for dudes like me who can barely grasp Gen Z lingo in TikTok.",
      date: "2025-01-20"
    },
    {
      id: 2,
      userName: "Zara Khan",
      rating: 5,
      comment: "I was looking for a dictionary which will contain all the gen z slangs. Hopefully I have got one. Super helpful!",
      date: "2025-01-22"
    },
    {
      id: 3,
      userName: "Naimur Rahman",
      rating: 5,
      comment: "Finally I understand what my younger sister is saying! The memes and examples make it so much fun to learn. 😂",
      date: "2025-01-18"
    },
    {
      id: 4,
      userName: "Priya Das",
      rating: 5,
      comment: "Best app for parents like me. Now I can actually reply to my kids without embarrassing myself 😂",
      date: "2025-01-15"
    },
    {
      id: 5,
      userName: "Samiul Haque",
      rating: 2,
      comment: "Too many American/English slangs. Need more Bangla-English mixed Gen Z terms used in Bangladesh.",
      date: "2025-01-23"
    },
    {
      id: 6,
      userName: "Anika Ferdous",
      rating: 3,
      comment: "Good content but the app crashes sometimes when searching fast. Needs better stability.",
      date: "2025-01-25"
    }
  ]
};

export const wordViaApp: AppData = {
  id: 103,
  name: "WordVia",
  developer: "Mahathir Ahmed Tusher",
  icon: wordviaIcon,
  rating: 4.3,
  downloads: "10K+",
  verified: true,
  category: "games",
  shortDescription: "Classic word game reimagined for the digital age",
  description: `**WordVia** brings a beloved childhood word game into the modern era. Once played with pen and paper, it is now a beautifully crafted digital experience for word lovers of all ages. Play with friends in local multiplayer or challenge a smart AI with multiple difficulty levels. Build words on a shared grid, score points, and test your vocabulary using official English rules. With an optional Challenge Mode, players can verify words and meanings for extra strategy. Inspired by family, learning, and friendly rivalry, WordVia turns language practice into a fun, competitive game you can enjoy anytime, anywhere.`,
  version: "1.0.0",
  size: "18 MB",
  downloadUrl: "https://github.com/Mahatir-Ahmed-Tusher/WordVia-App/releases/download/v1.0.0/WordVia.apk",
  features: [
    "🎮 Local multiplayer mode",
    "🤖 Smart AI with multiple difficulty levels",
    "📝 Build words on a shared grid",
    "✅ Challenge Mode for word verification",
    "📖 Official English dictionary rules",
    "🏆 Score tracking and leaderboards"
  ],
  reviews: [
    {
      id: 1,
      userName: "Jamiul Fattah Punno",
      rating: 5,
      comment: "This game is very fun and makes my English better. I like playing with Dada and Nourin. Human vs Bot is my favorite. The game looks colorful and nice.",
      date: "2025-01-20"
    },
    {
      id: 2,
      userName: "Mashrufa Hasnin Nourin",
      rating: 5,
      comment: "WordVia is my favorite word game. I learned many new words from this. Challenge mode is exciting because we have to explain the meaning.",
      date: "2025-01-22"
    },
    {
      id: 3,
      userName: "Rafi Ahmed",
      rating: 5,
      comment: "I play this game with my friends on one phone. We laugh a lot and fight about words. The bot is very smart in hard mode.",
      date: "2025-01-18"
    },
    {
      id: 4,
      userName: "Tanvir Hossain",
      rating: 4,
      comment: "Nice game for students. It helps with spelling and thinking fast. UI is smooth and easy to use. I want online multiplayer in future.",
      date: "2025-01-15"
    },
    {
      id: 5,
      userName: "Nabil Rahman",
      rating: 3,
      comment: "Game is good but sometimes it is confusing which word is counted. Need better explanation for new players.",
      date: "2025-01-23"
    },
    {
      id: 6,
      userName: "Samia Akter",
      rating: 2,
      comment: "Bot is too strong in expert mode. It always wins. Also I want dark mode settings option.",
      date: "2025-01-25"
    },
    {
      id: 7,
      userName: "Ayaan Chowdhury",
      rating: 3,
      comment: "Fun game but after long play it feels repetitive. More game modes or levels would be nice.",
      date: "2025-01-26"
    }
  ]
};

export const boiwatchApp: AppData = {
  id: 104,
  name: "BoiWatch",
  developer: "Mahathir Ahmed Tusher",
  icon: "https://i.postimg.cc/wTJtCD6M/cimana-icon.png",
  rating: 4.3,
  downloads: "10K+",
  verified: true,
  category: "entertainment",
  shortDescription: "Modern entertainment discovery with AI assistance",
  description: `**BoiWatch** is a modern Android app built for movie and TV show lovers who enjoy smart discovery and smooth watching. Explore trending, popular, and top rated content powered by TMDB with rich details like cast, trailers, and recommendations. Meet Cinemawala, an AI assistant that suggests what to watch, shares trivia, and gives honest opinions. A dedicated season picker makes browsing series simple and beautiful. With continue watching, an integrated video player, and a responsive UI for phones and tablets, BoiWatch delivers a fast, elegant, and enjoyable entertainment experience.`,
  version: "1.0.0",
  size: "22 MB",
  downloadUrl: "https://github.com/Mahatir-Ahmed-Tusher/Boiwatch/releases/download/v1.0.0/BoiWatch.apk",
  features: [
    "🤖 AI Assistant 'Cinemawala'",
    "📅 Season picker for series",
    "🎬 TMDB integration for rich metadata",
    "📱 Responsive UI for all devices",
    "🎥 Integrated video player",
    "🔄 Continue watching feature"
  ],
  reviews: [
    {
      id: 1,
      userName: "Jamiul Fattah Punno",
      rating: 5,
      comment: "UI ta onek smooth. Cinemawala feature ta amar favorite. Movie suggest kore bhalo bhalo.",
      date: "2025-01-28"
    },
    {
      id: 2,
      userName: "Mashrufa Hasnin Nourin",
      rating: 5,
      comment: "Series season picker ta khub useful. Design ta clean and modern.",
      date: "2025-01-29"
    },
    {
      id: 3,
      userName: "Tanvir Ahmed",
      rating: 5,
      comment: "Continue watching feature ta perfectly kaj kore. Amar daily use app hoye geche.",
      date: "2025-01-30"
    },
    {
      id: 4,
      userName: "Nabila Islam",
      rating: 5,
      comment: "Details section ta onek rich. Cast, trailer sob ek jaygay pawa jay.",
      date: "2025-01-31"
    },
    {
      id: 5,
      userName: "Fahim Rahman",
      rating: 4,
      comment: "AI assistant ta fun to use. Future update e aro feature chai.",
      date: "2025-02-01"
    },
    {
      id: 6,
      userName: "Rifat Hossain",
      rating: 3,
      comment: "App ta bhalo but kono kono time video load e late hoy.",
      date: "2025-02-01"
    },
    {
      id: 7,
      userName: "Ayesha Akter",
      rating: 2,
      comment: "Low network e experience ta aro improve kora dorkar.",
      date: "2025-02-02"
    },
    {
      id: 8,
      userName: "Mehedi Hasan",
      rating: 3,
      comment: "Overall bhalo app, kintu initial loading time ektu beshi.",
      date: "2025-02-02"
    }
  ]
};

export const dabarenaApp: AppData = {
  id: 105,
  name: "Dabarena",
  developer: "Mahathir Ahmed Tusher",
  icon: "https://i.postimg.cc/rFRNH9SC/play-store-512.png",
  rating: 4.5,
  downloads: "25K+",
  verified: true,
  category: "games",
  shortDescription: "Premium Chess Arena with Mischievous AI",
  description: `**Dabarena** is your premium chess arena! Experience chess like never before by playing against the Dabaru AI or a human-like LLM opponent with witty, mischievous banter in both English and Bengali. Challenge friends locally, customize your board with unique themes, choose your favorite avatars, and immerse yourself in high-quality sound effects. Built for both beginners and grandmasters.`,
  version: "1.0.0",
  size: "18 MB",
  downloadUrl: "https://github.com/Mahatir-Ahmed-Tusher/Dabarena-Apk/releases/download/v1.0.0/Dabarena.apk",
  features: [
    "🤖 5 AI difficulty levels + LLM opponent",
    "💬 Mischievous bilingual banter (English & বাংলা)",
    "👥 Local multiplayer on the same device",
    "🎨 Custom board themes & avatars",
    "📚 Interactive tutorials",
    "🔊 Immersive premium sound effects"
  ],
  reviews: [
    {
      id: 1,
      userName: "Jamiul Fattah Punno",
      rating: 5,
      comment: "Dabarena is amazing! The LLM AI feels so human, and I love the Bengali taunts 😆. Finally, a chess app that’s fun and challenging!",
      date: "2025-02-10"
    },
    {
      id: 2,
      userName: "Mashrufa Hasnin Nourin",
      rating: 5,
      comment: "Bangla interface is perfect! আমি এখন Rules খুব সহজে শিখতে পারছি।",
      date: "2025-02-11"
    },
    {
      id: 3,
      userName: "Rohan Mehta",
      rating: 5,
      comment: "Mast app hai! Board themes aur sounds kaafi immersive hai. AI thoda mischievous bhi hai, fun gameplay!",
      date: "2025-02-12"
    },
    {
      id: 4,
      userName: "Anik Biswas",
      rating: 4,
      comment: "Local multiplayer works great. Easily played with my friend on the same device. Thumbs up for UI and smooth performance.",
      date: "2025-02-12"
    },
    {
      id: 5,
      userName: "Priya Sharma",
      rating: 5,
      comment: "Superb chess app! The LLM opponent really thinks ahead. I feel like I’m playing a human grandmaster sometimes.",
      date: "2025-02-13"
    },
    {
      id: 6,
      userName: "Tanvir Hossain",
      rating: 4,
      comment: "Bilingual support is lit! English-Bangla switch so easy. আমার জন্য একদম perfect app।",
      date: "2025-02-13"
    },
    {
      id: 7,
      userName: "Amit Kumar",
      rating: 5,
      comment: "Highly addictive! Love customizing boards and avatars. Sound effects make it feel alive. Dabarena rocks!",
      date: "2025-02-14"
    },
    {
      id: 8,
      userName: "Sanjay Das",
      rating: 4,
      comment: "Interface simple aur clean hai. AI ka mischievous behavior game ko entertaining banata hai. Overall satisfied!",
      date: "2025-02-14"
    },
    {
      id: 10,
      userName: "Jamiul Fattah Punno",
      rating: 2,
      comment: "বাংলা interface ঠিক আছে কিন্তু multiplayer কিছু devices এ crash করছে। Fix needed!",
      date: "2025-02-14"
    },
    {
      id: 11,
      userName: "Mashrufa Hasnin Nourin",
      rating: 3,
      comment: "Good gameplay but ads (if any) are distracting. AI sometimes makes weird moves. Could be better.",
      date: "2025-02-14"
    },
    {
      id: 12,
      userName: "Kamal Uddin",
      rating: 1,
      comment: "UI confusing laga first time. Sound effects too loud. Expecting smoother experience.",
      date: "2025-02-14"
    }
  ]
};

export const featuredApps: AppData[] = [
  {
    id: 1,
    name: "PhotoMagic Pro",
    developer: "Creative Labs",
    icon: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=120&fit=crop",
    rating: 4.8,
    downloads: "10M+",
    verified: true,
    category: "photo",
    shortDescription: "Professional photo editing made simple",
    description: "PhotoMagic Pro is the ultimate photo editing app that brings professional-grade tools to your fingertips. With AI-powered filters, advanced retouching, and seamless export options, create stunning images in seconds.",
    features: ["AI-powered filters", "Advanced retouching tools", "RAW photo support", "Cloud sync"],
    version: "3.2.1",
    size: "45 MB",
  },
  {
    id: 2,
    name: "FitTrack",
    developer: "HealthTech Inc",
    icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=120&fit=crop",
    rating: 4.7,
    downloads: "5M+",
    verified: true,
    category: "health",
    shortDescription: "Your personal fitness companion",
    description: "Track your workouts, monitor your progress, and achieve your fitness goals with FitTrack. Features include workout plans, calorie tracking, and integration with popular fitness devices.",
    features: ["Workout tracking", "Calorie counter", "Progress charts", "Device sync"],
    version: "2.8.0",
    size: "32 MB",
  },
  {
    id: 3,
    name: "MindCalm",
    developer: "Wellness Co",
    icon: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=120&h=120&fit=crop",
    rating: 4.9,
    downloads: "2M+",
    verified: true,
    category: "health",
    shortDescription: "Meditation and mindfulness made easy",
    description: "Find your inner peace with MindCalm. Guided meditations, sleep stories, and breathing exercises to help you relax and focus.",
    features: ["Guided meditations", "Sleep stories", "Breathing exercises", "Progress tracking"],
    version: "4.1.0",
    size: "28 MB",
  },
  {
    id: 4,
    name: "CloudNotes",
    developer: "ProductiveApps",
    icon: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=120&h=120&fit=crop",
    rating: 4.6,
    downloads: "8M+",
    verified: true,
    category: "business",
    shortDescription: "Notes that sync everywhere",
    description: "CloudNotes keeps your ideas organized and synced across all your devices. Rich text editing, attachments, and collaboration features make it perfect for work and personal use.",
    features: ["Cross-device sync", "Rich text editing", "File attachments", "Collaboration"],
    version: "5.0.2",
    size: "18 MB",
  },
];

export const trendingApps: AppData[] = [
  {
    id: 5,
    name: "GameQuest",
    developer: "FunGames Studio",
    icon: gamequestIcon,
    rating: 4.5,
    downloads: "15M+",
    category: "games",
    shortDescription: "Epic adventures await",
    description: "Embark on an epic adventure in GameQuest. Explore vast worlds, battle fierce enemies, and collect legendary treasures.",
    version: "1.5.3",
    size: "120 MB",
  },
  {
    id: 6,
    name: "LearnCode",
    developer: "EduTech",
    icon: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=120&h=120&fit=crop",
    rating: 4.8,
    downloads: "3M+",
    verified: true,
    category: "education",
    shortDescription: "Learn programming interactively",
    description: "Master programming with interactive lessons and hands-on projects. From beginner to advanced, LearnCode has courses for everyone.",
    features: ["Interactive lessons", "Real projects", "Progress tracking", "Community support"],
    version: "2.3.0",
    size: "55 MB",
  },
  {
    id: 7,
    name: "TuneStream",
    developer: "MusicLabs",
    icon: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop",
    rating: 4.4,
    downloads: "20M+",
    category: "music",
    shortDescription: "Stream millions of songs",
    description: "TuneStream brings you millions of songs at your fingertips. Create playlists, discover new music, and enjoy high-quality streaming.",
    version: "6.1.0",
    size: "40 MB",
  },
];

export const newApps: AppData[] = [
  dabarenaApp,
  boiwatchApp,
  {
    id: 8,
    name: "BudgetWise",
    developer: "FinanceApp Co",
    icon: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=120&fit=crop",
    rating: 4.6,
    downloads: "500K+",
    verified: true,
    category: "finance",
    shortDescription: "Smart money management",
    description: "Take control of your finances with BudgetWise. Track expenses, set budgets, and reach your financial goals.",
    version: "1.2.0",
    size: "22 MB",
  },
  {
    id: 9,
    name: "RecipeBox",
    developer: "FoodieApps",
    icon: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=120&h=120&fit=crop",
    rating: 4.7,
    downloads: "1M+",
    category: "health",
    shortDescription: "Delicious recipes for everyone",
    description: "Discover thousands of delicious recipes with RecipeBox. From quick meals to gourmet dishes, find your next culinary adventure.",
    version: "3.0.1",
    size: "35 MB",
  },
  {
    id: 10,
    name: "TravelMate",
    developer: "Wanderlust Inc",
    icon: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=120&h=120&fit=crop",
    rating: 4.5,
    downloads: "2M+",
    verified: true,
    category: "business",
    shortDescription: "Plan your perfect trip",
    description: "TravelMate helps you plan the perfect trip. Find flights, hotels, and attractions all in one place.",
    version: "4.2.0",
    size: "48 MB",
  },
];

export const editorsChoice: AppData[] = [
  {
    id: 11,
    name: "ArtStudio",
    developer: "Creative Tools",
    icon: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=120&h=120&fit=crop",
    rating: 4.9,
    downloads: "4M+",
    verified: true,
    category: "art",
    shortDescription: "Digital art creation",
    description: "ArtStudio is a professional-grade digital art app. With extensive brush libraries and layer support, create stunning artwork on the go.",
    version: "2.5.0",
    size: "65 MB",
  },
  {
    id: 12,
    name: "WeatherPlus",
    developer: "Climate Apps",
    icon: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=120&h=120&fit=crop",
    rating: 4.7,
    downloads: "6M+",
    verified: true,
    category: "business",
    shortDescription: "Accurate weather forecasts",
    description: "Get accurate weather forecasts with WeatherPlus. Hourly updates, severe weather alerts, and beautiful visualizations.",
    version: "3.8.0",
    size: "15 MB",
  },
  {
    id: 13,
    name: "TaskFlow",
    developer: "ProductivePro",
    icon: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=120&h=120&fit=crop",
    rating: 4.8,
    downloads: "3M+",
    verified: true,
    category: "business",
    shortDescription: "Task management simplified",
    description: "TaskFlow helps you stay organized and productive. Manage tasks, set reminders, and collaborate with your team.",
    version: "2.1.0",
    size: "20 MB",
  },
];
// Get all apps combined
export const getAllApps = (): AppData[] => {
  return [
    ...featuredApps,
    ...trendingApps,
    ...newApps,
    ...editorsChoice,
    gaanlyApp,
    khojApp,
    genZDictionaryApp,
    wordViaApp,
    boiwatchApp,
    dabarenaApp,
  ];
};

// Get app by ID
export const getAppById = (id: number): AppData | undefined => {
  return getAllApps().find(app => app.id === id);
};

// Get apps by category
export const getAppsByCategory = (category: string): AppData[] => {
  return getAllApps().filter(app => app.category === category);
};

// Music category apps
export const musicApps: AppData[] = [
  ...trendingApps.filter(app => app.category === "music"),
  gaanlyApp,
];

// Entertainment category apps
export const entertainmentApps: AppData[] = [
  boiwatchApp,
];

// Education category apps
export const educationApps: AppData[] = [
  ...trendingApps.filter(app => app.category === "education"),
  khojApp,
  genZDictionaryApp,
];

// Games category apps
export const gamesApps: AppData[] = [
  ...trendingApps.filter(app => app.category === "games"),
  wordViaApp,
  dabarenaApp,
];

// Featured apps including custom apps
export const customFeaturedApps: AppData[] = [
  dabarenaApp,
  boiwatchApp,
  gaanlyApp,
  khojApp,
  wordViaApp,
  ...featuredApps.slice(0, 1),
];
