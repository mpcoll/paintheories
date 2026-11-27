---
title: Sickle cell disease pain
aliases: [Chronic sickle cell disease pain, Sickle cell pain, Vaso-occlusive pain]
summary: Sickle cell disease causes recurrent acute vaso-occlusive pain and, from adolescence on, chronic pain in many patients; adults record pain on more than half of all days. Chronic pain can come from bone and joint damage but often has no clear anatomical source, and central sensitization and neuropathic features occur in a subset.
family: widespread
regions: [back, chest, abdomen, upper-limb, lower-limb]
icd:
  pain:
    - code: MG30.31
      title: Chronic secondary musculoskeletal pain associated with structural changes
      descriptors: [nociceptive]
      when: The pain is attributable to bone or joint damage from the disease, such as avascular necrosis of the femoral or humeral head.
    - code: MG30.01
      title: Chronic widespread pain
      descriptors: [nociplastic, neuropathic]
      when: Widespread chronic pain without an identifiable tissue source. Whether a primary pain code may be used alongside sickle cell disease is a judgement call that ICD-11 does not address.
  condition:
    - code: 3A51.1
      title: Sickle cell disease without crisis
    - code: 3A51.2
      title: Sickle cell disease with crisis
  note: ICD-11 gives no clean mapping. Acute vaso-occlusive crises are coded with the disease (3A51.2), not as chronic pain, and no MG30 category mentions sickle cell disease. Secondary categories need a highly probable mechanism, which fits bone damage (MG30.31) but not the pain without an obvious source that most patients with chronic pain have. MG30.41 (vascular mechanisms, which ICD-11 extends to vascular conditions causing pain elsewhere) could be argued for vaso-occlusion but is not named for it. Compound heterozygous forms such as HbSC disease have their own codes (3A51.3, 3A51.4).
  refs: [who2026, perrot2019, aziz2019, nicholas2019, brandow2017]
descriptors:
  - type: nociceptive
    role: common
    note: Microvascular occlusion causes ischaemia-reperfusion injury, inflammation, oxidative stress and endothelial dysfunction; bone infarcts, avascular necrosis and leg ulcers are tissue sources of chronic pain.
    refs: [tran2017, brandow2017]
  - type: neuropathic
    role: subset
    note: On the painDETECT screening questionnaire, 37% of 56 young patients had evidence of neuropathic pain, rising with age; about 30% of adults screen positive on neuropathic pain questionnaires.
    refs: [brandow2013, brandow2017]
  - type: nociplastic
    role: subset
    note: Most patients with chronic pain have no obvious anatomical source. Adults with a high central sensitization profile on quantitative sensory testing had more clinical pain, more crises, more catastrophizing and poorer sleep over 18 months.
    refs: [campbell2016, brandow2017]
prevalence:
  value: Pain on 54.5% of days; 29.3% of patients had pain on more than 95% of days
  population: Adults (16 years and over) with sickle cell disease keeping daily pain diaries for up to 6 months, Virginia, USA (232 patients)
  refs: [smith2008]
criteria:
  name: AAPT diagnostic criteria for chronic sickle cell disease pain (2017)
  summary: A single condition, chronic sickle cell disease pain, defined in people with confirmed sickle cell disease by ongoing pain on most days over the past 6 months in one or more locations, with three modifiers that record clinical features such as whether disease complications (for example avascular necrosis or leg ulcers) contribute.
  refs: [dampier2017]
mechanisms: [neuroinflammation, specialized-nociceptors, synaptic-plasticity, pain-catastrophizing]
theories: [neuroimmune-theory, central-sensitization, nociplastic-pain, biopsychosocial-model]
related: [fibromyalgia]
references: [kato2018, thomson2023, smith2008, dampier2017, brandow2017, brandow2013, campbell2016, tran2017]
review: draft
updated: 2026-11-27
---

## Overview

Sickle cell disease is a group of inherited disorders caused by mutations in the haemoglobin beta gene. Sickle haemoglobin polymerizes, and the deformed red cells cause haemolysis, blockage of small vessels and immune activation; acute pain events are among the commonest complications [@kato2018]. An estimated 7.74 million people were living with the disease in 2021 [@thomson2023]. In a daily diary study, adults reported pain on more than half of all days, mostly managed at home, so that health care use underestimates it [@smith2008].

## How it is classified

The AAPT taxonomy defines a single condition, chronic sickle cell disease pain, with modifiers for its clinical features [@dampier2017]. ICD-11 has no specific place for it: pain from bone damage such as avascular necrosis fits chronic secondary musculoskeletal pain, but most patients with chronic pain have no obvious anatomical source [@brandow2017], and whether chronic primary pain codes should be used alongside the disease is not addressed. We place it in the widespread pain family because chronic pain in sickle cell disease is often multi-site [@brandow2017].

## Mechanisms

Vaso-occlusion produces ischaemia-reperfusion injury, inflammation, oxidative stress and endothelial dysfunction that sustain a painful tissue environment [@tran2017]. Chronic pain becomes more common with age and is thought to involve peripheral and central sensitization built up by repeated acute episodes; sickle cell mice show sensitized spinal dorsal horn neurons [@brandow2017]. Neuropathic features are common on screening [@brandow2013], and patients with a central sensitization profile on sensory testing have more pain and more crises [@campbell2016].

## Open questions

- How repeated acute vaso-occlusive pain turns into chronic pain, and whether preventing crises prevents this transition [@brandow2017].
- How chronic sickle cell pain should be placed in ICD-11, whose categories fit well only for patients with a clear tissue source.
