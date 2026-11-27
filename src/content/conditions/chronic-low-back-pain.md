---
title: Chronic low back pain
aliases: [Non-specific low back pain, Chronic primary low back pain]
summary: Pain between the lower ribs and the buttock folds lasting more than 3 months. The leading cause of disability worldwide; in most people no specific cause can be found, so ICD-11 usually codes it as chronic primary pain.
family: spine
regions: [back]
icd:
  pain:
    - code: MG30.02
      title: Chronic primary musculoskeletal pain
      when: No specific cause accounts for the pain (non-specific low back pain, the large majority).
    - code: MG30.31
      title: Chronic secondary musculoskeletal pain associated with structural changes
      when: The pain is attributable to a structural change in the spine shown on examination or imaging.
      descriptors: [nociceptive, nociplastic]
    - code: MG30.51
      title: Chronic peripheral neuropathic pain
      when: Radicular pain from a lesion of a spinal nerve root (see radiculopathy).
      descriptors: [neuropathic]
  condition:
    - code: ME84.2
      title: Low back pain
  note: ICD-11 separates chronic primary low back pain (MG30.02) from the symptom code ME84.2, which excludes it. The same complaint is coded as primary or secondary depending on whether an underlying disease accounts for the pain.
  refs: [who2026, treede2019, perrot2019]
descriptors:
  - type: nociceptive
    role: common
    note: Nociception from spinal structures contributes in many patients, but for nearly everyone a specific nociceptive cause cannot be identified.
    refs: [hartvigsen2018]
  - type: neuropathic
    role: subset
    note: A screening survey of about 8000 patients found that 37% of people with chronic low back pain had predominantly neuropathic pain on the painDETECT questionnaire.
    refs: [freynhagen2006]
  - type: nociplastic
    role: common
    note: Often cited as a mixed pain state in which nociplastic pain adds to ongoing nociceptive or neuropathic pain; central pain-modulating mechanisms and pain cognitions shape persistence.
    refs: [fitzcharles2021, hartvigsen2018]
prevalence:
  value: 619 million people (all durations) in 2020
  population: Global estimate, Global Burden of Disease Study 2021
  refs: [ferreira2023]
mechanisms: [descending-modulation, pain-catastrophizing, avoidance-behaviour, cortical-reorganisation]
theories: [fear-avoidance-model, corticolimbic-learning-theory, biopsychosocial-model, central-sensitization]
related: [fibromyalgia, osteoarthritis]
references: [hartvigsen2018, ferreira2023, freynhagen2006, fitzcharles2021]
review: draft
updated: 2026-11-27
---

## Overview

Low back pain is the leading cause of years lived with disability worldwide [@hartvigsen2018; @ferreira2023]. Most episodes improve quickly, but recurrence is common and a minority of people develop persistent, disabling pain. For nearly all of them no specific cause can be identified; only a small proportion have a clear pathology such as a fracture, cancer or infection [@hartvigsen2018].

## How it is classified

Because a specific cause is usually absent, ICD-11 treats most chronic low back pain as **chronic primary musculoskeletal pain**, a condition in its own right [@treede2019; @perrot2019]. When pain can be attributed to an identified disease, the secondary musculoskeletal or neuropathic codes apply instead. The same patient can therefore move between categories as the diagnostic picture changes.

## Mechanisms

Chronic low back pain is a common example of mixed pain: nociceptive, neuropathic and nociplastic contributions can coexist and vary between people [@fitzcharles2021; @freynhagen2006]. High initial pain intensity, psychological distress and pain at several body sites raise the risk of persistent disabling pain, and central pain modulation and pain cognitions are thought to play important roles [@hartvigsen2018].

## Open questions

- Which mechanism dominates in an individual, and whether mechanism-based subgrouping improves treatment, remains largely untested.
- How best to identify, early on, the minority who will develop persistent disabling pain.
