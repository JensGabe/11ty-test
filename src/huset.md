---
layout: layout.liquid
subnav: huset
title: Huset
description: Lokalerne i Egebjerg Fælleshus – plads til 72 gæster, plantegning og billeder.
eleventyNavigation:
  key: Huset
  order: 2
date: git Last Modified
---
# Huset

<p class="lead">Fælleshuset har plads til <strong>{{ priser.gaester }} gæster</strong> og et fuldt udstyret køkken med service til større selskaber.</p>

<img src="{{ '/assets/billeder/00-_BLU9089 (Small).jpg' | url }}" alt="Festsalen dækket op med lange borde" width="720" height="480" style="border-radius:10px; width:100%">

<h2 id="det-faar-du">Det får du</h2>

* Festsal med borde og stole til {{ priser.gaester }} personer
* Køkken med komfur, ovne, opvaskemaskine og service – se [inventarlisten]({{ '/praktisk/inventarliste/' | url }})
* Ekstralokale på ca. 40 m², kan lejes for {{ priser.ekstralokale | kr }}
* Trådløst netværk for medlemmer af tilknyttede foreninger – password udleveres i baren eller af den tilsynsførende

Planlægger du en fest? Brug [huskelisten]({{ '/praktisk/' | url }}) før, under og efter.

<h2 id="plantegning">Plantegning</h2>

<a href="{{ '/assets/plantegning.png' | url }}" class="floorplan"><img src="{{ '/assets/plantegning.png' | url }}" alt="Plantegning af Egebjerg Fælleshus" loading="lazy"></a>

<p class="muted">Tryk på plantegningen for at se den i fuld størrelse.</p>

<h2 id="billeder">Billeder</h2>

{% include 'gallery.liquid' %}
