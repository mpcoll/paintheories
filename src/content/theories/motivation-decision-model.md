---
title: Motivation-decision model of pain
shortTitle: Motivation-decision
aliases: [MDM, Motivation-decision model]
kind: model
year: 2006
proponents: [Howard L. Fields]
summary: Pain is modulated according to an unconscious decision about what matters most for survival. When a competing need or reward has higher priority than pain, brainstem descending circuits (partly opioid-mediated) suppress nociception; when attending to pain has priority, they facilitate it.
domain: cognitive
levels: [circuit, systems, computational]
questions: [variability, function]
painTypes: [acute, general]
status: active
coreClaims:
  - Pain is a motivational state that competes with other motivations, such as hunger, thirst, threat or reward, for control of behaviour.
  - The brain continuously evaluates the expected value of responding to pain against that of competing goals; this evaluation is largely unconscious.
  - The outcome of this decision is implemented by the descending modulatory circuit (amygdala, periaqueductal grey, rostral ventromedial medulla), whose OFF cells inhibit and ON cells facilitate dorsal horn nociceptive transmission.
  - Anything judged more important for survival than pain should be antinociceptive; conditions that make pain more important, such as illness or threat to an injured body part, should be pronociceptive.
  - Pain relief is itself rewarding, linking pain modulation to the brain's reward and valuation circuitry.
predictions:
  - Activating a competing need state (for example hunger) or offering a reward should reduce pain-related responses, and this reduction should depend on brainstem descending circuits.
  - Pain modulation by rewards and losses should scale with their value, and involve valuation regions as well as descending control.
  - Disrupting descending modulation (for example by inactivating the rostral ventromedial medulla or blocking opioid receptors) should abolish analgesia produced by competing motivations.
mechanisms: [descending-modulation, reward-motivation]
relations:
  - type: builds-on
    target: gate-control-theory
    note: Develops the idea of descending control of the dorsal horn into a value-based decision process.
  - type: builds-on
    target: endogenous-modulation-model
    note: Treats the PAG–RVM ON/OFF-cell system as the output stage of the decision.
  - type: related-to
    target: corticolimbic-learning-theory
    note: Both treat pain as a motivational state shaped by reward and valuation circuitry.
  - type: related-to
    target: expectancy-placebo-analgesia
    note: Fields framed expectation of relief as one input to the same value-based modulation.
  - type: related-to
    target: homeostatic-emotion
    note: Both treat pain as a motivation that competes with other bodily needs.
  - type: related-to
    target: neurocognitive-attention-model
    note: Motivational accounts of attention to pain also give competing goals a central role.
evidence:
  - finding: In mice, hunger, and activation of hunger-sensitive AgRP neurons projecting to the parabrachial nucleus, suppressed behavioural and affective responses to inflammatory pain via NPY Y1 receptor signalling, without altering acute nociceptive responses.
    direction: supports
    method: animal
    refs: [alhadeff2018]
  - finding: In rats, eating palatable food suppressed heat-evoked withdrawal, and this analgesia was blocked by inactivating the medullary raphe magnus; however, it did not require hunger or food-seeking and depended on the hedonic value of what was ingested.
    direction: mixed
    method: animal
    refs: [foo2009]
  - finding: In healthy volunteers playing a wheel-of-fortune game, monetary wins reduced and losses increased the perceived intensity of concurrent thermal stimuli; the D2 antagonist sulpiride enlarged this modulation, mainly the effect of losses.
    direction: supports
    method: human-experimental
    refs: [becker2013]
  - finding: In healthy volunteers, pain relief that was won in a game reduced pain more than the same relief obtained without winning, consistent with motivated states engaging endogenous pain inhibition.
    direction: supports
    method: human-experimental
    refs: [becker2015]
  - finding: In an fMRI study of the same paradigm, pain inhibition by monetary wins correlated with medial orbitofrontal activity, but wins and losses did not change pain-related activation in regions coding nociceptive intensity, suggesting modulation via valuation rather than reduced nociceptive input.
    direction: mixed
    method: neuroimaging
    refs: [becker2017]
  - finding: In healthy volunteers, moderate pain was rated as pleasant when it was the better of two possible outcomes; this "hedonic flip" was accompanied by reduced insula and dorsal cingulate activity, increased valuation-region activity and greater coupling between reward circuitry and the periaqueductal grey.
    direction: supports
    method: neuroimaging
    refs: [leknes2013]
  - finding: In healthy volunteers, adding a monetary reward to a pain-associated joystick movement reduced avoidance of that movement, although self-reported pain-related fear of the movement was unchanged.
    direction: supports
    method: human-experimental
    refs: [claes2014]
foundational: [fields2006, fields2007]
keyReferences: [fields2000, fields2004, fields2018, leknes2008, wiech2013, navratilova2014]
review: draft
updated: 2026-11-26
---

## Overview

Fields proposed that pain should be understood as one motivation among several, and that the nervous system decides, largely outside awareness, whether responding to pain or pursuing another goal is more valuable at a given moment [@fields2006; @fields2007]. If something is more important for survival than pain, such as escaping a predator, eating or obtaining a reward, nociceptive transmission is inhibited; if attending to pain is more important, it is facilitated.

The decision is implemented by the descending pain-modulating circuit that Fields and colleagues had characterised: the amygdala, periaqueductal grey and rostral ventromedial medulla, whose OFF cells inhibit and ON cells facilitate dorsal horn neurons [@fields2000; @fields2004]. Opioids act on this circuit and on reward circuitry, which is why the model links analgesia, reward and the rewarding value of pain relief [@fields2007; @leknes2008].

The model therefore recasts placebo analgesia, stress-induced analgesia and hyperalgesia during illness as outputs of the same value-based process. Fields later discussed how expectations of pain and of relief shape pain within this framework [@fields2018].

## Historical context

The model grew out of work on brainstem pain modulation and opioid analgesia in the 1970s–1990s, which showed that the brain can switch nociceptive transmission on and off [@fields2000; @fields2004]. It added an account of *why* the switch is thrown, drawing on behavioural ecology (animals in a fight or a feeding bout often ignore injuries) and on research on reward and decision-making. Later reviews placed it within a broader motivational view of pain in which pain, reward and action selection are intertwined [@wiech2013; @navratilova2014].

## Critiques

- The "decision" is defined broadly, and almost any modulation can be redescribed post hoc as reflecting a change in priorities unless value is measured independently of the pain change.
- Evidence linking competing motivations to the specific PAG–RVM output comes mainly from rodents; in humans, reward-related pain inhibition may act partly through valuation and appraisal rather than through reduced spinal nociception [@becker2017].
- The model was originally presented in conference proceedings and reviews rather than as a formal model with quantitative predictions, which limits strong tests.

## Legacy

The motivation-decision model is widely cited as the main framework linking descending modulation to motivation and reward, and it underpins work on reward-induced analgesia, pain relief as reward and altered reward processing in chronic pain [@navratilova2014]. Its core claim, that competing needs can suppress pain through identifiable circuits, has gained support from circuit-level studies in mice [@alhadeff2018].

## Teaching notes

- Contrast with gate control: both invoke descending control, but the motivation-decision model specifies what drives it (relative value of competing goals).
- Ask students what independent measure of "value" would make the model falsifiable.
- Useful example: hunger suppresses inflammatory but not acute nociceptive responses in mice, which fits the idea that reflexive protection is preserved while ongoing pain is down-weighted.
