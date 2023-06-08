setTimeout(removeloading ,7000)
        function removeloading(){
            document.getElementById("boody").style.overflowY = "visible";
            document.querySelector(".loading").classList.add("loading-hidden")
            

            };
function calculateArea1() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    var area = 0.5 * base * height;

    document.getElementById('result1').innerHTML = "The area is: " + area;
}

function calculateArea2() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);

    var area = length * width;

    document.getElementById('result2').innerHTML = "The area is: " + area;
}
function calculateArea3() {
    var radius = parseFloat(document.getElementById('radius').value);

    var area = Math.PI * radius * radius;

    document.getElementById('result3').innerHTML = "The area is: " + area.toFixed(2);
}
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add the "animate" class to elements in the viewport
function animateOnScroll() {
    var elements = document.querySelectorAll('.animate-item');
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', animateOnScroll);

// Initial animation check on page load
animateOnScroll();