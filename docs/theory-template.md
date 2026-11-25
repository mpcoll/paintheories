---
# Copy to src/content/theories/<id>.md. The file name (without .md) is the entry's id.
# Allowed values for every classification field are in src/data/taxonomy.ts.
title: Full name of the theory
shortTitle: Short label for the map   # optional
aliases: []
kind: theory            # theory | model | framework
year: 2000              # year of the founding publication
proponents: [First Author, Second Author]
summary: One or two sentences (max 400 characters) stating the central claim.
domain: neurobiological # neurobiological | cognitive | psychosocial | integrative | conceptual
levels: [systems]       # cellular | circuit | systems | computational | behavioural | psychosocial | sociocultural | evolutionary | philosophical
questions: [chronicity] # nature | transmission | variability | chronicity | disability | function
painTypes: [chronic]    # acute | chronic | nociceptive | neuropathic | nociplastic | general
status: active          # historical | superseded | active | contested | emerging
coreClaims:
  - First claim.
predictions:
  - A result that would support or count against the theory.
mechanisms: []          # ids of files in src/content/mechanisms
relations:
  - type: builds-on     # builds-on | extends | challenges | integrates | related-to
    target: gate-control-theory
    note: Optional one-line explanation.
foundational: [key2000] # citation keys from src/data/references.yaml (npm run ref:add -- <doi>)
keyReferences: []
review: draft           # stub | draft | reviewed
updated: 2026-01-01
---

## Overview

What the theory says, in a few paragraphs. Cite with [@key] or [@key1; @key2].

## Historical context

## Evidence for

## Evidence against and critiques

## Legacy

## Teaching notes
