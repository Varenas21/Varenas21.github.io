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
        skills: ["Visual Studio", "Git | Github | BitBucket", "Jira | Trello", "Grafana", "Unity Engine | Unreal Engine", "MongoDB | SQL", "Microsoft Office Tools"]
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


// Data for your projects
const projects = [
    {
      name: "FLEX Configuration Settings",
      description: "Developed configuration settings for the FLEX application created by Motorola Solutions. This tool assists police departments in upgrading their data servers to the latest version, ensuring streamlined operations and improved system security.",
      link: "https://www.motorolasolutions.com/en_us/products/command-center-software/public-safety-software/flex.html",
      image: "https://sponsorlogo.informamarkets.com/sites/default/files/Motorola-Solutions-Logo-2017-422x292.png",
      released: false,
      releasedLink: ""
    },
    {
      name: "Tasko",
      description: "A task manager application designed to help children complete chores in a fun and engaging way. Tasko allows parents to set tasks for their children, turning everyday chores into a rewarding and interactive experience.",
      link: "https://github.com/Varenas21/TaskoCapstone",
      image: "https://github.com/Varenas21/TaskoCapstone/blob/master/TaskoCapstone/wwwroot/images/Logo.png?raw=true",
      released: true,
      releasedLink: "This video showcases the final presentation of my Capstone Project, Tasko. It highlights my core skills in software and game development."
    },
    {
      name: "LightGone",
      description: "A 2D horror game developed over 10 weeks, where players follow Ashley, who finds herself in a world that mirrors her own—except everyone is gone, and the lights are out. A psychological thriller with eerie gameplay and atmospheric storytelling.",
      link: "https://github.com/hystericalhorse/neugs-winter2024",
      image: "https://img.itch.zone/aW1nLzE1MzAyODA0LnBuZw==/original/3hwUgx.png",
      released: true,
      releasedLink: "https://store.steampowered.com/app/2866560/LightGone/"
    
    },
    {
        name: "AR Escape Room",
        description: "AR Virtual escape room. Using Niantic's Lightship tools in Unity, being able to place objects in the world based on world mesh creation using LiDAR",
        link: "https://github.com/Varenas21/AR-Escape-Room",
        image: "https://github.com/Varenas21/AR-Escape-Room/raw/b7a965809b77779e01442b822788e020c2377a2d/image_2024-08-26_120351134.png",
        released: false,
        releasedLink: ""
      },
    {
      name: "NotABurger",
      description: "An ARG (Alternate Reality Game) website based on WhatABurger, featuring hidden secrets and interactive elements throughout the site. This project demonstrates an innovative use of web design and storytelling to create an immersive user experience.",
      link: "https://github.com/MFBarker/NOTABURGER-2.0",
      image: "https://github.com/MFBarker/NOTABURGER/blob/main/Resources/Notaburger%20Logo.png?raw=true",
      released: false,
      releasedLink: ""
    },
    {
      name: "Dire Authority",
      description: "A 48-hour game jam project where players take on the role of the villain. You must decide the fate of random individuals based on their profiles, forcing tough moral decisions in this dark, narrative-driven game.",
      link: "https://github.com/AdrianCruz7/Dire_Authority",
      image: "https://img.itch.zone/aW1hZ2UvMjIyODQxMy8xMzE5MjQ1OS5wbmc=/794x1000/jGs3xj.png",
      released: true,
      releasedLink: "https://varenas.itch.io/dire-authority"
    },
    {
        name: "NotABurger (THE GAME)",
        description: "Personal post graduation project, taking the concept of NotABurger and creating it into a mixed 2D/3D Game. Currently in progress.",
        link: "https://github.com/Varenas21/NotABurger-Game",
        image: "https://github.com/MFBarker/NOTABURGER/blob/main/Resources/Notaburger%20Logo.png?raw=true",
        released: false,
        releasedLink: ""
      }
  ];
  
  
  // Function to create a card element
  function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");
  
    // Optionally add an image
    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.name;
      img.style.width = "100%"; // Adjust image width as needed
      img.style.borderRadius = "8px"; // Optional: to give the image rounded corners
      card.appendChild(img);
    }
  
    const title = document.createElement("h3");
    title.textContent = project.name;
    card.appendChild(title);
  
    const description = document.createElement("p");
    description.textContent = project.description;
    card.appendChild(description);
  
    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.textContent = "View Project";
    card.appendChild(link);

    if(project.released) {
        const releasedButton = document.createElement("a");
        releasedButton.classList.add("released-button");
        releasedButton.href = project.releasedLink;
        releasedButton.target = "_blank";
        releasedButton.innerText = "Released";
        card.appendChild(releasedButton);
    }
  
    return card;
  }
  
  // Function to display all project cards
  function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");
  
    projects.forEach(project => {
      const card = createProjectCard(project);
      projectsContainer.appendChild(card);
    });
  }
  
  // Call the function to display projects when the page is loaded
  document.addEventListener("DOMContentLoaded", displayProjects);