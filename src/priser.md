---
layout: layout.liquid
title: Priser og regler
description: Priser og regler for leje af Egebjerg Fælleshus.
eleventyNavigation:
  key: Priser og regler
  order: 3
date: git Last Modified
---
# Priser og regler for Private

<p class="lead">En brugsdag går fra kl. 9.30 (fredage kl. 11:00) til næste dag kl. 9.00. På fredage kan lokalerne tidligst bruges fra kl. 11.00 på grund af den ugentlige rengøring.</p>

<div class="price-grid">
<div>
<h2>Én dag</h2>
<div class="table-scroll">
<table class="price-table">
{%- for p in priser.enkeltdag %}
<tr><th scope="row">{{ p.label }}</th><td>{{ p.pris | kr }}</td></tr>
{%- endfor %}
</table>
</div>
</div>
<div>
<h2>Flere dage</h2>
<div class="table-scroll">
<table class="price-table">
{%- for p in priser.flerdag %}
<tr><th scope="row">{{ p.label }}</th><td>{{ p.pris | kr }}</td></tr>
{%- endfor %}
</table>
</div>
</div>
</div>

<div class="table-scroll">
<table class="price-table">
<tr><th scope="row">Ekstralokale (ca. 40 m²), pr. udlejning</th><td>{{ priser.ekstralokale | kr }}</td></tr>
<tr><th scope="row">Reservationsgebyr, betales når ansøgningen godkendes, refunderes ikke</th><td>{{ priser.gebyr | kr }}</td></tr>
</table>
</div>

<div class="notice">
<p><strong>Der udlejes ikke til ungdomsfester.</strong></p>
</div>

## Regler

* Reservationer kan **tidligst** ske {{ priser.bookMaaneder }} måneder før brugsdagen. Send en [booking forespørgsel]({{ '/book/#forespoergsel' | url }}).
* Når en bookinganmodning godkendes af Fælleshuset, skal lejer betale booking gebyret på {{ priser.gebyr | kr }} og godkende kontrakten før bookingen er endeligt på plads.
* Lejen betales senest **2 måneder** før brugsdatoen.
* Ved afbestilling senere end 2 måneder før lejemålet kan tilbagebetaling kun påregnes, hvis huset bliver lejet ud til en anden.
* Det er klokkeslættet på lejekontrakten, der afgør, hvem der har retten til lejemålet.
* De foreninger, der finansierer husets drift, har fortrinsret. Det er som regel faste dage og tider, reserveret lang tid i forvejen.

<h2 id="konfirmationer">Konfirmationer {{ konfirmationer.aar }}</h2>

Der er følgende konfirmationsdage i Ballerup Sogn i {{ konfirmationer.aar }}:

<div class="table-scroll">
<table class="price-table">
<tr><th scope="col">Konfirmationsdag</th><td style="font-weight:500">Tidligst muligt at booke</td></tr>
{%- for dag in konfirmationer.dage %}
<tr><th scope="row">{{ dag }}</th><td>{{ konfirmationer.frister[forloop.index0] }} {{ konfirmationer.aar | minus: 1 }}</td></tr>
{%- endfor %}
</table>
</div>

**Hvis flere ønsker samme dato og har sendt ansøgningen rettidigt senest 2 dage efter tidligste bookingmulighed, trækkes der lod.**

## Spørgsmål

Henvendelser, der ikke er booking forespørgsler, kan sendes til [privatudlejning@egebjergfaelleshus.dk](mailto:privatudlejning@egebjergfaelleshus.dk) eller til formanden, {{ bestyrelsen[0].name }}, på telefon [{{ bestyrelsen[0].phone }}](tel:{{ bestyrelsen[0].phone | removeSpaces }}).
