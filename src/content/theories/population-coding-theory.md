---
title: Population coding theory of somatic sensation
shortTitle: Population coding
aliases: [Labeled lines meet and talk, Combinatorial coding of pain and itch]
kind: theory
year: 2010
proponents: [Qiufu Ma, Steven Prescott, Yves De Koninck]
summary: Somatic sensations such as pain, itch, warmth and touch are coded by the combined activity of several afferent and spinal populations. These include modality-biased "labeled lines" that inhibit or excite one another, so the sensation evoked depends on which populations are co-active and how they interact, not on any single line.
domain: neurobiological
levels: [cellular, circuit]
questions: [transmission, nature]
painTypes: [acute, neuropathic, general]
status: active
coreClaims:
  - Primary afferents and dorsal horn neurons include genetically definable populations biased toward particular modalities (labeled lines), but many neurons respond to more than one modality.
  - The evoked sensation depends on which populations are co-activated and on interactions between them, notably cross-inhibition of itch by pain-related input and gating of touch input to pain pathways by spinal interneurons.
  - Specificity and pattern theories are therefore complementary rather than mutually exclusive.
  - Pathological pain, such as touch-evoked pain (allodynia), can arise from disinhibition that lets input reach populations it is normally kept out of, i.e. from abnormal coding rather than abnormal input alone.
predictions:
  - Silencing pain-signalling populations should unmask other sensations (e.g. itch) to stimuli that normally activate both.
  - Removing specific spinal inhibitory interneurons should produce cross-modal sensations, such as excessive itch or touch-evoked pain.
  - Activating a population in isolation should evoke a different sensation from the one evoked when it is co-activated with others.
mechanisms: [population-coding, specialized-nociceptors, dorsal-horn-gating]
relations:
  - type: integrates
    target: specificity-theory
    note: Keeps modality-biased labeled lines.
  - type: integrates
    target: pattern-theory
    note: Keeps the idea that the pattern of activity across populations matters.
  - type: builds-on
    target: gate-control-theory
    note: Develops interaction between afferent populations in the dorsal horn, with genetically defined circuits.
  - type: related-to
    target: central-sensitization
    note: Disinhibition of spinal circuits is a shared account of allodynia.
  - type: related-to
    target: homeostatic-emotion
    note: Craig argued for labeled lines in lamina I; population coding qualifies this view.
evidence:
  - finding: In mice lacking VGLUT2-dependent glutamate release from mainly Nav1.8-expressing nociceptors, pain behaviours were reduced while itch was greatly enhanced, and intradermal capsaicin evoked itch instead of pain.
    direction: supports
    method: genetic
    refs: [liu2010]
  - finding: Deleting VGLUT2 in a population overlapping with TRPV1-expressing afferents reduced thermal pain responses and produced a dramatic increase in itch behaviour.
    direction: supports
    method: genetic
    refs: [lagerstrom2010]
  - finding: Mice lacking the transcription factor Bhlhb5 lost a subset of inhibitory dorsal horn interneurons and developed elevated itch with self-inflicted skin lesions.
    direction: supports
    method: genetic
    refs: [ross2010]
  - finding: Ablating MrgprA3-expressing afferents reduced scratching to many pruritogens without changing pain sensitivity; when TRPV1 was expressed only in these neurons, capsaicin evoked itch rather than pain.
    direction: supports
    method: genetic
    refs: [han2012]
  - finding: Genetically defined dorsal horn circuits were identified in which inhibitory interneurons keep low-threshold mechanoreceptive input from activating mechanical-pain pathways; removing them makes light touch evoke pain-like behaviour.
    direction: supports
    method: genetic
    refs: [duan2014, foster2015]
  - finding: Ablating lamina I spinal neurons expressing the gastrin-releasing peptide receptor in mice profoundly reduced scratching to all pruritogens tested while pain behaviours were intact, consistent with a dedicated spinal itch line.
    direction: mixed
    method: genetic
    refs: [sun2009]
  - finding: Ablating Mrgprd-expressing unmyelinated afferents reduced mechanical but not heat pain behaviour, whereas ablating TRPV1-positive central terminals abolished heat but not mechanical pain sensitivity, a double dissociation at the first stage of processing.
    direction: mixed
    method: genetic
    refs: [cavanaugh2009]
  - finding: In vivo calcium imaging of mouse dorsal root ganglia found that over 85% of responsive neurons were modality-specific under normal conditions, polymodality being infrequent, although inflammation recruited additional "silent" nociceptors.
    direction: contradicts
    method: genetic
    refs: [emery2016]
diagram:
  caption: "Touch, pain and itch afferents act as modality-biased lines that interact in the dorsal horn: pain-related input inhibits itch, and an inhibitory gate keeps touch out of the pain pathway. If that gate is lost, touch evokes pain (allodynia)."
  after: [ma2010, prescott2014]
foundational: [ma2010, prescott2014]
keyReferences: [craig2003b, perl2007, mendell2014]
review: draft
updated: 2026-11-26
---

## Overview

Ma proposed that the old opposition between labeled lines and pattern coding is a false dichotomy. Molecular genetic work in mice had identified primary afferent and spinal populations that are biased toward particular sensations, such as itch, heat pain or mechanical pain. But these "labeled lines meet and talk": the populations interact, chiefly through spinal interneurons, and the resulting sensation depends on the combination of populations activated [@ma2010]. The key example is pain–itch cross-inhibition. Many itch-mediating afferents also respond to algogens, and the itch they would otherwise signal is masked by concurrent pain-related input. When that input is removed, algogens can evoke itch [@liu2010].

Prescott, Ma and De Koninck extended the framework to touch, pain and pathological pain. They argued that normal coding combines labeled lines with population coding across polymodal neurons, and that abnormal coding after injury (for example, loss of inhibition that lets touch input reach nociceptive pathways) explains allodynia and other symptoms [@prescott2014].

## Historical context

Specificity theory (dedicated pain fibres) and pattern theory (pain as a spatiotemporal pattern) dominated the twentieth-century debate. Gate control introduced interaction between afferent populations, and Craig argued for modality-selective lamina I pathways [@craig2003b]. The genetic tools of the 2000s, such as cell-type-specific ablation and conditional knockouts, allowed specific populations to be removed or activated. They revealed both modality-specific populations and cross-modal interactions, which motivated the population coding synthesis [@perl2007; @mendell2014].

## Critiques

- The theory is flexible: almost any result can be described as a mix of labeled lines and population interactions, so it is not clear what would falsify it.
- Most evidence comes from mouse behaviour (scratching, withdrawal), which only indirectly indexes sensation; translation to human perception is largely untested.
- In vivo imaging suggests that polymodality is less common in intact animals than older recordings implied, which shifts the balance back toward labeled lines at the periphery [@emery2016].

## Legacy

Population coding is now a common framework in somatosensory neuroscience, especially for pain–itch interactions and touch-evoked pain. It has largely dissolved the specificity–pattern debate into questions about which populations interact, where, and how.

## Teaching notes

- Contrast with specificity theory (one line, one sensation) and pattern theory (no dedicated lines): population coding keeps both elements.
- Use the capsaicin-evokes-itch experiments to show that the same stimulus can produce different sensations depending on which populations are active.
- Discussion prompt: does mouse scratching versus wiping behaviour justify conclusions about itch versus pain as experiences?
