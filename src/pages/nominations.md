---
title: Nominations open in June
shortTitle: Nominations
layout: /src/components/layout.astro
image: /media/pitcher.svg
cover: /media/pitcher.svg
pictureFrame: false
order: 2
---

# Nominate a Site for Tiny&nbsp;Awards 2026

<form action="https://script.google.com/macros/s/AKfycbw6QC11p6iRiMAjMR0R2U93ERwTum3pHgk0fZoSlw9-s-NG5VBujSztZaMMPEdbh3k0/exec" method="POST" id="submissions">

<label class="label required" for="website-name">Website Name</label>
<input type="text" id="website-name" name="website-name" required placeholder="Website Name" />

<label class="label required" for="url">Project URL</label>
<input required id="url" name="url" type="text" placeholder="tinyawards.net" >

<label class="label required" for="notes">Any additional information about the project that you would like us to know?</label>
<input type="text" id="notes" name="notes" placeholder="Notes/comments about your submission" />

<div style="position: absolute; left: -5000px; top: -5000px;" aria-hidden="true">
  <label for="b_name">Please leave this field empty</label>
  <input type="text" id="b_name" name="b_name" tabindex="-1" autocomplete="off" />
</div>

<br>

<label class="label" for="email">Do you want to get notified when it is time to vote?</label>
<input type="email" id="email" name="email" placeholder="your@email.com" />

<br>

<input data-umami-event="nomination" type="submit" value="Submit" id="form-button" />


</form>

## What sort of websites are eligible?

To be eligible for selection, projects must meet the following criteria:

- **Non-commercial:** projects must not be intended for commercial end; projects which feature some sort of merchandise/donation mechanic are eligible, but this must be secondary to the project&apos;s primary scope/focus.
- **URL-based:** projects must exist on their own, unique URL (on a URL you&mdash;or the website maker, if not the submitter&mdash;own. It can be a subdomain/subdirectory/file sitting somewhere off the main domain).
- **No apps/downloads:** projects that exist as apps and/or require a download are excluded from selection.
- **No agencies or brands:** individuals or groups of creators only.
- Launched between July 2025 and July 2026

## 2026 Selection Committee

<table>
	<tr>
		<th class="table-heading" rowspan="18">Selection Committee</th>
		<td><a href="https://celinenguyen.com/">Celine Ngyuen</a></td>
	</tr>
	<tr><td><a href="https://elliott.computer/">Elliott Cost</a></td></tr>
	<tr><td><a href="https://escapethealgorithm.substack.com/">Elan Ullendorff</a></td></tr>
	<tr><td><a href="https://pketh.org/">Pketh</a></td></tr>
	<tr><td><a href="https://matt-prebeg.com/">Matt Prebeg</a></td></tr>
	<tr><td><a href="https://poolsuite.net/">Marty Bell</a></td></tr>
	<tr><td><a href="https://www.phonetime.news/">Kristin Merrilees</a></td></tr>
	<tr><td><a href="https://annierau.com/">Annie Rauwerda</a></td></tr>
	<tr><td><a href="https://breakfastatmyhouse.com/">Tiffany Ng</a></td></tr>
	<tr><td><a href="https://everythingi.love/">Chia Amisola</a></td></tr>
	<tr><td><a href="https://waxy.org/">Andy Baio</a></td></tr>
	<tr><td><a href="https://botharetrue.substack.com/">Alex Dobrenko</a></td></tr>
	<tr><td><a href="https://manuelmoreale.com/">Manuel Moreale</a></td></tr>
	<tr><td><a href="https://ellesho.me/page/">Elle</a></td></tr>
	<tr><td><a href="https://zuckerbaeckerei.com">Jana Weise</a></td></tr>
	<tr><td><a href="https://nicksusi.com/">Nick Susi</a></td></tr>
	<tr><td><a href="https://asterisques.com/">Ruby Thelot</a></td></tr>
	<tr><td><a href="https://www.todayintabs.com/">Rusty Foster</a></td></tr>
</table>


<script is:inline>
/* CONFETTI EFFECT */

var image = new Image();
image.src = '/icons/favicon-32x32.png';

