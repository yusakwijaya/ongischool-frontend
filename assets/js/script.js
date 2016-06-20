$(document).ready(function() {

    // Trigger Menu
    $(".menu-trigger").click(function() {
        $(".menu-overlay").fadeIn("slow", function() {
            // Animation complete
        });
        // $(".menu-overlay").css("display", "block");
    });

    // Close Menu
    $(".close-menu").click(function() {
		$(".menu-overlay").fadeOut("slow", function() {
            // Animation complete
        });
        // $(".menu-overlay").css("display", "none");
    });
});
