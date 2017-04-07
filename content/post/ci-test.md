+++
date = "2017-04-04T11:25:36+09:00"
title = "ci test"
draft = false

+++

## Move static content to `static`
Jekyll has a rule that any directory not starting with `_` will be copied as-is to the `_site` output. Hugo keeps all static content under `static`. You should therefore move it all there.
With Jekyll,  something that looked like

CIテスト

* this one
* that one
* the other one

<a href="https://www.google.com">aaa</a>
![Example image](/images/logo.png)
![CleanArchitecture-81565aba46f035911a5018e77a0f2d4e.jpg](https://qiita-image-store.s3.amazonaws.com/0/75255/8ae2b04f-4dd8-a740-feaf-b2aa869bd984.jpeg "CleanArchitecture-81565aba46f035911a5018e77a0f2d4e.jpg")

