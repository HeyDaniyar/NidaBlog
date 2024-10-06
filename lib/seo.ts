export const seo = {
  title: 'Nida | Developer, Photographer, AGI Builder, T-Founder',
  description:
    "I'm Nida, builder of AICenter and StevieAI. With 10+ years of full-stack experience, I'm always creating something cool with code and my camera. Join me as we learn, create, and prepare for the exciting AGI era ahead.",
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://nida.live'
      : 'http://localhost:3000'
  ),
} as const
