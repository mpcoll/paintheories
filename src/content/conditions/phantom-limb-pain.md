---
title: Phantom limb pain
aliases: [Phantom pain, Post-amputation pain, Phantom limb syndrome]
summary: Pain felt in a limb, or another body part, that has been amputated. Reported by about two thirds of people with an amputation. A classic test case for theories of pain, debated between cortical reorganization and ectopic activity in injured sensory neurons.
family: nerve
regions: [upper-limb, lower-limb]
icd:
  pain:
    - code: MG30.21
      title: Chronic postsurgical pain
      when: Pain persisting more than 3 months after a surgical amputation.
    - code: MG30.20
      title: Chronic post traumatic pain
      when: Pain persisting more than 3 months after traumatic loss of a limb.
    - code: MG30.51
      title: Chronic peripheral neuropathic pain
      when: The pain is classified by its mechanism as neuropathic pain after peripheral nerve injury, which ICD-11 lists as coded elsewhere under chronic post traumatic pain.
  condition:
    - code: 8E43.00
      title: Phantom limb syndrome
  note: The IASP Task Force places pain after amputation under chronic postsurgical or posttraumatic pain, and cross-lists chronic neuropathic pain after peripheral nerve injury in the same section. 8E43.00 records the phantom phenomenon itself (painful or not); its parent category 8E43 excludes chronic neuropathic pain (MG30.5), so persistent pain is coded under MG30. Which MG30 code takes priority is not settled in the ICD-11 text.
  refs: [who2026, scholz2019, schug2019]
descriptors:
  - type: neuropathic
    role: defining
    note: Amputation cuts peripheral nerves, and phantom pain is pain in a deafferented body part. Whether it is driven mainly by central changes or by ectopic activity in injured primary afferents is debated, but both accounts locate the cause in the somatosensory nervous system.
    refs: [flor2006, vaso2014, collins2018]
prevalence:
  value: About 64% (95% CI 60–68%)
  population: People with limb amputation; meta-analysis of studies published 1980–2019
  refs: [limakatso2020]
  chart: { basis: group, pct: 64, low: 60, high: 68, group: "people with an amputation"}
mechanisms: [cortical-reorganisation, body-representation]
theories: [maladaptive-cortical-plasticity, neuromatrix-theory, sensorimotor-incongruence]
related: [chronic-postsurgical-pain, complex-regional-pain-syndrome, spinal-cord-injury-pain]
references: [flor2006, limakatso2020, ephraim2005, makin2013, vaso2014, collins2018]
review: draft
updated: 2026-11-27
---

## Overview

Nearly everyone continues to feel a limb after it has been amputated, and many feel pain in it [@vaso2014]. A meta-analysis estimated that about six in ten people with an amputation report phantom limb pain; persistent pain before the operation, a more proximal or lower-limb amputation, stump pain and non-painful phantom sensations were risk factors [@limakatso2020]. In a US survey of 914 people with limb loss, phantom pain was the most often reported amputation-related pain (80%), alongside residual limb pain and back pain [@ephraim2005].

## How it is classified

ICD-11 has a neurological code for phantom limb syndrome (8E43.00), which covers phantom sensations whether or not they hurt [@who2026]. For chronic pain, the IASP Task Force lists pain after amputation under chronic postsurgical or posttraumatic pain, and cross-lists chronic neuropathic pain after peripheral nerve injury there, so the same pain can be approached by its cause or by its mechanism [@scholz2019; @schug2019].

## Mechanisms

The dominant account links phantom pain to maladaptive plasticity in the central nervous system, especially reorganization of the somatosensory cortex after loss of input [@flor1995; @flor2006]. Later imaging found the opposite pattern: more phantom pain went with better preserved structure and function in the former hand area, suggesting that the pain experience maintains the old representation [@makin2013]. A third line of evidence points to the periphery: blocking the dorsal root ganglia with local anaesthetic rapidly and reversibly abolished phantom pain and non-painful phantom sensations in a study of 31 amputees, consistent with ectopic activity in injured sensory neurons [@vaso2014]. Reviews treat the relative roles of central and peripheral mechanisms as unresolved [@collins2018].

## Open questions

- Whether cortical reorganization causes phantom pain, follows from it, or is largely absent remains contested between competing imaging findings [@flor2006; @makin2013; @schone2025].
- How peripheral ectopic input and central changes interact, and whether targeting the dorsal root ganglion is an effective treatment, needs controlled trials [@vaso2014].
