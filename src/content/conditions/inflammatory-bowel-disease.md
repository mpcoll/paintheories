---
title: Inflammatory bowel disease
aliases: [IBD, Crohn disease, Crohn's disease, Ulcerative colitis]
summary: Crohn disease and ulcerative colitis are chronic relapsing inflammatory diseases of the gut. Abdominal pain is common during flares, but about a quarter to a third of patients keep having pain with IBS-type symptoms even when their inflammation is in remission.
family: visceral
regions: [abdomen]
icd:
  pain:
    - code: MG30.42
      title: Chronic visceral pain from persistent inflammation
      descriptors: [nociceptive]
      when: The pain is attributable to active intestinal inflammation.
    - code: MG30.40
      title: Chronic visceral pain from mechanical factors
      descriptors: [nociceptive]
      when: The pain is attributable to a stricture causing obstruction, with dilation of the bowel above it.
    - code: MG30.00
      title: Chronic primary visceral pain
      descriptors: [nociplastic]
      when: Pain persists in remission with IBS-type symptoms and is not better accounted for by inflammation or strictures.
  condition:
    - code: DD70
      title: Crohn disease
    - code: DD71
      title: Ulcerative colitis
  note: ICD-11's definitions of chronic secondary visceral pain explicitly cover long-lasting inflammation of internal organs (MG30.42) and stenosis of hollow organs (MG30.40). Using the primary visceral pain code for pain in remission is our reading of the rule that primary pain applies unless another diagnosis better accounts for the symptoms; irritable bowel syndrome (DD91.0) is listed under MG30.00.
  refs: [who2026, aziz2019, nicholas2019]
descriptors:
  - type: nociceptive
    role: common
    note: During flares pain arises from intestinal inflammation and from partial obstruction and distension, and it typically improves as disease activity falls.
    refs: [bielefeldt2009]
  - type: nociplastic
    role: subset
    note: In a meta-analysis, 32.5% of patients in remission had IBS-type symptoms (about 24% when remission was confirmed endoscopically), more often in Crohn disease and together with anxiety and depression. Sensory pathways sensitized during inflammation may stay sensitized afterwards.
    refs: [fairbrass2020, bielefeldt2009]
prevalence:
  value: 6.8 million people in 2017 (age-standardised 84.3 per 100 000)
  population: Global estimate, Global Burden of Disease Study 2017; highest rates in high-income North America
  refs: [alatab2020]
mechanisms: [neuroinflammation, synaptic-plasticity, descending-modulation, interoception]
theories: [neuroimmune-theory, central-sensitization, biopsychosocial-model]
related: [irritable-bowel-syndrome, chronic-pancreatitis, axial-spondyloarthritis]
references: [alatab2020, zeitz2016, bielefeldt2009, fairbrass2020, aziz2019]
review: draft
updated: 2026-11-27
---

## Overview

About 6.8 million people had inflammatory bowel disease in 2017, with the highest rates in high-income countries [@alatab2020]. Pain is very common: in a Swiss cohort of more than 2000 patients, 71% had experienced pain during the course of their disease, mostly abdominal but often also back pain, and pain was frequently undertreated [@zeitz2016].

## How it is classified

Pain from active inflammation is chronic secondary visceral pain from persistent inflammation (MG30.42), coded together with Crohn disease (DD70) or ulcerative colitis (DD71); pain from strictures fits the mechanical subcode. The IASP Task Force notes that secondary visceral pain may persist after the underlying cause has been treated [@aziz2019]. When pain continues in remission with IBS-type symptoms, a chronic primary visceral pain code may describe it better [@nicholas2019].

## Mechanisms

Pain during flares comes from inflammation, partial blockage and distension of the gut. A significant percentage of patients keep having pain despite apparent remission, probably because sensory pathways become sensitized during inflammation, with persistent changes in afferent neurons and central pain processing; arousal, emotion and cognition modulate this pain [@bielefeldt2009]. IBS-type symptoms in remission are common and go with higher anxiety and depression scores [@fairbrass2020].

## Open questions

- Whether pain in remission reflects low-grade inflammation that standard measures miss, lasting sensitization or co-existing irritable bowel syndrome; its prevalence falls, but does not vanish, when remission is confirmed endoscopically or histologically [@fairbrass2020].
- How to treat such pain effectively without relying on opioids, given how often it is undertreated [@zeitz2016].
