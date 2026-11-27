---
title: Pain after spinal cord injury
aliases: [Spinal cord injury pain, SCI pain, Central neuropathic pain after spinal cord injury, At-level and below-level pain]
summary: Chronic pain after damage to the spinal cord, from trauma or disease. Musculoskeletal pain is the most common type, but about half of people develop neuropathic pain at or below the level of the injury, which is often severe and hard to treat.
family: nerve
regions: [back, lower-limb, pelvis, upper-limb]
icd:
  pain:
    - code: MG30.50
      title: Chronic central neuropathic pain
      descriptors: [neuropathic]
      when: Neuropathic pain at or below the level of the cord lesion, in areas with sensory disturbance.
    - code: MG30.32
      title: Chronic secondary musculoskeletal pain due to disease of the nervous system
      descriptors: [nociceptive]
      when: Pain in muscles, bones or joints caused by altered motor or biomechanical function after the injury, such as spasticity.
  note: ICD-11 lists "Chronic central neuropathic pain associated with spinal cord injury" as coded elsewhere under chronic post traumatic pain (MG30.20); in other words it is conceptually a posttraumatic pain, but it carries the neuropathic code MG30.50 and so also covers non-traumatic cord disease. Code also the cause; injury codes are level-specific (for example NA3Z Injury of cervical spinal cord, unspecified).
  refs: [who2026, scholz2019, schug2019]
descriptors:
  - type: neuropathic
    role: common
    note: Pooled point prevalence of neuropathic pain after spinal cord injury is about 53%, more often below than at the level of the lesion.
    refs: [burke2016, scholz2019]
  - type: nociceptive
    role: common
    note: Musculoskeletal pain was the most common pain type 5 years after traumatic injury (59%); visceral pain affected about 5%.
    refs: [siddall2003]
prevalence:
  value: Neuropathic pain in 53% (95% CI 39–67%); at-level 19%, below-level 27%
  population: People with spinal cord injury, meta-analysis of 17 studies (2529 patients)
  refs: [burke2016]
  chart: { basis: group, pct: 53, low: 39, high: 67, group: "people with spinal cord injury", note: "neuropathic pain" }
criteria:
  name: International Spinal Cord Injury Pain (ISCIP) Classification
  summary: A consensus classification that first sorts pain after spinal cord injury into nociceptive, neuropathic, other or unknown, then into subtypes such as musculoskeletal, visceral, at-level and below-level neuropathic pain, and finally records the presumed source. It includes pains common after injury that are not directly caused by it.
  refs: [bryce2011]
mechanisms: [synaptic-plasticity]
theories: [neuromatrix-theory]
related: [central-post-stroke-pain, multiple-sclerosis-pain, phantom-limb-pain]
references: [siddall2003, burke2016, bryce2011, scholz2019, wasner2008, finnerup2007]
review: draft
updated: 2026-11-27
---

## Overview

Chronic pain is common after spinal cord injury. In a cohort followed for 5 years after traumatic injury, 81% reported pain: musculoskeletal pain in 59%, at-level neuropathic pain in 41%, below-level neuropathic pain in 34% and visceral pain in 5%; neuropathic pain present early tended to persist [@siddall2003]. A meta-analysis estimated the point prevalence of neuropathic pain at 53% [@burke2016].

## How it is classified

The International Spinal Cord Injury Pain classification separates nociceptive pains (musculoskeletal, visceral) from neuropathic pains, which are labelled at-level or below-level according to where they are felt relative to the injury [@bryce2011]. In ICD-11, the neuropathic pain is chronic central neuropathic pain (MG30.50); the IASP Task Force requires pain in dermatomes at or below the level of injury with sensory disturbance there, and cross-lists it under posttraumatic pain [@scholz2019; @who2026].

## Mechanisms

Below-level pain is felt in areas with disturbed sensation below the lesion [@scholz2019]. Patients with and without such pain had similar loss of sensation below the injury, but those with pain more often had hypersensitivity at the lesion level, pointing to neuronal hyperexcitability around the injury [@finnerup2007]. Another study found that heat with topical capsaicin (or, in one case, cold) applied below a clinically complete injury rekindled sensations resembling their usual pain in 8 of 12 patients with central pain, but evoked nothing in pain-free patients, suggesting that surviving spinothalamic fibres carry the abnormal activity [@wasner2008].

## Open questions

- Whether residual spinothalamic function, loss of it, or hyperexcitability at the lesion level best predicts who develops below-level pain is still disputed [@finnerup2007; @wasner2008].
- How cognitive, emotional and social factors interact with the lesion to shape chronic pain after spinal cord injury is poorly understood.
