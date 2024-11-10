document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement | null;
    const skillsSection = document.getElementById('skillsSection') as HTMLElement | null;

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            skillsSection.classList.toggle('hidden');
            if (skillsSection.classList.contains('hidden')) {
                toggleButton.textContent = 'Show Skills';
            } else {
                toggleButton.textContent = 'Hide Skills';
            }
        });
    } else {
        console.error('Toggle button or skills section not found.');
    }
});
