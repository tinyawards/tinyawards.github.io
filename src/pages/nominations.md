---
title: Nominations open in June
shortTitle: Nominations
layout: /src/components/layout.astro
image: /media/pitcher.svg
cover: /media/pitcher.svg
pictureFrame: false
order: 2
---

# Nominations open in June

Nominations for the 2026 awards aren't open... yet! In the meantime, you can see the previous year&apos;s winners and get more information about the Tiny Awards.

If you would like to be notified when nominations open, you can subscribe to &ldquo;Tiny Awards News&rdquo; below &mdash; we promise we&apos;ll never do anything weird, nefarious or unpleasantly-commercial with your email.

<form action="https://buttondown.com/api/emails/embed-subscribe/tinyawards" method="post" id="newsletter">
<input type="email" name="email" placeholder="Email" />
<input type="hidden" value="1" name="embed" />
<input type="submit" value="Subscribe" id="form-button" data-umami-event="newsletter-sign-up" />
</form>
<p id="error-message" hidden>Something didn't work! <a href="https://buttondown.com/tinyawards">Subscribe manually</a></p>

<script is:inline>
const form = document.getElementById('newsletter');
const formButton = document.getElementById('form-button');
const errorMessage = document.getElementById('error-message');
let isSubmitted = false;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (isSubmitted) {
    formButton.value = 'Subscribe';
    isSubmitted = false;
  }

  formButton.value = 'Subscribing...';
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response);
    formButton.value = 'Subscribed!';
    errorMessage.hidden = true;
  })
  .catch(error => {
    console.error(error);
    umami.track(error);
    formButton.value = 'Subscribe';
    errorMessage.hidden = false;
  });
});
</script>
