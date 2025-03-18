document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const colorBtnChange = document.getElementById("color-change-btn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  colorBtnChange.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
