#!/usr/bin/env node
const fs = require('fs');
const request = require('request');
var cowsay = require("cowsay");
var colors = require('colors');
var number =  0.5 + (Math.random() * ((250 - 1) + 1));
var numberUse = Math.round(number);
 request('http://numbersapi.com/' + numberUse + '/trivia', { json: false }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(cowsay.say({
	text : body,
	e : "oO",
	T : "U "
}).rainbow);

});
//Enjoy xx 
