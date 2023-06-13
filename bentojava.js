function scrollWin() {
    window.scrollBy(0, 910);
}

function scrollPage() {
    window.scrollBy(0, 560);
}

function scrollPage1() {
    window.scrollBy(0, 760);
}

function scrollPage2() {
    window.scrollBy(0, 960);
}

function scrollPage3() {
    window.scrollBy(0, 1160);
}
 
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }

  function openTab(tabName, elmnt, color) {
    var i, navcontent, navlinks;
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }
    navlinks = document.getElementsByClassName("navlink");
    for (i = 0; i < navlinks.length; i++) {
        navlinks[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
    document.getElementById("defaultOpen").click();


  