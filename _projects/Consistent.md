---
layout: page
title: Generate Consistent Intent Before and After 
description: 
# img: /assets/img/att-srl.png
importance: 0 
category: research
---
I work on examining the intentions and actions of people in visual scenes. I worked on the [VisualComet](https://visualcomet.xyz/) dataset, and trained a single-stream vision-language model based on GPT2 to generate people's intent, before and after at actions at one go, given associated scene features and text descriptions. Throughout the exploration, we noticed a critical property is lacking for the previous results and training procedure: the consistency between the subject's intent, before and after actions, and causally through time. To encourage generating consistent inferences (intent/before/after), we discovered a heuristic that weights training instances using natural language inference scores throughout a series of experiment exploration. Initial human evaluation (by my friends and me) indicates this procedure is effective for obtaining consistency