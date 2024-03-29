# Step I Follow to Develop This Project

### Backend API

- Understand Project and Check ER Diagram

- install next.js
- install prisma & prisma client

```bash
npm install prisma --save-dev

npx prisma init --datasource-provider mysql

npm i @prisma/client

npx prisma migrate dev --name init
```

- Create all basic models in schema.prisma file
- build relation in all prisma schema models
- create policies,socials,subscribers api
- create user login & registration api | create a utility function for JWT(jose) encode & Decode | set cookie during login
- Complete User Password Recovery Process. Email Verify (nodemailer) > Send OTP to verified Email > OTP Verify > reset Password
- Complete middleware for Login user. Set Cookie to verify login user details. Do after login Profile Update & details
- Create News Category API CRUD
- Create POSTs API CRUD
- Create API of Single news Post View
- create API => Search By category in Post
- create API => Search By type in Post
- create API => Search By keyword in Post ( all table )
- working with comments api

### Frontend

First, run the development server:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run the Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
