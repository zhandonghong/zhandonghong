$("document").ready(function () {
    $("#showthing").click(function () {
        $("#hello").show(1000, function () {
            // alert("我出现了")
        });
    });
    $("#hide").click(function () {
        $("#hello").hide(1000, function () {
            // alert("我躲起来了")
        });
    });
    $("#qiehuan").click(function () {
        $("#hello").toggle("slow", function () {
            // alert("我变");
        })
    })
$("#danru").click(function()
{
    $("div").fadeIn("slow");
})

    $("#danchu").click(function()
    {
        $("div").fadeOut("slow");
    })
    $("#togglefade").click(function()
    {
        $("div").fadeToggle("slow",function(){
            // alert("坦尼的但")
        });
    })
});

