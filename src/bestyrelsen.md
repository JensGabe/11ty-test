---
layout: layout.liquid
eleventyNavigation:
  key: Bestyrelsen
  order: 2
date: git Last Modified
---

# Bestyrelsen og revisorer

{%- for medlem in bestyrelsen -%}
<div>
  <div class="board-member">
    <div class="board-member-names">
        <div>{{ medlem.name }}</div>
        <div>{{ medlem.title }}</div>
        <div class="board-member-year">{{ medlem.year }}</div>
    </div>
    <div class="board-member-details">
        <div>{{ medlem.address }}</div>
        <div>{{ medlem.phone }}</div>
        <div>{{ medlem.email }}</div>
    </div>
  </div>
</div>
{%- endfor -%}
