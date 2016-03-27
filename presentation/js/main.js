var main = document.querySelector('main');
// var page = 0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isVisibile (el) {
    return true;
}

function scrollUp () {
    if (page >0 ){
         document.getElementById("buttonUp").disabled = true;
         document.getElementById("buttonDown").disabled = true;
        var sections = $('section');
        for (var i = 0; i < sections.length; i++) {
            var change = $("#"+sections[i].id).height();
            $("#"+sections[i].id).css('top', '+='+change+'')
        }
    }else return;
    page--;
    playvid(page);
    setTimeout(function () {
        document.getElementById("buttonUp").disabled = false;
        document.getElementById("buttonDown").disabled = false;
    }, 1000);
}
function scrollDown () {
    if (page < 7){
        document.getElementById("buttonUp").disabled = true;
        document.getElementById("buttonDown").disabled = true;
        var sections = $('section');
        for (var i = 0; i < sections.length; i++) {
            var change = $("#"+sections[i].id).height();
            $("#"+sections[i].id).css('top', '-='+change+'')
        }
    }else return;
    page++;
    playvid(page);
    setTimeout(function () {
        document.getElementById("buttonUp").disabled = false;
        document.getElementById("buttonDown").disabled = false;
    }, 1000);
}




function View (selectors, parent, props) {
    var view = document.querySelector(selectors);
    parent = document.querySelector(parent);
    Object.defineProperties(view, {
        isVisible : {
            get: function () {
                return isVisibile(parent);
            }
        },
        CSS: {
            get: function () {
                return getComputedStyle(this);
            }
        }
    });
    view.clear = function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    };
    for (var key in props) {view[key] = props[key];}
    return view;
}

var space = new View('#space div', '#space', {
    run: false,
    wave: function (colours, src, delay, width, blur) {
        colours.forEach(function (colour) {
            var img = new Image();
            img.src = 'img/' + colour + '/' + src + '.svg';
            setTimeout(function () {img.style.opacity = 0.5;}, getRandomInt(delay[0], delay[1]));
            img.setAttribute(
                'style',
                'width:' + getRandomInt(width[0], width[1]) +
                '; top:' + getRandomInt(0, main.clientHeight) +
                '; left:' + getRandomInt(0, main.clientWidth)
            );
            if (blur) {img.style.WebkitFilter = 'blur(5px)';}
            space.appendChild(img);
        });
    },
    load: function () {
        if (space.isVisible) {
            if (!space.run) {
                ['facebook', 'twitter', 'instagram', 'like'].forEach(function (brand) {
                    for (var i = 0; i < (brand === 'like' ? 75 : 25); i++) {
                        space.wave(['white', 'cyan'], brand, [2000, 2500], [1, 30]);
                    }
                    for (i = 0; i < 1; i++) {
                        space.wave(['white', 'cyan'], brand, [3500, 4000], [100, 200]);
                    }
                    space.wave(['white'], brand, [5000, 5500], [200, 400], true);
                });
                space.run = true;
            }
        } else {
            space.clear();
            space.run = false;
        }
    }
});
// var videos = document.querySelectorAll('video')
// function playvid (page){
//     if(page == 0){
//         videos[0].play();
//         videos[0].loop = true;
//     }else if (page==1) {
//         videos[1].play();
//         videos[1].loop = true;
//     }else if (page == 6) {
//         videos[2].play();
//         videos[2].loop = true;
//     }
//     else {
//         videos[0].pause();
//         videos[1].pause();

//     }
// }

main.addEventListener('scroll', space.load);

main.addEventListener('scroll', function () {
    [].slice.call(document.querySelectorAll('video')).forEach(function (video) {
        if (isVisibile(video.parentElement)) {
            video.play();
            video.loop = true;
        } else {
            video.pause();
        }
    });
});
space.load()
// playvid(page);
