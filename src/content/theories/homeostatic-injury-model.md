---
title: Homeostatic control model of post-injury pain
shortTitle: Homeostatic injury control
aliases: [Homeostasis after injury, Tonic pain as a recovery state]
kind: model
year: 2026
proponents: [Pranav Mahajan, Peter Dayan, Ben Seymour]
summary: After injury, tonic pain is the output of an internal control system that infers the uncertain state of the injury and coordinates behaviour with physiological recovery. Normal tonic pain can turn into pathological chronic pain when this inference and control go wrong.
domain: cognitive
levels: [computational, behavioural, evolutionary]
questions: [function, chronicity, disability]
painTypes: [acute, chronic]
status: emerging
coreClaims:
  - Injury creates a homeostatic need for recovery, so behaviour must be coordinated with physiological and immune repair to protect the injured part.
  - The brain maintains an internal, uncertain estimate of the nature and state of the injury, formalised as a partially observable Markov decision process.
  - Tonic pain is a behavioural state that prioritises recovery by withholding actions and protecting the body, while still allowing relief learning.
  - Seemingly counter-intuitive behaviours, such as probing or investigating an injury, follow from the need to reduce uncertainty about its state.
  - Faulty inference or control can drive the transition from normative tonic pain to pathological chronic pain.
predictions:
  - Tonic pain should reshape learned predictions about phasic pain, especially when tied to the injured body part.
  - Injury-investigation behaviours should increase when uncertainty about the injury's state is high.
  - Persistent miscalibrated beliefs about injury state should predict transition to chronic pain.
mechanisms: [prediction-error, interoception, stress-response]
relations:
  - type: extends
    target: reinforcement-learning-account
    note: Applies the inference-and-control architecture to recovery after injury.
  - type: related-to
    target: homeostatic-emotion
    note: Both treat pain as homeostatic, but this model formalises it as control under uncertainty.
  - type: related-to
    target: evolutionary-account
  - type: related-to
    target: allostatic-load-model
evidence:
  - finding: Simulations of a partially observable Markov decision process model reproduced injury investigation behaviours and transitions from tonic to chronic pain states.
    direction: supports
    method: computational
    refs: [mahajan2026]
  - finding: During tonic experimental pain, active relief-seeking engaged a reinforcement learning circuit whose uncertainty signal in pregenual anterior cingulate cortex reduced ongoing pain, consistent with tonic pain being a recovery state that still permits relief learning.
    direction: supports
    method: neuroimaging
    refs: [zhang2018]
  - finding: In a virtual-reality Pavlovian revaluation paradigm with EEG, lateralised tonic pain altered neural correlates of phasic conditioned responses during extinction (reduced midfrontal theta) when its side matched the predicted phasic pain, as the homeostatic model predicts.
    direction: supports
    method: human-experimental
    refs: [hewitt2026]
diagram:
  caption: "The brain cannot observe the injury directly and keeps an uncertain internal estimate of its state. This estimate controls tonic pain, which protects the injury and withholds actions; probing reduces uncertainty, and faulty inference can lead to chronic pain."
  after: [mahajan2026]
foundational: [mahajan2026]
keyReferences: [seymour2019, seymour2020]
review: draft
updated: 2026-11-26
---

## Overview

Mahajan, Dayan and Seymour propose that pain after injury serves homeostasis. Recovery needs physiological and immune repair to be coordinated with behaviour, and this needs an internal controller that represents the injury and decides which actions to take or withhold [@mahajan2026]. Because the state of an injury is never directly observable, the controller must act under uncertainty, which the authors formalise as a partially observable Markov decision process. Tonic pain is the behavioural state that results: it protects the injured part and prioritises recovery, while still letting the person learn how to obtain relief [@zhang2018].

## Historical context

The model builds on the reinforcement learning account of pain [@seymour2019] and its hierarchical extension combining inference and control [@seymour2020]. It continues the long tradition of treating pain as homeostatic, but makes that idea computationally precise.

## Critiques

- The founding paper is a computational treatment; most predictions have not yet been tested, especially in clinical populations.
- How model quantities (beliefs about injury state, recovery value) map onto measurable physiology and behaviour remains to be specified.

## Legacy

A recent proposal that offers a quantitative roadmap for studying tonic pain, injury behaviour and the transition to chronic pain.

## Teaching notes

- Compare with Craig's homeostatic emotion account: both see pain as homeostatic, but here the emphasis is on decision-making under uncertainty.
- Discuss why "checking" an injury, which may increase pain, can still be rational.
