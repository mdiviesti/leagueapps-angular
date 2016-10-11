# leagueapps-angular
An AngularJS service for the leagueapps API. 

# Dependancies 
AngularJS (tested under v 1.5.8) 

#Features 
Consume the Site, Announcements, Programs, and Schedule endpoints for the Leagueapps API.

Each method returns a promise.

I've added a controller.js so that you can look through it to see how to consume the service. Later, I may add a working demo.

#Getting started 
You will need to get a Leagueapps API key and the site Id for the site you want to work with. 

You can request your API key here http://leagueapps.com/leagueapps-api/ 

Once you've received your API key you may begin using this service.

First, in the js folder copy config.js.example to config.js. Open this file, and you will need to edit the siteId and apiKey entries. 

Next, you will need to include both config.js and leagueapps.js in your html document. 

You will need to inject leagueapps 

#How to contribute
This is generally meant to be an easy tap into the endpoint so that folks don't have to build that work from scratch. 
If there's not a feature that you'd like to see, let me know, or do a pull request and contribute.