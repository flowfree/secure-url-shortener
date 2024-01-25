Secure URL Shortener
====================
Simple URL shortener project with cybersecurity in mind.


## About Google Safe Browsing API
The Safe Browsing API is a service by Google that allows you to check URLs against Google's updated lists of unsafe web resources. This project is using the Safe Browsing API to ensure that it is not only generates short URLs, but also guarantees their safety. 

You need to get a Safe Browsing API key to use this app. For more information, read how to [set up an API key](https://developers.google.com/safe-browsing/v4/get-started) in their docs.


## Running on development machine
Once you have cloned this repo, follow these steps to run the app on your local machine:

1.  Rename the `.env_local_sample` file into `.env.local` and paste your Safe Browsing API key:

        SAFE_BROWSING_API_KEY=<your api key>

1.  Install the dependencies:

        npm install

1.  Run database migration:

        npx prisma migrate dev

    This command will create the SQLite database and apply the DB migrations. Note that the command is `npx` instead of `npm`.

1.  Run the dev server:

        npm run dev

Visit `http://localhost:8000` using your browser to open the app.

## License 
MIT
