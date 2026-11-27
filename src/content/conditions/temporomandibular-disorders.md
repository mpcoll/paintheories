---
title: Temporomandibular disorders
aliases: [TMD, Painful temporomandibular disorder, Temporomandibular joint disorders]
summary: Pain in the jaw muscles, the temporomandibular joint or both, often with clicking, locking or limited mouth opening. Common in the population; in ICD-11 chronic TMD pain is primary when no cause accounts for it and secondary when it stems from inflammation, structural joint change, injury or nervous system disease.
family: headache
regions: [face, head]
icd:
  pain:
    - code: MG30.03
      title: Chronic primary headache or orofacial pain
      descriptors: [nociceptive, nociplastic]
      when: Chronic TMD pain on at least half the days for at least 3 months that is not better accounted for by an underlying disease (chronic primary TMD pain).
    - code: MG30.63
      title: Headache or orofacial pain associated with chronic secondary temporomandibular disorders
      descriptors: [nociceptive]
      when: The pain is associated with persistent inflammation (for example infection, crystal deposition or autoimmune disease), structural change such as osteoarthritis, injury, or a disease of the nervous system.
  condition:
    - code: DA0E.8
      title: Temporomandibular joint disorders
  note: DA0E.8, in the dental chapter, is an umbrella code for acute or chronic jaw-muscle pain and joint inflammation. For chronic pain, ICD-11 follows the primary versus secondary split; MG30.63 asks to code also the causing condition, and its definition advises the primary pain codes when the cause is vague.
  refs: [who2026, nicholas2019, benoliel2019]
descriptors:
  - type: nociceptive
    role: common
    note: Pain from the masticatory muscles and the joint (myalgia, arthralgia) is the usual presentation, and inflammatory or degenerative joint disease gives a clear nociceptive source in secondary TMD. TMD patients range from mainly peripherally generated pain to centralized pain.
    refs: [harper2016, schiffman2014, who2026]
  - type: nociplastic
    role: common
    note: Many patients show signs of centralized pain, with pain out of proportion to peripheral findings, other chronic pain conditions and somatic symptoms; nociplastic mechanisms are proposed to contribute, often alongside nociceptive ones.
    refs: [harper2016, slade2016, chu2026]
prevalence:
  value: About 29.5% (any TMD diagnosis)
  population: General population, meta-analysis of 27 studies (20,971 people) using RDC/TMD or DC/TMD; includes non-painful diagnoses such as joint sounds; higher in women (36.7%) than men (26.7%)
  refs: [alqutaibi2025]
  chart: { basis: population, pct: 29.5, note: "any TMD diagnosis, including painless joint sounds" }
criteria:
  name: Diagnostic Criteria for Temporomandibular Disorders (DC/TMD)
  summary: A dual-axis protocol. Axis I gives a validated screener and examination-based criteria for the common pain-related TMD (such as myalgia and arthralgia) and for intra-articular disorders; Axis II assesses pain intensity, pain-related disability, psychological distress, jaw function and parafunctional behaviours.
  refs: [schiffman2014]
mechanisms: [synaptic-plasticity, stress-response]
theories: [central-sensitization, nociplastic-pain, biopsychosocial-model]
related: [tension-type-headache, migraine, fibromyalgia, osteoarthritis]
references: [schiffman2014, harper2016, slade2016, alqutaibi2025, chu2026, nicholas2019, benoliel2019]
review: draft
updated: 2026-11-27
---

## Overview

Temporomandibular disorders (TMD) cover pain and dysfunction of the jaw muscles and the temporomandibular joint. Studies using standard research criteria suggest that nearly a third of people meet criteria for some TMD diagnosis, although this count includes painless joint sounds; myalgia is the most frequently reported sign [@alqutaibi2025]. In the prospective OPPERA study, about 4% of initially pain-free adults developed clinically verified painful TMD each year, far fewer than the 19% who reported facial pain symptoms [@slade2016].

## How it is classified

The DC/TMD protocol is the standard diagnostic tool. Its Axis I separates the common pain-related disorders, such as myalgia and arthralgia, from intra-articular disorders such as disc displacement, and its Axis II screens for pain-related disability, psychological distress and parafunctional behaviours [@schiffman2014]. ICD-11 uses DA0E.8 for the disorder and splits chronic TMD pain into primary pain (MG30.03) and secondary pain associated with inflammation, structural change, injury or nervous system disease (MG30.63) [@who2026; @nicholas2019; @benoliel2019].

## Mechanisms

TMD patients appear to lie on a continuum, from those whose pain is mainly driven by peripheral nociception in the muscles or joint to those whose pain is centralized, that is generated, amplified or maintained by the central nervous system [@harper2016]. In OPPERA, predictors of new TMD included comorbid health conditions and non-painful orofacial symptoms (the most influential), self-reported jaw parafunction, frequent somatic symptoms and deteriorating sleep quality; pressure pain thresholds fluctuated with the onset and recovery of TMD rather than predicting it, and the effect of stress on pain depended on variation in the COMT gene [@slade2016]. Nociplastic contributions to TMD are now widely proposed [@chu2026].

## Open questions

- Variation in mechanism between patients may explain why many are not helped by current treatment; how to identify each person's dominant mechanism in the clinic remains open [@harper2016].
- Whether pain sensitivity is a cause or a consequence of TMD is unclear, since thresholds track the course of the disorder rather than predicting its onset [@slade2016].
