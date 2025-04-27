document.addEventListener('DOMContentLoaded', function() {
    const categoryList = document.getElementById('categoryList');
    
    // Always show the category list by default, regardless of screen size
    // It will be hidden entirely via CSS when screen width is <= 1100px
    categoryList.style.display = 'block';
    
    // No need for toggle functionality since the sidebar will be
    // completely removed at 1100px or below via CSS display: none
});