
$(function(){

    $("a").click(function(){
        var numeral=this.hash

        $("html,body").animate({
            scrollTop: $(numeral).offset().top -20
        },1000)

        $(".navbar").css({"background-color":"#0dcaf0"})

    });

    $(window).scroll(function(){
        $(".navbar").css({"background-color":"#0dcaf0"})
    });
   
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
