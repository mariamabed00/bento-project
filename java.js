$('.carousel').carousel();

function openTab(tabName, elmnt) {
    var i, navcontent;
    navcontent = document.getElementsByClassName("navcontent");
    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "grid";
}

function openTab2(tabName, elmnt) {
    var i, navcontent2;
    navcontent2 = document.getElementsByClassName("navcontent2");
    for (i = 0; i < navcontent2.length; i++) {
        navcontent2[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}

document.getElementById("defaultOpen").click();

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.dropdown-menu').forEach(function(element) {
            element.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        })

        if (window.innerWidth < 992) {

            document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
                element.addEventListener('click', function(e) {

                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList.contains('submenu')) {
                        e.preventDefault();
                        if (nextEl.style.display == 'block') {
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }

                    }
                });
            })
        }

    });

    