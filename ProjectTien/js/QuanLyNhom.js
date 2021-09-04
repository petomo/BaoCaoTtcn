jQuery(document).ready(function($) {
    $('#TreeView').on('click', 'li', function(e) {
        e.stopPropagation();
        $(this).toggleClass("close open");
    });
});
var id='';
var old_id='';
var id_edit='';
jQuery(document).ready(function($) {
          
            
    $('#TreeView').on('click', 'li', function() {
        var path='';
        
      
        var ul=$(this).parent();
        var leght=$(this).attr('id').split('_').length-1;
        id=$(this).attr('id');
        
        path=''+$('#'+id +' span:eq(0)').text();
      
       
        for(var i=0;i<leght;i++){
            ul=$('li#'+id).parent();
            id=$(ul).parent().attr('id');
            path=''+$('#'+id +' span:eq(0)').text()+"\\"+path;
            
        }
        document.getElementById('Path').value=path;
        return false;
            
        
                      
    });
    

        
       
});
var number_li={'TreeView':1,'1':2,'1_1':2,'1_2':3};
jQuery(document).ready(function ($) {
    // $('#TreeView-list ul li').mouseover(function(){
        
    //     var id=$(this).attr('id');
        
    //     $('#'+id +' span:eq(0)').css({'background':'blue'});
    // });
    // $('#TreeView-list ul li').mouseout(function(){
    //     var id=$(this).attr('id');
    //     $('#TreeView-list#'+id +' span:eq(0)').css({'background':'none'});
    // });
    
    $('.add').click(function () {
      
        document.getElementById('bd-dialog').style.visibility='visible';
        $('#dialog').addClass('animedialog');
        $('.text-group').html('--Lựa chọn--');
        $('#new-group').val('');
        $('.list div').css({'border-bottom': '2px solid silver'});
        // for (var i=0;i<parents.length;i++)
        // {
        //     $('#sl').append("<option id='SP'>"+parents[i]+"</option>");
      
        // }
        // for (var i=0;i<type_SP.length;i++)
        // {
        //     $('#sl #SP').append("<option>dsfdssfdsfds</option>");
        // }
        
    });
    $('.close').click(function () {
        document.getElementById('bd-dialog').style.visibility='hidden';
        document.getElementById('bd-dialog-edit').style.visibility='hidden';
        $('#dialog,#dialog-edit').removeClass('animedialog');
        $('#bd-dialog .combobox').css({'height':'0','visibility':'hidden'});
        $('#bd-dialog-edit .combobox').css({'height':'0','visibility':'hidden'});
       
       
        
        
    });
    $('#TreeView').on('click', '.edit', function() {
        document.getElementById('bd-dialog-edit').style.visibility='visible';
        $('#dialog-edit').addClass('animedialog');
        $('.list div').css({'border-bottom': '2px solid silver'});
        old_id=$(this).parent().attr('id');
        id_edit = old_id;
        document.getElementById('old-name').value =$('#'+old_id+' span:eq(0)').text();
        if(old_id.length==1){
            $('.text-group').html('--Lựa chọn--');
        }
        else{
            
            ul=$('li#'+old_id).parent();
            old_id=$(ul).parent().attr('id');
            
            $('.text-group').html(''+$('#'+old_id+' span:eq(0)').text()+'');
        }
        return false;
    });
    $('#dialog .list').click(function(){
       $('#bd-dialog .combobox').css({'height':'80px','visibility':'visible'});
       $('.list div').css({'border-bottom': '2px solid rgb(4, 245, 165)'});
       
    });
    $('#dialog-edit .list').click(function(){
        $('#bd-dialog-edit .combobox').css({'height':'80px','visibility':'visible'});
        $('.list div').css({'border-bottom': '2px solid rgb(4, 245, 165)'});
        
     });
    $('.combobox').on('click', 'li', function() {
        id=$(this).attr('id');
        $('.text-group').html( $('#'+id +' span:eq(0)').text());
        $('.combobox').css({'height':'0px','visibility':'hidden'});
        $('.list div').css({'border-bottom': '2px solid silver'});
        return false;
    });
    $('.combobox').on('click', '.choose', function() {
        id='0';
        $('.text-group').html('--Lựa chọn--');
        $('.combobox').css({'height':'0px','visibility':'hidden'});
        return false;
    });
    $('#dialog #save').click(function(){
        var NewGroup=$('#new-group').val();
        var TextGroup= $('.text-group').html();
        if(NewGroup==''){
            alert('Bạn chưa nhập tên nhóm!');
        }
        else{
            if(TextGroup=='--Lựa chọn--'){
                number_li['TreeView']++;
                
                $('#TreeView').append('<li class="open" id="'+number_li['TreeView']+'"><span>'+NewGroup+'</span><img src="../hinhanh/icons8-edit-24.png"class="edit"/></li>');
                $('#dialog #TreeView-list').append('<li id="'+number_li['TreeView']+'" clas><span>'+NewGroup+'</span></li>');
                $('#dialog-edit #TreeView-list').append('<li id="'+number_li['TreeView']+'" clas><span>'+NewGroup+'</span></li>');
                number_li[number_li['TreeView']]=0;
                
            }
            else{
                var new_id='';
                number_li[id.toString()]++;
                alert(number_li[id.toString()]);
                new_id= id+'_'+number_li[id.toString()];
                if(number_li[id.toString()]<=1){
                    $('#TreeView #'+id).append('<ul><li class="open" id="'+new_id+'"><span>'+NewGroup+'</span><img src="../hinhanh/icons8-edit-24.png"class="edit"/></li><ul>');
                    $('#TreeView-list #'+id).append('<ul><li id="'+new_id+'"><span>'+NewGroup+'</span></li><ul>');
                    $('#dialog-edit #TreeView-list #'+id).append('<ul><li id="'+new_id+'"><span>'+NewGroup+'</span></li><ul>');
                }
                else{
                    $('#TreeView #'+id+' ul:eq(0)').append('<li class="open" id="'+new_id+'"><span>'+NewGroup+'</span><img src="../hinhanh/icons8-edit-24.png"class="edit"/></li>');
                    $('#TreeView-list #'+id+' ul:eq(0)').append('<li id="'+new_id+'"><span>'+NewGroup+'</span></li>');
                    $('#dialog-edit #TreeView-list #'+id+' ul:eq(0)').append('<li id="'+new_id+'"><span>'+NewGroup+'</span></li>');
                }
                number_li[id+'_'+number_li[id.toString()]]=0;
                
            }
        }
    });
    $('#dialog-edit #save').click(function(){
        var id_li='';
        var html='';
        var html_dialog='';
        var new_name='';
        
        if($('#new-name').val()=='')
        {
            html=$('#'+id_edit).html();
            html_dialog=$('#dialog #'+id_edit).html();
           

          
        }
        else{
          
            new_name=$('#new-name').val();
            $('li#'+id_edit+' span:eq(0)').html(new_name);
            $('#dialog li#'+id_edit+' span:eq(0)').html(new_name);
            $('#dialog-edit li#'+id_edit+' span:eq(0)').html(new_name);
            html=$('#'+id_edit).html();
            html_dialog=$('#dialog #'+id_edit).html();
            
        }
        if(id!=old_id){
            if($('.text-group').html()=='--Lựa chọn--'){
                number_li['TreeView']++;
                $('#TreeView').append('<li class="open" id='+number_li['TreeView']+'>'+html +'</li>');
                $('#dialog #TreeView-list').append('<li class="open" id='+number_li['TreeView']+'>'+html_dialog+'</li>');
                $('#dialog-edit #TreeView-list').append('<li class="open" id='+number_li['TreeView']+'>'+html_dialog+'</li>');
                number_li[number_li['TreeView']]=0;
                
            }
            else{
                number_li[id]++
                if( number_li[id]<=1){
                    $('#'+id).append('<ul><li class="open" id='+(id+"_"+number_li[id])+'>'+html +'</li><ul>');
                    $('#dialog #'+id).append('<ul><li class="open" id='+(id+"_"+number_li[id])+'>'+html_dialog+'</li><ul>');
                    $('#dialog-edit #'+id).append('<ul><li class="open" id='+(id+"_"+number_li[id])+'>'+html_dialog+'</li><ul>');
                }
                else{
                    $('#'+id+' ul').append('<li class="open" id='+(id+"_"+number_li[id])+'>'+html +'</li>');
                    $('#dialog #'+id+' ul').append('<li class="open" id='+(id+"_"+number_li[id])+'>'+html_dialog+'</li>');
                    $('#dialog-edit #'+id+' ul').append('<li class="open" id='+(id+"_"+number_li[id])+'>'+html_dialog+'</li>');
                }              
                number_li[(id+"_"+number_li[id])]=0;
            }
            $('#'+id_edit).remove();
            $('#dialog #'+id_edit).remove();
            $('#dialog-edit #'+id_edit).remove();
        
        }
      
    });
    $('#delete').click(function(){
        $('#'+id_edit).remove();
        $('#dialog #'+id_edit).remove();
        $('#dialog-edit #'+id_edit).remove();
    });
});
