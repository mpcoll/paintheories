# Review notes (2026-11-26)

Points flagged while drafting the 53 entries, for expert review. All entries are
`review: draft`. Every DOI was checked against Crossref; most findings were
checked against their abstracts. The items below are the exceptions and
judgement calls. Tick them off or delete them as you review.

## Claims written from general knowledge (no abstract or full text checked)

- [ ] **central-sensitization**: Woolf 2011's list of conditions (fibromyalgia, OA, TMD, headache) in Legacy.
- [ ] **specificity / intensive / pattern / cartesian**: Mendell 1966 (wind-up), Bessou & Perl 1969 (polymodal C nociceptors), Sherrington 1910, Beecher 1946 ("most did not want analgesics").
- [ ] **intensive / pattern**: Ochoa & Torebjörk 1983 is worded cautiously; check that high-frequency stimulation of non-nociceptive units never evoked pain.
- [ ] **endogenous-modulation / population-coding / corticolimbic**: Ross 2010, Coull 2005, Baliki 2012 ("high accuracy", no figure), Le Bars 1979, Levine 1978, Willis 2002.
- [ ] **fast-slow-fibre / reverberatory-circuit**: Noordenbos 1959 (large-fibre loss in postherpetic neuralgia), Livingston 1943 ("vicious circle").
- [ ] **maladaptive-cortical-plasticity**: Lotze 1999 (prosthesis use), Flor 2006.
- [ ] **cortical-body-matrix**: Moseley, Parsons & Spence 2008: sample description.
- [ ] **sensorimotor-incongruence**: Harris 1999 target conditions, via McCabe 2005.
- [ ] **diathesis-stress**: Banks & Kerns 1996 diatheses and stressors.
- [ ] **mutual-maintenance**: Sharp & Harvey 2001, the seven maintaining pathways.
- [ ] **shared-vulnerability**: Asmundson 2002 details.
- [ ] **cognitive-behavioural**: Turk, Meichenbaum & Genest 1983 (stress inoculation, treatment phases).
- [ ] **onion-model**: Loeser 1982 chapter details (manual reference).
- [ ] **mature-organism**: Gifford 1998 content via secondary sources.
- [ ] **nociplastic-pain**: summary of the Kosek 2021 clinical criteria (possible / probable grading).
- [ ] **imperativism**: Klein 2007 ankle example; Sherrington's "psychical adjunct" quote.
- [ ] **misdirected-problem-solving / imprecision / neurocognitive-attention / motivation-decision**: Eccleston & Crombez 2007 framing; Moseley & Vlaeyen 2015 "restoring precision"; Legrain 2009 components; Fields 2018.

## Judgement calls on evidence direction

- [ ] Population coding: Emery 2016 = contradicts; Sun 2009, Cavanaugh 2009 = mixed.
- [ ] Nociplastic pain: small-fibre pathology (Üçeyler, Oaklander, Grayston) = contradicts; Goebel 2021 = mixed.
- [ ] Central sensitization: Gracely 1992, Staud 2009 (peripheral blocks) = mixed.
- [ ] Neuromatrix: Wager 2013 = supports; Mouraux 2011, Iannetti 2010 = mixed.
- [ ] Salience detection: Wager 2013 = mixed (not contradicts).
- [ ] Biopsychosocial: Kamper 2015 = supports despite small effects.
- [ ] Operant model: Cochrane 2020 null for "behavioural therapy" used as contradicting (category ≠ operant treatment).
- [ ] Communal coping: Vervoort 2008, Vlaeyen 2009 = contradicts.
- [ ] Protective output: Traeger 2019 = contradicts (education in acute LBP was not strictly PNE).
- [ ] Philosophical entries: most asymbolia, hypnosis and phantom findings coded mixed.

## Classification choices to confirm

- [ ] Status: gate control = active; neuromatrix, homeostatic emotion, neuroimmune = contested; nociplastic pain and corticolimbic learning = active; misdirected problem solving and imprecision hypothesis = emerging; protective output = active.
- [ ] Domain: salience detection and imprecision hypothesis = cognitive (could be neurobiological / psychosocial); enactive approach = integrative; allostatic load = integrative.
- [ ] Founding years: neuromatrix 1990 (Melzack 1989 lecture?); avoidance-endurance 2000; psychological flexibility 2014; evaluativism 2011; evolutionary account and sociocultural model years.

## Added 2026-11-26 (Seymour)

