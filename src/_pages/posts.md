---
layout: page
title: Posts
locale: multi
locales:
  - en
  - fr	
---

<ul>
  {% for post in collections.posts.resources %}
    <li>
      <a href="{{ post.relative_url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
</ul>
