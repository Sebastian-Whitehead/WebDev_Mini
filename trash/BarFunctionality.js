
function OpenTab(evt, tabName){
    //Variables
    var i, tabcontent, tablinks;

    //all elements with the class tabcontent and hide it.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }


// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}


document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}

