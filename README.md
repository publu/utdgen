#UTDgen Site Generator

This comes bundled with ghost.js 0.11.xx

I'll be adding customizing this as time comes. By all intents and purposes this project is classified as BETA. 

This will run Ghost locally and generate a static website using a modified version of buster (Buster is busted, this version here is fixed). 

You use the included gulpfile to generate and deploy automatically.

How to set up:

Create a .env file

1) `touch .env`

2) `nano .env`

`UTD_ID=pjs130130` < Your Net Id
`UTD_PASS=XXXXXXXXXX` < Your Password

Save and exit

3) run `npm install` to install all node dependencies (Make sure you're running on Node 4 or Ghost might have some issues)

4) run `npm start` to run the instance locally

5) ***You can only generate the page if there's a local instance running.***
	This means running npm start **and then** running `gulp deploy`
	
##Let me know if you have any questions.

pjs130130@utdallas.edu


