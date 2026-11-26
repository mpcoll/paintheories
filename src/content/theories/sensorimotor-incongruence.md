---
title: Sensorimotor incongruence theory
shortTitle: Sensorimotor incongruence
aliases: [Cortical model of pathological pain, Motor–sensory conflict hypothesis]
kind: model
year: 1999
proponents: [Alan J. Harris, Candida S. McCabe, David R. Blake]
summary: Pathological pain can arise in the cortex when motor intention, proprioception and visual feedback about a body part disagree; the mismatch acts as a warning signal in the way visual–vestibular conflict produces motion sickness, and can persist without ongoing tissue damage.
domain: neurobiological
levels: [systems, computational]
questions: [chronicity, nature]
painTypes: [chronic, neuropathic, nociplastic]
status: contested
coreClaims:
  - The brain continuously monitors the congruence between motor commands and the sensory feedback (proprioceptive, visual) that accompanies movement.
  - Persistent incongruence between motor output and sensory input can itself generate pain and other abnormal sensations, by analogy with motion sickness arising from visual–vestibular conflict.
  - Incongruence may be a central source of pain in conditions without an adequate peripheral nociceptive explanation, such as complex regional pain syndrome, phantom limb pain, repetitive strain injury and focal dystonia.
  - Restoring congruent feedback (e.g. with a mirror) should reduce pain.
predictions:
  - Experimentally induced visual–motor conflict should provoke pain or abnormal sensations in pain-free people.
  - People with chronic pain conditions should be more susceptible to incongruence-induced symptoms than healthy controls.
  - Pain provoked by incongruence should be greater than in matched congruent conditions.
  - Mirror visual feedback that restores congruence should reduce pain, especially early in the course of the condition.
mechanisms: [prediction-error, body-representation]
relations:
  - type: related-to
    target: neuromatrix-theory
    note: Both locate the generation of pathological pain in cortical body representations rather than in peripheral input.
  - type: related-to
    target: predictive-processing
    note: Incongruence is a mismatch between predicted and actual sensory consequences of movement, a special case of prediction error.
  - type: related-to
    target: cortical-body-matrix
  - type: related-to
    target: maladaptive-cortical-plasticity
evidence:
  - finding: In 41 healthy volunteers performing bilateral limb movements while viewing a mirror or whiteboard, 66% reported at least one anomalous sensation (numbness, pins and needles, aching or pain, changes in temperature or limb weight), most often during incongruent movement with the mirror.
    direction: supports
    method: human-experimental
    refs: [mccabe2005]
  - finding: Using the same mirror protocol, 90% of 29 people with fibromyalgia reported new or worsened sensations, including pain, compared with 48% of matched healthy volunteers.
    direction: supports
    method: human-experimental
    refs: [mccabe2007]
  - finding: In a small pilot study of complex regional pain syndrome type 1, mirror visual feedback reduced pain in patients with early disease but not in those with chronic disease, whereas control stages without mirror feedback had no analgesic effect.
    direction: supports
    method: intervention
    refs: [mccabe2002]
  - finding: All 35 people with chronic whiplash-associated disorders reported increased pain or other sensory changes during the mirror protocol, but symptoms did not differ between congruent and incongruent stages; in controls, sensory changes were most frequent in the incongruent mirror stage.
    direction: mixed
    method: human-experimental
    refs: [daenen2012]
  - finding: In 29 healthy volunteers, proprioceptive incongruence induced by tendon vibration evoked feelings of peculiarity, swelling and foreignness of the hand but did not increase discomfort or pain.
    direction: contradicts
    method: human-experimental
    refs: [moseley2005]
  - finding: In 113 healthy participants, incongruent mirrored movements increased the sensation of having an extra limb, but reports of pain were not more frequent with the mirror than without it.
    direction: contradicts
    method: human-experimental
    refs: [foell2013]
  - finding: Moving under induced sensorimotor incongruence did not change pressure pain thresholds or pressure-evoked pain in 35 healthy volunteers.
    direction: contradicts
    method: human-experimental
    refs: [wand2014]
  - finding: In 33 people with chronic low back pain and 33 healthy controls, distorted live visual feedback of the back during movement did not increase pain or sensory disturbances relative to other movement conditions.
    direction: contradicts
    method: human-experimental
    refs: [don2019]
foundational: [harris1999]
keyReferences: [don2016, moseley2005b]
review: draft
updated: 2026-11-26
---

## Overview

Harris proposed that some pathological pain originates in the cortex rather than in damaged tissue [@harris1999]. Normally, motor intention, proprioceptive feedback and vision agree. When they persistently disagree, for example after amputation, nerve injury or disordered motor control, the mismatch is detected by cortical monitoring systems and signalled as pain or other abnormal sensations, much as conflicting visual and vestibular information produces motion sickness. The account was aimed at pain that is disproportionate to, or outlasts, any peripheral cause. McCabe and colleagues later applied it to complex regional pain syndrome (CRPS), phantom limb pain, repetitive strain injury and focal hand dystonia [@mccabe2005].

The model made a practical prediction: restoring congruence between movement and its visual consequences should relieve pain. McCabe and colleagues tested this with mirror visual feedback in CRPS [@mccabe2002], and then reversed the logic by creating mirror-induced conflict in pain-free volunteers to see whether it would produce symptoms [@mccabe2005].

## Historical context

The proposal came a few years after mirror-box studies in amputees with phantom limbs, and it fits forward-model accounts of motor control, in which the brain predicts the sensory consequences of its own movements. It was part of a wider shift, alongside the neuromatrix and cortical reorganisation accounts, towards explaining chronic pain through disturbed body representations in the brain.

## Critiques

- Many of the sensations reported in incongruence experiments are not pain (numbness, tingling, heaviness, peculiarity), and pain reports are rare in healthy people. Moseley and Gandevia questioned whether such reports should be counted as pain [@moseley2005b].
- Early studies were qualitative, used unblinded open questioning, and often lacked a non-mirror control. Later controlled studies found that symptoms also occur in congruent and non-mirror conditions, so incongruence itself may not be the active ingredient [@foell2013; @daenen2012].
- A systematic review found no evidence that experimental incongruence triggers pain in healthy people or in people with chronic musculoskeletal pain. People with chronic pain did report more symptoms across all visual manipulations [@don2016].
- Analgesia from mirror therapy does not show that incongruence caused the pain. Mirror feedback could act through attention, expectation or other routes.

## Legacy

Incongruence is still discussed as a possible contributor to CRPS and other conditions involving altered body perception, and it helped motivate mirror therapy and graded motor imagery. As a sufficient cause of pain, however, it has fared poorly in controlled experiments. Its core idea, that mismatches between predicted and actual sensory feedback matter for pain, has been taken up in more general body-representation and predictive accounts.

## Teaching notes

- Distinguish "incongruence produces odd sensations" (fairly robust) from "incongruence produces pain" (weakly supported).
- Use the experimental literature to discuss controls: what is the right comparison condition for a mirror manipulation?
- Compare with predictive-processing accounts, where sensorimotor mismatch is one kind of prediction error among many.
