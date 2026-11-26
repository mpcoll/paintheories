---
title: Neurocognitive model of attention to pain
shortTitle: Neurocognitive attention
aliases: [Neurocognitive model of attention to pain]
kind: model
year: 2009
proponents: [Valéry Legrain, Stefaan Van Damme, Christopher Eccleston, Karen D. Davis, David A. Seminowicz, Geert Crombez]
summary: Attention to pain results from the interplay between bottom-up capture by salient nociceptive input and top-down control driven by current goals, maintained in working memory and attentional set. Pain is reduced when goal-related information is actively held in mind, and hypervigilance arises when capture is strong or control is weak.
domain: cognitive
levels: [computational, systems]
questions: [variability, disability]
painTypes: [acute, chronic, general]
status: active
coreClaims:
  - Nociceptive stimuli capture attention involuntarily, in proportion to their salience (intensity, novelty, threat), interrupting ongoing goal-directed activity.
  - Top-down attentional control, driven by goals that are actively maintained in working memory, can limit this capture and bias processing away from pain.
  - Control depends on the overlap between pain and the features that define the current task (attentional set); distraction works best when task-relevant features are distinct from pain features.
  - Attentional modulation of pain operates through brain networks for attention and through descending pain modulation, and can act as early as the spinal cord.
  - Hypervigilance and failed distraction in chronic pain reflect an imbalance between bottom-up capture and top-down control.
predictions:
  - Novel or deviant nociceptive stimuli should capture attention and slow responses to concurrent tasks; this should be reduced when goal-related information is held in working memory.
  - Distraction should reduce pain and nociceptive brain responses more when the distracting task loads executive or working-memory processes.
  - Pain-related attentional bias should be reduced when people actively pursue a competing non-pain goal.
mechanisms: [attention-to-pain, descending-modulation, distributed-brain-network]
relations:
  - type: extends
    target: interruptive-function-model
    note: Same research group; adds an explicit top-down control component and neural mechanisms to the interruptive account.
  - type: related-to
    target: salience-detection-account
    note: Shares the view that nociceptive brain responses largely reflect salience and attentional capture.
  - type: related-to
    target: dynamic-pain-connectome
    note: Both treat attention to pain as a key determinant of pain experience.
  - type: related-to
    target: motivation-decision-model
    note: Both give competing goals a central role in how pain is processed.
evidence:
  - finding: In healthy volunteers, rare intensity-deviant laser stimuli enhanced a late laser-evoked potential component even when unattended, and this enhancement was reduced when a concurrent visual task was difficult; deviant stimuli also disrupted visual task performance.
    direction: supports
    method: neuroimaging
    refs: [legrain2005]
  - finding: In healthy volunteers, rare nociceptive distracters slowed responses to visual targets, but not when the task required actively rehearsing the visual target in working memory, independent of overall task demands.
    direction: supports
    method: human-experimental
    refs: [legrain2011b]
  - finding: In two experiments, pain intensity and unpleasantness ratings were lower when participants searched for auditory rather than somatosensory targets, and, in the second experiment, lower when the painful stimulus was at a different location from the auditory target.
    direction: supports
    method: human-experimental
    refs: [vanryckeghem2012]
  - finding: In pain-free volunteers, attentional bias to pain signals in a spatial cueing task was present in a control group but absent in a group pursuing a concurrent rewarded non-pain goal.
    direction: supports
    method: human-experimental
    refs: [schrooten2012]
  - finding: In spinal cord fMRI, high working-memory load reduced pain-evoked dorsal horn responses relative to low load, and individual reductions predicted pain reductions; in a follow-up experiment naloxone reduced the analgesic effect of the task.
    direction: supports
    method: neuroimaging
    refs: [sprenger2012]
  - finding: In 91 students, a tone-detection distraction task reduced cold-pressor pain, but individual differences in inhibition, task switching and working memory did not predict how much pain was reduced.
    direction: mixed
    method: human-experimental
    refs: [verhoeven2011]
  - finding: A meta-analysis of 52 dot-probe studies (4466 participants) found a small attentional bias toward pain words and pictures in chronic pain, but not in acute pain, in people anticipating pain or in healthy people.
    direction: mixed
    method: meta-analysis
    refs: [todd2018]
  - finding: A meta-analysis of the few available studies in people with chronic pain found that distraction did not reduce pain compared with control conditions (Hedges' g = 0.10, k = 8), and neither did sensory monitoring.
    direction: contradicts
    method: meta-analysis
    refs: [vanryckeghem2018]
foundational: [legrain2009]
keyReferences: [eccleston1999, vandamme2010, legrain2002, bantick2002, buhle2010, buhle2012, torta2017, todd2015]
review: draft
updated: 2026-11-26
---

## Overview

Legrain and colleagues proposed that attention to pain is best understood with the concepts of cognitive neuroscience: attention is the outcome of a competition between bottom-up and top-down processes [@legrain2009]. Nociceptive stimuli are salient and capture attention automatically. Whether that capture succeeds depends on top-down control exerted by the goals a person is currently pursuing, which are maintained in working memory and define an attentional set (the stimulus features the person is monitoring).

The model makes distraction and hypervigilance two sides of the same balance. Distraction succeeds when goal-related information is actively held in mind and when the distracting task is defined by features that differ from those of pain. Hypervigilance occurs when pain is highly salient or threatening, or when control is weak. A companion motivational account added that pain-related goals, such as trying to control pain, themselves shape what captures attention [@vandamme2010].

At the neural level, the model links attentional capture to the brain responses elicited by nociceptive stimuli, and attentional control to frontoparietal networks and descending modulation. Distraction reduces pain-related activity in brain regions and in the spinal cord [@bantick2002; @sprenger2012; @torta2017].

## Historical context

The model integrated the interruptive function model with laser-evoked potential studies showing that spatial attention, stimulus probability and novelty modulate distinct components of the nociceptive brain response [@eccleston1999; @legrain2002]. It responded to the lack of explicit mechanisms for attentional control in earlier cognitive-affective accounts, and to neuroimaging work showing that distraction alters activity across the "pain matrix".

## Critiques

- Many supporting studies use brief laser or electrical stimuli in healthy volunteers; generalisation to ongoing clinical pain is uncertain, and the meta-analytic evidence that distraction helps people with chronic pain is weak [@vanryckeghem2018].
- Distraction and placebo analgesia have additive effects, which suggests that not all cognitive pain modulation runs through attentional control [@buhle2012].
- Attentional bias, a central construct for clinical predictions, is measured with tasks whose effects are small and variable, and newer models question whether bias is uniformly maladaptive [@todd2015; @todd2018].

## Legacy

The model is widely used to frame experimental work on distraction, attentional set and working memory in pain, and its emphasis on salience fed directly into the salience-detection account of the "pain matrix". Clinically, it supports interventions that train goal maintenance and attention control rather than simple distraction.

## Teaching notes

- Use the working-memory study as a clear example of top-down control: the same nociceptive distracter captures attention or does not depending on what is held in mind [@legrain2011b].
- Discuss why distraction works reliably in the laboratory but less clearly for people with chronic pain.
- Contrast with the interruptive function model: what does adding "top-down control" explain that capture alone does not?
