---
title: "Progress update: reliability checks for machine-learning surrogates"
date: 2026-11-11
author: "Isaac Malsky"
---

The last several months I've been working to expand [vibe-check](https://github.com/imalsky/vibe-check) in two major ways. First, to increase the domain of problems that the code is tested/demonstrated on, and also to increase the range of checks (and the clarity of the checks) that the model is performing on each ML problem. At a high level, when a user has an already trained ML model, and the data that was used to test/train it, the system runs an automated set of checks that try to isolate known common failures. For example, widely different errors in different model output channels, hiding important failures through averaging out of the final statistics, or normalization leakage.

Ideally, my goal for the project is to have enough (well organized) test examples that users can clearly see how their individual problems can be mapped on. So far, I have examples for a Robertson stiff kinetics problem, the Lorenz chaotic system, the Burgers' equation, and Darcy flow. Each one of these required a separate ML architecture (e.g. Fourier neural operators), but I believe that having a range of problems will help show that this code can be widely applicable. One example of the project so far is specifically for the Robertson problem. It shows that long timesteps within the model fare far worse than short timesteps. Hopefully this will prompt users to iterate on their training sets, and target the model failings before deploying in larger models, where errors like this are much harder to find.

I still need to tag the release and work on advertising the code when it is done. I also plan to continue expanding the number of examples, and also work on the visualizations corresponding to each test.

This work was supported by the US Research Software Sustainability Institute (URSSI) via grant G-2022-19347 from the Sloan Foundation.
