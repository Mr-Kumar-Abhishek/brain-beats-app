const fileList = [
  "/3d-alt-frequency.html",
  "/3d-rife-machine.html",
  "/ads.txt",
  "/angel-frequency.html",
  "/app-ads.txt",
  "/binaural-base-beats.html",
  "/binaural-beats-generator.html",
  "/binaural-mind-machine-generator.html",
  "/blog/blog/2016/06/10/abhishek-kumar-site-launched.html",
  "/blog/blog/2023/01/01/how-to-use-white-noise-for-better-sleep-and-productivity.html",
  "/blog/blog/2023/01/02/binaural-beats-what-Are-they-and-how-can-they-Help-you.html",
  "/blog/blog/2023/01/03/will-listening-to-frequencies-while-you-sleep-will-work.html",
  "/blog/blog/2023/01/04/different-types-of-binaural-beats.html",
  "/blog/blog/2023/01/05/white-noise-for-productivity.html",
  "/blog/blog/2023/01/06/listening-to-delta-waves-while-sleeping.html",
  "/blog/blog/2023/01/07/listening-to-theta-waves-while-sleeping.html",
  "/blog/blog/2023/01/08/listening-to-frequencies.html",
  "/blog/blog/2023/01/09/1740-hz-the-solfeggio-frequency-for-upper-homes.html",
  "/blog/blog/2023/01/10/4096-hz-pure-tone-galactic-chakra-frequency.html",
  "/blog/blog/2023/01/11/2048-hz-pure-tone-frequency-benefits.html",
  "/blog/blog/2023/01/12/does-listening-to-frequencies-while-sleep-work.html",
  "/blog/blog/2023/01/13/11-hz-binaural-beats-frequency-benefits.html",
  "/blog/blog/2023/01/14/4096-hz-pure-tone-galactic-chakra.html",
  "/blog/blog/2023/01/15/what-is-pink-noise-and-how-can-it-help-you-sleep-better.html",
  "/blog/blog/2023/01/16/how-to-benefit-from-1074-hz-solfeggio-frequency.html",
  "/blog/blog/2023/01/17/how-to-use-396-hz-solfeggio-frequency-to-release-guilt-and-fear.html",
  "/blog/blog/2023/01/18/what-is-white-noise-and-how-can-it-help-you.html",
  "/blog/blog/2023/01/19/what-is-pink-noise-and-how-can-it-help-you.html",
  "/blog/blog/2023/01/20/what-is-brown-noise-and-how-can-it-help-you-sleep-better.html",
  "/blog/blog/2023/01/21/what-is-red-noise-and-how-can-it-help-you.html",
  "/blog/blog/2023/01/22/black-noise-the-ultimate-sound-for-sleep-and-relaxation.html",
  "/blog/blog/2023/01/23/green-noise-sound-of-nature.html",
  "/blog/blog/2023/01/24/how-174-hz-can-heal-your-body-and-mind.html",
  "/blog/blog/2023/01/25/285-hz-the-frequency-of-healing-and-regeneration.html",
  "/blog/blog/2023/01/26/396-hz-the-solfeggio-frequency-for-liberation-from-guilt-and-fear.html",
  "/blog/blog/2023/01/27/417-hz-the-frequency-of-change.html",
  "/blog/blog/2023/01/28/how-to-use-528-hz-frequency-for-transformation-and-miracles.html",
  "/blog/blog/2023/01/29/how-to-meditate-with-the-549.21-hz-solfeggio-frequency.html",
  "/blog/blog/2023/02/01/what-is-618-hz-and-why-it-is-important-for-your-lower-heart-chakra.html",
  "/blog/blog/2023/02/02/639-hz-the-solfeggio-frequency-for-healing-relationships.html",
  "/blog/blog/2023/02/03/how-to-use-741-hz-solfeggio-frequency-for-self-expression-and-stabitliy.html",
  "/blog/blog/2023/02/04/how-to-activate-mouth-chakra-with-762-hz-solfeggio-frequency.html",
  "/blog/blog/2023/02/05/831-hz-solfeggio-frequency-for-senses-chakra.html",
  "/blog/blog/2023/02/06/how-to-use-852-hz-solfeggio-frequency-to-see-beyond-illusions.html",
  "/blog/blog/2023/02/07/963-hz-the-solfeggio-frequency-of-spiritual-awakening.html",
  "/blog/blog/2023/02/08/how-to-use-1074-solfeggio-frequency-to-balance-upper-earth-chakra.html",
  "/blog/blog/2023/02/09/1185-hz-the-solfeggio-frequency-for-moon-chakra.html",
  "/blog/blog/2023/02/10/how-to-activate-your-stellar-gateway-with-1296-hz-solfeggio-frequency.html",
  "/blog/blog/2023/02/10/how-to-activate-your-stellar-gateway-with1296-hz-solfeggio-frequency.html",
  "/blog/blog/2023/02/11/1407-hz-the-solfeggio-frequency-of-galactic-chakra.html",
  "/blog/blog/2023/02/12/1518-hz-the-solfeggio-frequency-of-universal-consciousness.html",
  "/blog/blog/2023/02/13/1629-hz-the-solfeggio-frequency-of-the-great-central-sun.html",
  "/blog/blog/2023/02/14/1740-hz-solfeggio-frequency-for-upper-homes.html",
  "/blog/blog/2023/02/15/1782-hz-the-solfeggio-frequency-of-alchemy.html",
  "/blog/blog/2023/02/15/1851-hz-the-solfeggio-frequency-of-alchemy.html",
  "/blog/blog/2023/02/16/1782-hz-the-solfeggio-frequency-of-5th-dimension.html",
  "/blog/blog/2023/02/16/1803-hz-the-solfeggio-frequency-of-5th-dimension.html",
  "/blog/blog/2023/02/17/1953-hz-the-solfeggio-frequency-of-solar-swords.html",
  "/blog/blog/2023/02/17/1962-hz-the-solfeggio-frequency-of-solar-swords.html",
  "/blog/blog/2023/02/18/1962-hz-the-solfeggio-frequency-of-fertile-soil.html",
  "/blog/blog/2023/02/18/2073-hz-the-solfeggio-frequency-of-fertile-soil.html",
  "/blog/blog/2023/02/19/1974-hz-the-solfeggio-frequency-of-holy-fire.html",
  "/blog/blog/2023/02/19/2184-hz-the-solfeggio-frequency-of-holy-fire.html",
  "/blog/blog/2023/02/20/how-to-activate-the-chakra-of-fiery-tree-with-2073-hz-solfeggio-frequency.html",
  "/blog/blog/2023/02/20/how-to-activate-the-chakra-of-fiery-tree-with-2295-hz-solfeggio-frequency.html",
  "/blog/blog/2023/02/21/2085-hz-the-solfeggio-frequency-of-i-am.html",
  "/blog/blog/2023/02/21/2406-hz-the-solfeggio-frequency-of-i-am.html",
  "/blog/blog/2023/02/22/how-to-experience-the-power-of-2184-hz-the-solfeggio-frequency-of-unity.html",
  "/blog/blog/2023/02/22/how-to-experience-the-power-of-2517-hz-the-solfeggio-frequency-of-unity.html",
  "/blog/blog/2023/02/23/what-is-blue-noise-and-why-it-is-useful.html",
  "/blog/blog/2023/02/24/angel-frequencies-how-to-recieve-divine-guidance.html",
  "/blog/blog/2023/02/25/111-hz-the-angel-frequency.html",
  "/blog/blog/2023/02/26/222-hz-the-angel-frequency.html",
  "/blog/blog/2023/02/27/how-to-use-333-hz-the-angel-frequency.html",
  "/blog/blog/2023/02/28/444-hz-the-angel-frequency.html",
  "/blog/blog/2023/03/01/555-hz-the-angel-frequency.html",
  "/blog/blog/2023/03/02/666-hz-angel-frequency-a-healing-sound-for-your-mind.html",
  "/blog/blog/2023/03/03/777-hz-angel-frequency.html",
  "/blog/blog/2023/03/04/888-hz-angel-frequency-a-guide-to-healing-meditation-and-manifestation.html",
  "/blog/blog/2023/03/05/999-hz-angel-frequency.html",
  "/blog/blog/2023/03/06/what-is-blue-noise-and-why-it-is-useful.html",
  "/blog/blog/2023/03/07/understanding-violet-noise.html",
  "/blog/blog/2023/03/08/what-is-grey-noise-and-how-it-can-help-you.html",
  "/blog/blog/2023/03/09/what-is-velvet-noise-and-how-to-use-it-for-audio-processing.html",
  "/blog/blog/2023/03/10/what-is-orange-noise-and-how-to-use-it.html",
  "/blog/blog/2023/03/11/what-is-yellow-noise-and-how-it-can-help-you.html",
  "/blog/blog/2023/03/12/what-is-turquoise-noise-and-how-to-use-it.html",
  "/blog/blog/2023/03/13/how-to-use-126-22-hz-pure-tone-for-manipura-chakra-meditation.html",
  "/blog/blog/2023/03/14/how-to-heal-your-throat-chakra-with-141-27-hz-pure-tone.html",
  "/blog/blog/2023/03/15/144-hz-pure-tone-a-natural-remedy-for-headaches-and-migraines.html",
  "/blog/blog/2023/03/16/157-43-pure-tone-for-tantric-energy.html",
  "/blog/blog/2023/03/17/how-to-use-172-06-hz-pure-tone-for-healing-and-happiness.html",
  "/blog/blog/2023/03/18/how-to-use-210-42-hz-pure-tone-for-healing-and-balancing-your-svadisthan-chakra.html",
  "/blog/blog/2023/03/19/most-common-1-rife-3d-frequencies.html",
  "/blog/blog/2023/03/20/Abdominal-Inflation-rife-3d-frequencies.html",
  "/blog/blog/2023/03/21/how-to-use-rife-3d-frequencies-for-abdominal-pain-relief.html",
  "/blog/blog/2023/03/22/how-to-use-rife-3d-frequenciesfor-abscesses.html",
  "/blog/blog/2023/03/23/abscesses-1-rife-3d-frequencies-a-guide-for-mental-relief.html",
  "/blog/blog/2023/03/24/how-to-use-rife-3d-frequencies-for-abscesses-secondary.html",
  "/blog/blog/2023/03/25/acidosis-rife-3d-frequencies-a-guide-for-mental-relief.html",
  "/blog/blog/2023/03/26/how-to-use-rife-3d-frequencies-for-acne-relief.html",
  "/blog/blog/2023/03/27/aconite-rife-3d-frequencies-for-mental-relief.html",
  "/blog/blog/2023/03/28/how-to-use-rife-3d-frequencies-for-actinobacillus.html",
  "/blog/blog/2023/04/01/how-to-use-rife-3d-frequencies-for-actinomyces-israelii.html",
  "/blog/blog/2023/04/02/how-to-use-rife-3d-frequencies-for-pain-relief.html",
  "/blog/blog/2023/04/03/adenoids-rife-3d-frequencies.html",
  "/blog/blog/2023/04/04/how-to-use-rife-3d-frequencies-for-adenoma-cervical.html",
  "/blog/blog/2023/04/05/how-to-use-rife-3d-frequencies-for-adenovirus.html",
  "/blog/blog/2023/04/06/how-to-use-rife-3d-frequencies-to-heal-adenovirus-36-infection.html",
  "/blog/blog/2023/04/07/how-to-use-rife-3d-frequencies-to-heal-adenovirus-comp.html",
  "/blog/blog/2023/04/08/how-to-use-rife-3d-frequencies-for-adenovirus-hc.html",
  "/blog/blog/2023/04/09/how-to-use-rife-3d-frequencies-for-adhesions.html",
  "/blog/blog/2023/04/10/how-to-use-rife-3d-frequencies-for-adnexitis.html",
  "/blog/blog/2023/04/11/adrenal-stimulant-rife-3d-frequencies.html",
  "/blog/blog/2023/04/12/binaural-beats-for-organ-and-muscle-resonances-phase-1.html",
  "/blog/blog/2023/04/13/binaural-beats-for-muscle-resonance-and-pineal-gland-activation-phase-2.html",
  "/blog/blog/2023/04/14/solar-plexus-chakra-the-tone-of-the-sun.html",
  "/blog/blog/2023/04/15/mercury-frequency-and-its-connection-to-throat-chakra.html",
  "/blog/blog/2023/04/16/157-43-pure-tone-for-secret-tantric-energy.html",
  "/blog/blog/2023/04/17/the-healing-tones-exploring-the-impact-of-0-15-Hz-binaural-beats-on-mild-depression.html",
  "/blog/blog/2023/04/18/0-20-hz-binaural-Beats-a-potential-relief-for-post-traumatic-stress.html",
  "/blog/blog/2023/04/19/binaural-beats-at-0-26-hz-a-soothing-solution-for-dental-pain-and-gum-inflammation.html",
  "/blog/blog/2023/04/20/exploring-the-astral-plane-a-guide-to-binaural-beats-and-meditation.html",
  "/blog/blog/2023/04/21/exploring-the-astral-plane-a-guide-to-binaural-beats-and-meditation-updated.html",
  "/blog/blog/2023/04/22/exploring-the-256-hz-frequency-a-journey-through-sound-healing-and-root-chakra.html",
  "/blog/blog/2023/04/23/the-soothing-power-of-259-hz-a-pure-tone-for-taurus-meditation.html",
  "/blog/blog/2023/04/24/exploring-the-potential-of-260-hz-pure-tone-for-relief-from-depersonalization-and-derealization.html",
  "/blog/blog/2023/04/25/261-63-hz-pure-tone-a-sonic-sanctuary-for-aries.html",
  "/blog/blog/2023/04/26/272-10-hz-Pure-Tone-a-gateway-to-the-soul-heart-chakra.html",
  "/blog/blog/2023/04/27/277-18-hz-pure-tone-a-sonic-oasis-for-taurus.html",
  "/blog/blog/2023/04/27/282-hz-pure-tone-a-sonic-sanctuary-for-gemini.html",
  "/blog/blog/2023/04/28/282-hz-pure-tone-a-sonic-sanctuary-for-gemini.html",
  "/blog/blog/2023/04/29/the-healing-power-of-285-hz-a-journey-to-emotional-health-and-creative-expression.html",
  "/blog/blog/2023/05/01/embracing-the-pure-tone-of-288-hz-a-gateway-to-healing-and-self-discovery.html",
  "/blog/blog/2023/05/02/the-tranquil-tones-of-293-66-hz-a-harmonious-journey-for-geminis.html",
  "/blog/blog/2023/05/03/the-power-of-295-8-hz-a-sonic-path-to-visceral-fat-reduction.html",
  "/blog/blog/2023/05/04/298-hz-pure-tone-for-cancer-zodiac-a-healing-frequency-for-balance-and-inner-harmony.html",
  "/blog/blog/2023/05/05/311-13-hz-pure-tone-for-cancer-zodiac-the-frequency-of-clarity-calm.html",
  "/blog/blog/2023/05/06/314-hz-pure-tone-for-leo-zodiac-Ignite-your-Inner-sun-with-sound-healing.html",
  "/blog/blog/2023/05/07/320-hz-pure-tone-activate-your-solar-plexus-chakra-for-power-and-confidence.html",
  "/blog/blog/2023/05/08/325-hz-pure-tone-awaken-your-solar-plexus-and-unleash-your-inner-power.html",
  "/blog/blog/2023/05/09/exploring-the-effects-of-60-Hz-binaural-beats-on-cognitive-abilities.html",
  "/blog/blog/2023/05/10/investigating-the-efficacy-of-rife-3d-frequencies-in-alleviating-mental-distress-associated-with-abdominal-inflammation-a-theoretical-review.html",
  "/blog/blog/2023/05/11/Investigating-the-potential-of-rife-3d-Frequencies-for-mental-relief-in-abdominal-pain-a-theoretical-analysis.html",
  "/blog/blog/2023/05/11/investigating-the-potential-of-rife-3d-Frequencies-for-mental-relief-in-abdominal-pain-a-theoretical-analysis.html",
  "/blog/blog/2023/05/12/the-soothing-power-of-329-63-hz-a-pure-tone-for-leo-s-relaxation-meditation-and-study.html",
  "/blog/blog/2023/05/13/the-harmonizing-frequency-of-336-hz-a-pure-tone-for-virgo-s-relaxation-meditation-and-balance.html",
  "/blog/blog/2023/05/14/healing-the-heart-chakra-the-transformative-power-of-341-hz-pure-tone.html",
  "/blog/blog/2023/05/15/341-3-hz-the-heart-chakra-s-second-flavor-for-deep-emotional-renewal.html",
  "/blog/blog/2023/05/16/343-hz-the-heart-chakra-s-harmonizing-frequency-for-love-and-emotional-balance.html",
  "/blog/blog/2023/05/17/349-23-hz-virgo-s-harmonizing-frequency-for-focus-calm-and-clarity.html",
  "/blog/blog/2023/05/18/350-hz-and-rose-quartz-harmonizing-the-heart-s-frequency-for-unconditional-love.html",
  "/blog/blog/2023/05/19/361-hz-libra-s-harmonizing-frequency-for-balance-meditation-and-inner-peace.html",
  "/blog/blog/2023/05/20/369-99-hz-libra-harmonizing-frequency-for-focus-balance-and-renewal.html",
  "/blog/blog/2023/05/21/harmonizing-the-depths-how-the-377-hz-pure-tone-empowers-scorpios-journey.html",
  "/blog/blog/2023/05/22/unlocking-your-authentic-voice-the-transformative-power-of-the-383-hz-pure-tone.html",
  "/blog/blog/2023/05/23/384-hz-the-dual-chakra-frequency-bridging-grounding-and-expression.html",
  "/blog/blog/2023/05/24/392-hz-scorpios-sonic-catalyst-for-focused-transformation.html",
  "/blog/blog/2023/05/25/406-hz-sagittarius-cosmic-compass-for-adventurous-equilibrium.html",
  "/blog/blog/2023/05/26/415-3-hz-sagittarius-celestial-anthem-for-focused-exploration.html",
  "/blog/blog/index.html",
  "/blog/blog/page10/index.html",
  "/blog/blog/page11/index.html",
  "/blog/blog/page12/index.html",
  "/blog/blog/page13/index.html",
  "/blog/blog/page14/index.html",
  "/blog/blog/page15/index.html",
  "/blog/blog/page16/index.html",
  "/blog/blog/page17/index.html",
  "/blog/blog/page18/index.html",
  "/blog/blog/page19/index.html",
  "/blog/blog/page2/index.html",
  "/blog/blog/page20/index.html",
  "/blog/blog/page21/index.html",
  "/blog/blog/page22/index.html",
  "/blog/blog/page23/index.html",
  "/blog/blog/page24/index.html",
  "/blog/blog/page25/index.html",
  "/blog/blog/page26/index.html",
  "/blog/blog/page27/index.html",
  "/blog/blog/page28/index.html",
  "/blog/blog/page29/index.html",
  "/blog/blog/page3/index.html",
  "/blog/blog/page4/index.html",
  "/blog/blog/page5/index.html",
  "/blog/blog/page6/index.html",
  "/blog/blog/page7/index.html",
  "/blog/blog/page8/index.html",
  "/blog/blog/page9/index.html",
  "/blog/css/main.css",
  "/blog/css/main.css.map",
  "/blog/css/main.scss",
  "/blog/favicon.ico",
  "/blog/img/128x128-mandala-1757304_1280.png",
  "/blog/img/144x144-mandala-1757304_1280.png",
  "/blog/img/152x152-mandala-1757304_1280.png",
  "/blog/img/192x192-mandala-1757304_1280.png",
  "/blog/img/256x256-mandala-1757304_1280.png",
  "/blog/img/512x512-mandala-1757304_1280.png",
  "/blog/img/brain-beats-netlify.png",
  "/blog/img/mandala-1757304_1280.png",
  "/blog/img/maskable_icon.png",
  "/blog/index.html",
  "/blog/js/main.js",
  "/blog/js/search.js",
  "/blog/js/tex-mml-chtml.js",
  "/blog/redirects.json",
  "/blog/robots.txt",
  "/blog/search.json",
  "/blog/search/index.html",
  "/css/bootstrap-grid.css",
  "/css/bootstrap-grid.css.map",
  "/css/bootstrap-grid.min.css",
  "/css/bootstrap-grid.min.css.map",
  "/css/bootstrap-grid.rtl.css",
  "/css/bootstrap-grid.rtl.css.map",
  "/css/bootstrap-grid.rtl.min.css",
  "/css/bootstrap-grid.rtl.min.css.map",
  "/css/bootstrap-reboot.css",
  "/css/bootstrap-reboot.css.map",
  "/css/bootstrap-reboot.min.css",
  "/css/bootstrap-reboot.min.css.map",
  "/css/bootstrap-reboot.rtl.css",
  "/css/bootstrap-reboot.rtl.css.map",
  "/css/bootstrap-reboot.rtl.min.css",
  "/css/bootstrap-reboot.rtl.min.css.map",
  "/css/bootstrap-utilities.css",
  "/css/bootstrap-utilities.css.map",
  "/css/bootstrap-utilities.min.css",
  "/css/bootstrap-utilities.min.css.map",
  "/css/bootstrap-utilities.rtl.css",
  "/css/bootstrap-utilities.rtl.css.map",
  "/css/bootstrap-utilities.rtl.min.css",
  "/css/bootstrap-utilities.rtl.min.css.map",
  "/css/bootstrap.css",
  "/css/bootstrap.css.map",
  "/css/bootstrap.min.css",
  "/css/bootstrap.min.css.map",
  "/css/bootstrap.rtl.css",
  "/css/bootstrap.rtl.css.map",
  "/css/bootstrap.rtl.min.css",
  "/css/bootstrap.rtl.min.css.map",
  "/css/main.css",
  "/css/normalize.min.css",
  "/dreamachine-generator.html",
  "/dreamachine-presets.html",
  "/favicon.ico",
  "/favorites.html",
  "/google7484c80835cfba45.html",
  "/img/128x128-mandala-1757304_1280.png",
  "/img/144x144-mandala-1757304_1280.png",
  "/img/152x152-mandala-1757304_1280.png",
  "/img/192x192-mandala-1757304_1280.png",
  "/img/256x256-mandala-1757304_1280.png",
  "/img/512x512-mandala-1757304_1280.png",
  "/img/brain-beats-netlify.png",
  "/img/mandala-1757304-cropped.svg",
  "/img/mandala-1757304_1280.png",
  "/img/maskable_icon.png",
  "/index.html",
  "/isochronic-tones-generator.html",
  "/isochronic-tones.html",
  "/js/bootstrap-input-spinner.js",
  "/js/bootstrap.bundle.js",
  "/js/bootstrap.bundle.js.map",
  "/js/bootstrap.bundle.min.js",
  "/js/bootstrap.bundle.min.js.map",
  "/js/bootstrap.esm.js",
  "/js/bootstrap.esm.js.map",
  "/js/bootstrap.esm.min.js",
  "/js/bootstrap.esm.min.js.map",
  "/js/bootstrap.js",
  "/js/bootstrap.js.map",
  "/js/bootstrap.min.js",
  "/js/bootstrap.min.js.map",
  "/js/custom-editors.js",
  "/js/data-id.js",
  "/js/data.js",
  "/js/desc-data.js",
  "/js/favorites-data.js",
  "/js/favs.js",
  "/js/google-ads.js",
  "/js/google-analytics.js",
  "/js/jquery-3.6.0.slim.min.js",
  "/js/jsonDataArray.js",
  "/js/main.js",
  "/js/plugins.js",
  "/js/search-data.js",
  "/js/serviceLoader.js",
  "/js/workbox/workbox-v6.5.3/workbox-background-sync.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-background-sync.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-background-sync.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-background-sync.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-broadcast-update.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-broadcast-update.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-broadcast-update.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-broadcast-update.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-cacheable-response.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-cacheable-response.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-cacheable-response.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-cacheable-response.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-core.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-core.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-core.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-core.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-expiration.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-expiration.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-expiration.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-expiration.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-navigation-preload.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-navigation-preload.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-navigation-preload.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-navigation-preload.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-offline-ga.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-offline-ga.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-offline-ga.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-offline-ga.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-precaching.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-precaching.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-precaching.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-precaching.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-range-requests.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-range-requests.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-range-requests.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-range-requests.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-recipes.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-recipes.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-recipes.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-recipes.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-routing.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-routing.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-routing.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-routing.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-strategies.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-strategies.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-strategies.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-strategies.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-streams.dev.js",
  "/js/workbox/workbox-v6.5.3/workbox-streams.dev.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-streams.prod.js",
  "/js/workbox/workbox-v6.5.3/workbox-streams.prod.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-sw.js",
  "/js/workbox/workbox-v6.5.3/workbox-sw.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-window.dev.es5.mjs",
  "/js/workbox/workbox-v6.5.3/workbox-window.dev.es5.mjs.map",
  "/js/workbox/workbox-v6.5.3/workbox-window.dev.mjs",
  "/js/workbox/workbox-v6.5.3/workbox-window.dev.mjs.map",
  "/js/workbox/workbox-v6.5.3/workbox-window.dev.umd.js",
  "/js/workbox/workbox-v6.5.3/workbox-window.dev.umd.js.map",
  "/js/workbox/workbox-v6.5.3/workbox-window.prod.es5.mjs",
  "/js/workbox/workbox-v6.5.3/workbox-window.prod.es5.mjs.map",
  "/js/workbox/workbox-v6.5.3/workbox-window.prod.mjs",
  "/js/workbox/workbox-v6.5.3/workbox-window.prod.mjs.map",
  "/js/workbox/workbox-v6.5.3/workbox-window.prod.umd.js",
  "/js/workbox/workbox-v6.5.3/workbox-window.prod.umd.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-background-sync.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-background-sync.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-background-sync.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-background-sync.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-broadcast-update.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-broadcast-update.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-broadcast-update.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-broadcast-update.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-cacheable-response.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-cacheable-response.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-cacheable-response.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-cacheable-response.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-core.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-core.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-core.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-core.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-expiration.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-expiration.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-expiration.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-expiration.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-navigation-preload.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-navigation-preload.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-navigation-preload.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-navigation-preload.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-offline-ga.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-offline-ga.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-offline-ga.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-offline-ga.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-precaching.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-precaching.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-precaching.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-precaching.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-range-requests.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-range-requests.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-range-requests.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-range-requests.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-recipes.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-recipes.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-recipes.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-recipes.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-routing.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-routing.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-routing.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-routing.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-strategies.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-strategies.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-strategies.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-strategies.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-streams.dev.js",
  "/js/workbox/workbox-v7.3.0/workbox-streams.dev.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-streams.prod.js",
  "/js/workbox/workbox-v7.3.0/workbox-streams.prod.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-sw.js",
  "/js/workbox/workbox-v7.3.0/workbox-sw.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-window.dev.es5.mjs",
  "/js/workbox/workbox-v7.3.0/workbox-window.dev.es5.mjs.map",
  "/js/workbox/workbox-v7.3.0/workbox-window.dev.mjs",
  "/js/workbox/workbox-v7.3.0/workbox-window.dev.mjs.map",
  "/js/workbox/workbox-v7.3.0/workbox-window.dev.umd.js",
  "/js/workbox/workbox-v7.3.0/workbox-window.dev.umd.js.map",
  "/js/workbox/workbox-v7.3.0/workbox-window.prod.es5.mjs",
  "/js/workbox/workbox-v7.3.0/workbox-window.prod.es5.mjs.map",
  "/js/workbox/workbox-v7.3.0/workbox-window.prod.mjs",
  "/js/workbox/workbox-v7.3.0/workbox-window.prod.mjs.map",
  "/js/workbox/workbox-v7.3.0/workbox-window.prod.umd.js",
  "/js/workbox/workbox-v7.3.0/workbox-window.prod.umd.js.map",
  "/json/alt-freq-auto.json",
  "/json/alt-freq-monaural.json",
  "/json/angel.json",
  "/json/binaurals.json",
  "/json/dreamachines.json",
  "/json/indexer.json",
  "/json/isochronic.json",
  "/json/monaurals.json",
  "/json/noise.json",
  "/json/puretones.json",
  "/json/rife-frequencies-cafl-xref.json",
  "/json/rife-monaural-freq.json",
  "/json/rife3Dfreq.json",
  "/json/solfeggio.json",
  "/json/sq_monaurals.json",
  "/kundalini-ascension.html",
  "/lab/3dRife_sanitized.json",
  "/lab/alt-freq.json",
  "/lab/bio-freq.json",
  "/lab/cafl-freq.json",
  "/lab/cust-freq.json",
  "/lab/data-id.js",
  "/lab/fileArray.js",
  "/lab/fileList.js",
  "/lab/fileLister.js",
  "/lab/filter-alt.js",
  "/lab/filter-bio.js",
  "/lab/filter-cafl.js",
  "/lab/filter-cust.js",
  "/lab/filter-hc.js",
  "/lab/filter-khz.js",
  "/lab/filter-prov.js",
  "/lab/filter-rife.js",
  "/lab/filter-vega.js",
  "/lab/filter-xtra.js",
  "/lab/hc-freq.json",
  "/lab/khz-freq.json",
  "/lab/new-pure-tone-freq.txt",
  "/lab/new-pure-tones.js",
  "/lab/new-puretones.json",
  "/lab/new-rife.js",
  "/lab/old-puretones.json",
  "/lab/output.json",
  "/lab/prov-freq.json",
  "/lab/pure-tones-cafl-xref.json",
  "/lab/rfreq.txt",
  "/lab/rife-freq.json",
  "/lab/rife-monaural-freq.json",
  "/lab/rife3Dfreq.json",
  "/lab/sanitize-2-spooky.js",
  "/lab/sanitize-3-spooky.js",
  "/lab/sanitize-rife.js",
  "/lab/sanitize-spooky.js",
  "/lab/spooky-alt-frequency.txt",
  "/lab/spooky-bio-frequency.txt",
  "/lab/spooky-cafl-frequency.txt",
  "/lab/spooky-cust-frequency.txt",
  "/lab/spooky-formatted-frequency-2.txt",
  "/lab/spooky-formatted-frequency-3.txt",
  "/lab/spooky-frequency-formatted.txt",
  "/lab/spooky-frequency.txt",
  "/lab/spooky-hc-frequency.txt",
  "/lab/spooky-jsoner.js",
  "/lab/spooky-khz-frequency.txt",
  "/lab/spooky-prov-frequency.txt",
  "/lab/spooky-rife-frequency.txt",
  "/lab/spooky-vega-frequency.txt",
  "/lab/spooky-xtra-frequency.txt",
  "/lab/vega-freq.json",
  "/lab/xtra-freq.json",
  "/lab/xtra-jsoner.js",
  "/manifest.json",
  "/monaural-alt-frequency.html",
  "/monaural-base-beats.html",
  "/monaural-beats-generator.html",
  "/monaural-rife-machine.html",
  "/noise-processor/black-noise-processor.js",
  "/noise-processor/blue-noise-processor.js",
  "/noise-processor/brown-noise-processor.js",
  "/noise-processor/green-noise-processor.js",
  "/noise-processor/grey-noise-processor.js",
  "/noise-processor/noise-processor.js",
  "/noise-processor/orange-noise-processor.js",
  "/noise-processor/pink-noise-processor.js",
  "/noise-processor/red-noise-processor.js",
  "/noise-processor/turquoise-noise-processor.js",
  "/noise-processor/velvet-noise-processor.js",
  "/noise-processor/violet-noise-processor.js",
  "/noise-processor/white-noise-processor.js",
  "/noise-processor/yellow-noise-processor.js",
  "/noise.html",
  "/privacy-policy.html",
  "/pure-tone-generator.html",
  "/pure-tones.html",
  "/rife-3d-auto-generator.html",
  "/rife-3d-generator.html",
  "/rife-frequencies-cafl-xref.html",
  "/rife-monaural-generator.html",
  "/robots.txt",
  "/search.html",
  "/sine-wave-3d-auto-generator.html",
  "/sine-wave-3d-generator.html",
  "/sine-wave-monaural-generator.html",
  "/solfeggio-frequency.html",
  "/square-wave-monaural-base-beats.html",
  "/square-wave-monaural-beats-generator.html",
  "/sw.js"
];