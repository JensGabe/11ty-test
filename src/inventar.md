---
layout: layout.liquid
eleventyNavigation:
  parent: Lokalerne
  key: Inventarliste
  order: 3
date: 2017-04-25
---
# Inventarliste #

<table class="inventory-table"> 
  <cols>
    <col>
  </cols>
  <tbody>
    <tr class="inventory-header">
      <th>Service</th>
      <th>Forventet</th>
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
      <th>Forventet</th>
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
      <th>Forventet</th>
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
      <th>Forventet</th>
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
      <th>Forventet</th>
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

Skriv i kolonnen ”Optalt før” beholdningen ved overtagelsen af lokalerne.  
Hvis uheldet er ude og noget forsvinder, så sæt antallet i kolonnen ”Mangler/itu”.  
Udfyld kolonnen ”Optalt” inden lokalerne afleveres.  
Viskestykker, håndklæder og køkkenruller skal medbringes.  
