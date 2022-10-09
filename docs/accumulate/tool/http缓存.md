## 谈论 HTTP 缓存时我们在谈论什么

在浏览器众多缓存中的 HTTP 缓存可能很多人对这个的概念并没有很清晰，每个人都知道进入一次网页之后再刷新一次页面，加载速度会比首次加载快非常多，每个人都知道这是浏览器缓存的 magic，但是对此背后的原因可能不甚了解...

### 当我们在谈论 HTTP 缓存时我们在谈论什么:

我们实际上是在谈论下面这两种情况:

![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e32ac608a1146?raw=true)

如上图，浏览器对静态资源的 HTTP 缓存有两种情况，一种是强缓存(本地缓存)，另一种是弱缓存(协商缓存)。

---

### 缓存流程：

#### 浏览器第一次请求资源时：

![图片出自网络](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e323d0879019f?raw=true)

浏览器**第一次请求资源时，必须下载所有的资源，然后根据响应的 header 内容来决定，如何缓存资源**。可能采用的是强缓存，也可能是弱缓存

#### 浏览器后续请求资源时的匹配流程：

![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e33ba0484fb14?raw=true)

由上图可以知道当浏览器请求一个静态资源时的 HTTP 流程：

1. 强缓存阶段：先在本地查找该资源，如果发现该资源，并且其他限制也没有问题(比如:缓存有效时间)，就命中强缓存，返回 200，直接使用强缓存，并且不会发送请求到服务器
2. 弱缓存阶段：在本地缓存中找到该资源，发送一个 http 请求到服务器，服务器判断这个资源没有被改动过，则返回 304，让浏览器使用该资源。
3. 缓存失败阶段(重新请求)：当服务器发现该资源被修改过，或者在本地没有找到该缓存资源，服务器则返回该资源的数据。

### 强缓存与弱缓存的区别：

**获取资源形式**： 都是从缓存中获取资源的。

**状态码**： 强缓存返回 200(from cache),弱缓存返回 304 状态码

**请求(最大区别)**：

强缓存不发送请求，直接从缓存中取。

弱缓存需要发送一个请求，验证这个文件是否可以使用（有没有被改动过）。

---

### 强缓存：

强缓存是利用 Expires 或者 Cache-Control，让原始服务器为文件设置一个过期时间，在多长时间内可以将这些内容视为最新的。

若时间未过期，则命中强缓存，使用缓存文件不发送请求。

### Cache-Control

Cache-Control 是 http1.1 中为了弥补`Expires`的缺陷而加入的，当 Expires 和 Cache-Control 同时存在时，Cache-Control 优先级高于 Expires。

**选项**：

可缓存性:

`public`： 服务器端和浏览器端都能缓存

`private`: 只能浏览器端缓存

`no-cache`: 强制浏览器在使用 cache 拷贝之前先**提交一个 http 请求到源服务器进行确认**。http 请求没有减少，会减少一个响应体(文件内容),这种个选项类似弱缓存。

`only-if-cached`: 表明客户端只接受已缓存的响应，并且不要向原始服务器检查是否有更新的拷贝。

到期设置：

`max-age=60`：设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。 这里是 60 秒

其他设置：

`no-store`: 不缓存，使用协商缓存

`must-revalidate`: 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源。

