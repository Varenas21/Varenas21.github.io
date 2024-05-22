// Navigate through pages
function navigateToPage(url)
{
    // Page transition
    var currentContent = document.querySelector('.content:not(.hidden)');
    currentContent.classList.add('fade-out');

    // Fade in to new page 
    setTimeout(function() {
        currentContent.classList.add('hidden');
        currentContent.classList.remove('fade-out');

        var newContent = document.getElementById(url);
        newContent.classList.remove('hidden');
        newContent.classList.add('fade-in');
    }, 500);

    setTimeout(function () {
        window.location.href = url;
    })
}

function toggleMenu()
{
    var menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

