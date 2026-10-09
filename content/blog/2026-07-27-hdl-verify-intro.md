---
title: "HDL-Verify: A Validation and Reproducibility Toolkit for AI Generated Hardware Description Code"
date: 2026-07-27
author: "Shima Mohaghegh"
---

As a URSSI Fellow, I am building HDL-Verify, an open source tool that helps researchers trust the Hardware Description Language (HDL) code that AI models write for them.

## The problem

Many research labs now depend on custom digital hardware. Physics experiments use reprogrammable chips to process detector data in real time. Astronomy projects build custom chips for signal processing. Biology and chemistry labs use hardware based instruments to control their experiments. Increasingly, the students and engineers who write the code for these chips ask an AI model to help.

The trouble is that AI generated hardware code is often wrong in ways that are hard to see. The code can look correct and pass a few hand written tests, yet still fail on certain inputs. Today the common practice is to write a small number of test cases by hand and hope they catch the important bugs. This misses problems in any input the tests do not cover, and it leaves no record of how the design was created.

## What I am building

HDL-Verify takes two versions of the same circuit, one known to be correct and one written by an AI, and checks whether they are truly the same. It works in three parts. First, it uses a formal mathematical proof to decide, with certainty, whether the two circuits behave the same for every possible input. Second, it stress tests both circuits with thousands of random inputs. Third, it saves a complete record of the run, including the AI model, the prompt, and the version of every tool used, so anyone can repeat the same test later.

Together with the tool, I will build ArithBench-100, a set of 100 reference arithmetic circuits with a correct and verified answer for each one. These give a fair and shared standard for measuring how well AI models write hardware code.

## Why it matters

Any group that uses AI to help write hardware code needs a way to trust the result. HDL-Verify replaces guesswork with a clear answer and a record that can be checked again.

## Thank you

I am grateful to URSSI for the support and mentorship that make this project possible.

## Contact

If you are a researcher, engineer, or student who works with AI generated HDL code, I would be glad to hear from you. You can reach me at shima@ku.edu, and follow the project on GitHub at https://github.com/the-shima-m/hdl-verify.