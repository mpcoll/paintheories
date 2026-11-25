---
title: Predictive processing accounts of pain
shortTitle: Predictive processing
aliases: [Bayesian brain account of pain, Predictive coding of pain]
kind: theory
year: 2014
proponents: [Christian Büchel, Katja Wiech, Abby Tabor, Giulio Ongaro, Ted Kaptchuk]
summary: Pain is an inference in which the brain combines prior expectations with incoming nociceptive evidence, each weighted by its precision, and minimises prediction error.
domain: cognitive
levels: [computational, systems]
questions: [nature, variability, chronicity]
painTypes: [general, chronic]
status: emerging
coreClaims:
  - The brain continually predicts its sensory input, including nociceptive input.
  - Perceived pain reflects the integration of prior expectations and sensory evidence, weighted by their relative precision.
  - Mismatches between predicted and received input (prediction errors) update beliefs and drive learning.
  - Placebo and nocebo effects arise from precise priors pulling perception towards expected outcomes.
  - Chronic pain may reflect overly precise or poorly updated priors about bodily threat.
predictions:
  - Expectation effects on pain should be stronger when sensory evidence is less precise.
  - Neural signals encoding expectations and prediction errors should be separable from signals encoding stimulus intensity.
mechanisms: [prediction-error, descending-modulation, distributed-brain-network]
relations:
  - type: builds-on
    target: neuromatrix-theory
    note: Shares the view of pain as a brain output not determined by input.
  - type: related-to
    target: fear-avoidance-model
    note: Imprecise threat learning links the two.
foundational: [buchel2014, tabor2017]
keyReferences: [wiech2016, ongaro2018, anchisi2015, geuter2017, moseley2015, kiverstein2022]
review: draft
updated: 2026-11-25
---

## Overview

Predictive processing accounts apply general theories of perception as inference to pain. Büchel and colleagues framed placebo analgesia as the result of expectations (priors) being combined with nociceptive input according to their precision [@buchel2014]. Tabor and colleagues described pain as a statistical decision about bodily threat [@tabor2017], and similar Bayesian accounts have been proposed for symptom perception more broadly [@ongaro2018].

## Evidence for

- Expectations, attention and beliefs shape pain in ways that formal Bayesian models capture quantitatively [@anchisi2015; @wiech2016].
- Neuroimaging dissociates prediction-error signals from stimulus intensity signals within the insula [@geuter2017].

## Evidence against and critiques

- Because priors and precision can be adjusted freely, the framework is very flexible and can be hard to falsify unless its quantities are specified in advance.
- Many findings cited in support (expectation effects) are also predicted by simpler accounts; distinguishing predictive coding from other expectation models requires targeted designs.
- Accounts differ on whether pain is an inference about the body, about threat, or about action, and embodied versions place more weight on action [@kiverstein2022].

## Legacy

An active and fast-growing area that offers a common formal language for placebo, nocebo, attention and chronic pain, and links pain research to computational psychiatry.

## Teaching notes

- Introduce with a simple Gaussian prior × likelihood example: the same stimulus produces different posterior pain depending on expectation precision.
- Ask what result would count against the account.
