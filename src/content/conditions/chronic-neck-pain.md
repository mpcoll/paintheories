---
title: Chronic neck pain
aliases: [Chronic primary cervical pain, Non-specific neck pain, Cervicalgia]
summary: Persistent pain in the neck, one of the most common chronic pain conditions and a leading cause of years lived with disability. Often no structural cause is found and ICD-11 classes it as chronic primary musculoskeletal pain; identifiable sources include facet joint arthropathy and cervical radiculopathy.
family: spine
regions: [neck]
icd:
  pain:
    - code: MG30.02
      title: Chronic primary musculoskeletal pain
      descriptors: [nociceptive, nociplastic]
      when: No specific cause accounts for the pain (chronic primary cervical pain).
    - code: MG30.31
      title: Chronic secondary musculoskeletal pain associated with structural changes
      descriptors: [nociceptive]
      when: The pain is attributable to a structural change in the cervical spine, such as facet joint arthropathy, shown on examination or imaging.
    - code: MG30.51
      title: Chronic peripheral neuropathic pain
      descriptors: [neuropathic]
      when: Radicular pain from a lesion of a cervical nerve root (see radiculopathy).
    - code: MG30.20
      title: Chronic post traumatic pain
      when: The pain began after a neck injury such as whiplash (see whiplash-associated disorders).
  condition:
    - code: ME84.0
      title: Cervical spine pain
  note: ICD-11 lists "chronic primary cervical pain" under MG30.02, and the symptom code ME84.0 (which includes cervicalgia) excludes it, as well as chronic secondary musculoskeletal and neuropathic pain. As with low back pain, the same complaint is coded as primary or secondary depending on whether an underlying cause accounts for it.
  refs: [who2026, treede2019, nicholas2019, perrot2019, scholz2019, schug2019]
descriptors:
  - type: nociceptive
    role: common
    note: Facet joint arthropathy is one recognised nociceptive source (weak evidence supports radiofrequency denervation for it), but often no structural pathology accounts for the pain.
    refs: [cohen2017, malfliet2015]
  - type: neuropathic
    role: subset
    note: Cervical radiculopathy is the clearly neuropathic form. Beyond it, nearly half of people with chronic neck pain report mixed or predominantly neuropathic symptoms on screening questionnaires, which cannot confirm a nerve lesion.
    refs: [cohen2017]
  - type: nociplastic
    role: subset
    note: A systematic review found that central sensitization is not a characteristic feature of chronic non-traumatic neck pain, although it can be present in some individuals; it is far more consistent after whiplash injury.
    refs: [malfliet2015]
prevalence:
  value: 203 million people (all durations) in 2020
  population: Global estimate, Global Burden of Disease Study 2021; age-standardised 2450 per 100 000, higher in women than in men
  refs: [wu2024]
  chart: { basis: population, pct: 2.45, note: "neck pain of any duration, age-standardised" }
mechanisms: [associative-learning, body-representation, descending-modulation, avoidance-behaviour]
theories: [imprecision-hypothesis, fear-avoidance-model, biopsychosocial-model]
related: [whiplash-associated-disorders, chronic-low-back-pain, radiculopathy]
references: [wu2024, cohen2017, malfliet2015, harvie2015]
review: draft
updated: 2026-11-27
---

## Overview

Neck pain affected an estimated 203 million people worldwide in 2020, with prevalence highest between middle and older age and higher in women [@wu2024]. Most acute episodes resolve, but more than a third of people still have low-grade symptoms or recurrences a year later; genetic and psychosocial factors predict persistence [@cohen2017].

## How it is classified

When no specific cause accounts for the pain, ICD-11 classes it as chronic primary musculoskeletal pain (MG30.02) [@treede2019; @nicholas2019]. Pain from an identified structural change, from a cervical nerve root lesion or from a neck injury moves to the secondary musculoskeletal, neuropathic or posttraumatic categories [@perrot2019; @scholz2019; @schug2019]. Whiplash-associated disorders are described in a separate entry.

## Mechanisms

Chronic neck pain is mechanistically mixed. Facet joint arthropathy and nerve root compression are recognised sources, and nearly half of patients report neuropathic-like symptoms [@cohen2017]. Widespread hypersensitivity, a sign of central sensitization, is consistently found after whiplash but not in most people with non-traumatic neck pain [@malfliet2015]. Pain also depends on context: in a virtual reality experiment, visual feedback that overstated head rotation made movement-evoked pain start earlier, and feedback that understated it made pain start later [@harvie2015].

## Open questions

- Whether a subgroup of non-traumatic neck pain with central sensitization can be identified, and whether it needs different treatment [@malfliet2015].
- How much of the neuropathic-like symptom burden reported on questionnaires reflects true nerve involvement.
