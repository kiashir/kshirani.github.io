
// Reference: page 255-269 of text book "murach's JavaScript and jQuery 3rd edition"
 $(document).ready(function() {
        $("#image_list a").each(function() {
                var imageURL = $(this).attr("href");
                var caption = $(this).attr("title");

                // preload the image for each link
                var swappedImage = new Image();
                swappedImage.src = imageURL;
                
                // set up the event handlers for each link
                $(this).click(function (evt) {
                        // get the image URL and caption for each image and animate the caption
                        $("caption, #image").fadeOut(3000,
                                function() {
                                        $("#image").attr("src", imageURL);
                                        $("#caption").text(caption);
                                        $("#caption").fadeIn(3000);
                                        $("#image").fadeIn(3000);
                                        $("#caption").animate({fontSize: "2.0em" });
                                });
                        // cancel the default action of each link
                        evt.preventDefault();
                });
        });

        // move the focus to the first link
        $("li:first-child a").focus();

}); // end ready