var Confetti = (function () {
    var t = (function () {
            return function () {
                (this.gravity = 25), (this.particle_count = 25), (this.particle_size = 10), (this.explosion_power = 25), (this.destroy_target = 0), (this.fade = 10);
            };
        })(),
        e = (function () {
            function e(n) {
                var r = this;
                if (
                    ((this.bursts = []),
                    (this.setCount = function (t) {
                        if ("number"!= typeof t) throw new Error("Input must be of type 'number'");
                        e.CONFIG.particle_count = t;
                    }),
                    (this.setPower = function (t) {
                        if ("number"!= typeof t) throw new Error("Input must be of type 'number'");
                        e.CONFIG.explosion_power = t;
                    }),
                    (this.setSize = function (t) {
                        if ("number"!= typeof t) throw new Error("Input must be of type 'number'");
                        e.CONFIG.particle_size = t;
                    }),
                    (this.setFade = function (t) {
                        if ("boolean"!= typeof t) throw new Error("Input must be of type 'boolean'");
                        e.CONFIG.fade = t;
                    }),
                    (this.destroyTarget = function (t) {
                        if ("boolean"!= typeof t) throw new Error("Input must be of type 'boolean'");
                        e.CONFIG.destroy_target = t;
                    }),
                    (this.setupCanvasContext = function () {
                        if (!e.CTX) {
                            var t = document.createElement("canvas");
                            (e.CTX = t.getContext("2d")),
                                (t.width = 2 * window.innerWidth),
                                (t.height = 2 * window.innerHeight),
                                (t.style.position = "fixed"),
                                (t.style.top = "0"),
                                (t.style.left = "0"),
                                (t.style.width = "calc(100%)"),
                                (t.style.height = "calc(100%)"),
                                (t.style.margin = "0"),
                                (t.style.padding = "0"),
                                (t.style.zIndex = "999999999"),
                                (t.style.pointerEvents = "none"),
                                document.body.appendChild(t),
                                window.addEventListener("resize", function () {
                                    (t.width = 2 * window.innerWidth), (t.height = 2 * window.innerHeight);
                                });
                        }
                    }),
                    (this.trigger = function (t) {
                        let element = document.getElementById(this.elementId);
                        let rect = element.getBoundingClientRect();
                        let centerX = rect.left + rect.width / 2;
                        let centerY = rect.top + rect.height / 2;

                        console.log(element.getBoundingClientRect())
                        var n = new o(2 * centerX, 2 * centerY);
                        r.bursts.push(new i(n)), e.CONFIG.destroy_target && (document.getElementById(r.elementId).style.visibility = "hidden");
                    }),
                    (this.setupElement = function (t) {
                        var r = this;
                        (this.elementId = t),
                            this.setupCanvasContext(),
                            window.requestAnimationFrame(function (t) {
                                r.time = t;
                                r.update(t);
                            });
                    }),
                    (this.update = function (t) {
                        (r.delta_time = (t - r.time) / 1e3), (r.time = t);
                        for (var e = r.bursts.length - 1; e >= 0; e--) r.bursts[e].update(r.delta_time), 0 == r.bursts[e].particles.length && r.bursts.splice(e, 1);
                        r.draw(), window.requestAnimationFrame(r.update);
                    }),
                   !n)
                )
                    throw new Error("Missing id");
                e.CONFIG || (e.CONFIG = new t()), this.setupElement(n);
            }
            return (
                (e.prototype.draw = function () {
                    s.clearScreen();
                    for (var t = 0, e = this.bursts; t < e.length; t++) {
                        e[t].draw();
                    }
                }),
                e
            );
        })(),
        i = (function () {
            function t(t) {
                this.particles = [];
                for (var i = 0; i < e.CONFIG.particle_count; i++) this.particles.push(new n(t));
            }
            return (
                (t.prototype.update = function (t) {
                    for (var e = this.particles.length - 1; e >= 0; e--) this.particles[e].update(t), this.particles[e].checkBounds() && this.particles.splice(e, 1);
                }),
                (t.prototype.draw = function () {
                    for (var t = this.particles.length - 1; t >= 0; t--) this.particles[t].draw();
                }),
                t
            );
        })(),
        n = (function () {
            function t(t) {
                let generate_particle =  Math.random();
                (this.size = new o((4 * generate_particle + 4) * e.CONFIG.particle_size, (4 * generate_particle + 4) * e.CONFIG.particle_size)),
                    (this.position = new o(t.x - this.size.x / 2, t.y - this.size.y / 2)),
                    (this.velocity = r.generateVelocity()),
                    (this.rotation = 360 * Math.random()),
                    (this.rotation_speed = 10 * (Math.random() - 0.5)),
                    (this.hue = 360 * Math.random()),
                    (this.opacity = 100),
                    (this.lifetime = Math.random() + 0.25),
                    (this.image = image);
            }
            return (
                (t.prototype.update = function (t) {
                    (this.velocity.y += e.CONFIG.gravity * (this.size.y / (10 * e.CONFIG.particle_size)) * t),
                        (this.velocity.x += 25 * (Math.random() - 0.5) * t),
                        (this.velocity.y *= 0.98),
                        (this.velocity.x *= 0.98),
                        (this.position.x += this.velocity.x),
                        (this.position.y += this.velocity.y),
                        (this.rotation += this.rotation_speed),
                        e.CONFIG.fade && (this.opacity -= this.lifetime);
                }),
                (t.prototype.checkBounds = function () {
                    return this.position.y - 2 * this.size.x > 2 * window.innerHeight;
                }),
                (t.prototype.draw = function () {
                    s.drawImage(this.position, this.size, this.rotation, this.image, this.opacity);
                }),
                t
            );
        })();
    o = (function () {
        return function (t, e) {
            (this.x = t || 0), (this.y = e || 0);
        };
    })(),
    r = (function () {
        function t() {}
        return (
            (t.generateVelocity = function () {
                var t = Math.random() - 0.5,
                    i = Math.random() - 0.7,
                    n = Math.sqrt(t * t + i * i);
                return (i /= n), new o((t /= n) * (Math.random() * e.CONFIG.explosion_power), i * (Math.random() * e.CONFIG.explosion_power));
            }),
            t
        );
    })(),
    s = (function () {
        function t() {}
        return (
            (t.clearScreen = function () {
                e.CTX && e.CTX.clearRect(0, 0, 2 * window.innerWidth, 2 * window.innerHeight);
            }),
            (t.drawImage = function (t, i, n, o, r) {
                e.CTX &&
                    (e.CTX.save(),
                    e.CTX.beginPath(),
                    e.CTX.translate(t.x + i.x / 2, t.y + i.y / 2),
                    e.CTX.rotate((n * Math.PI) / 180),
                    e.CTX.globalAlpha = r / 100,
                    e.CTX.drawImage(o, -i.x / 2, -i.y / 2, i.x, i.y),
                    e.CTX.restore());
            }),
            t
        );
    })();
    return e;
})();

