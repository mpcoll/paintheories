---
title: Endometriosis
aliases: [Endometriosis-associated pain, Endometriosis-associated pelvic pain]
summary: A chronic inflammatory gynaecological disease in which endometrium-like tissue grows outside the uterus, causing painful periods, pain during sex and chronic pelvic pain. It affects roughly 5 to 10% of women of reproductive age. Pain correlates poorly with the extent of disease, and central pain mechanisms contribute in a subset.
family: visceral
regions: [pelvis, abdomen]
icd:
  pain:
    - code: MG30.42
      title: Chronic visceral pain from persistent inflammation
      descriptors: [nociceptive]
      when: The pain is attributed to endometriotic lesions and the inflammation they cause.
    - code: MG30.00
      title: Chronic primary visceral pain
      descriptors: [nociplastic]
      when: Chronic pelvic pain that the lesions do not better account for, for example pain that persists after they have been removed.
  condition:
    - code: GA10
      title: Endometriosis
  note: ICD-11 does not name endometriosis under any chronic secondary visceral pain subcode, so MG30.42 is our reading, based on endometriosis being an inflammatory disease and on the three causes of chronic secondary visceral pain (persistent inflammation, vascular mechanisms, mechanical factors). Pain from adhesions, or from narrowing of the bowel or ureter, might instead fit MG30.40 (mechanical factors). ICD-11 lists "chronic pelvic pain in females" under MG30.00.
  refs: [who2026, aziz2019, nicholas2019]
descriptors:
  - type: nociceptive
    role: common
    note: Lesions, peritoneal inflammation and new nerve fibre growth around lesions are thought to drive pain, although pain correlates poorly with the burden of disease.
    refs: [coxon2018, zondervan2018]
  - type: nociplastic
    role: subset
    note: In a tertiary-centre registry, more co-existing central sensitivity syndromes went with worse pelvic pain, and a high Central Sensitization Inventory score identified patients with more daily pain and more pain unresponsive to hormonal treatment.
    refs: [orr2021, coxon2018]
prevalence:
  value: About 5–10% of women of reproductive age (about 176 million women)
  population: Worldwide estimate for women of reproductive age, Nature Reviews Disease Primers
  refs: [zondervan2018]
  chart: { basis: population, low: 5, high: 10, group: "women", note: "women of reproductive age" }
mechanisms: [neuroinflammation, specialized-nociceptors, synaptic-plasticity, stress-response]
theories: [neuroimmune-theory, central-sensitization, nociplastic-pain, biopsychosocial-model]
related: [bladder-pain-syndrome, irritable-bowel-syndrome, vulvodynia]
references: [zondervan2018, horne2022, coxon2018, vercellini2006, orr2021, aziz2019]
review: draft
updated: 2026-11-27
---

## Overview

Endometriosis is a common inflammatory disease in which tissue resembling endometrium grows outside the uterus, mainly on pelvic organs. It is associated with pelvic pain and infertility, and a firm diagnosis still requires surgical visualisation with histology, although ovarian cysts and deep nodules can be seen on ultrasound and MRI [@zondervan2018]. Diagnosis is often delayed for years, symptoms often persist or recur despite treatment, and patients are at higher risk of fatigue and pain at other body sites [@horne2022].

## How it is classified

Endometriosis pain is usually regarded as chronic secondary visceral pain, coded together with the disease (GA10). The IASP Task Force notes that in secondary visceral pain the pain intensity is not necessarily matched to the disease process and may persist after the underlying cause has been treated [@aziz2019]. Pain that is not better accounted for by lesions can be classed as chronic primary visceral pain [@nicholas2019]. ICD-11 does not specify which secondary subcode applies.

## Mechanisms

In more than 1000 surgical patients, the association between disease stage and pain severity was marginal and inconsistent [@vercellini2006]. Proposed pelvic mechanisms include new nerve fibre growth, factors in peritoneal fluid and inflammation; central mechanisms include changes in pain processing, the stress axis and psychological factors, which may be a cause or a consequence of the pain and may explain links with other bodily symptoms [@coxon2018]. A questionnaire measure of central sensitization identified patients whose pain responded less to hormonal treatment [@orr2021].

## Open questions

- Why lesion extent predicts pain so poorly, and which lesion features, if any, drive it [@vercellini2006; @coxon2018].
- Whether measuring central contributions can guide the choice between surgery, hormonal treatment and pain-focused treatment; current evidence is exploratory [@orr2021].
