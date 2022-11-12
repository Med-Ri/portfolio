$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0 ) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

        /* smooth scrolling */
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500, 'linear'
        );
    });
});

/* form function */
document.getElementById("sendEmail").addEventListener("click",function(){

    if (document.getElementById("name").value==="") {
        Swal.fire({
            position: 'top',
            width : "40%" , 
            icon: 'warning',
            title: ' Please enter your name 😄 !!',
            showConfirmButton: false,
            timer: 3500
        })
        return false;    
    } else if (document.getElementById("email").value === "") {
        Swal.fire({
            position: 'top',
            width : "40%" , 
            icon: 'warning',
            title: ' Please enter your email 😄 !!',
            showConfirmButton: false,
            timer: 3500
        })
        return false;
    } else if (document.getElementById("message").value === "") {
        Swal.fire({
            position: 'top',
            width : "40%" , 
            icon: 'warning',
            title: ' Please don`t forget to write your message 😄 !!',
            showConfirmButton: false,
            timer: 3500
        })
        return false
    } else {
        emailjs.send("service_u72s96f","template_6njkiqk",{
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            }).then(Response=>{
                Swal.fire({
                    position: 'center',
                    width : "40%" , 
                    icon: 'success',
                    title: 'your message was sent successfully !!',
                    text : "Thanks for texting me 😄 !" ,
                    showConfirmButton: false,
                    timer: 3500
                }).then(()=>{
                    document.getElementById("myForm").reset()
                })
        })
    };
})
