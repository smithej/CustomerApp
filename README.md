# Lightyear FullStack Challenge Template

# The Challenge

Hey friendly developer! Our CEO, Dennis, recently had an ask of us. He needs us to create a display of his most important customers, and be able to add, edit, and delete from this list. Unfortunately he has only given us one night to make it happen.

I hope you can help us handle it, but I think you're up for the challenge!

> **For real though:**
> Our team hopes that you can spend around two-three hours on this challenge. If you finish faster, that's awesome! If not, please don't spend too much longer, and instead just think about what else you might do/have done for our discussion.

# Your Tasks

- Primary Objective: create a functional display of customers, as well as basic CRUD ability through a backend API. Functionality is more important than beauty here, but we also want to see what you've got!
- Customer information should at least include name, company, priority/importance of some sort (potentially through tags?), and can include any other fields your creativity may see fit.
- When you have completed the challenge to your satisfaction, and prior to our scheduled discussion, send the zipped solution files to ryan@lightyear.ai.

# Some Tips

- We've provided you with a basic framework to hopefully get started faster from. This includes a basic Django Rest Framework and Postgres database in a docker container, and a bare bones React app.
- Feel free to utilize whatever libraries, structure, or even a completely custom solution if you would like. The sky is the limit here!
- Assume you don't need to worry about vast browser support

# Running the Challenge Framework

If you decide to utilize our framework, we have some quick notes on getting it running on your local machine.

## Backend

The backend and database are dockerized, and can be run by navigating to the backend folder, and utilizing the following commands:

```
docker-compose build
docker-compose up
```

The api should then be accessible from **localhost:8000**.

## Frontend

The React app was built using create-react-app, and can be run by navigating to the frontend directory and running the following commands in a seperate terminal:

```
yarn
yarn start
```

The React app should then be accessible from **localhost:3000**.
