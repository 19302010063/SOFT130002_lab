#  Lab4 设计文档

**卢雅棋 19302010063**

## 主页截图

![截图1](images/home1.png)
![截图2](images/home2.png)
![截图3](images/home3.png)


## 布局介绍

### 导航栏
- 左上角显示头像
- 搜索栏

 **navbar-inverse** ：反色， **navbar-brand**:设置品牌图标样式（放置LOGO）
 **container-fluid**：固定宽度布局
 ```
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img alt="Brand" src="./images/logo.jpg" width="40px" height="40px"></a>
      </div>
```



### 轮播图
 **carousel slide**：灵活的响应式的向站点添加滑块的方式
```
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
  
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="./images/1.jpg" width="1500" alt="...">
        <div class="carousel-caption">
          这是一张好看的图片
        </div>
      </div>
      <div class="item">
        <img src="./images/2.jpg" width="1500" alt="...">
        <div class="carousel-caption">
          这仍然是一张好看的图片
        </div>
      </div>
      <div class="item">
        <img src="./images/3.jpg" width="1500" alt="...">
        <div class="carousel-caption">
          这竟然还是一张好看的图片
        </div>
      </div>
    </div>
  
    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
```
