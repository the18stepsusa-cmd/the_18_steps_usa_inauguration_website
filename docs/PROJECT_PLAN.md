# The 18 Steps USA - Inauguration Website Plan

## Project Overview
Website for the inauguration of The 18 Steps USA, a non-profit spiritual community focused on Sanatana Dharma values, led by Sharath A Haridasan.

## Tech Stack
- **Framework:** Astro (static-first, scalable for future SSR/dynamic features)
- **Styling:** Tailwind CSS
- **Animations:** CSS animations + minimal JS for countdown/interactions
- **Deployment:** Static build (can deploy to Vercel/Netlify/GitHub Pages)

## Color Palette (derived from main_vishnu.webp)
- **Primary Deep Blue:** #1a1a4e (cosmic dark blue)
- **Royal Purple:** #4a2080
- **Celestial Blue:** #3d7cc9
- **Saffron Gold:** #d4a017
- **Warm Amber:** #b8860b
- **Rich Crimson:** #8b1a1a
- **Cream/Light:** #f5f0e8
- **Dark Background:** #0d0d2b

## Pages

### 1. Landing Page (Home)
- Hero section with event title, logo, and background imagery
- About The 18 Steps section
- About Sharath A Haridasan (mentor bio + photos)
- Event details (date, time, venue, highlights)
- Countdown timer to June 6, 2026
- Chaayamukhi teaser section
- Raffle section ($1,500 gift vouchers)
- Committee members (placeholder)
- RSVP form (front-end only)
- Contact information

### 2. Chaayamukhi Page
- Hero with Chaayamukhi branding
- Description: Musical Dance Drama, "A Mirror of Desire, A Promise to Nature"
- Philosophy of "Thathwamasi"
- Image gallery (3 images)
- Past venue info (KHNA National Convention, Atlantic City, NJ - 1,000+ audience)
- Cast & Crew details (~40 performers, Kalari choreography)
- Video embeds (placeholder)
- Social media links (placeholder)

### 3. Donations Page
- Donation call-to-action with link to payment portal (Zeffy/GoFundMe - placeholder)
- Books by Sharath A Haridasan with Amazon purchase links (placeholder):
  - Krishna's Whisper: 18 Meditations for a Life of Purpose and Prosperity
  - A Very Simple Guide to the Bhagavad Gita
  - 51 Zen Stories to Wake Up
  - Art of Dust

### 4. Painting Gallery Page
- Grid gallery of hand-drawn paintings
- Each painting: image, title, price
- "Contact for Purchase" button per painting
- Placeholder paintings for now

## Event Details
- **Date:** June 6, 2026, Saturday
- **Time:** 2:00 PM - 8:00 PM
- **Venue:** PYLUSD Performing Arts Center
- **Address:** 1651 Valencia Ave, Placentia, CA 92870
- **Attendees:** 300-400+ expected
- **Type:** Non-ticketed community event
- **Dinner:** Professionally catered, included
- **Highlight:** First professional dance drama in Los Angeles after 10 years

## Project Structure
```
inauguration_website/
  src/
    layouts/
      Layout.astro          # Base layout with nav/footer
    pages/
      index.astro           # Landing page
      chaayamukhi.astro     # Chaayamukhi dedicated page
      donations.astro       # Donations + Books page
      gallery.astro         # Painting gallery page
    components/
      Navbar.astro
      Hero.astro
      About.astro
      MentorSection.astro
      EventDetails.astro
      Countdown.astro
      ChayamughiTeaser.astro
      Raffle.astro
      Committee.astro
      RSVPForm.astro
      Contact.astro
      Footer.astro
    styles/
      global.css
  public/
    images/                 # All images
  astro.config.mjs
  tailwind.config.mjs
  package.json
```

## Action Plan

| # | Task | Status |
|---|------|--------|
| 1 | Initialize Astro project with Tailwind CSS | Done |
| 2 | Set up project structure, layout, and global styles | Done |
| 3 | Build Navbar component | Done |
| 4 | Build Landing Page - Hero section | Done |
| 5 | Build Landing Page - About & Mentor sections | Done |
| 6 | Build Landing Page - Event Details & Countdown | Done |
| 7 | Build Landing Page - Chaayamukhi teaser | Done |
| 8 | Build Landing Page - Raffle, Committee, RSVP, Contact | Done |
| 9 | Build Footer component | Done |
| 10 | Build Chaayamukhi dedicated page | Done |
| 11 | Build Donations page | Done |
| 12 | Build Painting Gallery page | Done |
| 13 | Copy images to public directory | Done |
| 14 | Final polish and responsive design | Done |
| 15 | Initialize git repo and push to GitHub | Pending |
