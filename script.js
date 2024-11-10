document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var skillsSection = document.getElementById('skillsSection');
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            skillsSection.classList.toggle('hidden');
            if (skillsSection.classList.contains('hidden')) {
                toggleButton.textContent = 'Show Skills';
            }
            else {
                toggleButton.textContent = 'Hide Skills';
            }
        });
    }
    else {
        console.error('Toggle button or skills section not found.');
    }
});
