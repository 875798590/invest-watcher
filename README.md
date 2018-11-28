# invest-watcher
## 简介
>&nbsp;&nbsp;&nbsp;&nbsp;invest-watcher可以对股票、期货、贵金属投资等进行实时价格监控、持仓记账管理，并记录历史行情数据以供后续的机器学习、数据分析、量化投资等使用。
## 特色功能
### 价格监控
>&nbsp;&nbsp;&nbsp;&nbsp;invest-watcher会从网络上抓取实时的行情数据，结合用户当前的持仓情况，一览式地展示各投资品种的实时价格及用户投资利润。    
### 持仓记账管理
>&nbsp;&nbsp;&nbsp;&nbsp;invest-watcher根据用户开/平仓、做多/空操作实时更新持仓记录。用户每次投资活动的基本信息，包括：操作数量、操作价格、操作利润、操作后的仓位及均价等。用户还可以对某次投资情况进行总结并记录到相应的持仓记录中。
### 数据分析   
>&nbsp;&nbsp;&nbsp;&nbsp;在实时监控行情数据的同时，invest-watcher会周期性（目前为分钟级别）的将投资品种行情数据进行保存。后续可以根据这些历史行情数据，使用数据分析、机器学习、量化投资等技术进行分析。invest-watcher后期可能推出对投资模型进行实时验证评估等功能。
### 支持品种
>+ 工商银行
>   + 黄金
>   + 白银
>   + 原油
>   + 天然气   
>
> &nbsp;&nbsp;&nbsp;&nbsp;更多投资品种持续开发中
## 运行测试
>&nbsp;&nbsp;&nbsp;&nbsp;首先执行数据库建库脚本sql/invest.sql，之后执行“java -jar invest-watcher-1.0-SNAPSHOT.jar"即可。运行截图如下：
### 实时价格监控
![Image text](https://github.com/haoshen/invest-watcher/blob/master/screenshot/market.png)
### 持仓记账管理
![Image text](https://github.com/haoshen/invest-watcher/blob/master/screenshot/hold.png)
### 其他
>&nbsp;&nbsp;&nbsp;&nbsp;其他页面包括帮助页面、用户登录页面等，省略
## Contact Me
>&nbsp;&nbsp;&nbsp;&nbsp;项目基础功能已开发完成，目前处于维护及bug修复过程中。  
>&nbsp;&nbsp;&nbsp;&nbsp;如果您对本项目感兴趣，欢迎联系：717632581@qq.com（Email），woshiwanghao_hi（WeChat）
