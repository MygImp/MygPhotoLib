$(function () {
    console.log("JavaScript is ready!");

    

    for (let index = 0; index < urls.length; index++) {
        var url = urls[index];
        var link = url.link;
        var img = url.image;

        var ancElem = $("<a></a>")
        .attr("href", link)
        .attr("style", "background-image: url('%s');".replace("%s", img))

        $("body").append(ancElem);
    }

});
