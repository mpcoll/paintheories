---
title: Central Sensitization Inventory
short: CSI
aliases: [CSI-25, CSI-7]
summary: A 25-item questionnaire on somatic and emotional symptoms that its developers associate with central sensitization and "central sensitivity syndromes" such as fibromyalgia. It measures self-reported symptom burden; whether it reflects central sensitization of nociceptive neurons is debated.
category: self-report
constructs: [symptoms, emotional]
populations: [adults]
format:
  items: 25
  time: About 5 to 10 minutes
  scale: "Part A: 25 symptom items, each 0 (never) to 4 (always), total 0 to 100. Part B (not scored): previous diagnoses of specific disorders"
properties:
  - kind: reliability
    value: Test-retest reliability 0.817; Cronbach's alpha 0.879.
    population: Normative (non-patient) sample
    refs: [mayer2011]
  - kind: validity
    value: Factor analysis gave four factors, all related to somatic and emotional symptoms, explaining 53.4% of the variance. Scores were highest in fibromyalgia and lowest in normative controls, with chronic widespread pain without fibromyalgia and work-related chronic low back pain in between.
    population: Fibromyalgia, chronic widespread pain, work-related chronic low back pain and normative groups
    refs: [mayer2011]
  - kind: cutoff
    value: A score of 40 of 100 best distinguished patients with central sensitivity syndromes from non-patients (area under the curve 0.86, sensitivity 81%, specificity 75%).
    population: 121 patients at a multidisciplinary pain centre (74% met criteria for at least one central sensitivity syndrome) and 129 non-patients
    refs: [neblett2013]
  - kind: validity
    value: Systematic review and meta-analysis of 66 studies (13,284 participants). The CSI correlated strongly with depression, anxiety, stress, pain catastrophizing, sleep and kinesiophobia, and weakly or not at all with pain thresholds, temporal summation and conditioned pain modulation.
    population: Clinical and non-clinical samples
    refs: [adams2022]
  - kind: validity
    value: Meta-analysis of 33 studies (3314 participants) by the developers' group. CSI scores correlated significantly with conditioned pain modulation, temporal summation and pressure, heat and cold pain thresholds; associations were strongest with pressure pain threshold, where 51% of effect sizes were medium to large.
    population: Clinical and non-clinical samples
    refs: [neblett2024]
availability:
  status: unclear
  note: The developers' clinic page (FRIUS, formerly PRIDE) offers the CSI, translations and a severity calculator for download but does not state terms of use; terms not confirmed.
  url: https://frius.com/questionnaires/
theories: [central-sensitization, nociplastic-pain]
conditions: [fibromyalgia, chronic-low-back-pain]
related: [quantitative-sensory-testing, temporal-summation, conditioned-pain-modulation, pressure-pain-threshold, pain-catastrophizing-scale]
references: [mayer2011, neblett2013, adams2022, neblett2024]
review: draft
updated: 2026-11-27
---

## Overview

Mayer and colleagues developed the CSI to quantify symptoms common to a group of conditions they called central sensitivity syndromes, for which central sensitization had been proposed as a shared mechanism [@mayer2011]. A score of 40 was later proposed to flag these syndromes in a pain clinic population [@neblett2013].

## Strengths and limits

The CSI is short, reliable and separates groups with many co-occurring symptoms from those with few [@mayer2011; @neblett2013]. Its name invites a stronger reading than the evidence allows. Central sensitization refers to increased responsiveness of nociceptive neurons in the central nervous system, and an independent meta-analysis found that CSI scores track depression, anxiety, stress, catastrophizing and sleep much more closely than experimental measures of nociceptive sensitivity [@adams2022]. A meta-analysis from the developers' group did find statistically significant correlations with all five quantitative sensory testing measures it pooled, strongest for pressure pain thresholds [@neblett2024]. A high score is therefore best read as a high burden of symptoms associated with central sensitization, not as evidence that central sensitization is present.
