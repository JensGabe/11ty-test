---
layout: layout.liquid
eleventyNavigation:
  key: Lokalerne
  order: 4
date: git Last Modified
---
# Lokalerne #

Du finder en plantegning under menupunktet [Plantegning]({{ "/plantegning" | url }}), så du kan bedømme anvendeligheden til dit formål.

Du finder en inventarliste under menupunktet [Inventar]({{ "/inventar" | url }}). Du kan udskrive den til brug før og efter lejemålet.

Du finder en huskeliste under menupunktet [Huskeliste]({{ "/huskeliste" | url }}), udskriv og brug den under benyttelse af lokalerne.

Du finder Lejekontrakt under menupunktet [Lejekontrakt]({{ "/lejekontrakt" | url }}).

Der er trådløs netadgang i Fælleshuset for medlemmer af tilknyttede foreninger og password udleveres i baren eller af den tilsynsførende.

# Billeder	 #
<div class="images">
{%- for image in collections.images -%}
	<div class="images-box">
		<img class="images-image" src="{{ image.path }}" onclick="event.target.parentElement.classList.toggle('images-image-expand')">
		<div class="images-image-control images-image-close" onclick="event.target.parentElement.classList.remove('images-image-expand')"></div>
		<div class="images-image-control images-image-prev" onclick="event.target.parentElement.classList.remove('images-image-expand'); event.target.parentElement.previousSibling.classList.add('images-image-expand');"></div>
		<div class="images-image-control images-image-next" onclick="event.target.parentElement.classList.remove('images-image-expand'); event.target.parentElement.nextSibling.classList.add('images-image-expand');"></div>
	</div>
{%- endfor -%}
</div>

