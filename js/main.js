jQuery(document).ready(function($){

 
    $(".tab-pane").on('click',function() {

        $(this).removeClass('active').next(".tab-pane").addClass("active");
                
                switch($(this).attr('id')) {
                case "tab-electric":
                    stepswidth = 10;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
                    break;
                case "tab-homeowner":
                    stepswidth = 20;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-solarinstalled":
                    stepswidth = 30;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-listedbuilding":
                    stepswidth = 40;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-solarbattery":
                    stepswidth = 50;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-postcode":
                    stepswidth = 60;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-search":
                    stepswidth = 70;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case id="tab-address":
                    stepswidth = 80;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-namephone":
                    stepswidth = 90;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case id="tab-thanks":
                    stepswidth = 100;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                default:
                    stepswidth = 0;
            }


    });
    $(".previous").on('click',function() {
       

        if($('.tab-pane.active').attr('id') !== 'tab-electric'){
            $('.tab-pane.active').removeClass('active').prev(".tab-pane").addClass("active");
            switch($('.tab-pane.active').attr('id')) {
                case "tab-electric":
                    stepswidth = 0;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
                    break;
                case "tab-homeowner":
                    stepswidth = 11;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-solarinstalled":
                    stepswidth = 22;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-listedbuilding":
                    stepswidth = 33;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-solarbattery":
                    stepswidth = 44;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-postcode":
                    stepswidth = 55;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-search":
                    stepswidth = 66;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case id="tab-address":
                    stepswidth = 77;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-namephone":
                    stepswidth = 88;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case id="tab-thanks":
                    stepswidth = 100;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                default:
                    stepswidth = 0;
            }
        }
    
    });
    $(".next-btn").on('click',function() {
        

        if($('.tab-pane.active').attr('id') !== 'tab-thanks'){
            $('.tab-pane.active').removeClass('active').next(".tab-pane").addClass("active");
            switch($('.tab-pane.active').attr('id')) {
                case "tab-electric":
                    stepswidth = 0;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
                    break;
                case "tab-homeowner":
                    stepswidth = 11;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-solarinstalled":
                    stepswidth = 22;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-listedbuilding":
                    stepswidth = 33;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-solarbattery":
                    stepswidth = 44;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-postcode":
                    stepswidth = 55;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-search":
                    stepswidth = 66;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case id="tab-address":
                    stepswidth = 77;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case "tab-namephone":
                    stepswidth = 88;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                case id="tab-thanks":
                    stepswidth = 100;
                    $('.tab-progress .progress-bar').css({
                        'width' : stepswidth + '%',
                    })
        
                    break;
                default:
                    stepswidth = 0;
            }
        }
    
    
    });

});
