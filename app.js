const express = require('express');
const app = express();
const hostname = '49.37.134.203'; // Your server ip address
const port = 3000;

const version = '3,000,000';

app.get('/', (req, res) => {
    // set response content    
        res.send(`<html>
                    <body>
                        <h1 style="color:blue;text-align: center;margin-top: 100px;"> [Version ${version}]: THis is AMAZING!!! Like & Subscribe!</h1>
                        <div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
                            <img src="C:\Users\HP\Download.AMB.PNG">
                        </div>
                    </body>
                   </html>`);
 
  console.log(`[Version ${version}]: New request => http://${hostname}:${port}`+req.url);

})

app.listen(port, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
})
