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

## 2026 Selection Committee

<table>
	<tr>
		<th class="table-heading" rowspan="17">Selection Committee</th>
		<td><a href="https://celinenguyen.com/">Celine Ngyuen</a></td>
	</tr>
	<tr><td><a href="https://elliott.computer/">Elliott Cost</a></td></tr>
	<tr><td><a href="https://escapethealgorithm.substack.com/">Elan Ullendorff</a></td></tr>
	<tr><td><a href="https://pketh.org/">Pketh</a></td></tr>
	<tr><td><a href="https://matt-prebeg.com/">Matt Prebeg</a></td></tr>
	<tr><td><a href="https://poolsuite.net/">Marty Bell</a></td></tr>
	<tr><td><a href="https://www.phonetime.news/">Kristin Merrilees</a></td></tr>
	<tr><td><a href="https://annierau.com/">Annie Rauwerda</a></td></tr>
	<tr><td><a href="https://breakfastatmyhouse.com/">Tiffany</a></td></tr>
	<tr><td><a href="https://everythingi.love/">Chia Amisola</a></td></tr>
	<tr><td><a href="https://waxy.org/">Andy Baio</a></td></tr>
	<tr><td><a href="https://botharetrue.substack.com/">Alex Dobrenko</a></td></tr>
	<tr><td><a href="https://manuelmoreale.com/">Manuel Moreale</a></td></tr>
	<tr><td><a href="https://ellesho.me/page/">Elle</a></td></tr>
	<tr><td><a href="https://zuckerbaeckerei.com">Jana Weise</a></td></tr>
	<tr><td><a href="https://nicksusi.com/">Nick Susi</a></td></tr>
	<tr><td><a href="https://asterisques.com/">Ruby Thelot</a></td></tr>
</table>
