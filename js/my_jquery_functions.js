$("document").ready(function () {
    $("button").click(function () {
        $("div").load("demo_test.txt #p1", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                alert("异步请求成功！");
            }
            if (statusTxt == "error") {
                alert(xhr.status + ":" + c.statusText);
            }
        });
    })
});

