$(function () {
    console.log("JavaScript is ready!");

    var randomIdx = [...Array(urls.length)].map((_, i) => i);
    randomIdx = shuffle(randomIdx);

    for (let index = 0; index < urls.length; index++) {
        var url = urls[randomIdx[index]];
        var link = url.link;
        var img = url.image;

        if (img.split('.')[1].split("?")[0] == "mp4") {
            var arcElem = $("<source></source>")
            .attr("src", img)
            .attr("type", "video/mp4");
            var vidElem = $("<video playsinline autoplay muted loop></video>")
            .append(arcElem);
            var ancElem = $("<a></a>")
            .attr("href", link)
            .attr("target", "_blank")
            .attr("rel", "noopener noreferrer")
            .append(vidElem);

            $("body").append(ancElem);
        } else {
            var ancElem = $("<a></a>")
            .attr("href", link)
            .attr("target", "_blank")
            .attr("rel", "noopener noreferrer")
            .attr("style", "background-image: url('%s');".replace("%s", img));

            $("body").append(ancElem);
        }
        
    }

});

// 配列をシャッフル
function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      // 配列の数値を入れ替える
      [array[i], array[rand]] = [array[rand], array[i]]
    }
    return array;
  }
