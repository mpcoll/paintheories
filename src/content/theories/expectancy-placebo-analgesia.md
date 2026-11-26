---
title: Expectancy theory of placebo analgesia
shortTitle: Expectancy and placebo
aliases: [Response expectancy theory, Expectation account of placebo analgesia, Placebo analgesia]
kind: theory
year: 1985
proponents: [Irving Kirsch, Donald D. Price, Fabrizio Benedetti, Tor D. Wager]
summary: Expecting pain relief reduces pain. Placebo analgesia arises mainly from response expectancies, created by verbal suggestion, prior experience or conditioning, which engage prefrontal and opioidergic descending modulation that can reduce nociceptive processing as early as the spinal cord.
domain: cognitive
levels: [computational, systems, circuit]
questions: [variability]
painTypes: [acute, chronic, general]
status: active
coreClaims:
  - "Expectancies about one's own non-volitional responses (response expectancies) are self-confirming: expecting less pain produces less pain."
  - Placebo analgesia is mediated mainly by such expectancies; conditioning increases placebo analgesia largely by creating or strengthening expectations, rather than by direct stimulus substitution.
  - Expectations of relief engage prefrontal regions and the opioidergic descending system (rostral anterior cingulate, periaqueductal grey, rostral ventromedial medulla), reducing nociceptive processing in the brain and spinal cord.
  - The magnitude of placebo analgesia scales with the strength of the expected relief, and differences in expectations explain much of the variation in placebo effects across studies and settings.
predictions:
  - Placebo analgesia should correlate with, and be statistically mediated by, expected pain relief.
  - Information that contradicts the expectation created by conditioning should abolish or reverse the conditioned placebo response.
  - Opioid antagonists should reduce expectation-induced placebo analgesia.
  - Placebo treatments should reduce pain-related responses in nociceptive brain regions and the dorsal horn, not only change reports.
mechanisms: [expectation, descending-modulation, associative-learning, prediction-error]
relations:
  - type: related-to
    target: classical-conditioning-model
    note: The expectancy-versus-conditioning debate concerns whether conditioned placebo responses require expectation.
  - type: related-to
    target: endogenous-modulation-model
    note: Placebo analgesia engages the opioidergic descending pain control system.
  - type: related-to
    target: predictive-processing
    note: Predictive processing recasts expectancy effects as precision-weighted priors.
  - type: related-to
    target: meaning-context-account
    note: Both explain how the context and meaning of treatment shape pain.
  - type: related-to
    target: motivation-decision-model
    note: Fields treated expected relief as an input to value-based descending modulation.
evidence:
  - finding: In patients after third molar extraction, naloxone increased pain in placebo responders but not in non-responders, consistent with endogenous opioid mediation of placebo analgesia.
    direction: supports
    method: clinical
    refs: [levine1978]
  - finding: In healthy volunteers, conditioning trials enhanced placebo analgesia, but this effect was fully mediated by expected pain, and informing participants about the manipulation reversed both the expectancies and the placebo responses.
    direction: supports
    method: human-experimental
    refs: [montgomery1997]
  - finding: In healthy volunteers receiving iontophoretic pain, a conditioning manipulation produced a stronger placebo response than verbal expectancy instructions alone.
    direction: contradicts
    method: human-experimental
    refs: [voudouris1990]
  - finding: Verbal suggestions completely overrode prior conditioning for experimental ischaemic arm pain and for motor performance in Parkinson's disease, but had no effect on growth hormone and cortisol secretion, which responded only to pharmacological conditioning.
    direction: mixed
    method: human-experimental
    refs: [benedetti2003]
  - finding: In two fMRI experiments, placebo analgesia was associated with reduced activity in thalamus, insula and anterior cingulate cortex during pain and with increased prefrontal activity during pain anticipation.
    direction: supports
    method: neuroimaging
    refs: [wager2004]
  - finding: Spinal cord fMRI showed that pain-related activity in the dorsal horn was strongly reduced under placebo, in line with reduced pain reports.
    direction: supports
    method: neuroimaging
    refs: [eippert2009b]
  - finding: An individual-participant meta-analysis of 20 fMRI studies (603 healthy participants) found moderate placebo effects on pain ratings (g = −0.66) but only very small effects on the neurologic pain signature (g = −0.08), suggesting that placebo acts mainly on processes other than nociceptive processing.
    direction: mixed
    method: meta-analysis
    refs: [zunhammer2018]
  - finding: A meta-analysis of randomised trials comparing placebo with no treatment found a small pooled effect on pain (about 6.5 mm on a 100-mm scale) and little evidence of large clinical placebo effects overall.
    direction: mixed
    method: meta-analysis
    refs: [hrobjartsson2001]
