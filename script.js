const topicsToggle = document.querySelector('#topics-toggle');
const workshopTopics = document.querySelector('#workshop-topics');

topicsToggle.addEventListener('click', () => {
  const isExpanded = topicsToggle.getAttribute('aria-expanded') === 'true';
  topicsToggle.setAttribute('aria-expanded', String(!isExpanded));
  workshopTopics.hidden = isExpanded;
  topicsToggle.textContent = isExpanded ? 'See workshop topics' : 'Hide workshop topics';
});
