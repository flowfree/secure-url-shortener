Secure URL Shortener
====================
Simple URL shortener project with cybersecurity in mind.

## Running on development machine
Once you have cloned this repo, follow these steps to run the app on your local machine:

1.  Rename the `.env_local_sample` file into `.env.local` and paste your Safe Browser API key:

        SAFE_BROWSING_API_KEY=<your api key>

1.  Install the dependencies:

        npm install

1.  Run database migration:

        npx prisma migrate dev

    This command will create the SQLite database and apply the DB migrations.

1.  Run the server

        npx run dev

Visit `http://localhost:8000` using your browser to open the app.

## License 
MIT
