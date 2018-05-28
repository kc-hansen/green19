require('dotenv').config();
const express = require('express');
const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const bodyParser = require('body-parser')
const path = require('path');

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
    // DOMAIN,
    // CLIENTID,
    CLIENT_SECRET,
    // CALLBACK_URL,
    // redirectINCOME,
    // redirectCONTINUE,
    // GAME
} = process.env

const app = express().use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

// app.use(passport.initialize());
// app.use(passport.session());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

// passport.use(new Auth0Strategy({
//     domain: DOMAIN,
//     clientID: CLIENTID,
//     clientSecret: CLIENT_SECRET,
//     callbackURL: CALLBACK_URL,
//     scope: 'openid profile'
// }, function (accessToken, refreshToken, extraParams, profile, done) {
//     const db = app.get('db');


//     //this is what i want to pull from auth-0
//     const { sub, name, picture } = profile._json;

//     db.find_user([sub]).then(response => {
//         if (response[0]) {
//             done(null, response[0].id)
//         } else {
//             db.create_user([name, picture, sub]).then(response => {
//                 done(null, response[0].id)
//             })
//         }
//     })

// }))

// passport.serializeUser((id, done) => {
//     done(null, id);
// })

// passport.deserializeUser((id, done) => {
//     const db = app.get('db');
//     db.find_logged_in_user([id]).then(response => {
//         done(null, response[0])
//     })
// })

// app.get('/users', (req, res) => {
//     const db = app.get('db');
//     db.get_friends().then(resp => {
//         res.status(200).send(resp)
//     })
// })


// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: redirectINCOME
// }))



// app.get('/auth/me', (req, res) => {
//     if (!req.user) {
//         res.status(404).send('Not logged in')
//     } else {
//         res.status(200).send(req.user);
//     }
// })

// app.get('/resume', (req, res) => {
//     if (!req.user) {
//         res.status(404).send('Not logged in')
//     } else {
//         res.status(200).redirect(GAME)
//     }
// })



    //cash flow trial
    // app.get('/incomereq', (req, res) => {
    //     const db = app.get('db');
    //     db.total_income([req.user.id]).then(resp => {
    //         res.status(200).send(resp)
    //     })
    // })

    // app.get('/expensesreq', (req, res) => {
    //     const db = app.get('db');
    //     db.total_expenses([req.user.id]).then(resp => {
    //         res.status(200).send(resp)
    //     })
    // })


    // app.get('/logout', (req, res) => {
    //     req.logout();
    // })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.listen(SERVER_PORT, () => {
        console.log(`getting a website  ${SERVER_PORT}`)
    })