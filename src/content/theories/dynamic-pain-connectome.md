---
title: Dynamic pain connectome
shortTitle: Dynamic pain connectome
aliases: [Pain connectome]
kind: model
year: 2015
proponents: [Aaron Kucyi, Karen D. Davis]
summary: Pain arises from, and fluctuates with, the moment-to-moment interaction of large-scale brain networks (ascending nociceptive and sensorimotor, salience, default mode and descending modulation systems). Their dynamic communication, including spontaneous shifts of attention toward or away from pain, shapes pain within and between individuals and is altered in chronic pain.
domain: neurobiological
levels: [systems, computational]
questions: [variability, chronicity]
painTypes: [acute, chronic, general]
status: emerging
coreClaims:
  - Pain is represented by a "dynamic pain connectome" of interacting networks, including the ascending nociceptive pathway, the salience network, the default mode network (DMN) and the descending antinociceptive system.
  - Attention to pain fluctuates spontaneously; mind-wandering away from pain engages the DMN and its coupling with the periaqueductal grey.
  - Temporal dynamics (time-varying functional connectivity, oscillations) carry information about pain that static activation maps miss.
  - Chronic pain involves altered within- and cross-network communication (e.g. between DMN and salience network) related to rumination, symptoms and pain severity.
predictions:
  - Spontaneous fluctuations in attention to pain should be tracked by DMN activity and DMN–periaqueductal grey connectivity.
  - Individual differences in the tendency to attend to pain should relate to structural and functional connectivity of these networks.
  - Dynamic connectivity measures should relate to chronic pain more closely than static measures.
mechanisms: [distributed-brain-network, descending-modulation]
relations:
  - type: builds-on
    target: neuromatrix-theory
    note: Recasts the distributed pain network in terms of interacting large-scale networks and their dynamics.
  - type: related-to
    target: neurocognitive-attention-model
    note: Both treat attention to pain as a key determinant of pain experience.
  - type: related-to
    target: salience-detection-account
    note: Places the salience network at the centre of pain-related brain activity.
  - type: related-to
    target: endogenous-modulation-model
    note: Includes the descending modulation system as one of the interacting networks.
  - type: related-to
    target: corticolimbic-learning-theory
evidence:
  - finding: In healthy adults receiving painful stimulation with thought probes, pain-induced DMN deactivation was attenuated during mind-wandering away from pain, DMN–periaqueductal grey connectivity fluctuations tracked attention away from pain, and stronger PAG–DMN structural and dynamic functional connectivity was associated with a tendency to mind-wander away from pain.
    direction: supports
    method: neuroimaging
    refs: [kucyi2013]
  - finding: People with temporomandibular disorder showed stronger medial prefrontal connectivity with other DMN regions than controls, and in patients pain rumination correlated with medial prefrontal connectivity to posterior cingulate, medial thalamus and periaqueductal grey.
    direction: supports
    method: neuroimaging
    refs: [kucyi2014]
  - finding: In 20 people with chronic pain from ankylosing spondylitis, the normal anticorrelation between salience network and DMN was reduced compared with controls, and the degree of cross-network abnormality tracked pain and disease-related symptoms.
    direction: supports
    method: neuroimaging
    refs: [hemington2015]
  - finding: In people with chronic pain, dynamic (time-varying) cross-network connectivity involving default mode, salience and executive control networks was more closely associated with pain than static connectivity, but only in those with neuropathic pain features, and more with trait than with state pain.
    direction: mixed
    method: neuroimaging
    refs: [cheng2018]
  - finding: People with chronic back pain performing a visual attention task showed reduced deactivation of several DMN regions compared with controls despite equal task performance.
    direction: supports
    method: neuroimaging
    refs: [baliki2008]
  - finding: In a multicentre resting-state study of chronic back pain, classifiers based on network connectivity generalised to an independent dataset with only 63% accuracy, and the most consistent network reorganisation involved sensorimotor cortex rather than the DMN.
    direction: mixed
    method: neuroimaging
    refs: [mano2018]
diagram:
  caption: "Ascending nociceptive, salience, default mode and descending modulation networks interact through time-varying connectivity, including default mode coupling with the descending system (PAG). Attention to pain drifts spontaneously between pain and mind-wandering."
  after: [kucyi2015]
foundational: [kucyi2015]
keyReferences: [kucyi2016, iannetti2010]
review: draft
updated: 2026-11-26
---

## Overview

Kucyi and Davis proposed that pain is best understood through the dynamics of a "pain connectome": a set of large-scale brain networks whose interactions change from moment to moment [@kucyi2015]. The ascending nociceptive and sensorimotor system signals noxious input. The salience network (anterior insula, mid-cingulate) orients attention to it. The DMN supports internally directed thought and mind-wandering. The descending modulation system (prefrontal cortex, periaqueductal grey, rostral ventromedial medulla) adjusts nociceptive transmission. Pain at any moment reflects how these systems communicate.

A central idea is that attention to pain is intrinsically variable. People differ in how much they spontaneously attend to pain, and attention drifts away from pain even without distraction. Such mind-wandering is accompanied by changes in DMN activity and DMN–periaqueductal grey coupling [@kucyi2013]. The model emphasises time-varying connectivity and oscillations at multiple timescales, from single neurons to networks, as the neural code for pain [@kucyi2016].

## Historical context

The model developed from resting-state and network neuroscience in the late 2000s, which showed that the brain's intrinsic activity is organised into reproducible networks, and from findings of altered DMN function in chronic pain [@baliki2008]. It moves beyond the static "pain matrix" of activation studies, whose specificity for pain had been questioned [@iannetti2010].

## Critiques

- Network labels such as "default mode" and "salience" are broad, and different studies define them differently, which makes results hard to compare.
- Dynamic functional connectivity measures are sensitive to head motion, physiological noise and analysis choices, and their reliability is still being established.
- Most patient studies are small, cross-sectional and condition-specific. Larger multicentre work finds modest classification accuracy and network changes that do not always match the DMN-centred picture [@mano2018].
- The model describes which networks are involved more than it explains how their interaction produces pain, which limits precise predictions.

## Legacy

The dynamic pain connectome has made spontaneous attention and network dynamics central topics in pain neuroimaging and has motivated the search for network-based markers of individual pain sensitivity and chronic pain.

## Teaching notes

- Contrast "pain matrix" (a static set of activated regions) with "pain connectome" (interacting networks whose dynamics matter).
- Mind-wandering studies show attention effects without an experimenter manipulating attention.
- Discussion prompt: is altered DMN connectivity a cause, a consequence or an epiphenomenon of chronic pain?