更多设置，移动[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

```js
// 示例
Cache-Control: no-cache, no-store, must-revalidate
Cache-Control:public, max-age=31536000
Cache-Control: max-age=3600, must-revalidate
```

### http1.0 时代的缓存 Expires+Pragma

**Expires 用于设置缓存到期时间**：

指定缓存到期 GMT 的绝对时间，如果设了 max-age，max-age 就会覆盖 expires，如果 expires 到期需要重新请求。

```js
Expires:Sat, 09 Jun 2018 08:13:56 GMT
```

有一个问题是由于使用具体时间，如果时间表示出错或者没有转换到正确的时区都可能造成缓存生命周期出错。

**Pragma 禁用缓存：**

`Pragma : no-cache` 表示防止客户端缓存，需要强制从服务器获取最新的数据；

```js
Pragma: no - cache //只有这一个用法 禁用缓存，强制从服务器获取最新的数据；
```

### 强缓存命中 from memory cache & from disk cache

在测试的时候，看到命中强缓存时，有两种状态，200 (from memory cache) cache & 200 (from disk cache)，于是去找了一下这两者的区别：

memory cache: 将资源存到**内存**中，从内存中获取。

disk cache：将资源缓存到**磁盘**中，从磁盘中获取。

二者最大的区别在于：**当退出进程时，内存中的数据会被清空，而磁盘的数据不会**。

更详细的介绍推荐这篇[文章](https://blog.csdn.net/baidu_38742725/article/details/77181078)

---

### 弱缓存：

如果强缓存时间过期，或者没有设置，导致未命中的话。就进入到了弱缓存的阶段了，

**Last-Modified & if-modified-since:**

Last-Modified 与 If-Modified-Since 是一对报文头，属于 http 1.0。

last-modified 是 web 服务器认为文件的最后修改时间，`last-modified`是第一次请求文件的时候，**服务器返回**的一个属性。

```js
Last-Modified: Sat, 09 Jun 2018 08:13:56 GMT
```

第二次请求这个文件时，浏览器把`If-Modified-Since`**发送给服务器**，询问该时间之后文件是否被修改过。

```js
If-Modified-Since: Sat, 09 Jun 2018 08:13:56 GMT // 跟Last-Modified的值一样
```

**ETag & If-None-Match**

ETag 与 If-None-Match 是一对报文，属于 http 1.1。

**ETag 是一个文件的唯一标志符**。就像一个哈希或者指纹，每个文件都有一个单独的标志，只要这个文件发生了改变，这个标志就会发生变化。

ETag 机制类似于乐观锁机制，如果请求报文的 ETag 与服务器的不一致，则表示该资源已经被修改过来，需要发最新的内容给浏览器。

`ETag`也是首次请求的时候，服务器返回的:

```js
ETag: '8F759D4F67D66A7244638AD249675BE2' // 长这样
```

`If-None-Match`也是浏览器发送到服务器验证，文件是否改变的:

```js
If-None-Match: "8F759D4F67D66A7244638AD249675BE2" // 跟ETag的值一样
```

### **Etag/lastModified 过程如下:**

1. 客户端第一次向服务器发起请求,服务器将附加`Last-Modified/ETag`到所提供的资源上去
2. 当再一次请求资源,**如果没有命中强缓存**,在执行在验证时,**将上次请求时服务器返回的 Last-Modified/ETag 一起传递给服务器**。
3. 服务器检查该 Last-Modified 或 ETag，并判断出该资源**页面自上次客户端请求之后还未被修改，返回响应 304 和一个空的响应体**。

### 同时使用两个报文头:

同时使用这两个报文头，**两个都匹配才会命中弱缓存**，否则将重新请求资源。

![](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e3d5d5e2119a5?raw=true)

### Etag 主要为了解决 Last-Modified 无法解决的一些问题：

1. 一些文件也许内容并不改变(仅仅改变的修改时间)，这个时候我们不希望文件重新加载。（Etag 值会触发缓存，Last-Modified 不会触发）
2. If-Modified-Since 能检查到的粒度是秒级的，当修改非常频繁时，Last-Modified 会触发缓存，而 Etag 的值不会触发，重新加载。
3. 某些服务器不能精确的得到文件的最后修改时间。

---

### 用户操作行为与缓存

F5 刷新导致强缓存失效。

ctrl+F5 强制刷新页面强缓存，弱缓存都会失效。

![图片出自网络](https://github.com/OBKoro1/articleImg_src/blob/master/juejin/163e4019ed29d0ae?raw=true)

### 如何设置？

一般是服务器端设置这些请求头的，我自己试了用阿里云服务器设置`Cache-Control`，设置一下很方便的。

---

### 小结

通过网络重复请求资源既缓慢，成本又高，缓存和重用以前获取的资源的能力成为优化性能很关键的一个方面,也是大厂面试时很频繁出现的内容，掌握好这块知识点是非常重要的，希望本文能给你带来些收获。

文章如有不正确的地方欢迎各位路过的大佬鞭策！喜欢的话，赶紧点波~~订阅~~关注/喜欢。

<!-- 特殊字符串：用于修改/删除markdown的结尾提示语-->

### 点个[Star](https://boom-bo.github.io/web_accumulation)支持我一下~
