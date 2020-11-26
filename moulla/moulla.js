$(function(){
    $("#project").submit(event => {
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        let form = $(event.target);
        let item = form.children("input").val();
        let li = $("<li></li>");
        li.text(item);
       
        $("#list").append(li);
        form.children("input").val("");
    });a
});