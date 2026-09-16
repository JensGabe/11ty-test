---
layout: layout.liquid
eleventyNavigation:
  key: Booking kalender
  order: 6
date: git Last Modified
priority: 0.8
---
# Booking kalender #

## Privatudlejning ##

Reservationer kan **tidligst** ske 6 måneder før brugsdagen.  
Booking forespørgsler kan laves med formularen under menupunktet [Booking forespørgsel]({{ "/kontakt" | url }}).

## Interesse- og grundejerforeninger ##

Interesseforeninger og grundejerforeninger kan reservere lokalerne 1 år frem i tiden.
Booking forespørgsler kan laves via den relevante mailadresse:
 * [interesseforeninger@egebjergfaelleshus.dk](mailto:interesseforeninger@egebjergfaelleshus.dk)  
 * [grundejerforeninger@egebjergfaelleshus.dk](mailto:grundejerforeninger@egebjergfaelleshus.dk)


## Aftaler ##

Endelig aftale indgås skriftligt mellem lejeren og husets tilsynsførende.

Du kan i nedenstående kalender se hvornår Fælleshuset er reserveret og hvornår det er ledigt.

<iframe id="booking-frame" style="display:none;" src="https://booking.egebjergfaelleshus.dk/calendar" style="border-width:0" width="675" height="825" frameborder="0" scrolling="no"></iframe>
<div id="booking-loading">Henter booking kalenderen...</div>
<div id="booking-fallback" style="display:none; font-style:italic; color:red; font-weight: bold;">
  <div>Vores booking system er desværre ude af drift lige nu.</div>
  <div>Prøv igen senere. (Der kan gå et par dage før det kører igen!)</div>
</div>
<script>
(function () {
  const loading = document.getElementById("booking-loading");
  const iframe = document.getElementById("booking-frame");
  const fallback = document.getElementById("booking-fallback");
  const timeoutMs = 5000;
  const showFallback = () => {
    loading.style.display = "none";
    iframe.style.display = "none";
    fallback.style.display = "block";
  }
  const showIframe = () => {
    loading.style.display = "none";
    fallback.style.display = "none";
    iframe.style.display = "block";
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  fetch(iframe.src, { method: "HEAD", mode: "no-cors", signal: controller.signal })
    .then(() => {
      clearTimeout(timer);
      showIframe();
    })
    .catch(() => {
      clearTimeout(timer);
      showFallback();
    });
})();
</script>