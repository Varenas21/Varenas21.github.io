// Navigate through pages
function navigateToPage(pageUrl)
{
    window.location.href = pageUrl;
}

function toggleMenu()
{
    var menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}