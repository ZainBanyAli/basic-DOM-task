document.addEventListener("DOMContentLoaded", function () {
  const textDiv = document.getElementById("text");
  const fontFamilySelect = document.getElementById("font_family");
  const fontSizeSelect = document.getElementById("font_size");
  const fontItalicCheckbox = document.getElementById("font_italic");
  const fontBoldCheckbox = document.getElementById("font_bold");
  const fontUnderlineCheckbox = document.getElementById("font_underline");

  fontFamilySelect.addEventListener("change", updateTextStyle);
  fontSizeSelect.addEventListener("change", updateTextStyle);
  fontItalicCheckbox.addEventListener("change", updateTextStyle);
  fontBoldCheckbox.addEventListener("change", updateTextStyle);
  fontUnderlineCheckbox.addEventListener("change", updateTextStyle);

  function updateTextStyle() {
    const fontFamily = fontFamilySelect.value;
    const fontSize = fontSizeSelect.value;
    const fontStyle = fontItalicCheckbox.checked ? "italic" : "normal";
    const fontWeight = fontBoldCheckbox.checked ? "bold" : "normal";
    const textDecoration = fontUnderlineCheckbox.checked ? "underline" : "none";

    textDiv.style.fontFamily = fontFamily;
    textDiv.style.fontSize = fontSize;
    textDiv.style.fontStyle = fontStyle;
    textDiv.style.fontWeight = fontWeight;
    textDiv.style.textDecoration = textDecoration;
  }
});
