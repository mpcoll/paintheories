---
title: Endogenous pain modulation model
shortTitle: Endogenous modulation
aliases: [Descending pain control, Pain modulatory system, Endogenous analgesia]
kind: model
year: 1978
proponents: [Allan Basbaum, Howard Fields, Daniel Le Bars, David Yarnitsky, Frank Porreca]
summary: The nervous system contains an endogenous pain-modulating system, centred on the periaqueductal grey, rostral ventromedial medulla and dorsal horn and partly opioid-mediated, that can inhibit or facilitate nociceptive transmission; a shift from inhibition toward facilitation contributes to individual differences in pain and to chronic pain.
domain: neurobiological
levels: [circuit, systems]
questions: [variability, chronicity, transmission]
painTypes: [acute, chronic, general]
status: active
coreClaims:
  - A brainstem circuit (periaqueductal grey to rostral ventromedial medulla to dorsal horn), engaged by forebrain regions, controls nociceptive transmission at the spinal level, using endogenous opioids and monoamines.
  - The same circuit can facilitate as well as inhibit nociception (e.g. via RVM "on" and "off" cells), so pain depends on the state of the modulatory system.
  - Noxious stimulation of one body region inhibits responses to noxious input elsewhere (diffuse noxious inhibitory controls, DNIC; in humans measured as conditioned pain modulation, CPM).
  - Chronic pain involves an imbalance in which descending facilitation predominates or descending inhibition is impaired; the individual's modulatory profile predicts pain risk and treatment response.
predictions:
  - Stimulating or pharmacologically activating the PAG/RVM should produce analgesia; blocking endogenous opioids should reduce context-induced analgesia such as placebo.
  - People with chronic pain should show less efficient CPM than pain-free controls.
  - Less efficient CPM before surgery should predict chronic postsurgical pain.
  - Drugs that enhance descending inhibition should work best in people with impaired CPM.
mechanisms: [descending-modulation, dorsal-horn-gating]
relations:
  - type: builds-on
    target: gate-control-theory
    note: Develops the gate theory's descending control into a specific brainstem circuit.
  - type: related-to
    target: expectancy-placebo-analgesia
    note: Placebo analgesia engages the opioidergic descending system.
  - type: related-to
    target: motivation-decision-model
    note: Fields' later model treats descending modulation as the output of a decision about competing needs.
  - type: related-to
    target: central-sensitization
    note: Descending facilitation is one driver of spinal hyperexcitability.
  - type: related-to
    target: nociplastic-pain
    note: Impaired descending inhibition is a proposed mechanism of nociplastic pain.
evidence:
  - finding: In rats, noxious stimulation applied to remote body regions inhibited the responses of dorsal horn convergent (wide-dynamic-range) neurons, the phenomenon termed diffuse noxious inhibitory controls.
    direction: supports
    method: animal
    refs: [lebars1979]
  - finding: After dental surgery, the opioid antagonist naloxone increased pain in placebo responders, indicating that placebo analgesia is mediated partly by endogenous opioids.
    direction: supports
    method: intervention
    refs: [levine1978]
  - finding: In healthy volunteers, naloxone reduced placebo analgesia and abolished placebo-induced coupling between rostral anterior cingulate cortex and periaqueductal grey, which predicted RVM activation and the behavioural placebo effect.
    direction: supports
    method: neuroimaging
    refs: [eippert2009]
  - finding: In rats with spinal nerve ligation, lidocaine in the RVM or ablation of its mu-opioid-receptor-expressing cells reversed established hypersensitivity from about day 4–6 but did not prevent its onset, indicating that descending facilitation maintains but does not initiate neuropathic pain.
    direction: supports
    method: animal
    refs: [burgess2002]
  - finding: A meta-analysis of 30 studies (778 patients, 664 controls) found reduced conditioned pain modulation in chronic pain populations, with a large pooled effect but frequent risk of bias.
    direction: supports
    method: meta-analysis
    refs: [lewis2012]
  - finding: In 62 patients undergoing thoracotomy, more efficient preoperative DNIC (CPM) independently predicted a lower risk of chronic post-thoracotomy pain, whereas pain thresholds did not.
    direction: supports
    method: longitudinal
    refs: [yarnitsky2008]
  - finding: In painful diabetic neuropathy, less efficient baseline CPM predicted greater benefit from duloxetine, a drug thought to enhance descending inhibition.
    direction: supports
    method: intervention
    refs: [yarnitsky2012]
  - finding: A systematic review of 30 surgical cohorts found that most preoperative quantitative sensory testing measures did not consistently predict pain after surgery; suprathreshold heat pain and temporal summation were the most consistent predictors, CPM findings were promising but limited, and most studies had moderate to high risk of bias.
    direction: mixed
    method: review
    refs: [sangesland2017]
