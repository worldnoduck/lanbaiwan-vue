<template>
    <div class="container">
      <header class="header">
        <h1>蓝白碗</h1>
        <p>更加便捷和有趣</p>
      </header>
      <main class="main-content">
        <section class="intro">
          <h2>联系方式</h2>
          <p>
            
            <strong>QQ</strong> 2416994895

          </p>
        </section>
        <section class="features">
        
        </section>
      </main>
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2024 蓝白碗工具集. All rights reserved.</p>
          <p>备案号：<a href="https://www.beian.miit.gov.cn" target="_blank">粤ICP备12345678号</a></p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    color: #333;
    padding: 20px;
    position: relative;
    min-height: 100vh;
  }
  
  .header {
    background: #f0f0f0;
    padding: 10px;
    text-align: center;
  }
  
  .header h1 {
    color: #ff6f61;
  }
  
  .main-content {
    margin: 20px auto;
    max-width: 800px;
  }
  
  .intro, .features {
    margin-bottom: 20px;
    background-color: #f0f0f0
  }
  
  .features ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .footer {
    background: #f0f0f0;
    padding: 10px;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  
  .footer-content a {
    color: #ff6f61;
    text-decoration: none;
  }
  
  .footer-content a:hover {
    text-decoration: underline;
  }
  </style>
  