- [ ] **reinforcement-learning-account** and **homeostatic-injury-model**: all findings were written from abstracts (Europe PMC). Neither entry has contradicting findings yet: I couldn't find a verified study that contradicts them. Suggestions welcome (e.g. failures of RL models in clinical samples).
- [ ] Should the homeostatic injury model be its own entry or folded into the reinforcement learning account? It's separate for now, linked as "extends".
- [ ] Founding years: RL account 2019 (Seymour, Neuron), with Seymour 2004/2005 as precursors; homeostatic model 2026 (Mahajan, Dayan & Seymour, PLOS Comput Biol).

## Conflict of interest

- [ ] **social-communication-model** cites Grégoire, Coll et al. 2016 (Eur J Pain) as a supporting finding. Decide whether to keep it.

## Housekeeping

- [ ] Delete the leftover `wip/theory-batches` branch on GitHub (this session isn't allowed to delete branches).

# Pain Conditions review notes (2026-11-27)

All 32 condition entries are `review: draft`. ICD-11 codes and titles are checked against the WHO
2026-01 release (`npm run icd:check`); every DOI against Crossref; most claims against abstracts.
These are the judgement calls and unverified details to review.

## ICD-11 mappings that are our reading (WHO does not state them)

- [ ] **medication-overuse-headache**: MG30.03 for the underlying headache; MG30.6Y for MOH itself (MG30.67 excludes MOH; condition code 8A84.Y).
- [ ] **post-traumatic-headache**: MG30.6Y (no MG30.6 subcode names trauma) or MG30.03 when the link is vague; condition 8A84.1.
- [ ] **phantom-limb-pain**: MG30.21 (surgical amputation), MG30.20 (traumatic), MG30.51 (neuropathic after nerve injury). ICD-11 does not say which takes priority; choose.
- [ ] **trigeminal-neuralgia**: MG30.62 and MG30.51; MS-related (central) trigeminal neuralgia not addressed.
- [ ] **temporomandibular-disorders**: primary TMD pain under MG30.03 (from memory of Nicholas 2019; full text not checked).
- [ ] **endometriosis**: MG30.42 (no MG30.4x subcode names it); MG30.00 for pain the lesions do not explain.
- [ ] **bladder-pain-syndrome**: Hunner-lesion cases as MG30.42 + GC00.3 is our inference.
- [ ] **sickle-cell-disease-pain**: no clean mapping; MG30.31 (avascular necrosis) and MG30.01 (widespread pain without tissue source). Family set to "widespread".
- [ ] **rheumatoid-arthritis / inflammatory-bowel-disease / chronic-pancreatitis / axial-spondyloarthritis**: secondary subcodes (MG30.30/31/40/42, MG30.01 for coexisting fibromyalgia) are our readings.
- [ ] **central-post-stroke-pain**: condition codes 8B25.0/8B25.1 (late effects of stroke) are examples, not prescribed.
- [ ] **chronic-neck-pain**: ME84.0 listed as condition code although it excludes chronic primary cervical pain (as for ME84.2 and low back pain).
- [ ] Per-code `descriptors` (which mechanisms apply under each code, used by the crosswalk) were set by the lead editor for 11 multi-code conditions.

## Criteria written from knowledge, not checked against the source text

- [ ] ICHD-3 summaries: chronic TTH (2.3), BMS (13.10), MOH (8.2), persistent PTH (5.2), trigeminal neuralgia (13.1.1); ICHD-3 classical/secondary/idiopathic split for TN.
- [ ] Budapest criteria (Harden 2010), Toronto consensus (Tesfaye 2010), ISCIP classification (Bryce 2011), Bogduk 2009 definitions, AAPT sickle cell criteria details (Dampier 2017).
- [ ] Marinus 2011 for the CRPS type I/II distinction; Nicholas 2019 for CRPS under chronic primary pain (placement confirmed by ICD-11 itself).
- [ ] Nociplastic grading flowchart on /conditions/descriptors/ is a simplification of Kosek 2021 (order of steps from Yoo & Kim 2024 and Schmidt 2024); full text of Kosek 2021 not checked.

## Descriptor roles that are editorial judgement

- [ ] medication-overuse-headache nociplastic "common" and post-traumatic-headache nociplastic "subset" are inferred from proposed mechanisms; no source calls them nociplastic.
- [ ] Tension-type headache nociceptive "common"; CRPS (nociplastic common, nociceptive common, neuropathic subset); radiculopathy; SCI and MS; vulvodynia (nociplastic only, "common"); chronic pancreatitis nociplastic "subset" (Olesen 2017 says "neuropathic-like").

## Prevalence figures with caveats

- [ ] TMD 29.5% counts any diagnosis including painless joint sounds; radiculopathy is a 1.2–43% range; CRPS and CIPN figures are incidence/neuropathy (not pain); whiplash is persistence at 1 year; sickle cell figures are pain frequency, not prevalence; chronic pancreatitis from one US county.

# Neuroimaging review notes (2026-11-27)

The /biology/imaging/ findings and signatures are drafts. Judgement calls to check:

- [ ] Evidence grades (robust / debated / single-study) are editorial. wager2004 and the zubieta2001/2005 pair are "robust" from general knowledge, without a replication check.
- [ ] duerden2011 (print 2013, Hum Brain Mapp 34:109-149) pools PET and fMRI but is tagged fmri.
- [ ] lieberman2015 + wager2016 are one "debated" entry; Wager 2016's argument is summarised from the letter.
- [ ] salomons2016 (2 people with congenital insensitivity to pain, 4 controls) is tagged experimental; text based on the accepted manuscript.
- [ ] Signature availability: NPS on request (CANlab README), SIIPS1 open (CANlab Neuroimaging_Pattern_Masks, GPL-3.0), ToPS on request under a mutual confidentiality agreement (cocoanlab/tops); gamma ERS has no weights ("not shared" means nothing to share).
- [ ] LEP figure: peak latencies from Hu et al. 2014 (one study); N1 shown only as the 120-200 ms window of Hu & Iannetti 2019; shapes and amplitudes are schematic, and repetition scales all components equally.
- [ ] Methods chart: resolution boxes are approximate orders of magnitude (editorial), with qualitative comparisons from Morton et al. 2016.
- [ ] Map explorer: Neurosynth uniformity (consistency) maps, not association (reverse-inference) maps; study counts from Planum's published term table (pain 516 from the viewer).

# Pain Treatments review notes (2026-11-27)

29 treatment entries, all `review: draft`. Effect labels follow the fixed rules on /treatments/reading-evidence/;
guideline records quote the guideline wording (NICE text fetched 27 November 2026; NG59 last updated 29 July 2026).
Judgement calls to check:

- [ ] CDC 2022 for opioids recorded as "Consider" (weak-for): CDC prefers non-opioid therapies and says to "only consider initiating" opioids when benefits outweigh risks (category A).
- [ ] NICE NG226 "do not routinely offer" paracetamol and weak opioids mapped to "Not recommended".
- [ ] NeuPSIG 2025 outcomes are "responders" (≥50% or ≥30% reduction, or moderate relief); the NNT size rule is applied to them. Botulinum toxin NNT CI differs between the abstract (1.8 to 9.61) and the tables (1.8 to 5.1); both quoted.
- [ ] Carbamazepine for trigeminal neuralgia: NNT 1.7 to 1.8 from small old trials, labelled large, not graded; NeuPSIG lists carbamazepine as inconclusive outside trigeminal neuralgia.
- [ ] Migraine-day reductions (CGRP antibodies, botulinum toxin) labelled small by judgement; no listed guideline covers migraine.
- [ ] TENS: Johnson 2022 (SMD -0.96, moderate certainty) pools acute and chronic pain during or right after stimulation, so it appears as "large" on the evidence map; the Cochrane overview is unclear, very low certainty.
- [ ] Spinal cord stimulation add-on (open-label) downgraded from large to moderate by the lead editor.
- [ ] Interdisciplinary programmes vs physical treatment (Kamper 2015, SMD 0.51, CI -0.01 to 1.04) labelled "no benefit" by the CI rule, although the review concluded programmes reduced pain.
- [ ] Exercise: Fransen 2015 SMD -0.49 labelled small (authors: moderate); Hayden 2021 MD -15.2/100 labelled moderate (authors: clinically important); Bidonde 2017 labelled small.
- [ ] Graded exposure, open-label placebo, acupuncture (targets, sham comparisons) and pain reprocessing therapy (one trial with 5-year follow-up) need expert reading.
- [ ] EULAR 2017 full text was not accessible: only exercise (strong for) and multimodal rehabilitation (weak for, from the abstract) carry EULAR records.
