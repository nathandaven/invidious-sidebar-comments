# invidious-sidebar-comments
stylesheet and userscript top move comments to the right sidebar and related videos below (very hacky)

### install

* use stylus to install the stylesheet, and tampermonkey to install the userscript.

* make sure to update the matchers to match where ever your invidious instance is

### desktop

<img src="https://github.com/user-attachments/assets/f5f51a9a-9b39-4578-bda2-9fbaa5933246" width="700px">

### mobile

<img src="https://github.com/user-attachments/assets/e93db539-113e-4603-bd4c-e53c09eea2ac" width="300px">

### block shorts

oh, and hide shorts using this ublock css via https://github.com/iv-org/invidious/issues/2585#issuecomment-2635861528

```
instance.tld##div.pure-u-md-1-4.pure-u-1:has(.bottom-right-overlay):not(:has(.length))
instance.tld##div.pure-u-1.pure-u-md-1-4:has(.length):has-text(/ 0:[0-5][0-9]/)
instance.tld##div.pure-u-1.pure-u-md-1-4:has(.length):has-text(/ 1:[0-2][0-9]/):not(:has-text(/1:[0-5][0-9]:[0-5][0-9]/))
```
