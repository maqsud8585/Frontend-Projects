$("h1").css("color", "red");
$("p").text("This is a jQuery example.");

// jQuery code to change the background color of the body
$("body").css("background-color", "lightblue");
// jQuery code to hide the first paragraph
$("p:first").hide();
// jQuery code to show the first paragraph after 2 seconds
setTimeout(function() {
    $("p:first").show();
}, 2000);
// jQuery code to add a click event to the button
$("#myButton").click(function() {
    alert("Button clicked!");
});
// jQuery code to change the text of the button on click
$("#myButton").click(function() {
    $(this).text("Clicked!");
});
// jQuery code to add a class to the first paragraph
$("p:first").addClass("highlight");
// jQuery code to remove the class from the first paragraph after 3 seconds
setTimeout(function() {
    $("p:first").removeClass("highlight");
}, 3000);
// jQuery code to toggle the visibility of the second paragraph on button click
$("#toggleButton").click(function() {
    $("p:nth-of-type(2)").toggle();
});
// jQuery code to change the text of the second paragraph on button click
$("#changeTextButton").click(function() {
    $("p:nth-of-type(2)").text("This is the new text for the second paragraph.");
});
// jQuery code to append a new paragraph to the body
$("body").append("<p>This is a new paragraph added by jQuery.</p>");
// jQuery code to prepend a new paragraph to the body
$("body").prepend("<p>This is a new paragraph added at the beginning by jQuery.</p>");
// jQuery code to fade out the first paragraph on button click
$("#fadeOutButton").click(function() {
    $("p:first").fadeOut();
});
// jQuery code to fade in the first paragraph after 2 seconds
setTimeout(function() {
    $("p:first").fadeIn();
}   , 2000);
// jQuery code to create an element and append it to the body
var newElement = $("<div>This is a dynamically created div element.</div>");
$("body").append(newElement);
// jQuery code to add a click event to the new element
newElement.click(function() {
    alert("New element clicked!");
});
// jQuery code to change the CSS of the new element
newElement.css({
    "background-color": "yellow",
    "padding": "10px",
    "border": "1px solid black"
});
// jQuery code to animate the new element
newElement.animate({
    "width": "200px",
    "height": "100px"
}, 1000, function() {
    alert("Animation complete!");
});

// jQuery code to add element by using before and after methods
$("p:first").before("<p>This paragraph is added before the first paragraph.</p>");
$("p:first").after("<p>This paragraph is added after the first paragraph.</p>");
// jQuery code to change the HTML content of the first paragraph
$("p:first").html("<strong>This is the updated content of the first paragraph.</strong>");
// jQuery code to get the value of an input field
$("#myInput").val("This is the initial value.");
// jQuery code to set the value of an input field on button click
$("#setInputValueButton").click(function() {
    $("#myInput").val("This value is set by jQuery.");
});
// jQuery code to get the value of the input field on button click
$("#getInputValueButton").click(function() {
    alert("Input value: " + $("#myInput").val());
});
// jQuery code to change the CSS of the input field
$("#myInput").css({
    "border": "2px solid green",
    "padding": "5px",
    "width": "200px"
}); 