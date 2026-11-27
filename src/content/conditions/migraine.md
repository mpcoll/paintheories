---
title: Migraine
aliases: [Chronic migraine, Migraine with aura, Migraine without aura]
summary: A common neurological disorder of recurrent, often disabling headache attacks with sensory sensitivity. Chronic migraine (15 or more headache days a month) is the form that falls within ICD-11 chronic primary headache.
family: headache
regions: [head]
icd:
  pain:
    - code: MG30.03
      title: Chronic primary headache or orofacial pain
      when: Chronic migraine, with headache on 15 or more days a month for more than 3 months. Episodic migraine is not chronic pain in the ICD-11 sense.
  condition:
    - code: 8A80.2
      title: Chronic migraine
    - code: 8A80
      title: Migraine
  note: ICD-11 lists chronic migraine (8A80.2) as "coded elsewhere" under chronic primary headache or orofacial pain; the headache disorders themselves stay in the nervous-system chapter, which follows the International Classification of Headache Disorders.
  refs: [who2026, nicholas2019, ihs2018]
descriptors:
  - type: nociceptive
    role: common
    note: During attacks, the trigeminal durovascular afferent pathway carries the pain signal; migraine is understood as a disorder of brain sensory processing in which control of these inputs is lost.
    refs: [goadsby2017]
  - type: nociplastic
    role: subset
    note: Nociplastic mechanisms have been proposed to contribute to chronic primary headache.
    refs: [chu2026]
prevalence:
  value: 1.04 billion people in 2016
  population: Global estimate for migraine (all forms), Global Burden of Disease Study 2016
  refs: [stovner2018]
criteria:
  name: ICHD-3
  summary: Migraine is diagnosed from recurrent attacks with typical features (for example unilateral, pulsating pain, nausea or sensitivity to light and sound). Chronic migraine is headache on 15 or more days a month for more than 3 months, with migraine features on at least 8 of them.
  refs: [ihs2018]
mechanisms: [specialized-nociceptors, descending-modulation, synaptic-plasticity]
theories: [central-sensitization, nociplastic-pain]
related: [tension-type-headache, medication-overuse-headache]
references: [stovner2018, goadsby2017, ihs2018, chu2026]
review: draft
updated: 2026-11-27
---

## Overview

Migraine affected about 1.04 billion people in 2016 and caused far more disability than tension-type headache, the other very common primary headache, with the highest burden in women aged 15 to 49 [@stovner2018]. Attacks unfold in phases, from premonitory symptoms through the headache to a postdromal phase [@goadsby2017].

## How it is classified

Headache medicine uses the International Classification of Headache Disorders [@ihs2018]. ICD-11 keeps migraine in the nervous-system chapter, but treats **chronic migraine** as a form of chronic primary headache or orofacial pain [@who2026; @nicholas2019]. Episodic migraine is recurrent but not chronic pain in the ICD-11 sense.

## Mechanisms

Migraine is now understood as a neurological disorder of sensory processing, not a primarily vascular one. Brainstem and diencephalic systems that modulate sensory input malfunction, and the trigeminal durovascular pathway carries the head pain [@goadsby2017]. This understanding led to treatments targeting CGRP and its receptor [@goadsby2017].

## Open questions

- Why some people move from episodic to chronic migraine, and whether this transition can be prevented.
- Which of the IASP mechanistic descriptors fits migraine best is not settled; it does not fit neatly into any of the three.
