# Node.js REST service example

There is sometimes the question how to read data from Couchbase by accessing a REST service. This example shows how RESTFul bucket access is possible by using a Node.js application by having some basic application side authentication and auditing in place.

![screenshot](https://raw.githubusercontent.com/dmaier-couchbase/cb-rest/master/public/images/screenshot.png)
> This Node.js application was created by using the CEAN stack (http://ceanjs.org).

The application can be configured by changing 'CB_HOST', 'CB_BUCKET' and 'CB_PWD' in the file 'cb.js':

```
var CB_HOST = 'ubuntu-server'
var CB_BUCKET = 'demo';
var CB_PWD = 'test';
```

I also added a file 'passwd.json' which contains the users and their passwords. Only users those are listed here have read access:

```
{
  "root" : "password",
  "david" : "password"
}
```

The service has one method, which is 'get'. This implementation returns the document data base64 encoded if it is a binary document and as JSON otherwise.

* https://github.com/dmaier-couchbase/cb-rest/blob/master/routes/get.js

To start the application navigate to the application directory and run 'node app.js'. Node.js needs to be installed.

The service can be e.g. accessed via:

* http://localhost:9000/service/get?key=pymc0&user=root&password=password

I also added some basic auditing to the standard output. Here an example output:

```
cluster = {"dsnObj":{"scheme":"couchbase","hosts":[["ubuntu-server",0]],"bucket":"demo","options":{}}}
bucket = {"_name":"demo","_username":"demo","_password":"test","_cb":{},"connected":null,"waitQueue":[],"_events":{},"httpAgent":{"domain":null,"_events":{},"_maxListeners":10,"options":{},"requests":{},"sockets":{},"maxSockets":250}}
App listening at http://0.0.0.0:9000
[1456165018268] User david accessed key test-json.
[1456165041336] User david accessed key pymc0.
[1456165048491] ERROR: Authentication error for user david.
[1456165060511] User root accessed key pymc0.
[1456165067734] ERROR: Authentication error for user root.
```
