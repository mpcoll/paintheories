---
title: Axial spondyloarthritis
aliases: [axSpA, Ankylosing spondylitis, Radiographic axial spondyloarthritis, Non-radiographic axial spondyloarthritis]
summary: A chronic inflammatory disease of the spine and sacroiliac joints that usually begins in early adulthood and presents as chronic back pain. Ankylosing spondylitis is its radiographic form. Inflammation drives most of the pain, but fibromyalgia and neuropathic-like features occur in a subset of patients.
family: joints
regions: [back]
icd:
  pain:
    - code: MG30.30
      title: Chronic secondary musculoskeletal pain from persistent inflammation
      when: The pain is attributable to active inflammation of the sacroiliac joints, spine or entheses, the usual case.
    - code: MG30.31
      title: Chronic secondary musculoskeletal pain associated with structural changes
      when: The pain is attributable to structural change, such as new bone formation or spinal fusion, rather than to active inflammation.
  condition:
    - code: FA92.0
      title: Axial spondyloarthritis
  note: FA92.0 includes ankylosing spondylitis and has subcodes for spinal enthesitis (FA92.00) and sacroiliitis (FA92.01). ICD-11 asks for the causing condition to be coded alongside the secondary musculoskeletal pain code. Unlike non-specific chronic back pain, which is usually chronic primary pain, inflammatory back pain from axial spondyloarthritis is secondary pain.
  refs: [who2026, perrot2019, treede2019]
descriptors:
  - type: nociceptive
    role: defining
    note: Inflammation of the sacroiliac joints, spine and entheses, in which tumour necrosis factor and interleukin-17 play a part; anti-inflammatory drugs and TNF blockers are effective treatments.
    refs: [sieper2017]
  - type: nociplastic
    role: subset
    note: In a meta-analysis, the pooled prevalence of concomitant fibromyalgia in ankylosing spondylitis was 13%, and it was associated with higher self-reported disease activity (BASDAI) scores.
    refs: [duffield2018]
  - type: neuropathic
    role: subset
    note: In a small study, 11 of 17 patients with ankylosing spondylitis back pain had painDETECT scores above 12, together with grey matter changes in somatosensory, insular and cingulate cortex; the authors describe the back pain as a mixed pain condition. Screening scores do not establish a nerve lesion.
    refs: [wu2013]
prevalence:
  value: About 0.24% in Europe and 0.32% in North America
  population: Mean prevalence of ankylosing spondylitis (the radiographic form only) by continent, systematic review of 36 studies
  refs: [dean2013]
  chart: { basis: population, low: 0.24, high: 0.32, note: "ankylosing spondylitis only; Europe and North America" }
criteria:
  name: ASAS classification criteria for axial spondyloarthritis (2009)
  summary: In people with back pain for at least 3 months that began before age 45, either sacroiliitis on radiographs or MRI plus at least one spondyloarthritis feature (imaging arm), or HLA-B27 plus at least two features (clinical arm). Sensitivity was about 83% and specificity about 84% in the validation cohort.
  refs: [rudwaleit2009]
mechanisms: [specialized-nociceptors, synaptic-plasticity, cortical-reorganisation]
theories: [neuroimmune-theory, central-sensitization, nociplastic-pain, biopsychosocial-model]
related: [chronic-low-back-pain, rheumatoid-arthritis, fibromyalgia, inflammatory-bowel-disease]
references: [sieper2017, rudwaleit2009, dean2013, duffield2018, wu2013, perrot2019]
review: draft
updated: 2026-11-27
---

## Overview

Axial spondyloarthritis covers both non-radiographic disease and radiographic disease, also called ankylosing spondylitis. It usually starts in the third decade of life, is about twice as common in men as in women in its radiographic form (and equally common in its non-radiographic form), and is strongly associated with HLA-B27 [@sieper2017]. Chronic back pain that began before age 45 is the usual starting point for classification [@rudwaleit2009].

## How it is classified

ICD-11 codes the pain as chronic secondary musculoskeletal pain from persistent inflammation (MG30.30), with axial spondyloarthritis (FA92.0) as the causing condition [@perrot2019]. This separates it from non-specific chronic back pain. The ASAS criteria allow classification before damage is visible on radiographs: in the validation cohort, 70% of those diagnosed with axial spondyloarthritis did not meet the older radiographic criteria [@rudwaleit2009].

## Mechanisms

Inflammation is the main driver of pain. Tumour necrosis factor and interleukin-17 appear to have important roles, and how inflammation relates to new bone formation is still unclear [@sieper2017]. Not all pain is inflammatory: concomitant fibromyalgia affects a minority of patients and raises self-reported disease activity [@duffield2018], and a small imaging study found neuropathic-like symptoms with grey matter changes in pain-related cortex [@wu2013].

## Open questions

- How inflammation and new bone formation each contribute to pain over the decades of the disease [@sieper2017].
- Whether neuropathic-like and nociplastic features are a cause or a consequence of long-standing inflammatory pain, and whether they predict a poorer response to anti-inflammatory treatment.
