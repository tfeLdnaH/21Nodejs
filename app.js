//those example are ninjaaaa
//1)var stuff = require('./stuff');

//console.log(stuff.counter(['anders', 'teste']));
//console.log(stuff.adder(12,4));
//console.log(stuff.adder(stuff.pi,4));

/*
//2)event
var events = require('events');
var myemitter = new events.EventEmitter();
myemitter.on('someEvent', function(msg){
	console.log(msg);
});
myemitter.emit('someEvent', 'the event was emitted');
*/


//3)inherits
/*
var events = require('events');
var util = require('util');

var Person = function(newame){
	this.name = newame;
};

util.inherits(Person, events.EventEmitter); 
//people can have personal event

var anderson = new Person('anderson');
var tati = new Person('tati');
var satie = new Person('satie');

var people = [anderson, tati, satie];

people.forEach(function(person){
	person.on('speak', function(msg){
		console.log(person.name + ' said: ' + msg);
	});
});

anderson.emit('speak', 'hey man');
tati.emit('speak', 'teste teste');
*/

//4)creating a server
/*
var http =require('http');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hey mann');
});


server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');
*/

//5)readable
//stream & buffer(buffer = chunk)/ readable streams(writable and readable, or duplex)
//read chunk of data via stream
/*
var http =require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/text.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('new chunk received:');
	console.log(chunk); 
});
*/

//6)
//writable according to receive chunk of data
/*
var http =require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/text.txt', 'utf8');
var myWriteStream = fs.createWriteStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/writetext.txt',);
myReadStream.on('data', function(chunk){ //everytime my receive new data will fire that function
	console.log('new chunk received:');
	myWriteStream.write(chunk); // can use pipe
});
*/

//7) Pipes - automatic listning data 
/*
var http =require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
//instead of full path we can use __dirname, but does not work. I have to review thar variable
	var myReadStream = fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/text.txt', 'utf8');
	myReadStream.pipe(res);

});


server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');
*/


//8)
//serving html pages
/*
var http =require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
//instead of full path we can use __dirname, but does not work. I have to review thar variable
	var myReadStream = fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/index.html', 'utf8');
	myReadStream.pipe(res);

});


server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');
*/

//9)
//serving JSON data
/*
var http =require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);
	res.writeHead(200, {'Content-Type': 'application/json'});
//instead of full path we can use __dirname, but does not work. I have to review thar variable
	var myobj = {
		name: 'anderson',
		job: 'consultant',
		age: 18
	};
	res.end(JSON.stringify(myobj));x	

});


server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');

*/

//10)
// basic routing; Example: http://localhost:3000/index, http://localhost:3000/contact those pages have to return different data 
//those example if u dont can work with express. However, When u have so many pages its better express
/*
var http =require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);

	if (req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/index.html').pipe(res);
	}else if (req.url ==='/contact'){		
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/contact.html').pipe(res);
	}
	else if(req.url ==='/api') {
		var moritz = [{name: 'anderson', age: 18}, {name:'tati', age: 23}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(moritz));//serialize turn moritz into a string
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/error.html').pipe(res);		
	}
});


server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');

*/
//11)
//The node package Manager
/*var http =require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request was made: ' + req.url);

	if (req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/index.html').pipe(res);
	}else if (req.url ==='/contact-us'){		
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/contact.html').pipe(res);
	}
	else if(req.url ==='/api') {
		var moritz = [{name: 'anderson', age: 18}, {name:'tati', age: 23}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(moritz));//serialize turn moritz into a string
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('/Users/Anderson/Desktop/PytonGitUI5JSAngularETC/NodeJS/nodejs21/error.html').pipe(res);		
	}
});


server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');

*/
//12)express(http request types-> get(app.get), post, delete, put)
// get->app.get(app.get('route', fn)), 
//post -> app.post('route', fn) , 
//delete -> app.delete('route', fn), 
///put
/*
var express = require('express');

var app = express();
//localhost:3000/
app.get('/', function(req, res){
	res.send('this is the home page'); //dont need content type
});
//localhost:3000/contact
app.get('/contact', function(req, res){
	res.send('this is contact'); //dont need content type
});

app.listen(3000);
console.log('listening port 3000');
*/