diagram:
  caption: "Forebrain regions engage the PAG, which drives the RVM. RVM on cells facilitate and off cells inhibit nociceptive transmission in the dorsal horn; noxious input elsewhere on the body also inhibits it (DNIC, measured as CPM). In chronic pain, facilitation outweighs inhibition."
  after: [basbaum1978, lebars1979]
foundational: [basbaum1978, lebars1979]
keyReferences: [fields2004, ossipov2010, ossipov2014, porreca2002, yarnitsky2010, mcphee2019, kennedy2016, reynolds1969]
review: draft
updated: 2026-11-26
---

## Overview

The model holds that pain is not a fixed readout of nociceptor activity, because the central nervous system contains a dedicated system that controls nociceptive transmission. Basbaum and Fields proposed a circuit in which the periaqueductal grey (PAG) projects to the rostral ventromedial medulla (RVM), which in turn projects via the dorsolateral funiculus to the dorsal horn, where it modulates transmission using endogenous opioids and monoamines [@basbaum1978]. Later work showed that the system is bidirectional: RVM neurons can facilitate as well as inhibit nociception, and the net effect depends on behavioural and physiological state [@fields2004; @porreca2002].

Le Bars and colleagues described a second form of endogenous control: noxious stimulation anywhere on the body inhibits dorsal horn convergent neurons, a spino-bulbo-spinal loop termed diffuse noxious inhibitory controls (DNIC) [@lebars1979]. In humans the corresponding paradigm is conditioned pain modulation (CPM), in which a conditioning painful stimulus reduces pain from a test stimulus [@yarnitsky2010]. In chronic pain, the model proposes that inhibition is weakened, facilitation strengthened, or both, so that the modulatory system helps maintain pain [@ossipov2010; @ossipov2014].

## Historical context

The gate control theory had postulated descending control without specifying a mechanism. Stimulation-produced analgesia from the PAG [@reynolds1969], the discovery of opioid receptors and endogenous opioid peptides, and the finding that naloxone reduces placebo analgesia [@levine1978] together made "endogenous analgesia" a concrete neurobiological system in the 1970s.

## Critiques

- CPM is a psychophysical proxy, and protocols vary widely in conditioning and test stimuli; reliability depends heavily on these parameters [@kennedy2016].
- Reduced CPM is not specific to any diagnosis, and CPM is also influenced by attention, expectation and distraction, so it does not isolate brainstem mechanisms.
- Group-level differences in CPM are well documented, but prediction of individual clinical outcomes from preoperative psychophysical testing has been inconsistent [@sangesland2017].
- Facilitation and inhibition are hard to separate in humans; most human data infer descending mechanisms indirectly.

## Legacy

Descending modulation is a core concept in pain neuroscience and underpins accounts of placebo analgesia, stress-induced analgesia and the effects of attention and emotion on pain. CPM is widely used in mechanism-based phenotyping. A meta-analysis in low back pain found impaired CPM (related to pain chronicity, duration and severity) and facilitated temporal summation, but the group differences were small and most studies were of poor-to-fair quality [@mcphee2019].

## Teaching notes

- Emphasise bidirectionality: the system facilitates as well as inhibits.
- Distinguish DNIC (an animal neurophysiological phenomenon) from CPM (a human psychophysical paradigm that only partly reflects it).
- Discussion prompt: is impaired CPM a cause, a consequence or a marker of chronic pain?
