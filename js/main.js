var commandText = function(text){
    return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
    return "[[u;inherit;]" + text + "]";
}

var App = {

    motd: function(ret){
        if (typeof ret === 'undefined') ret = false;
        var greetText =
            "####################################################################################\n"+
            "|[[b;#00DE12;]\t  _______         _____            _    _       _            _            ]\t|\n"+
            "|[[b;#00DE12;]\t |__   __|       / ____|          | |  (_)     | |          | |           ]\t|\n"+
            "|[[b;#00DE12;]\t    | |_ __ ___ | |     ___   ___ | | ___  ___ | |_ ___  ___| |__         ]\t|\n"+
            "|[[b;#00DE12;]\t    | | '_ ` _ \\| |    / _ \\ / _ \\| |/ / |/ _ \\| __/ _ \\/ __| '_ \\        ]\t|\n"+
            "|[[b;#00DE12;]\t    | | | | | | | |___| (_) | (_) |   <| |  __/| ||  __/ (__| | | |       ]\t|\n"+
            "|[[b;#00DE12;]\t    |_|_| |_| |_|\\_____\\___/ \\___/|_|\\_\\_|\\___(_)__\\___|\\___|_| |_|       ]\t|\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "|\tMy name is" + commandText(' TmCookie') + " - Wannabe hardware hacker and coder.                  \t|\n"+
            "|\tPlease type " + commandText('menu') + " for a list of commands.  \t\t\t\t\t\t\t\t\t|\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "####################################################################################\n";

        if (!ret) {
            this.echo("\n" + greetText);
        } else {
            return greetText;
        }
    },

    menu: function(){
        this.echo();
        this.echo();
        this.echo("|  " + commandText("about") + "              - Summary of me");
        this.echo("|  " + commandText("projects") + "           - Some recent projects of mine");
        this.echo("|  " + commandText("skills") + "             - What I can do");
        this.echo();
        this.echo("|  " + commandText("github") + "             - Das github");
        this.echo("|  " + commandText("twitter") + "            - When 140 characters is enough");
        this.echo("|  " + commandText("Youtube") + "            - ROV videos and things i like");
        this.echo();
        this.echo("|  " + commandText("contact") + "            - Contact me")
        this.echo("|  " + commandText("credits") + "            - Credits for this website");
        this.echo();
        this.echo("|  " + commandText("all") + "                - Run all commands");
        this.echo();
    },

    github: function(){
        this.echo();
        this.echo("|  https://github.com/TmCookie");
        this.echo();
    },

    youtube: function(){
        this.echo();
        this.echo("|  https://www.youtube.com/channel/UCq5nvrVUmZuh89w7uPNumeA");
        this.echo();
    },

    twitter: function(){
        this.echo();
        this.echo("|  https://twitter.com/TmCookieMonster");
        this.echo();
    },

    about: function(){
        this.echo();
        this.echo("|  Name:         " + commandText('Gard HS'));
        this.echo("|  DOB:          27/03/1998");
        this.echo("|  Location:     " + commandText('Norway'));
        this.echo();
        this.echo("|  hobbies:      Hardware hacking, pc building and programming");
        this.echo("|                underwater drone flying and Metal detecting");
        this.echo();
        this.echo("|  Employment:   i have no job yet :(");
        this.echo();
    },

    projects: function(){
        this.echo();
        this.echo("|  Worked on shitty discord bots");
        this.echo();
        this.echo("|  Varios hardware hacking things with the bus pirate");
        this.echo();
        this.echo("|  Built an OpenROV, a lot of dives on my youtube");
        this.echo();
    },

    skills: function(){
        this.echo();
        this.echo("|  " + commandText('Languages'));
        this.echo();
        this.echo("|  " + commandText('Python') + "                 ##[[g;#99D100;]######################################]             ##");
        this.echo("|  " + commandText('Batch') + "                  ##[[g;#D13F00;]##########################]                         ##");
        this.echo("|  " + commandText('C') + "                      ##[[g;#D13F00;]##########]                                         ##");
        this.echo();
        this.echo();
        this.echo("|  " + commandText("Programs"));
        this.echo();
        this.echo("|  " + commandText('Virtualbox') + "             ##[[g;#B2D100;]################################]                   ##");
        this.echo("|  " + commandText('Docker') + "                 ##[[g;#B2D100;]############]                                       ##");
        this.echo();
        this.echo();
        this.echo("|  " + commandText("OS"));
        this.echo();
        this.echo("|  " + commandText('Windows') + "                ##[[g;#99D100;]#########################################]          ##");
        this.echo("|  " + commandText('Ubuntu') + "                 ##[[g;#99D100;]#######################################]            ##");
        this.echo("|  " + commandText('Arch Linux') + "             ##[[g;#99D100;]##############################]                     ##");
        this.echo();


    },

    contact: function(){
        this.echo();
        this.echo("|  " + commandText("Email:") + ":         lgardhs@gmail.com");
        this.echo("|  " + commandText("Twitter:") + ":       https://twitter.com/TmCookieMonster");
        this.echo();
    },

    credits: function(){
        this.echo();
        this.echo("|  Site built by " + commandText('Ronnie Pyne') + " check it out on http://www.ronniepyne.com");
        this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
        this.echo("|  Modified by " + commandText('GardHS/TmCookie'));
        this.echo();
    },

    all: function(){
        this.clear();
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        this.exec('github');
        this.exec('twitter');
        this.exec('youtube')
        this.exec('contact');
        this.exec('credits');
    },

    help: function(){
        this.exec('menu');
    },

    ls: function(){
        this.exec('menu');
    }

}

jQuery(document).ready(function($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('body').terminal(App, {
          greetings: function(cb){
              cb(App.motd(true));
          },

          onBlur: function() {
              // prevent loosing focus
              return false;
          },
          completion: true,
          checkArity: false

      });
      this.exec(all)
    } else {
        $('body').terminal(App, {
            greetings: function(cb){
                cb(App.motd(true));
            },

            onBlur: function() {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    }
});
