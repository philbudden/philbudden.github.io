---
layout: page
title: Projects
permalink: /projects/
---

Open-source projects I actively maintain:

<div class="projects-grid">
  {% for project in site.data.projects %}
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <div class="project-description">{{ project.description | markdownify }}</div>
      <a href="{{ project.github_url }}" class="project-link" target="_blank" rel="noopener noreferrer">
        View on GitHub <span aria-hidden="true">→</span><span class="sr-only">(opens in new tab)</span>
      </a>
    </div>
  {% endfor %}
</div>