/* ACTUAL IMPORTANT SCRIPT */

const form = document.getElementById('submissions');
const formButton = document.getElementById('form-button');

let isSubmitted = false;

const urlInput = document.getElementById('url');
urlInput.addEventListener('input', () => {
  const url = urlInput.value;
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (urlRegex.test(url)) {
    urlInput.setCustomValidity('');
  } else {
    urlInput.setCustomValidity('Enter a URL');
  }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

// --- HONEYPOT CHECK START ---
  const honeypotField = document.getElementById('b_name').value;
  if (honeypotField !== "") {
    // If the field is filled, it's a bot.
    console.log("Spam detected. Submission halted.");

    // Fake a successful submission so the bot moves on
    formButton.value = 'Submitting...';
    formButton.disabled = true;
    setTimeout(() => {
      formButton.value = 'Submitted!';
      setTimeout(() => {
        form.reset();
        formButton.value = 'Submit';
        formButton.disabled = false;
      }, 3000);
    }, 1000);

    return; // Stop the rest of the script from executing
  }

  if (isSubmitted) {
    return;
  }

  isSubmitted = false;
  formButton.value = 'Submitting...';
  formButton.disabled = true;

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
    formButton.value = 'Submitted!';

    var confetti = new Confetti('form-button');

    confetti.setCount(20);
    confetti.setSize(6);
    confetti.setPower(25);
    confetti.setFade(false);
    confetti.destroyTarget(false);

    confetti.trigger();

  })
  .catch(error => {
    console.error(error);
    formButton.value = 'Submit';
    const errorParagraph = document.createElement('p');
      errorParagraph.innerHTML = 'Something didn\'t work! Reach out to <a href="mailto:hi@tinyawards.net">hi@tinyawards.net</a>.';
      errorParagraph.style = "margin:0"
      form.parentNode.appendChild(errorParagraph);
  })
  .finally(() => {

  	if ( document.getElementById('email').value) {

      const newsletterSignUpVote = new FormData()
      newsletterSignUpVote.append("email", document.getElementById('email').value);

      fetch("https://buttondown.com/api/emails/embed-subscribe/tinyawards", {
        method: "post",
        body: newsletterSignUpVote
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        umami.track(error);
        const errorParagraph = document.createElement('p');
					errorParagraph.innerHTML = 'Something went wrong! If you want to join our mailing list, subscribe manually at <a href="https://buttondown.com/tinyawards">https://buttondown.com/tinyawards</a>.';
					errorParagraph.id = "errorParagraph"
					form.parentNode.appendChild(errorParagraph);
      });
    }

    isSubmitted = false;
    formButton.disabled = false;

    setTimeout(() => {
      form.reset();
      const errorParagraph = form.parentNode.querySelector('p#errorParagraph');
      if (errorParagraph) {
        errorParagraph.remove();
      }
      formButton.value = 'Submit';
    }, 3000);
  });
});

</script>
