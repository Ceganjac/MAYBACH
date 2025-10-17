$("#dugme").on("click",function() {
    let text=$("#email").val();
    if(text.indexOf('@')!=-1){
        alert("Успешно сте се пријавили!");
    }
})

$("#tekst1").hide();

$("#slikaM").on("click", function() {
    $("#tekst1").show();
})


