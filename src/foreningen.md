---
layout: layout.liquid
title: Foreningen og bestyrelsen
description: Foreningen for Egebjerg Fælleshus – medlemskab, grundejerforeninger og bestyrelse.
date: git Last Modified
---
# Foreningen og bestyrelsen

<nav class="sub-nav sub-nav-inline" aria-label="Foreningen"><a href="#bestyrelsen">Bestyrelsen</a><a href="#grundejerforeninger">Grundejerforeninger</a><a href="{{ '/foreningen/vedtaegter/' | url }}">Vedtægter</a></nav>

<p class="lead">Foreningen for Egebjerg Fælleshus driver lokalerne i Agernhaven 8, som lejes af Ballerup Kommune. Huset drives af en selvstændig bestyrelse.</p>

Driften finansieres af en række faste brugere, især interesse- og grundejerforeninger, og herudover af udlejning til private.

## Er jeg medlem?

[Vedtægterne]({{ '/foreningen/vedtaegter/' | url }}) siger i § 3: "Foreningens medlemmer er de beboere, som er medlem af en grundejerforening, der økonomisk støtter driften af huset." Bor du i en af grundejerforeningerne herunder, er du medlem.

<h2 id="grundejerforeninger">Tilskudsgivende grundejerforeninger</h2>

<ul class="associations">
{%- for g in grundejerforeninger %}
  <li>{{ g.navn }} <span>{{ g.medlemmer }} medlemmer</span></li>
{%- endfor %}
</ul>

<p class="muted">Nærmere oplysninger om de enkelte grundejerforeninger findes på Egebjergklubbens hjemmeside eller på grundejerforeningens egen hjemmeside.</p>

<h2 id="bestyrelsen">Bestyrelse og revisorer</h2>

<ul class="people">
{%- for medlem in bestyrelsen %}
  <li class="person">
    <div class="person-name">{{ medlem.name }}</div>
    {%- if medlem.title != "" %}<div class="person-role">{{ medlem.title }}</div>{% endif %}
    <div class="person-meta">
      {%- if medlem.year %}<div>Valgt til {{ medlem.year }}</div>{% endif %}
      {%- if medlem.address != "" %}<div>{{ medlem.address }}</div>{% endif %}
      {%- if medlem.phone != "" %}<div><a href="tel:{{ medlem.phone | removeSpaces }}">{{ medlem.phone }}</a></div>{% endif %}
      {%- if medlem.email != "" %}<div><a href="mailto:{{ medlem.email }}">{{ medlem.email }}</a></div>{% endif %}
    </div>
  </li>
{%- endfor %}
</ul>
