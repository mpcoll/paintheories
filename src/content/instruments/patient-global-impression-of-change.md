---
title: Patient Global Impression of Change
short: PGIC
aliases: [PGIC scale, Patient Global Impression of Change scale]
summary: A single question in which participants rate their overall change since starting treatment on a 7-point scale from "very much improved" through "no change" to "very much worse". IMMPACT's core measure of global improvement in chronic pain trials, and a common anchor for judging what change on other measures is clinically important.
category: self-report
constructs: [global]
populations: [adults]
format:
  items: 1
  time: Under a minute
  scale: 7 points; very much improved, much improved, minimally improved, no change, minimally worse, much worse, very much worse
properties:
  - kind: responsiveness
    value: IMMPACT review. The PGIC has been widely used in chronic pain trials and provides "a responsive and readily interpretable measure" of participants' assessments of the clinical importance of their improvement or worsening.
    population: Chronic pain clinical trials (literature review for IMMPACT)
    refs: [dworkin2005]
  - kind: validity
    value: Such global measures "appear to have validity", but further research is needed on how far PGIC ratings reflect reduced pain, better functioning, side-effect burden or other variables.
    population: Chronic pain clinical trials (literature review for IMMPACT)
    refs: [dworkin2005]
  - kind: mic
    value: Provisional anchor-based benchmarks for interpreting ratings. "Minimally improved" is minimally important, "much improved" moderately important and "very much improved" a substantial improvement.
    population: Chronic pain clinical trials
    refs: [dworkin2008]
immpact:
  domain: global
  note: IMMPACT recommends the PGIC as the core outcome measure of participants' global improvement with treatment in chronic pain trials.
  refs: [dworkin2005, dworkin2008]
availability:
  status: unclear
  note: Terms not confirmed. IMMPACT attributes the scale to Guy's 1976 ECDEU assessment manual, a US government publication; no developer or licence-holder page was found, and Mapi Research Trust's ePROVIDE catalogue was offline for maintenance when checked (27 November 2026).
related: [numeric-rating-scale, brief-pain-inventory]
references: [dworkin2005, dworkin2008, farrar2001]
review: draft
updated: 2026-11-27
---

## Overview

The PGIC asks participants at the end of a treatment period how their condition has changed overall. IMMPACT recommends it as the core measure of global improvement in chronic pain trials and attributes it to Guy's 1976 assessment manual [@dworkin2005]. Because it reflects what participants themselves consider an important change, it is widely used as an anchor: Farrar and colleagues compared changes on the 0 to 10 pain NRS with PGIC ratings in 2724 participants and took "much improved" or "very much improved" as a clinically important difference, which corresponded to a reduction of about 2 points or about 30% [@farrar2001].

## Strengths and limits

The PGIC is quick, responsive and easy to interpret [@dworkin2005]. Its weakness is that one rating mixes many things: it is not clear how far it reflects pain relief, better functioning or side effects [@dworkin2005], and how much a minimal improvement matters to someone also depends on factors such as convenience, cost and side effects. IMMPACT therefore recommends reporting the percentage of participants in each of the seven categories for each treatment group, and not combining "minimally improved" with the other improvement ratings or with "no change" [@dworkin2008].
