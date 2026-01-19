<img width="1428" alt="image" src="https://github.com/FAsami/artnao/assets/43314398/9a8a6968-5ae9-4806-82df-de05570bd50d">

# Artnao

Artnao is a platform designed to connect artists and art enthusiasts, facilitating the hiring of artists and the sale of artwork.

## Features

- **Artist Hiring:** Users can browse and hire artists for various projects.
- **Artwork Marketplace:** Artists can showcase and sell their artwork.
- **Authentication:** Secure user authentication powered by NextAuth.js.
- **Email Notifications:** Integration with Nodemailer for email notifications.
- **Responsive Design:** Built with Next.js, Tailwind CSS, and React for a modern and responsive user interface.

## Technologies Used

- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Prisma, JWT for authentication
- **Database:** PostgreSQL (via Prisma)
- **Other Tools:** bcryptjs, crypto-js, lodash, react-hook-form for form handling, and more.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed
- PostgreSQL database (optional for development, required for production)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FAsami/artnao.git
   cd artnao
   ```
2. Populate `.env` with required environment variables
3. Install all the packages with `yarn`
4. Run project with `yarn dev`

# Documentation:

Prisma deploy migration: `npx prisma migrate deploy`