//13)express route params, get parameters dynamically
/*
var express = require('express');

var app = express();
//localhost:3000/
app.get('/', function(req, res){
	res.send('this is the home page'); //dont need content type
});
//localhost:3000/contact
app.get('/contact', function(req, res){
	res.send('this is contact'); //dont need content type
});

//http://localhost:3000/profile/12121
app.get('/profile/:id', function(req, res){
	res.send('you request to see a profile with the ID of : ' + req.params.id); //dont need content type
});


app.listen(3000);
console.log('listening	 port 3000');
*/

//14)Template engines / installing ejs
/*
var express = require('express');

var app = express();

app.set('view engine', 'ejs'); //are going to seee em view folder

//localhost:3000/
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html'); 
});

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook'};
	res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
console.log('listening port 3000');

*/

//15 template engines part 2

var express = require('express');

var app = express();

app.set('view engine', 'ejs'); //are going to seee em view folder

//localhost:3000/
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html'); 
});

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook', hobbies: ['eating', 'traveling', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
console.log('listening port 3000');


//16) partial templates - when the navegation is common for all pages
///
/*
var express = require('express');

var app = express();

app.set('view engine', 'ejs'); //are going to seee em view folder

//localhost:3000/
app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html'); 
	res.render('index'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
//	res.sendFile(__dirname + '/contact.html'); 
	res.render('contact'); 
});

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook', hobbies: ['eating', 'traveling', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
console.log('listening port 3000');

*/

//17) middleware(winthin express) & static files -  
///
/*
var express = require('express');

var app = express();

app.set('view engine', 'ejs'); //are going to seee em view folder
app.use('/assets', express.static('assets')); //always are gonnsa trigger that middleware will match every request); 
//express.static('assets') -> assets is the name of directory
//localhost:3000/
app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html'); 
	res.render('index'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
//	res.sendFile(__dirname + '/contact.html'); 
	res.render('contact'); 
});

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook', hobbies: ['eating', 'traveling', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
console.log('listening port 3000');
*/
//18) query strings  example-> ?page=2&person=teste
///
/*
var express = require('express');

var app = express();

app.set('view engine', 'ejs'); //are going to seee em view folder
app.use('/assets', express.static('assets')); //always are gonnsa trigger that middleware will match every request); 
//express.static('assets') -> assets is the name of directory
//localhost:3000/
app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html'); 
	res.render('index'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
//	res.sendFile(__dirname + '/contact.html'); 
//	console.log(req.query);
// request ->>http://localhost:3000/contact?dept=marketing&person=Satie
//result->> listening port 3000
//{ dept: 'marketing', person: 'Satie' }
	
	res.render('contact', {qs: req.query}); 
});

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook', hobbies: ['eating', 'traveling', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('listening port 3000');
*/

//19) Handling post requests
///
/*
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//urlencodedParser is a middleware
app.set('view engine', 'ejs'); //are going to seee em view folder
app.use('/assets', express.static('assets')); //always are gonnsa trigger that middleware will match every request); 
//express.static('assets') -> assets is the name of directory
//localhost:3000/
app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html'); 
	res.render('index'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query}); 
});
//  urlencodedParser will permit access data from the form contact
app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-success', {data: req.body}); 
});
//PS. there is nodemailer to send email

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook', hobbies: ['eating', 'traveling', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('listening port 3000');

*/
//20) Making a to-do App(part1)
///
/*
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
//urlencodedParser is a middleware
app.set('view engine', 'ejs'); //are going to seee em view folder
app.use('/assets', express.static('assets')); //always are gonnsa trigger that middleware will match every request); 
//express.static('assets') -> assets is the name of directory
//localhost:3000/
app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html'); 
	res.render('index'); 
});
//localhost:3000/contact
app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query}); 
});
//  urlencodedParser will permit access data from the form contact
app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-success', {data: req.body}); 
});
//PS. there is nodemailer to send email

//http://localhost:3000/profile/12121 (engines inject some data dynamically according to variables)
app.get('/profile/:name', function(req, res){
//	res.send('you request to see a profile with the ID of : ' + req.params.name); //dont need content type
	var data = {age: 29, job: 'cook', hobbies: ['eating', 'traveling', 'fishing']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('listening port 3000');

*/















































