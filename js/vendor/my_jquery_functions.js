//加载窗体的时候判断如果时小于500的怎么显示
$("document").ready(function () {
  // alert("2323");
//测试 alert("Hello,I am loaded"
  if (document.body.clientWidth < 500) {
// $("document").create()
    $("ul li+li").hide();
// $("ul").firstChild.show();


    $("ul li:first-child").mouseenter(function(){

      $("ul li+li").fadeIn();
    })
    $("ul li:first-child").mouseleave(function(){

      $("ul li+li").fadeOut();
    })

  }
});





