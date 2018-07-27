$(document).ready(function(){

  //한글입력 안되게 처리
  $("input[name=id]").keyup(function(event){
   if (!(event.keyCode >=37 && event.keyCode<=40)) {
    var inputVal = $(this).val();
    $(this).val(inputVal.replace(/[^a-z0-9]/gi,''));
   }
  });

  //메뉴 active
  $("header .navwarp #menu ul li a").click(function(){
	  $("header .navwarp #menu ul li").removeClass("active");
	  $(this).parent("li").addClass("active");
  });
  //내정보토글
  $(".dropdown-toggle").dropdown()

  //영화리스트 정렬
  $("section .content-wrap #list .obj_section .tab_t1 .sort li a").click(function(){
	  $("section .content-wrap #list .obj_section .tab_t1 .sort li").removeClass("on");
	  $(this).parent().addClass("on");
  });

});
