---
title: Rheumatoid arthritis
aliases: [RA, Rheumatoid arthritis pain]
summary: A chronic autoimmune inflammatory disease of the joints in which pain is the symptom patients rate as most important. Joint inflammation drives much of the pain, but pain often persists despite good control of inflammation, which points to additional peripheral and central mechanisms.
family: joints
regions: [upper-limb, lower-limb]
icd:
  pain:
    - code: MG30.30
      title: Chronic secondary musculoskeletal pain from persistent inflammation
      descriptors: [nociceptive, neuropathic]
      when: The pain is attributable to active joint inflammation (synovitis), the usual case.
    - code: MG30.31
      title: Chronic secondary musculoskeletal pain associated with structural changes
      descriptors: [nociceptive]
      when: The pain is attributable to joint damage such as erosions or deformity rather than to ongoing inflammation.
    - code: MG30.01
      title: Chronic widespread pain
      descriptors: [nociplastic]
      when: May be coded in addition when concomitant fibromyalgia (widespread pain not explained by joint inflammation) is present.
  condition:
    - code: FA20
      title: Rheumatoid arthritis
  note: ICD-11 asks for the causing condition (FA20) to be coded alongside the secondary musculoskeletal pain code. Persistent inflammation is the default category. ICD-11 gives no specific rule for pain that persists once inflammation is controlled; coding it as primary pain is a clinical judgement.
  refs: [who2026, perrot2019, treede2019]
descriptors:
  - type: nociceptive
    role: defining
    note: Synovial inflammation activates and sensitizes joint nociceptors, and pain severity tracks markers of inflammation; with disease progression, structural joint damage adds a further nociceptive source.
    refs: [walsh2014, georgopoulos2024]
  - type: nociplastic
    role: subset
    note: Pain often persists in patients in remission by the DAS28 definition, where it goes with fatigue, poor sleep and low self-efficacy rather than inflammation, and about one in five patients meets fibromyalgia criteria (pooled 21%). In active disease, quantitative sensory testing indices of central sensitization add little beyond inflammation, so the size of this contribution is debated.
    refs: [lee2011, duffield2018, georgopoulos2024]
  - type: neuropathic
    role: subset
    note: On the painDETECT screening questionnaire, 17% of outpatients with fairly well-controlled disease had likely and 21% possible neuropathic pain. Screening questionnaires cannot confirm a lesion of the nervous system.
    refs: [koop2015]
prevalence:
  value: 17.6 million people in 2020 (age-standardised 208.8 per 100 000)
  population: Global estimate, Global Burden of Disease Study 2021; about 2.5 times more common in women than in men
  refs: [black2023]
criteria:
  name: 2010 ACR/EULAR classification criteria
  summary: Confirmed synovitis in at least one joint, no alternative diagnosis that better explains it, and a score of at least 6 of 10 across four domains (number and site of involved joints, serology, acute-phase reactants and symptom duration). Designed to identify early disease at high risk of becoming persistent or erosive.
  refs: [aletaha2010]
mechanisms: [specialized-nociceptors, synaptic-plasticity, descending-modulation]
theories: [neuroimmune-theory, central-sensitization, nociplastic-pain, biopsychosocial-model]
related: [osteoarthritis, axial-spondyloarthritis, fibromyalgia]
references: [walsh2014, black2023, aletaha2010, lee2011, duffield2018, koop2015, georgopoulos2024, perrot2019]
review: draft
updated: 2026-11-27
---

## Overview

Rheumatoid arthritis is a chronic autoimmune inflammatory disease of the joints. About 17.6 million people had it in 2020, and it is more common in women than in men [@black2023]. People with rheumatoid arthritis identify pain as their most important symptom, and it often persists even when inflammatory disease is well controlled [@walsh2014].

## How it is classified

In ICD-11, pain caused by rheumatoid arthritis is chronic secondary musculoskeletal pain from persistent inflammation (MG30.30): a symptom of an underlying disease, coded together with the disease itself (FA20). Secondary musculoskeletal pain can also arise from structural change, which applies when joint damage rather than active inflammation accounts for the pain [@perrot2019; @treede2019]. The disease is classified with the 2010 ACR/EULAR criteria, which focus on early features that predict persistent or erosive disease [@aletaha2010].

## Mechanisms

Rheumatoid arthritis pain has several sources: inflammation, peripheral and central pain processing and, as the disease progresses, structural change in the joint [@walsh2014]. In people with active disease, markers of inflammation explained pain severity better than sensory testing indices of central sensitization, yet most of the variation in pain remained unexplained [@georgopoulos2024]. Among patients in remission by the DAS28 definition, clinically significant pain was linked with fatigue, sleep problems, disability and low self-efficacy rather than with inflammation or joint damage [@lee2011]. Concomitant fibromyalgia is common and inflates self-reported components of disease activity scores [@duffield2018], and a sizeable minority report neuropathic-like symptoms [@koop2015].

## Open questions

- How to tell, in an individual, whether persisting pain reflects residual inflammation, joint damage or altered central processing, and whether that should change treatment [@walsh2014].
- Whether nociplastic features in rheumatoid arthritis predate the disease or develop as a consequence of long-standing inflammatory pain.
