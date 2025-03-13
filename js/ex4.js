const addCollegeBusinessLink = () => {
    const linksList = document.getElementById("links");
    const newLink = document.createElement("li");
    newLink.innerHTML = `<a href="https://www.csulb.edu/college-of-business">College of Business</a>`;
    
    const csulbLink = document.getElementById("csulb");
    linksList.insertBefore(newLink, csulbLink.nextSibling);
};

addCollegeBusinessLink();
