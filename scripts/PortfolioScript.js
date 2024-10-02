
//home script(home.html)
document.getElementById('home').addEventListener('click', function () {
    fetch('home.html')
        .then(response => response.text())
        .then(data => {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            document.getElementById("cont").innerHTML = tempDiv.querySelector('#bb').outerHTML;
        })
});



//project script(projects.html)
document.getElementById('proj').addEventListener('click', function () {
    fetch('projects.html')
        .then(response => response.text())
        .then(data => {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            document.getElementById("cont").innerHTML = tempDiv.querySelector('#pc').innerHTML;
            console.log(document.getElementById("cont").innerHTML);

            // Call observer initialization after content is loaded
            initializeIntersectionObserverProjects();
        });
});

// document.addEventListener("DOMContentLoaded", function () {
//     // Initialize observer for elements already present in the DOM
//     initializeIntersectionObserver();
// });  //It is not necessary

// Function to initialize the Intersection Observer
function initializeIntersectionObserverProjects() {
    const projWrites = document.querySelectorAll('.proj_write');

    const observerOptions = {
        root: document.querySelector('.proj_box'),
        rootMargin: '0px',
        threshold: 0.1 // Adjust this to determine when the element is considered visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    projWrites.forEach((element) => {
        observer.observe(element);
    });
}



//about me(About me.html)
document.getElementById('aboutme').addEventListener('click', function () {
    fetch('About me.html')
        .then(response => response.text())
        .then(data => {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            document.getElementById("cont").innerHTML = tempDiv.querySelector('#ac').innerHTML;
            // Call observer initialization after content is loaded
            initializeIntersectionObserverAboutme();
        })
});

function initializeIntersectionObserverAboutme() {
    const aboutWrites = document.querySelectorAll('.about_write');
    const aboutBox = document.querySelector('.about_box');

    function checkVisibility() {
        const boxRect = aboutBox.getBoundingClientRect();

        aboutWrites.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= boxRect.top && rect.bottom <= boxRect.bottom) {
                element.classList.add('visible');
            }
        });
    }

    aboutBox.addEventListener('scroll', checkVisibility);
    checkVisibility();

}



//certificates (activities.html) script
document.getElementById('cert').addEventListener('click', function () {
    fetch('activities.html')
        .then(response => response.text())
        .then(data => {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            document.getElementById("cont").innerHTML = tempDiv.querySelector('#cc').innerHTML;
        })
});



//resume
document.getElementById('resume').addEventListener('click', function () {
    // Navigate back to Page 1
    const link = document.createElement('a'); // Create a new anchor element
    link.href = 'res/pdf/jayamurugan resmue.pdf'; // Replace with the path to your PDF file
    link.download = 'res/pdf/jayamurgan resume.pdf'; // The name that the downloaded file will have
    document.body.appendChild(link); // Append the anchor to the body
    link.click(); // Simulate a click on the anchor
    document.body.removeChild(link); // Remove the anchor from the document

});



//navbar scripts
const tags = document.querySelectorAll('.button');

tags.forEach(tag => {
    tag.addEventListener('click', function () {
        // Remove 'active' class from all elements
        tags.forEach(t => t.classList.remove('active'));

        // Add 'active' class to the clicked element
        this.classList.add('active');
    });
});

