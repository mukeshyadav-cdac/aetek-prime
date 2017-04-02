# Embrace coding challenge
I'm using an express server to serve a fully bundled webpack React app:
You can see a live version here http://138.68.242.149/
- Login in with email:demo password:demo or create your own, unvalidated account! 

- The backend was built from scratch and the front end took advantage of create-react-app for the boilerplate. The OMDB API is handled on the front end, but user authentication has been implemented on my express server at /api/



## Installation
 

```bash
git clone https://github.com/alienzz/coding-challenge.git embrace
cd embrace

# first we will build a production ready client bundle
cd client && npm install
npm run build

# now lets run an express server to serve our files and host our API
cd ../ && npm install
npm start

# this will run on localhost:8001

```
