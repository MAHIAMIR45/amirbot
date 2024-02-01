const fs = require("fs");
const login = require("fca-horizon-remake");

var credentials = {email: "shak.ib.md29.18@gmail.com", password: "MASHIA#$403"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //create appstate
});
