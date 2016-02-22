var express = require('express');
var router = express.Router();
var helper = require('../helper.js');
var cb = require('../cb.js');
var passwd = require('../passwd.json');
var bucket = cb.bucket();



/**
 * Get a document
 */
router.get('/get', function (req, res) {
	
    var key = req.query.key;
    var user = req.query.user;
    var password = req.query.password;
            
    //Check if all mandatory params were passed
    if (helper.isDefined(key) & helper.isDefined(user) && helper.isDefined(password))
    {

	//Auth
	if ( passwd[user] == password ) {

         bucket.get( key, function(err, cbres) {
         
            if (err)
            {
                var emsg = "Could not get the document with key " + key + "!";
                console.log("[" + Date.now() + "] ERROR: " + emsg);
                res.json({ "error" : emsg });
                
            } else
            {
                console.log("[" + Date.now() + "] User " + user + " accessed key " + key + ".");
                
		var val = cbres.value;
		
		if ( val instanceof Buffer) {

		   res.json(val.toString('base64'));

		} else {

		   res.json(val);
		}
		
            }
         });
      } else {

	var emsg = "Authentication error for user " + user + ".";
        console.log( "[" + Date.now() + "] ERROR: " + emsg);
        res.json({ "error" : emsg });

      }
    } else
    {
        var emsg = "Did you pass all mandatory parameters?"; 
        res.json({"error" : emsg});
    }    
});


module.exports = router;
