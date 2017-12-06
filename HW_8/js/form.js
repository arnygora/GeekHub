$('input').change(function(){
    let str = " ";
    $('input').each(function(){
        str += $(this).val+ " ";
    });
    console.log('value of ' + $(this).attr('id') + "= " + $(this).val());
});

$('select').change(function(){
    let str = " ";
    $('select option:selected').each(function(){
        str += $(this).val+ " ";
    });
    console.log('you choose ' + $(this).val());
});