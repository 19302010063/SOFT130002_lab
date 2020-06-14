#  Lab11 实验文档

**卢雅棋 19302010063**

##  1.The function of cookie and session

**（1）Cookie**

Cookie是存储在客户端机器上的小段信息
它由Web服务器发送给浏览器，并代表服务器存储在用户的机器上
它提供了持续的存储识别数据的机制

**（2）Session**

Session是一种服务器端状态持久化机制
将每个用户相对应的相关信息以内存或文件形式保存在服务器端
以独特的SeesionID来唯一标识用户（在PHP中是一个32字节字符串）
通过Cookie机制（默认）或改写URL机制（客户端关闭Cookie）来实现SeesionID的传输

## 2.The advantages & disadvantages of cookie and session

**（1）Cookie的限制:**
1、浏览器保存的Cookie不应超过300个
2、浏览器为每个域保存的Cookie不应超过20个
3、每个Cookie的大小不应超过4KB 
4、需要字符串解析
5、有些服务器不支持
6、需要磁盘I/O,速度较慢
7、有最大存储量限制
8、安全性和个人隐私问题
9、opt-in模型与opt-out模型
**（2）Cookie的优点:**
1、数据持久性
2、不需要任何服务器资源，因为cookie是存储在客户端并发送给服务器读取
3、可配置到期规则，控制cookie的生命周期，使之不会永远有效，偷盗者可能拿到的是一个过期的cookie
4、简单性，基于文件的轻量结构
5、通过良好的编程，控制保存在cookie中的Session对象的大小
6、通过加密和安全传输技术（ssl），减少cookie被破解的可能性
7、只要cookie中不存放敏感的数据，即使被盗也不会有重大损失
**（1）Session的限制:**
1、服务器重启时信息易丢失
2、同一SessionID始终给同一服务器，难以起到负载均衡效果
3、单点故障
**（2）Session的优点:**
1、可直接使用session变量，而不必事先声明它
2、可以存储在内存或文件中
3、同一SessionID始终给同一服务器
