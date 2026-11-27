---
title: Medication-overuse headache
aliases: [MOH, Medication overuse headache, Analgesic rebound headache]
summary: Headache on 15 or more days a month in a person with a pre-existing headache disorder, usually migraine or tension-type headache, who regularly overuses acute headache medication. A secondary headache that is both preventable and treatable, mainly by reducing or withdrawing the overused drugs.
family: headache
regions: [head]
icd:
  pain:
    - code: MG30.03
      title: Chronic primary headache or orofacial pain
      when: For the underlying headache disorder, which is diagnosed alongside medication-overuse headache; chronic migraine and chronic tension-type headache are listed under this category as "Coded Elsewhere" (8A80.2, 8A81.2).
    - code: MG30.6Y
      title: Other specified chronic secondary headache or orofacial pain
      when: Only if a chronic pain code is wanted for the medication-overuse headache itself. This is our reading, not a WHO instruction; ICD-11 has no MG30 code that names medication-overuse headache.
  condition:
    - code: 8A84.Y
      title: Other specified secondary headache
  note: In ICD-11, medication-overuse headache is coded 8A84.Y (other specified secondary headache). MG30.67, chronic headache associated with a substance or its withdrawal, explicitly excludes it and points to 8A84.Y, so MG30.67 should not be used. ICHD-3 asks for both the pre-existing headache and medication-overuse headache to be diagnosed, which is why the chronic primary headache code usually carries the chronic pain classification.
  refs: [who2026, ihs2018, nicholas2019, benoliel2019]
descriptors:
  - type: nociplastic
    role: common
    note: There is no tissue damage or nerve lesion to explain the pain. Proposed mechanisms, altered descending pain modulation and central sensitization together with biobehavioural factors, are those associated with nociplastic pain; the nociplastic label is our inference and is rarely applied to this condition explicitly.
    refs: [ashina2023, fitzcharles2021]
prevalence:
  value: 1% to 2% (1-year prevalence)
  population: General population; more common in women and in people with depression, anxiety or other chronic pain conditions
  refs: [diener2019]
  chart: { basis: population, low: 1, high: 2, note: "1-year prevalence" }
criteria:
  name: ICHD-3 (8.2 Medication-overuse headache)
  summary: Headache on 15 or more days a month in a person with a pre-existing headache disorder, with regular overuse for more than 3 months of one or more drugs taken for acute treatment of headache (on 10 or more days a month for triptans, ergots, opioids or combination analgesics; 15 or more days a month for simple analgesics), not better accounted for by another diagnosis.
  refs: [ihs2018]
mechanisms: [descending-modulation, synaptic-plasticity]
theories: [central-sensitization, endogenous-modulation-model]
related: [migraine, tension-type-headache]
references: [ashina2023, diener2019, ihs2018, fitzcharles2021, nicholas2019]
review: draft
updated: 2026-11-27
---

## Overview

Medication-overuse headache is a secondary headache caused by overuse of acute headache medication in someone who already has a headache disorder, usually migraine or tension-type headache [@ashina2023]. Regular or frequent use of analgesics and acute antimigraine drugs can increase headache frequency and drive the transition from episodic to chronic headache [@diener2019]. Its 1-year prevalence in the general population is between 1% and 2%, and it is more common in women and in people with depression, anxiety and other chronic pain conditions [@diener2019]. It is often under-recognised, although it is both preventable and treatable [@ashina2023].

## How it is classified

ICHD-3 defines medication-overuse headache by headache on 15 or more days a month together with regular overuse of acute medication for more than 3 months, and the pre-existing headache is diagnosed as well [@ihs2018]. ICD-11 codes it as an other specified secondary headache (8A84.Y) and explicitly keeps it out of MG30.67, the chronic pain code for headache caused by other substances or their withdrawal [@who2026]. In the chronic pain chapter, the underlying chronic migraine or chronic tension-type headache belongs to chronic primary headache or orofacial pain [@who2026; @nicholas2019].

## Mechanisms

Proposed mechanisms include altered descending pain modulation, central sensitization and biobehavioural factors [@ashina2023]. Treatment combines education to reduce intake of acute medication, withdrawal of the overused drug in some patients, and preventive therapy; appropriate treatment is usually highly effective [@diener2019; @ashina2023].

## Open questions

- How far frequent medication use causes chronic headache, rather than marking people whose headaches were already becoming more frequent, is debated.
- The best treatment approach, including whether abrupt withdrawal is needed, still requires validation in controlled trials [@diener2019].
