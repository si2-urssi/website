---
title: "URSSI Summer 2026 Fellowship: Teaching Coding Agents the Brain Imaging Data Structure"
date: 2026-07-31
author: "Scott Huberty"
---

## The Brain Imaging Data What?

Ah yes, the Brain Imaging Data Structure. You'd be forgiven for missing the memo on this
standard. But it plays a very important role in modern neuroscience research, which I'll
go into in some detail below. And I promise that supporting it will make the world a
better place, if ever so slightly.

You see, neuroscience researchers, like most researchers I know, want to share their
findings, and they also want to share the data that produced those findings. Sharing data
serves many purposes. First, it increases transparency: given a report of the results from
your experiment, other scientists can replicate and confirm those results when they have
the necessary scripts (e.g., Python, R, MATLAB) and the data that those scripts operate on.
Second, it can accelerate discovery. Collecting MRI data from even 30 participants is
expensive and time consuming. Wouldn't it be better if more folks than just you and your
lab mates were able to analyze that data? And while 30 participants constitutes a small
sample size by most standards, what if we could pool those 30 MRI scans with other openly
accessible datasets? I am sure there are many more good reasons to share neuroscience
data, but we'll start there.

The thing is, sharing data has traditionally been a pain point in neuroscience research.
Unlike the physical sciences, where scientists might retrieve their data from a central
collection source (e.g., NASA or the USGS), neuroscience labs have typically been
deputized to collect their own. That means a lab might buy its own electroencephalography
(EEG) system, or rely on its institute's MRI scanner. Sally's institute uses an MRI
scanner made by Philips, while Priya's institute uses one made by Siemens. Nabil's lab
owns an EEG system from company A, Chris's lab owns one from company B, and Madison's from
company C. You see where I am going.

MRI is the better-behaved case here: scanners generally export DICOM, which is itself a
standard. But the acquisition parameters that actually matter for analysis are often
tucked away in vendor-specific private fields, so a script that reliably finds what it
needs in Siemens data may come up empty on Philips. Electrophysiology is less forgiving
still: each manufacturer ships its own file format, and they are mutually unintelligible.
So if Josephine wants to analyze the data from the five researchers above, she needs
software that can read all of their formats, and she will probably need to be somewhat
familiar with those formats herself.

And it doesn't stop there. Even if those five researchers were all running an experiment
on the effect of cat pictures on brain activity, they almost certainly designed their
experimental scripts a little differently. That means different names for the events that
mark the onset of the cat picture, different units for the timestamps, different
conventions for which trials count as "practice", and so on. Josephine now has to
reverse-engineer five experiments before she can pool a single trial.

## The Brain Imaging Data Structure

This is where the [Brain Imaging Data Structure](https://bids.neuroimaging.io/) (BIDS)
comes in. BIDS is a community-developed specification, plus an ecosystem of tools that
implement it, for organizing and describing neuroscience datasets. It defines the directory
layout, file naming conventions, metadata fields, and controlled vocabularies that make a
dataset machine-readable and self-describing. So as long as those five researchers
converted their EEG or MRI data to BIDS before sharing it with Josephine, her job becomes
much easier: the files are named predictably, the events live in a documented tabular
format, and the acquisition parameters she needs are in a text file.

Initially, BIDS focused purely on MRI, because there are many things beyond file format
that can be lost in translation when sharing imaging data. But BIDS proved so useful that
it was adopted by adjacent neuroscience communities: electroencephalography and
magnetoencephalography (EEG and MEG), intracranial EEG, functional near-infrared
spectroscopy (fNIRS), eye-tracking, motion capture, positron emission tomography (PET),
microscopy... the list goes on. The point is that BIDS made data sharing dramatically easier,
and so its community and user base have grown accordingly. It is now supported by hundreds
of software tools and underpins thousands of openly available datasets on
[OpenNeuro](https://openneuro.org).

## Okay, problem solved. What's left to do?

In my humble opinion, there are still real barriers to BIDS adoption, and I think they get
worse as the specification grows to cover more modalities and use cases. As the
specification has grown, its surface area has become vast: there are many rules, and many
of those rules have an exception or two. That makes converting data to BIDS difficult for
researchers who are not immersed in the specification (which I think describes most researchers).
It also makes interpreting an existing BIDS dataset harder than it should be.

Even I, a maintainer of [MNE-BIDS](https://mne.tools/mne-bids/), *still* find myself with
the spec open in a browser tab on a regular basis. Meanwhile, most scientists just want
to do science. They don't care about file formats or schemas. They don't want to get stuck
converting their data to BIDS. But if they *do* get stuck, they can't share their data on 
OpenNeuro, which will not accept a dataset that fails validation. If only there were some
way to help these researchers out.

## BIDS my data and get out of my way!

This is where my URSSI fellowship project comes in. I think BIDS is an unusually good use
case for quote-unquote "AI": giving agentic coding
tools like Claude Code and Codex the context and tooling they need to help researchers
convert their data to BIDS, without making things worse in the process.

There have been some encouraging efforts in this space already. The BIDS maintainers have
been prototyping a chatbot embedded in the specification website.

This is useful for answering "what does the spec say about X?" But without access to
your files, the most common question — "why is *my* dataset failing validation, and what do I do about it?" —
is harder to answer, because the assistant can only work from what you paste into it or tell it. Coding
agents don't have that limitation. They already run in your terminal, next to your data. If
we extend this capability to coding agents, they should be able to:

1. **Use existing software to convert data to BIDS**, e.g., MNE-BIDS for electrophysiology
   or `dcm2niix`/BIDScoin for MRI.
2. **Use the `bids-validator` to check the result**, so that claims about compliance are
   verified against the reference implementation.
3. **Consult the machine-readable BIDS schema and the human-readable specification** to
    interpret whatever the validator complains about, and propose a fix grounded in an
    authoritative source.

Notice that this doesn't require writing much new software or documentation. Nearly all of
it exists already; the trick is making it accessible to the agent, and then checking
whether the agent actually uses it well.

That last point is the one I care most about. An LLM that confidently invents a metadata
field is worse than no assistant at all, because the researcher has no easy way to tell
the difference. The design principle for this project is that the agent should never be
the final authority on whether a dataset is valid, the validator is. The agent's job is to
read the error, find the relevant rule, propose a change, apply it, and then run the
validator again to see whether it was right.

## What happens next

Over the course of the fellowship I'll be working on a prototype.
All software, documentation, benchmarks, and evaluation results will be released in the
open. If all goes well, and this tool proves to be both reliable and useful, I will plan
to write up the benchmark and findings, and share them with the community.
