---
layout: page
title: Multimodal SRL 
description: 
img: /assets/img/att-srl.png
importance: 1
category: research
---
My master thesis explored how incorporating visual context can improve semantic role labeling. I used attention to include bounding box features into a standard Bi-LSTM's hidden states in one approach. I also explored adding contrastive loss between sentence embedding and whole image feature to guide the training. Due to the lack of labeled data, I obtained semantic role labels automatically for image captioning datasets (MSCOCO, Flickr30k). Nonetheless, my attention approach trained on this automatically obtained dataset performs slightly better than a pure-text baseline. And additional analysis also suggests the improvement came from a better grounding of semantic roles into the image features.
[[Master_thesis]]({{ '/assets/pdf/master_thesis.pdf' | relative_url }}){:target="_blank"}[[slides]](https://docs.google.com/presentation/d/15IU6ukxsP_MlmFguVDJQNbwM0Sx6fGTFCDsO_2NF8kQ/edit?usp=sharing){:target="_blank"}
<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/att-srl.png' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/att-t-conf.png' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    One of the approaches in the thesis is shown on the left side; it is an attention-based model (hidden states of LSTM attends over bounding box features). And the resulted context vector is concatenated with hidden states for final predictions. On the right side, This heatmap represents the confusion difference between t-SRL (pure-text SRL) and at-SRL (attention-based model) without decoding. It is computed by subtracting the confusion matrix of at-SRL (no decoding) from tSRL (no decoding). Blue color represents the confusion decrease for at-SRL compared with tSRL; for example, cellLOC,ARG2 represents at-SRL is less confused about LOC with ARG2 by 11. Furthermore, red color means the confusion increase for at-SRL compared with t-SRL.
</div>

**Conjecture:**

The attention model tends to correctly label location-related entities as location info is rich in image, so the attention model might effectively utilize that info from an image.
Since ARG2 is known to be easily confused with LOC, DIR, ([He et al](https://www.aclweb.org/anthology/P17-1044)) more location info might make it more difficult to not confuse ARG2 as LOC.