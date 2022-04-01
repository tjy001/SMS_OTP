var express = require('express');
var router = express.Router();

let generated_otps = {}

router.post('/generate', (req, res) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let phone_no = req.body.phone_no;

    if (!phone_no) {
        res.status(400).send("No phone_no was provided")
    } else {
        let otp = ""

        for (let i = 0; i < 6; i++) {
            otp += getRandomInt(10).toString()
        }

        generated_otps[phone_no] = {otp: otp}

        res.send({otp: otp, phone_no: phone_no})
    }

    
  });

router.post('/verify', (req, res) => {
    let otp = req.body.otp;
    let phone_no = req.body.phone_no;

    if (generated_otps.hasOwnProperty(phone_no)) {
        if ((generated_otps[phone_no].otp === otp)) {
            res.status(200).send("verified!")
            return
        } 
    }
    
    res.status(400).send("not verified!")

} )

module.exports = router;