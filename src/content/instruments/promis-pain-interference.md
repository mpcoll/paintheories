---
title: PROMIS Pain Interference
short: PROMIS-PI
aliases: [PROMIS Pain Interference item bank, PROMIS-PI CAT, PROMIS Pain Interference short form]
summary: An item bank from the NIH Patient-Reported Outcomes Measurement Information System (PROMIS) on how much pain interferes with daily life. Calibrated with item response theory in large community and clinical samples, it is given as a computerized adaptive test or as fixed short forms and scored on a T-score metric.
category: self-report
constructs: [interference]
populations: [adults]
format:
  time: A few minutes; computerized adaptive test or short forms of 4, 6 or 8 items
  scale: 41-item calibrated bank; scores reported as T-scores (mean 50, SD 10 in the reference population), higher scores meaning more interference
properties:
  - kind: validity
    value: Items fitted the IRT model well (CFI and NNFI/TLI 0.974 to 0.997) and were strongly unidimensional (ratio of first to second eigenvalue 35). Scores discriminated among people with different numbers of chronic conditions, disabling conditions, levels of self-reported health and pain intensity (p < 0.0001).
    population: 14,848 participants from community and clinical samples
    refs: [amtmann2010]
  - kind: reliability
    value: Reliability equivalent to 0.96 to 0.99 for T-scores from 50 to 80.
    population: 14,848 participants from community and clinical samples
    refs: [amtmann2010]
  - kind: mic
    value: Minimally important difference estimates of 2 to 3 T-score points in the pain samples (3.5 to 4.5 in a non-pain stroke sample), using anchor-based (including the BPI and global ratings of change) and distribution-based methods; estimates were similar across the 4-, 6- and 8-item scales and the 6-item Pain Short Form.
    population: 759 patients in 3 randomized trials (chronic low back pain, n = 261; chronic back or hip/knee osteoarthritis pain, n = 240; history of stroke, n = 258)
    refs: [chen2017]
availability:
  status: free
  note: HealthMeasures states that "HealthMeasures are free, including for paper administration. Administering the measures in a digital platform, or using translated measures, may require permissions or fees."
  url: https://healthmeasures.net/implement/steps-to-license/
related: [brief-pain-inventory, oswestry-disability-index, roland-morris-disability-questionnaire]
references: [amtmann2010, chen2017]
review: draft
updated: 2026-11-27
---

## Overview

The PROMIS pain interference bank was built from an initial pool of 644 candidate items drawn from existing instruments, patient interviews and expert consultation. A 56-item candidate bank was tested in 14,848 people and calibrated with an item response theory model, giving a final bank of 41 items [@amtmann2010]. Computerized adaptive testing and short forms are available [@amtmann2010]; because all items sit on one calibrated scale, both report scores on the same T-score metric. Fixed-length forms of 4, 6 and 8 items are used in the PROMIS profile instruments [@chen2017].

## In research and practice

Reliability is very high for T-scores between 50 and 80 (equivalent to 0.96 to 0.99) [@amtmann2010]. In trials of chronic back and osteoarthritis pain, a difference of 2 to 3 T-score points was estimated as minimally important [@chen2017]. Nine items showed differential item functioning, but adjusting for it had little practical effect on scores [@amtmann2010].
