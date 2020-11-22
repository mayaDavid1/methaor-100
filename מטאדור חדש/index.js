$(function() {
    $("#start-btn").on("touchstart", onClickStart);
});

function onClickStart(event) {
    $("#start-btn").off("touchstart", onClickStart);

    $("#tutorial-title").hide("fade", 300);
    $("#start-btn").hide("fade", 300);

    $("#intro-block").show("fade", 300);
}