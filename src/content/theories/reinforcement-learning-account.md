---
title: Reinforcement learning account of pain
shortTitle: Reinforcement learning
aliases: [Pain as a precision signal for reinforcement learning and control, Computational control account of pain]
kind: theory
year: 2019
proponents: [Ben Seymour, Flavia Mancini, Peter Dayan]
summary: Pain is a precise control signal whose core function is motivational. Its variability reflects a reinforcement learning architecture that combines Pavlovian, habitual and goal-directed controllers to learn, predict and avoid harm and to seek relief.
domain: cognitive
levels: [computational, systems, behavioural]
questions: [nature, variability, function, chronicity]
painTypes: [acute, chronic, general]
status: emerging
coreClaims:
  - The core function of pain is motivational, to direct short- and long-term behaviour away from harm, and pain is best understood as a control signal rather than a noisy sensory readout.
  - The brain learns predictions of pain and of relief with reinforcement learning algorithms (e.g. temporal-difference learning), driven by aversive and relief prediction errors.
  - Several controllers (innate/Pavlovian, model-free habitual and model-based goal-directed) operate in parallel, which explains why pain is tuned by many cognitive and motivational factors and supported by a distributed network.
  - Uncertainty (associability) both controls learning rates and modulates pain itself, so pain is adjusted to support learning.
  - Perceptual inference and action control are intertwined in a hierarchical architecture that combines inference, information-seeking and value-based control.
predictions:
  - Neural signals in striatal, insular and cingulate regions should track model-derived aversive and relief prediction errors.
  - Uncertainty about forthcoming pain should increase pain and learning rates, via brainstem modulatory circuits.
  - Active, informative relief-seeking should reduce ongoing pain more than passive relief.
mechanisms: [prediction-error, reward-motivation, associative-learning, descending-modulation]
relations:
  - type: builds-on
    target: motivation-decision-model
    note: Formalises pain modulation as value-based decision-making.
  - type: builds-on
    target: classical-conditioning-model
    note: Extends associative learning accounts with formal reinforcement learning algorithms.
  - type: related-to
    target: predictive-processing
    note: Shares prediction and uncertainty, but emphasises control and action over perceptual inference.
  - type: related-to
    target: corticolimbic-learning-theory
  - type: related-to
    target: evolutionary-account
evidence:
  - finding: In an fMRI study of higher-order aversive conditioning in healthy volunteers, activity in the ventral striatum and anterior insula matched the sequential learning signals predicted by temporal-difference models of pain prediction.
    direction: supports
    method: neuroimaging
    refs: [seymour2004]
  - finding: People in prolonged experimental pain learned to predict pain relief in a way consistent with average reward/loss reinforcement learning, with reward-like signals in the amygdala and midbrain mirrored by opposite aversion-like signals in lateral orbitofrontal and anterior cingulate cortex.
    direction: supports
    method: neuroimaging
    refs: [seymour2005]
  - finding: When people learned to escape tonic pain, relief learning followed a reinforcement learning process with prediction errors in the dorsal putamen, and an uncertainty (associability) signal in pregenual anterior cingulate cortex both set the learning rate and reduced the level of ongoing pain.
    direction: supports
    method: neuroimaging
    refs: [zhang2018]
  - finding: Uncertainty in observed pain ratings had a specific hyperalgesic effect on subsequent thermal pain, correlated with activity in the periaqueductal grey.
    direction: supports
    method: neuroimaging
    refs: [yoshida2013]
  - finding: Healthy participants learned the volatile statistics of pain sequences and predicted forthcoming pain intensity in a way consistent with optimal Bayesian inference, with inferred frequency encoded in sensorimotor cortex and dorsal striatum and uncertainty in superior parietal cortex.
    direction: supports
    method: neuroimaging
    refs: [mancini2022]
  - finding: In a probabilistic relief-seeking task, relief was enhanced by active decisions and unpredictability, and these information-related effects were enhanced by levodopa but not affected by naltrexone, suggesting dopaminergic rather than opioidergic control of relief.
    direction: supports
    method: human-experimental
    refs: [desch2023]
foundational: [seymour2019]
keyReferences: [seymour2020]
review: draft
updated: 2026-11-26
---

## Overview

Seymour argues that pain's variability and sensitivity to context do not make it imprecise. They reflect its role as a control signal in a reinforcement learning system whose job is to protect the body [@seymour2019]. On this account, the brain learns predictions about pain and relief using algorithms like temporal-difference learning and uses several controllers in parallel: innate, Pavlovian responses; model-free habits; and model-based, goal-directed planning. Pain is tuned to serve learning and action, which is why expectation, uncertainty, attention and motivation all modulate it, and why it depends on a distributed network rather than a single region.

A later hierarchical version brings perceptual inference (often modelled in Bayesian terms) and action control (modelled as reinforcement learning) into a single architecture that also seeks information [@seymour2020].

## Historical context

The account grew out of computational neuroscience of reward and punishment learning. Early fMRI work showed that temporal-difference models describe how people learn to predict pain [@seymour2004] and pain relief [@seymour2005]. It formalises ideas in the motivation-decision model, which also treats pain modulation as a decision about what matters most.

## Critiques

- Most supporting studies use experimental pain in healthy volunteers; how well the architecture explains clinical chronic pain is largely untested.
- With several controllers, learning rates and uncertainty terms, the framework is flexible. Strong tests need models that are specified and fitted in advance, and compared with simpler alternatives.
- The boundary with predictive processing accounts is not sharp, since both rely on prediction and uncertainty. The hierarchical version explicitly combines them [@seymour2020].

## Legacy

An active research programme that links pain to computational psychiatry and to engineering ("safe" reinforcement learning). It offers a formal language for relief, avoidance and the transition from adaptive to maladaptive pain.

## Teaching notes

- Contrast "pain as a percept" (inference) with "pain as a control signal" (reinforcement learning), and ask which predictions differ.
- Use relief learning to show why pain can be modulated *in order to* support learning, not only by learning.
