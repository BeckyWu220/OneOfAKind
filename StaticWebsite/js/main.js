window.onload = function(){

    var menu_home = document.getElementById('menu_home');
    var menu_project = document.getElementById('menu_project');
    var menu_resume = document.getElementById('menu_resume');

    //$("#homePage").hide();
    $("#projectPage").hide();
    $("#resumePage").hide();
    changeMenuBtnState(menu_home,true,"#2062A6");

// --------------------- menu ---------------------
    $( "#menu_home").click(function() {
                        $("#homePage").show();
                        $("#projectPage").hide();
                        $("#resumePage").hide();
                        $('html, body').animate({ scrollTop: 0 }, 300);
                        changeMenuBtnState(menu_home,true,"#2062A6");
                        changeMenuBtnState(menu_project,false,"#1A5087");
                        changeMenuBtnState(menu_resume,false,"#14406B");
                    });
    $( "#menu_home").hover(
                        function(){MenuBtnHover(menu_home,true)},
                        function(){MenuBtnHover(menu_home,false)});

    $( "#menu_project").click(function() {
        $("#projectPage").show();
        document.getElementById('projectPage').style.opacity = 1;
        $("#homePage").hide();
        $("#resumePage").hide();
        $('html, body').animate({ scrollTop: 0 }, 300);
        changeMenuBtnState(menu_home,false,"#2062A6");
        changeMenuBtnState(menu_project,true,"#1A5087");
        changeMenuBtnState(menu_resume,false,"#14406B");
    });
    $( "#menu_project").hover(
                        function(){MenuBtnHover(menu_project,true)},
                        function(){MenuBtnHover(menu_project,false)});

    $( "#menu_resume").click(function() {
        $("#resumePage").show();
        $("#homePage").hide();
        $("#projectPage").hide();
        $('html, body').animate({ scrollTop: 0 }, 300);
        changeMenuBtnState(menu_home,false,"#2062A6");
        changeMenuBtnState(menu_project,false,"#1A5087");
        changeMenuBtnState(menu_resume,true,"#14406B");
    });
    $( "#menu_resume").hover(
                        function(){MenuBtnHover(menu_resume,true)},
                        function(){MenuBtnHover(menu_resume,false)});


    $("#forestWebLink").click(function(){ window.open("http://www.barleyteastudio.com/en/home_en.html"); });
    $("#shenbingtianjiangWebLink").click(function(){ window.open("https://itunes.apple.com/us/app/shen-bing-tian-jiang/id678248804?mt=8"); });
    $("#ironMarshalsWebLink").click(function(){ window.open("http://wan.renren.com/web/war/index/"); });
    $("#listobookWebLink").click(function(){ window.open("http://www.barleyteastudio.com/CDM_Proletariat/"); });
    $("#generateLink").click(function(){ window.open("https://itunes.apple.com/us/app/generate-app/id808563377?mt=8"); });
    $("#quupeWebLink").click(function(){ window.open("https://www.quupe.com/alpha/home.html"); });
    $("#quupeLink").click(function(){ window.open("https://itunes.apple.com/us/app/quupe/id1206142563?ls=1&mt=8"); });
    $("#pocketSocialLink").click(function(){ window.open("https://itunes.apple.com/ca/app/pocketlive-fun-live-video-chat-rooms/id1149680758?mt=8"); });
    $("#pocketSocialWebLink").click(function(){ window.open("https://www.pocketlive.tv/home.html"); });
    $("#resumeLink").click(function(){ window.open("http://www.beckywu.me/BeckyWu_Resume.pdf"); });
    


}

// --------------------- menu functions ---------------------
    function linkToProject(menu_home,menu_project,menu_resume, scrollPos){
        $("#projectPage").show();
        document.getElementById('projectPage').style.opacity = 1;
        $("#homePage").hide();
        $("#resumePage").hide();
        $('html, body').animate({ scrollTop: scrollPos }, 300);
        changeMenuBtnState(menu_home,false,"#2062A6");
        changeMenuBtnState(menu_project,true,"#1A5087");
        changeMenuBtnState(menu_resume,false,"#14406B");
    }


    function changeMenuBtnState(btn,state,color){
        if(state==false){ // normal state
            btn.style.background = color;
            btn.style.color = "#ffffff";
        }else if (state==true){ // chosen state
            btn.style.background = "#ffffff";
            btn.style.color = color;
        }
    }
    function MenuBtnHover(btn,state){
        if(state==false){ // normal state
            btn.style.fontSize = "20px";
            btn.style.fontWeight = "300";
        }else if (state==true){ // hover state
            btn.style.fontSize = "22px";
            btn.style.fontWeight = "600";
        }
    }
