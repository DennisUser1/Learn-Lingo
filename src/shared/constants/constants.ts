
export const MODAL_CONFIG = {
  login: {
    title: 'Log In',
    message: 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.',
  },
  registration: {
    title: 'Registration',
    message: 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information',
  },
  bookLesson: {
    title: 'Book trial lesson',
		message:
			'Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.',
  },
  favoriteInfo: {
		title: 'Information',
		message:
			'To add or remove a card from your favorites, please log in to your account. Thank you!',
	},
};

export const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

