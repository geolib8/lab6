$('.agregar').click(function(e){
    e.preventDefault();
    var check = $('<input type="button" value="Check" class="checar"/>');
    var deletee = $('<input type="button" value="Delete" class="del"/>');
    var text = $('<p>'+$('#newText').val()+'</p>');
    var li = $('<li class="lis"></li>');
    li.append(text);
    li.append(check);
    li.append(deletee);
    $('.Lista').append(li);
});
$(document).on('click', '.checar', function(){ 
    $(this).closest(".lis").toggleClass("chec");
});
$(document).on('click', '.del', function(){ 
    $(this).closest(".lis").remove();
});