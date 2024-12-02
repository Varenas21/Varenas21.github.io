// Scroll to section assigned by the target name in the href
document.querySelector('nav').addEventListener('click',function(event) {
    if(event.target.tagName === 'A') {
        let targetSection = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'

        });
        event.preventDefault();
    }
})

document.addEventListener("DOMContentLoaded", function() {
    // Skills data: categories and skills
    const skillsData = [
        {
        category: "Programming Languages",
        skills: ["C#", "Java", "HTML5/CSS", "C++", "JavaScript", "React.js", "Node.js"]
    },
    {
        category: "Tool & Technologies",
        skills: ["Visual Studio", "Git | Github | BitBucket"]
    },
    {
        category: "Other Skills",
        skills: ["Team and Project Management", "Agile Development", "UI/UX Design", "Game Development", "Game AI", "Game Design", "Effective Communication"]
    }
    ];

    // Use the contaienr to append the items
    const skillsContainer = document.querySelector('.skills-container');

    // Loop through each item and generate it dynamically
    skillsData.forEach(skillCategory => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skills-list');

        // Create category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = skillCategory.category;
        categoryDiv.appendChild(categoryTitle);

        // Create list of skills
        const skillsList = document.createElement('ul');
        skillCategory.skills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });

        // Append items to container
        categoryDiv.appendChild(skillsList);
        skillsContainer.appendChild(categoryDiv);
    })
});

