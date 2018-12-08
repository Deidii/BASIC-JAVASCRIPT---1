
function italic()
{
     
    document.getElementById("text").style.fontStyle = "italic";
    
    console.log(document.getElementById("text"))
if (document.getElementById("text").style.fontStyle == "italic" ) {
    document.getElementById("text").style.fontStyle = "normal" ;
}

// toggel or else if

}


function font_family(selectTag)
 {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("text").style.fontFamily = listValue;
  }

  

  function bold() {
    var element = document.getElementById("text");
    element.classList.toggle("bold");
 }

 function underline() {
    var element = document.getElementById("text");
    element.classList.toggle("underline");
 }

 function italic() {
    var element = document.getElementById("text");
    element.classList.toggle("italic");
 }


 function changeSize(n) {
    var s = document.getElementById("text");
    s.style.fontSize = n.value + "px";
  }