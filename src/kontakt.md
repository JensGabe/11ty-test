---
layout: layout.liquid
eleventyNavigation:
  key: Booking forespørgsel
  order: 7
date: git Last Modified
priority: 0.9
---
<iframe id="booking-frame" style="display:none;" src="https://booking.egebjergfaelleshus.dk/" width="640" height="1400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
<div id="booking-loading">Henter booking formularen ...</div>
<div id="booking-fallback" style="display:none; font-style:italic; color:red; font-weight: bold; padding: 1em;">
  <div>Vores booking system er desværre ude af funktion lige nu.</div>
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