export default {
	url: process.env.ELEVENTY_ENV === "production" ? "https://egebjergfaelleshus.dk" : 
	       process.env.ELEVENTY_ENV === "test" ? "https://jensgabe.github.io" :
	       "http://localhost:8080"
};
