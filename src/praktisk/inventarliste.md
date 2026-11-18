---
layout: layout.liquid
subnav: praktisk
title: Inventarliste
description: Inventarliste til optælling før og efter leje af Egebjerg Fælleshus.
eleventyNavigation:
  parent: Praktisk
  key: Inventarliste
  order: 1
date: 2017-04-25
---
# Inventarliste

Skriv beholdningen ved overtagelsen af lokalerne i kolonnen ”Optalt før”. Hvis uheldet er ude og noget forsvinder, så skriv antallet i kolonnen ”Mangler/itu”. Udfyld kolonnen ”Optalt efter”, inden lokalerne afleveres.

<div class="button-row no-print"><button class="button button-accent" type="button" onclick="window.print()">Udskriv inventarlisten</button></div>

<div class="table-scroll">

<table class="inventory-table"> 
  <colgroup><col></colgroup>
  <tbody>
    <tr class="inventory-header">
      <th>Service</th>
      <th>For&#8203;ventet</th>
      <th>Optalt Før</th>
      <th>Optalt Efter</th>
      <th>Mangler /Itu</th>
      <th>Ekstra</th>
      <th>Pris</th>
    </tr>
    {%- for inventory in inventar-service -%}
    <tr class="inventory-item">
      <td>{{ inventory.navn }}<div>{{ inventory.kommentar }}</div>
      </td>
      <td>{{ inventory.antal }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{{ inventory.ekstra }}</td>
      <td>{{ inventory.pris }}</td>
    </tr>
    {%- endfor -%}
  </tbody>
  <tbody>
    <tr class="inventory-header">
      <th>Glas</th>
      <th>For&#8203;ventet</th>
      <th>Optalt Før</th>
      <th>Optalt Efter</th>
      <th>Mangler /Itu</th>
      <th>Ekstra</th>
      <th>Pris</th>
    </tr>
    {%- for inventory in inventar-glas -%}
    <tr class="inventory-item">
      <td>{{ inventory.navn }}<div>{{ inventory.kommentar }}</div>
      </td>
      <td>{{ inventory.antal }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{{ inventory.ekstra }}</td>
      <td>{{ inventory.pris }}</td>
    </tr>
    {%- endfor -%}
  </tbody>
  <tbody>
    <tr class="inventory-header">
      <th>Bestik</th>
      <th>For&#8203;ventet</th>
      <th>Optalt Før</th>
      <th>Optalt Efter</th>
      <th>Mangler /Itu</th>
      <th>Ekstra</th>
      <th>Pris</th>
    </tr>
    {%- for inventory in inventar-bestik -%}
    <tr class="inventory-item">
      <td>{{ inventory.navn }}<div>{{ inventory.kommentar }}</div>
      </td>
      <td>{{ inventory.antal }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{{ inventory.ekstra }}</td>
      <td>{{ inventory.pris }}</td>
    </tr>
    {%- endfor -%}
  </tbody>
  <tbody>
    <tr class="inventory-header">
      <th>Andet</th>
      <th>For&#8203;ventet</th>
      <th>Optalt Før</th>
      <th>Optalt Efter</th>
      <th>Mangler /Itu</th>
      <th>Ekstra</th>
      <th>Pris</th>
    </tr>
    {%- for inventory in inventar-andet -%}
    <tr class="inventory-item">
      <td>{{ inventory.navn }}<div>{{ inventory.kommentar }}</div>
      </td>
      <td>{{ inventory.antal }}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{{ inventory.ekstra }}</td>
      <td>{{ inventory.pris }}</td>
    </tr>
    {%- endfor -%}
  </tbody>
  <tbody>
    <tr class="inventory-header">
      <th>Inventar</th>
      <th>For&#8203;ventet</th>
      <th>Optalt Før</th>
      <th>Optalt Efter</th>
      <th>Mangler /Itu</th>
    </tr>
    {%- for inventory in inventar-inventar -%}
    <tr class="inventory-item">
      <td>{{ inventory.navn }}<div>{{ inventory.kommentar }}</div>
      </td>
      <td>{{ inventory.antal }}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>
</div>

<p class="muted">Viskestykker, håndklæder og køkkenruller skal medbringes. På mobil kan tabellen rulles sidelæns.</p>
