$(function () {
  $("#fadeOut").on("click", () => {
    // 不透明度を0にする（フェードアウトする）
    $(".box").css("opacity", 0);
  });

  $("#fadeIn").on("click", () => {
    // 不透明度を1にする（フェードインする）
    $(".box").css("opacity", 1);
  });

  $("#slideUp").on("click", () => {
    // 高さを0にする（スライドアップする）
    $(".box").css("height", 0);
  });

  $("#slideDown").on("click", () => {
    // 高さを200にする（スライドダウンする）
    $(".box").css("height", 200);
  });
});
