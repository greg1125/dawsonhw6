const displayText400 = () => {
    const courses = document.querySelectorAll(".level400");
    courses.forEach(course => {
        console.log(course.textContent);
    });
};

displayText400();
