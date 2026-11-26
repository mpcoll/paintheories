---
title: Salience detection account of the "pain matrix"
shortTitle: Salience detection
aliases: [Pain matrix as salience detection system, Multimodal salience account, Pain matrix reloaded]
kind: theory
year: 2010
proponents: [Gian Domenico Iannetti, André Mouraux, Valéry Legrain]
summary: Most of the brain activity evoked by brief nociceptive stimuli, the so-called "pain matrix", is not specific to pain but reflects a multimodal system that detects salient sensory events, orients attention to them and prepares defensive action to protect the body.
domain: cognitive
levels: [systems, computational]
questions: [nature, function]
painTypes: [acute, nociceptive]
status: contested
coreClaims:
  - The cortical network activated by phasic nociceptive stimuli (somatosensory, insular, cingulate, frontal and parietal areas) is largely also activated by equally salient non-nociceptive somatosensory, auditory and visual stimuli.
  - The magnitude of these responses tracks stimulus salience (its ability to capture attention) rather than pain intensity, and can be dissociated from pain by manipulations such as stimulus repetition.
  - The network functions as a defensive system that detects, orients to and prepares reactions to events relevant to the body's integrity, regardless of the sensory channel.
  - Pain-specific neural activity, if it exists, is a small part of the evoked response and cannot be inferred from activation of the "pain matrix" (reverse inference).
predictions:
  - Salience-matched non-nociceptive stimuli should evoke responses with largely the same spatial distribution and magnitude as nociceptive stimuli.
  - Reducing stimulus salience while preserving pain intensity should reduce evoked responses.
  - People unable to feel pain should still show "pain matrix" responses to salient noxious stimulation.
mechanisms: [distributed-brain-network, attention-to-pain]
relations:
  - type: challenges
    target: neuromatrix-theory
    note: Challenges the reading of the neuroimaging "pain matrix" as a pain-specific signature, while discussing its relation to Melzack's neuromatrix.
  - type: related-to
    target: neurocognitive-attention-model
    note: Overlapping authors; treats nociceptive brain responses as markers of attentional capture.
  - type: related-to
    target: dynamic-pain-connectome
    note: Both give the salience network a central role in pain-related brain activity.
  - type: related-to
    target: interruptive-function-model
    note: Both start from the capacity of nociceptive events to capture attention.
evidence:
  - finding: In healthy volunteers, increasing the temporal predictability of laser stimuli by repetition reduced laser-evoked EEG responses and disrupted their correlation with pain intensity, indicating that these responses track salience rather than pain per se.
    direction: supports
    method: neuroimaging
    refs: [iannetti2008]
  - finding: In fMRI, responses to brief nociceptive stimuli were largely explained by multimodal activity also elicited by non-nociceptive somatosensory, auditory and visual stimuli plus somatosensory-specific activity, and multimodal activity correlated with perceived salience.
    direction: supports
    method: neuroimaging
    refs: [mouraux2011]
  - finding: Intracerebral recordings from 47 insular sites in epilepsy patients showed that nociceptive, vibrotactile, auditory and visual stimuli elicited local field potentials with matching spatial distributions in posterior and anterior insula, largely explained by multimodal activity.
    direction: supports
    method: neuroimaging
    refs: [liberati2016]
  - finding: Two individuals with congenital insensitivity to pain due to SCN9A loss-of-function mutations showed fMRI responses to noxious mechanical stimuli in "pain matrix" regions similar to those of four pain-free controls.
    direction: supports
    method: neuroimaging
    refs: [salomons2016]
  - finding: A multivariate fMRI pattern (the neurologic pain signature) discriminated painful heat from warmth, pain anticipation and pain recall with high sensitivity and specificity, discriminated physical from social pain, and was reduced by remifentanil; it was not tested against salience-matched non-nociceptive stimuli.
    direction: mixed
    method: neuroimaging
    refs: [wager2013]
  - finding: EEG gamma-band oscillations over primary somatosensory cortex predicted subjective pain intensity even when stimulus salience was reduced by repetition, unlike other laser-evoked responses.
    direction: contradicts
    method: neuroimaging
    refs: [zhang2012]
  - finding: Gamma-band event-related synchronization predicted pain sensitivity across individuals (in humans, with parallel recordings in rodents), whereas it did not track between-subject differences in reported intensity of equally salient auditory, visual and non-nociceptive somatosensory stimuli.
    direction: contradicts
    method: neuroimaging
    refs: [hu2019]
  - finding: With heat and sound stimuli matched for skin conductance responses, a region of the posterior parietal operculum showed stronger and steeper responses to painful heat than to unpleasant sound, meeting criteria for pain preference over salience.
    direction: contradicts
    method: neuroimaging
    refs: [horing2019]
foundational: [iannetti2010, legrain2011]
keyReferences: [liang2019, segerdahl2015, lee2020]
review: draft
updated: 2026-11-26
---

## Overview

Neuroimaging studies of the 1990s and 2000s described a consistent set of brain regions activated by noxious stimuli and called it the "pain matrix", often treating its activity as a readout of pain. Iannetti, Mouraux and Legrain argued that this interpretation rests on reverse inference and is largely wrong [@iannetti2010; @legrain2011]. When nociceptive stimuli are compared with non-nociceptive stimuli of similar salience, most of the evoked activity is shared across modalities, and its magnitude follows salience rather than pain [@iannetti2008; @mouraux2011].

They proposed instead that the network is a salience detection system for the body: it detects sudden, behaviourally relevant sensory events, orients attention to them and prepares defensive actions, using a multimodal representation of the body and the space around it [@legrain2011]. On this view the emphasis shifts from the quality of the sensation elicited by a noxious stimulus to the action it prompts.

The account does not deny that pain-specific neural activity exists. It holds that such activity is a small fraction of the evoked response, that it cannot be identified by activation of particular regions, and that it requires carefully matched control stimuli to isolate.

## Historical context

The account arose from laser-evoked potential research showing that nociceptive EEG responses depend on novelty, probability and attention [@iannetti2008], and from attentional models of pain developed with overlapping authors. It reacted against the widespread use of "pain matrix" activation as a marker of pain. Iannetti and Mouraux also distinguished this neuroimaging "pain matrix" from Melzack's theoretical neuromatrix [@iannetti2010].

## Critiques

- Brief phasic laser or electrical stimuli are especially salient; findings may not generalise to tonic or clinical pain, in which salience and pain dissociate differently.
- Matching salience across modalities is difficult: subjective ratings, autonomic responses and evoked potentials can give different answers about which stimuli are "equally salient" [@lee2020].
- Showing that activity is shared across modalities at the level of regions or univariate responses does not rule out pain-specific information in finer spatial patterns; multivariate studies find both shared and pain-preferring features [@liang2019].
- The congenital insensitivity study involved two patients, which limits inference [@salomons2016].

## Legacy

The account changed how pain neuroimaging is designed and interpreted: control conditions matched for salience and arousal are now expected, and claims that brain activity is a "pain signature" are scrutinised [@lee2020]. The debate continues, with studies identifying candidate pain-preferring signals (S1 gamma oscillations, the dorsal posterior insula, the parietal operculum, multivariate signatures) and proponents of the salience account contesting their specificity [@zhang2012; @segerdahl2015; @horing2019; @wager2013].

## Teaching notes

- Use this as a case study in reverse inference: activation of a region that responds to pain does not show that pain is present.
- Ask what control condition would be needed to show that a brain response is specific to pain.
- Contrast "the pain matrix detects threat to the body" with "the pain matrix generates pain" and discuss what each predicts for patients who cannot feel pain.
