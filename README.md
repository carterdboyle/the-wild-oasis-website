# Wild Oasis Website

The customer-facing application (SSR) where users can make bookings that will be added to the supabase database. The companion app, [Wild Oasis](https://github.com/carterdboyle/wild-oasis), is for the hotel workers. 

![image](https://github.com/user-attachments/assets/b2d45872-ef51-4ac6-9153-5f1d9bbc84a0)

## Usage

To run the application locally you will need the following environment variables:

```
NEXTAUTH_URL = http://localhost:3000
SUPABASE_URL = https://<supabase_datbase_id>.supabase.co
SUPABASE_HOSTNAME = <supabase_database_id>.supabase.co
CABINS_PATHNAME = /storage/v1/object/public/cabin-images/**
SUPABASE_KEY = <your_supabase_key>
NEXTAUTH_SECRET = <your_next_auth_secret>
AUTH_GOOGLE_ID = <web_client_from_google_console_id>
AUTH_GOOGLE_SECRET = <web_client_from_google_console_secret>
```

If you want to create stock data or see how the database is structured, have a look at the `/src/data/` folder in the worker app [Wild Oasis](https://github.com/carterdboyle/wild-oasis) uncomment line 22 in `src/ui/Sidebar.js`:

 `{/* <Uploader /> */}`

 And import Uploader from the `/src/data` folder. The uploader allows a simple data import feature that resets the database. 

 Run `npm run dev` after installing dependencies with `npm i`

 ## Features

 - Seamlessly navigate a server-side rendered website with information about the business
 - View information on cabins

  ![image](https://github.com/user-attachments/assets/bd818234-f995-4940-bfde-3e136a7e69c3)
  
 - Create bookings at a luxury cabin

  ![image](https://github.com/user-attachments/assets/8c3c9c50-bd9e-439e-829d-3dc19e0b96dc)
  
 - Manage existing bookings

  ![image](https://github.com/user-attachments/assets/3db6d2a3-cdad-4f02-8f49-b93d7eb6d94a)
 
 - Sign in/sign out with Google OAuth 2.0

  ![image](https://github.com/user-attachments/assets/1865a81b-7685-468a-beae-a848039b99aa)

