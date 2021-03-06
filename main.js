// Smooth Scrolling

$('#myTopnav a, .btn, .smooth').on('click', function(event) {
    
    if(this.hash !=='') {

        const hash = this.hash;

        $('html, body').animate(
        {
            scrollTop: $(hash).offset().top - 80
        },
        800
        );
    }
});