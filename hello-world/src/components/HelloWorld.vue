<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      appleの公式リンクを貼りまくってみる。公式サイト→
      <a href="https://www.apple.com/jp/" target="_blank" rel="noopener">Apple公式ページ</a>
    </p>
    <h3>現在販売中のiPhone</h3>
    <ul>
      <li><a href="https://www.apple.com/jp/shop/buy-iphone/iphone-7" target="_blank" rel="noopener">iPhone7</a></li>
      <li><a href="https://www.apple.com/jp/shop/buy-iphone/iphone-8" target="_blank" rel="noopener">iPhone8</a></li>
      <li><a href="https://www.apple.com/jp/shop/buy-iphone/iphone-xr" target="_blank" rel="noopener">iPhone XS/XS Max</a></li>
      <li><a href="https://www.apple.com/jp/shop/buy-iphone/iphone-xs" target="_blank" rel="noopener">iPhone XR</a></li>
    </ul>
    <h3>現在販売中のiPad</h3>
    <ul>
      <li><a href="https://www.apple.com/jp/ipad-mini-4/" target="_blank" rel="noopener">iPad mini 4</a></li>
      <li><a href="https://www.apple.com/jp/ipad-9.7/" target="_blank" rel="noopener">iPad</a></li>
      <li><a href="https://www.apple.com/jp/shop/buy-ipad/ipad-pro-10-5" target="_blank" rel="noopener">iPad Pro 10.5inch</a></li>
      <li><a href="https://www.apple.com/jp/ipad-pro/" target="_blank" rel="noopener">new iPad Pro</a></li>
    </ul>
    <h3>現在販売中のMacBook</h3>
    <ul>
      <li><a href="https://www.apple.com/jp/macbook/" target="_blank" rel="noopener">MacBook</a></li>
      <li><a href="https://www.apple.com/jp/macbook-air/" target="_blank" rel="noopener">MacBook Air</a></li>
      <li><a href="https://www.apple.com/jp/macbook-pro/" target="_blank" rel="noopener">MacBook Pro</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;

  animation: fadeIn 2s ease 0s 1 normal;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
}

@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}

@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}
</style>
