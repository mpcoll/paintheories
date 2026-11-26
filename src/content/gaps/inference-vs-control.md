---
title: Is pain a perceptual inference, a control signal, or a decision?
order: 3
summary: Predictive processing treats pain as an inference about the body's state; reinforcement learning treats it as a control signal for learning and action; the motivation-decision model treats its modulation as a value-based decision. All explain expectation and context effects, but they disagree about what should modulate pain when inference, action and value are pulled apart.
questions: [nature, variability, function]
predictions:
  - theory: predictive-processing
    prediction: Expectation effects should scale with the precision of the prior relative to sensory evidence, whether or not the person can act on the pain.
  - theory: reinforcement-learning-account
    prediction: Pain modulation should scale with its relevance for learning and action — controllability, uncertainty about outcomes (associability) and the value of relief — even when sensory precision is held constant.
  - theory: motivation-decision-model
    prediction: Pain should be suppressed when a competing goal of higher value is present, in proportion to that value, through opioid-dependent descending inhibition.
  - theory: expectancy-placebo-analgesia
    prediction: Modulation should follow conscious expectations of relief, irrespective of controllability or competing rewards.
test:
  design: A factorial experiment manipulating sensory precision (stimulus variability), controllability (whether actions can reduce the pain) and the value of a competing reward, with trial-by-trial ratings, computational model fitting and brainstem/spinal imaging; optionally with opioid antagonism.
  decisive: Which manipulation explains modulation and how they interact. Precision effects without controllability effects would favour predictive processing; controllability and associability effects with precision held constant would favour reinforcement learning; reward-value effects blocked by naloxone would favour the motivation-decision model.
references: [buchel2014, grahl2018, hoskin2019, seymour2019, seymour2020, zhang2018, yoshida2013, fields2006, leknes2013]
review: draft
updated: 2026-11-26
---

## Current evidence

Placebo hypoalgesia is larger when treatment expectations are more precise [@grahl2018], and Bayesian models predict cue effects on pain [@hoskin2019], consistent with predictive processing [@buchel2014]. Uncertainty increases pain [@yoshida2013], and uncertainty signals during relief learning reduce ongoing pain [@zhang2018], consistent with reinforcement learning [@seymour2019]. Pain can even feel pleasant when it is the better of two outcomes [@leknes2013], consistent with value-based modulation [@fields2006]. A hierarchical account combines inference and control [@seymour2020], but the theories have not been directly pitted against each other.
