
    $(document).ready(function(){
        // Store the original source of the image
        var originalSrc = $("#l1").attr("src");
        
        // Mouse enter event handler
        $("#l1").mouseenter(function(){
            // Change the source to the hover image
            $(this).attr("src", "deanghover1.jpg");
        }).mouseleave(function(){
            // Change back to the original source on mouse leave
            $(this).attr("src", originalSrc);
        });
    });
    