foundational: [kirsch1985]
keyReferences: [price1999, amanzio1999, vase2002, stewartwilliams2004, eippert2009, bingel2011, atlas2012, forsberg2017, gracely1983, buchel2014]
review: draft
updated: 2026-11-26
---

## Overview

Kirsch's response expectancy theory holds that expectations about one's own automatic responses, such as pain, anxiety or arousal, directly produce those responses [@kirsch1985]. Applied to placebo analgesia, a placebo reduces pain because the person expects it to. Expectations can be created by verbal information, by observing others, and by prior experience with effective treatment; on this view conditioning works mainly by building expectations [@montgomery1997; @price1999].

Neurobiological research identified how expectations change pain. Naloxone-sensitive placebo analgesia implicated endogenous opioids [@levine1978; @amanzio1999]. Neuroimaging showed increased prefrontal activity during anticipation and reduced activity in pain-responsive regions during stimulation [@wager2004]. Placebo engaged the rostral anterior cingulate–periaqueductal grey–rostral ventromedial medulla pathway in a naloxone-reversible way and reduced dorsal horn responses [@eippert2009; @eippert2009b]. Expectations also modulate genuine drugs: the analgesic benefit of remifentanil was enhanced by positive and abolished by negative expectations [@bingel2011].

It is important to separate the expectancy account from the conditioning account. Classical conditioning models treat the placebo response as a conditioned response to cues previously paired with active treatment, which need not involve conscious expectation [@voudouris1990]. Benedetti and colleagues showed that both mechanisms exist: expectation dominates for conscious outcomes such as pain, whereas conditioning can drive unconscious physiological responses such as hormone release, and drug conditioning can recruit non-opioid mechanisms [@amanzio1999; @benedetti2003]. Others argued that the two accounts are compatible, since conditioning is one way in which expectancies are formed [@stewartwilliams2004].

## Historical context

Placebo effects in pain were long treated as a nuisance in clinical trials. The finding that naloxone could block placebo analgesia made it a biological phenomenon [@levine1978]. Kirsch's theory offered a general psychological account [@kirsch1985], and Price and colleagues showed that conditioned placebo effects were strongly associated with expected pain but not with desire for relief [@price1999]. From the 2000s, neuroimaging of the brain and spinal cord turned placebo analgesia into a model system for studying how cognition modulates pain [@wager2004; @atlas2012].

## Critiques

- The naloxone evidence is not clean: naloxone can itself increase pain, and placebo analgesia can persist after opioid blockade, so opioid mediation applies to some placebo responses and not others [@gracely1983; @amanzio1999].
- Expectation is usually measured by self-report after the manipulation, which risks circularity and cannot separate expectation from response bias.
- Expectancy and conditioning accounts are hard to separate empirically, because conditioning procedures almost always change expectations too [@stewartwilliams2004].
- Placebo effects in laboratory studies of placebo mechanisms are much larger than placebo effects in clinical analgesic trials, which raises questions about how far the experimental model generalises [@vase2002]. Open-label placebos also reduce chronic low back pain, which challenges explanations that require deception [@carvalho2016].

## Legacy

Expectation is now regarded as one of the best-established cognitive modulators of pain, and placebo analgesia is a central model for top-down pain modulation, linking psychology, pharmacology and neuroimaging. A meta-analysis of experimental placebo analgesia studies found larger effects in patients than in healthy volunteers [@forsberg2017]. Predictive processing accounts recast expectancy effects as the influence of precise priors on perceptual inference [@buchel2014].

## Teaching notes

- Keep three questions separate: does placebo reduce pain reports, does it reduce nociceptive processing, and does it work through expectation or conditioning?
- Use the Montgomery and Kirsch, and Benedetti, studies to show how informing participants can distinguish expectation from conditioning.
- Discuss why the placebo arm of a clinical trial does not measure the placebo effect: without a no-treatment arm, natural history and regression to the mean are included.
