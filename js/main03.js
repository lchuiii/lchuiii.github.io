$(".count-btn").click(function () {
  var btnType = $(this).attr("data");
  var inputVal = $("#addResult").val();
  if (btnType == "add") {
    $("#addResult").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#addResult").val(parseInt(inputVal) - 1);
  }
});
function showalert01() {
  alert("已加入購物車！");
}

function showalert02() {
  alert("購買成功！");
}
