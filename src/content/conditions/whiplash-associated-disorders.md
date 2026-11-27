---
title: Whiplash-associated disorders
aliases: [WAD, Chronic whiplash, Whiplash injury, Chronic whiplash injury associated pain]
summary: Neck pain and related symptoms after an acceleration–deceleration injury of the neck, usually in a car crash. About half of people still report neck pain a year later. Persistent cases often show widespread sensory hypersensitivity soon after the injury, alongside local sources such as the cervical facet joints.
family: injury
regions: [neck]
icd:
  pain:
    - code: MG30.20
      title: Chronic post traumatic pain
      when: Pain persisting at least 3 months after the injury, the usual case (ICD-11 index term "chronic whiplash injury associated pain").
    - code: MG30.51
      title: Chronic peripheral neuropathic pain
      descriptors: [neuropathic]
      when: The pain follows injury to a cervical nerve root (neurological signs, Quebec Task Force grade III).
    - code: MG30.02
      title: Chronic primary musculoskeletal pain
      descriptors: [nociceptive, nociplastic]
      when: The link between the pain and the injury is uncertain; ICD-11 advises considering chronic primary pain when the posttraumatic aetiology is vague.
  condition:
    - code: NA23.4
      title: Strain or sprain of cervical spine
  note: NA23.4 includes whiplash injury. Its subcodes NA23.40 to NA23.42 grade acute whiplash by neck complaint alone, with musculoskeletal signs or with neurological signs, mirroring Quebec Task Force grades I to III, and each excludes chronic whiplash injury associated pain (MG30.20).
  refs: [who2026, schug2019, spitzer1995]
descriptors:
  - type: nociceptive
    role: common
    note: In 50 consecutive referred patients with chronic neck pain after whiplash, double-blind controlled nerve blocks identified the cervical facet joints as the pain source in 54%.
    refs: [barnsley1995]
  - type: nociplastic
    role: common
    note: People with persistent moderate or severe symptoms show generalised sensory hypersensitivity within a month of injury. In chronic whiplash, pain thresholds were lowered at the neck and the leg, and anaesthetising tender neck muscles did not change this, indicating central hypersensitivity independent of local input.
    refs: [sterling2003, curatolo2001, malfliet2015]
  - type: neuropathic
    role: subset
    note: 34% of 85 people with acute whiplash had a predominantly neuropathic pain component on a screening questionnaire (S-LANSS), associated with higher pain and disability and with cold hyperalgesia.
    refs: [sterling2009]
prevalence:
  value: About 50% still report neck pain 1 year after injury
  population: People with whiplash-associated disorders grades I to III; best-evidence synthesis of 47 studies by the Bone and Joint Decade Neck Pain Task Force
  refs: [carroll2008]
criteria:
  name: Quebec Task Force classification (1995)
  summary: Grades whiplash-associated disorders by clinical findings. Grade 0, no neck complaint or signs; I, neck pain, stiffness or tenderness only; II, neck complaint with musculoskeletal signs; III, neck complaint with neurological signs; IV, neck complaint with fracture or dislocation.
  refs: [spitzer1995]
mechanisms: [synaptic-plasticity, pain-catastrophizing, fear-learning, avoidance-behaviour, body-representation]
theories: [central-sensitization, fear-avoidance-model, mutual-maintenance-model, sensorimotor-incongruence, biopsychosocial-model]
related: [chronic-neck-pain, post-traumatic-headache]
references: [spitzer1995, carroll2008, barnsley1995, sterling2003, curatolo2001, sterling2009, andersen2016, daenen2012, malfliet2015, schug2019]
review: draft
updated: 2026-11-27
---

## Overview

Whiplash-associated disorders follow an acceleration–deceleration injury of the neck, most often in a motor vehicle collision. About half of those affected still report neck pain a year later. Greater initial pain, more symptoms and greater initial disability predict slower recovery, as do psychological factors after the injury such as passive coping, depressed mood and fear of movement; features of the collision itself mostly do not [@carroll2008].

## How it is classified

Acute whiplash is graded with the Quebec Task Force system [@spitzer1995], which ICD-11 mirrors in its acute codes (NA23.40 to NA23.42). Pain that persists beyond healing, at least 3 months after the injury, is chronic post traumatic pain (MG30.20), part of the chronic postsurgical or posttraumatic pain category [@schug2019]. When the posttraumatic cause is uncertain, ICD-11 suggests considering chronic primary pain.

## Mechanisms

Persistent whiplash pain is mechanistically mixed. The cervical facet joints are the most common identifiable source in referred patients [@barnsley1995]. Generalised sensory hypersensitivity appears soon after injury in those who go on to have moderate or severe symptoms [@sterling2003] and is present in chronic whiplash independent of input from tender neck muscles [@curatolo2001]; central sensitization is consistently found in traumatic but not in most non-traumatic neck pain [@malfliet2015]. A neuropathic component is common in the acute stage [@sterling2009]. Psychological processes matter too: in a cohort followed for 6 months, pain catastrophizing and fear-avoidance beliefs mediated the effect of posttraumatic stress symptoms on pain [@andersen2016], and a coordination task with altered visual feedback provoked symptoms such as increased pain in all participants with chronic whiplash, in a different pattern from healthy controls [@daenen2012].

## Open questions

- Whether early generalised hypersensitivity causes poor recovery or marks a more severe injury or greater distress [@sterling2003].
- How much the compensation system contributes to persistence; the evidence is preliminary [@carroll2008].
