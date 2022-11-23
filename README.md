# Habit Trakcer
> Inzynieria Oprogramowania

## Usage

Add your mongoDB URI and Google OAuth credentials to the config.env file

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```

## Overview

```mermaid
classDiagram
    direction LR

    class Users {
        int userId
        str username
        str password
        str email
    }

    class Habits {
        int habit_id
        str name
        int frequency
        float duration
        int userId
    }
    
    class Periods{
      int periodId
      Date timeStarted
      Date timeFinished
      str note
      int habitId
    }

    Users "1"-->"0..*" Habits : "has"
    Habits "1"-->"0..*" Sessions: "contains"
```

## Dependencies
- express
    - routing framework
- mongoose
    - work with mongodb
- connect-mongo
    - store sessions in mongodb
- express-session
    - creates sessions and cookies
- express-handlebars
    - template engine
- dotenv
    - configuration, environment variables
- method-override
    - PUT, DELETE request from templates
- moment
    - format dates
- passport
    - authentication
- passport-google-oauth20
    - google authentication
- nodemon
    - continuously runs the server
- cross-env
    - global environment variable for different OS