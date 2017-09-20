

// This "experience" is based around the jQuery Terminal plugin http://terminal.jcubic.pl/
// The document.ready function initializes the plugin on body and runs the App code 



//	New commands are entered with the following template:

//	argument: function(){
//    	DO SOMETHING
//  },


//Experience is laid out in the following structure:

//--help
//--hack
////--project_mayhem
////--rm
////--jobs
//////--5

/////////FUNCTIONS
function makeid() {  //generates "hack" scrambled text
  var text = "";
  var possible = "ABCDEFGHI&bcdefghijklmnopOOUB!*&%^@yz0123456789";
  for (var i = 0; i < 25000; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}


/////////VARIABLES
var prefix = "admin@GRIDIUM"; //default prefix
var hasHacked = false; //determines if user has entered hack section yet


////////TERMINAL CONFIGURATION 
var App = {
    echo: function(text) {
        this.echo(text);
        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      this.echo('Follow the white rabbit.')
    },
    hack: function() {
    	
    	//set hasHacked to true, display hack animation, and display sub menu

    	hasHacked = true;
    	var q = this;
    	this.set_prompt('');
        this.echo('[[b;#e16609;]'+makeid()+']');
        this.echo('Running script...');
        
        setTimeout(function(){ 
        	q.clear() 
			q.echo('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'+
   '[[b;#e16609;]██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ████████╗ ██████╗ \n'+
				'██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ╚══██╔══╝██╔═══██╗\n'+
				'██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         ██║   ██║   ██║\n'+
				'██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██║   ██║   ██║\n'+
				'╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗       ██║   ╚██████╔╝\n'+
				' ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝       ╚═╝    ╚═════╝ \n\n\n'+
				'██╗     ███████╗██╗   ██╗███████╗██╗         ███████╗\n'+
				'██║     ██╔════╝██║   ██║██╔════╝██║         ██╔════╝\n'+
				'██║     █████╗  ██║   ██║█████╗  ██║         ███████╗\n'+
				'██║     ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║         ╚════██║\n'+
				'███████╗███████╗ ╚████╔╝ ███████╗███████╗    ███████║\n'+
				'╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝    ╚══════╝]\n\n\n\n\n\n\n\n\n\n\n'+
				'Menu:\n'+
				'Type [[b;#e16609;]project_mayhem] to initiate worldwide destruction.\n\n'+
				'Type [[b;#e16609;]rm] to delete production database.\n\n'+
				'Type [[b;#e16609;]jobs] to see company job listings.\n\n'
            );
            q.set_prompt(prefix + ":~# ");
        }, 2000);
    },
    project_mayhem: function() {
    	
    	//Check for hack and destroy the world

      if(hasHacked){
      	var q = this;
      	this.echo(
      		'[Initiating Worldwide Destruction...]\n'+
'[[b;#e16609;]──▄────▄▄▄▄▄▄▄────▄───\n'+
			'─▀▀▄─▄█████████▄─▄▀▀──\n'+
			'─────██─▀███▀─██──────\n'+
			'───▄─▀████▀████▀─▄────\n'+
			'─▀█────██▀█▀██────█▀──]\n'+
			'[Done]'
      	);
      }
      else{
      	this.echo('\n\n\n\n\nYOU HAVE ATTEMPTED TO ACCESS A SECURE FUNCTION. YOUR IP HAS BEEN LOGGED.\n\n\n\n\n\n');
      }
    },
    laser: function(){
    	this.clear();
    	$('body').css('background-image','url(https://thumbs.gfycat.com/EquatorialCheapConure-size_restricted.gif)');
    	this.echo(

'                   .               ,.\n'+
'                  T."-._..---.._,-"/|\n'+
'                  l|"-.  _.v._   (" |\n'+
'                  [l /. _ \; _~"-.`-t\n'+
'                  Y " _(o} _{o)._ ^.|\n'+
'                  j  T  ,-<v>-.  T  ]\n'+
'                  \  l ( /-^-\ ) !  !\n'+
'                   \. \.  "~"  ./  /c-..,__ \n'+
'                     ^r- .._ .- .-"  `- .  ~"--.\n'+
'                      > \.                      /\ \n'+
'                      ]   ^.                     /\ \n'+
'                      3  .  ">            .       Y \n'+
'         ,.__.--._   _j   \ ~   .         ;       | \n'+
'        (    ~"-._~"^._\   ^.    ^._      I     . l \n'+
'         "-._ ___ ~"-,_7    .Z-._   7"   Y      ;  \        _ \n'+
'            /"   "~-(r r  _/_--._~-/    /      /,.--^-._   / Y \n'+
'            "-._     "~~~>-._~]>--^---./____,.^~        ^.^  ! \n'+
'                ~--._        Y---.                        \./ \n'+
'                     ~~--._  l_   )                        \ \n'+
'                           ~-._~~~---._,____..---           \ \n'+
'                               ~----"~       \ \n'+
'                                              \ \n'



    	);
    },
    rm: function() {
        
        //Check for hack and run animation

        if(hasHacked){

	        var q = this;
	        var progress = '[Deleting Production Database...]\n{[[b;#e16609;]';
			(function progressLoop (i) {          //recursive loop to run 10 times with 300 ms delay for animation
			   setTimeout(function () {   
			      progress = progress + '░';
				  q.set_prompt(progress);                
			      if (--i) {progressLoop(i);}
			      else {    					//display done once the loop has finished and reset prompt
			      	q.set_prompt(progress+']}[Done]'); 
			      	setTimeout(function () { 
						q.set_prompt(prefix + ":~# ");
					}, 1500);
			      }
			   }, 300)
			   
			})(10); 
		}
		else{
	      	this.echo('\n\n\n\n\nYOU HAVE ATTEMPTED TO ACCESS A SECURE FUNCTION. YOUR IP HAS BEEN LOGGED.\n\n\n\n\n\n');
	    }
    },
    jobs: function() {

    	//Check for hack and display menu

      if(hasHacked){
      	var q = this;
      	this.echo(
      		'\n\n\n\n[Company Job Listings]\n\n'+
				'Type [[b;#e16609;]number] to view job listing.\n'+
			'[[b;#e16609;]1]: VP of Industrial Espionage\n'+
			'[[b;#e16609;]2]: Director of Destruction\n'+
			'[[b;#e16609;]3]: Assistant Director of Human Resources \n'+
			'[[b;#e16609;]4]: Sous Chef \n'+
			'[[b;#e16609;]5]: Front-End Developer\n\n\n'
      	);
      }
      else{
      	this.echo('\n\n\n\n\nYOU HAVE ATTEMPTED TO ACCESS A SECURED AREA. YOUR IP HAS BEEN LOGGED.\n\n\n\n\n\n');
      }
    },
    //Account for fake options
    1: function() {this.echo('[[b;#f00;]Error]: Data Corrupted')},
    2: function() {this.echo('[[b;#f00;]Error]: Data Corrupted')},
    3: function() {this.echo('[[b;#f00;]Error]: Data Corrupted')},
    4: function() {this.echo('[[b;#f00;]Error]: Data Corrupted')},
    5: function() {

    	//Check for hack then display job listing

    	if(hasHacked){

    		//Join array variables into single string separated by a comma and space
	    	var operatingsystem = job.equipment.operatingsystem.join(', ');
	    	var testingFrameworks = Object.keys(job.technologies.testing.oneof).join(', ');
	    	var jsFrameworks = Object.keys(job.technologies.framework.oneof).join(', ');

	    	//Create js object from UNIX timestamp
	    	var startDate = new Date(job.essentials.startdate);
	    	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	    	
	    	this.echo(
	    		"\n\n\n"+
	"[[b;#e16609;]▓▓▓▓▓▓▓▓▓▓▓▓▓▌] [[b;#fff;]a▄▄▄▄▄▄▄▄▄▄▄µ ▄▄µ ▄▄▄▄▄▄▄▄▄▄▄▄▄µ ▄▄ ╒▄▄       ┌▄▄ ┌▄▄▄▄▄▄▄▄▄▄▄▄▄▄]\n"+
	"[[b;#e16609;]▓▓▓▐▐▐▄▄▄▄▄▄▄▄] [[b;#fff;]▀▓▓▀▀▀▀▀▀▀▀▀b ▓▓▄ ▀▀▀▀▀▀▀▀▀▀▀▓▓▄ ▓▓ ▐▓▓       ▐▓▓ ▐▓▓▀▀▀▀▓▓▀▀▀▀▓▓]\n"+
	"[[b;#e16609;]▓▓▓   ▓▓▓▓▓▓▓▌] [[b;#fff;]▀▓▌           ▓▓▄ ▓▓m        ▓▓▄ ▓▓ ▐▓▓       ▐▓▓ ▐▓▓   ▐▓▓   ▐▓▓]\n"+
	"[[b;#e16609;]▓▓▓▄▄▄▄▄▄▄▄▓▓▌] [[b;#fff;]▀▓▌           ▓▓▄ ▓▓▄        ▓▓▄ ▓▓ ▐▓▓       ╫▓▓ ▐▓▓   ▐▓▓   ▐▓▓]\n"+
	"[[b;#e16609;]▓▓▓▓▓▓▓▓▓▓▓▓▓▌][[b;#fff;] ▀▓▌           ▓▓▄ ▓▓▓▓▓▓▓▓▓▓▓▓▓▄ ▓▓ ▐▓▓▓▓▓▓▓▓▓▓▓▓ ▐▓▓   ▐▓▓   ▐▓▓]\n\n\n"+
	    		
	    		//Ideally, the data labels would be formatted for a simple loop operation
	    		'\nJob Title: '+job.headline+
	    		'\n\n[ [[b;#e16609;]Essentials] ]\n'+
	    		'\nLocation: '+job.essentials.locations+
	    		'\nEmployment: '+job.essentials.employment+
	    		'\nExperience: '+job.essentials.experience[0]+' or '+job.essentials.experience[1]+
	    		'\nStart Date: '+monthNames[startDate.getMonth()]+' '+startDate.getDate()+', '+startDate.getFullYear()+
	    		'\nCompany Size: '+job.essentials.companysize.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")+
	    		'\nTeam Size: '+job.essentials.teamsize['min']+'-'+job.essentials.teamsize['max']+

	    		'\n\n[ [[b;#e16609;]Methodology] ]\n'+
	    		'\nCode Reviews: '+job.methodology.codereviews+
	    		'\nPrototyping: '+job.methodology.prototyping+
	    		'\nFail Fast: '+job.methodology.failfast+
	    		'\nUnit Tests: '+job.methodology.unittests+
	    		'\nIntegration Tests: '+job.methodology.integrationtests+
	    		'\nBuild Server: '+job.methodology.buildserver+
	    		'\nStatic Code Analysis: '+job.methodology.staticcodeanalysis.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")+
	    		'\nVersion Control: '+job.methodology.versioncontrol+
	    		'\nIssue Tracker: '+job.methodology.issuetracker+
	    		'\nStandups: '+job.methodology.standups+
	    		'\nQuick Start: '+job.methodology.quickstart+
	    		'\nCommit On Day One: '+job.methodology.commitondayone+

	    		'\n\n[ [[b;#e16609;]Specs] ]\n'+
	    		'\nWorkload: '+job.specs.workload+
	    		'\nWork Week: '+job.specs.workweek+
	    		'\nSchedule: '+job.specs.schedule+
	    		'\nRemote: '+job.specs.remote+
	    		'\nPTO: '+job.specs.pto+

	    		'\n\n[ [[b;#e16609;]Profile] ]\n'+
	    		'\nNew Features: '+job.profile.newfeatures+
	    		'\nClient Support: '+job.profile.clientsupport+
	    		'\nDocumentation: '+job.profile.documentation+
	    		'\nMaintenance: '+job.profile.maintenance+
	    		'\nMeetings: '+job.profile.meetings+

	    		'\n\n[ [[b;#e16609;]Equipment] ]\n'+
	    		'\nOperating System: '+operatingsystem+
	    		'\nComputer: '+job.equipment.computer+

	    		'\n\n[ [[b;#e16609;]Technologies] ]\n'+
	    		'\nCSS3: '+job.technologies.css3+
	    		'\nHTML5: '+job.technologies.html5+
	    		'\nJavascript: '+job.technologies.javascript+
	    		'\nNode: '+job.technologies.node+
	    		'\nRest: '+job.technologies.rest+
	    		'\nUI/UX: '+job.technologies.uiux+
	    		'\nDesign: '+job.technologies.design+
	    		'\nTesting (One Of): '+testingFrameworks+
	    		'\nFramework (One Of): '+jsFrameworks+
	    		'\nBoard Game: '+job.technologies.boardgames+

	    		'\n\n[ [[b;#e16609;]Remarks] ]\n'+
	    		'"'+job.other[0]+'"\n'+
	    		'"'+job.other[1]+'"'+

	    		'\n\n\n\n\n\n\nType [[b;#e16609;]jobs] to return to job list or [[b;#e16609;]laser].'
	    	);
	    }
	}
    
};


///////////ON READY CODE
jQuery(document).ready(function($) {
   $('body').terminal(App, {       //Initializes terminal plugin on body and displays greetings
     greetings: "\n\n\n"+
    "[[b;#e16609;]▓▓▓▓▓▓▓▓▓▓▓▓▓▌] [[b;#fff;]a▄▄▄▄▄▄▄▄▄▄▄µ ▄▄µ ▄▄▄▄▄▄▄▄▄▄▄▄▄µ ▄▄ ╒▄▄       ┌▄▄ ┌▄▄▄▄▄▄▄▄▄▄▄▄▄▄]\n"+
	"[[b;#e16609;]▓▓▓▐▐▐▄▄▄▄▄▄▄▄] [[b;#fff;]▀▓▓▀▀▀▀▀▀▀▀▀b ▓▓▄ ▀▀▀▀▀▀▀▀▀▀▀▓▓▄ ▓▓ ▐▓▓       ▐▓▓ ▐▓▓▀▀▀▀▓▓▀▀▀▀▓▓]\n"+
	"[[b;#e16609;]▓▓▓   ▓▓▓▓▓▓▓▌] [[b;#fff;]▀▓▌           ▓▓▄ ▓▓m        ▓▓▄ ▓▓ ▐▓▓       ▐▓▓ ▐▓▓   ▐▓▓   ▐▓▓]\n"+
	"[[b;#e16609;]▓▓▓▄▄▄▄▄▄▄▄▓▓▌] [[b;#fff;]▀▓▌           ▓▓▄ ▓▓▄        ▓▓▄ ▓▓ ▐▓▓       ╫▓▓ ▐▓▓   ▐▓▓   ▐▓▓]\n"+
	"[[b;#e16609;]▓▓▓▓▓▓▓▓▓▓▓▓▓▌][[b;#fff;] ▀▓▌           ▓▓▄ ▓▓▓▓▓▓▓▓▓▓▓▓▓▄ ▓▓ ▐▓▓▓▓▓▓▓▓▓▓▓▓ ▐▓▓   ▐▓▓   ▐▓▓]\n\n\n"+
                "Welcome to the GRIDIUM Company Control System (GCCS). Please type s̶t̶a̶r̶t̶ [[b;#e16609;]hack] to begin.\n\n",
    //Other terminal functions go here
    prompt: function(p){
        var path = '~'
        p(prefix + ":" + path + "# ");
    },
    onBlur: function() {
        // prevent loosing focus
        return false;
    }
    });
});