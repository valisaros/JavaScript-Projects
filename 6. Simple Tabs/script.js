const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Selecting the dataset from the tab
        const target = document.querySelector(tab.dataset.tabTarget);

        // Remove the default or older 'active' class from the tab content
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        // Remove the default or older 'active' class from the tab links
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add 'active' class for the new selected elements
        tab.classList.add('active');
        target.classList.add('active');
    });
});

