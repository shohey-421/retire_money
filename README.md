<img width="643" alt="スクリーンショット 2020-10-02 18 31 52" src="https://user-images.githubusercontent.com/69449342/94909081-9809e180-04dd-11eb-93bc-8633e7d6e88a.png">

## 概要
フォームの説明に沿って収入や支出、現在の貯蓄額を入力することで、退職後１年間分の貯蓄推移を表で確認できます。

## 開発環境 
- Ruby 2.6.5
- Ruby on Rails 6.0.0
- jQuery
- VSCode(Visual Studio Code)

## 制作背景
会社に勤めている場合とそうでない場合で、社会保険料などの負担が大きく変わってきます。  
退職後に転職活動を予定していたりすると、お金の心配事は特に大きいのではないでしょうか。  
主にそのような方に向けて、お金の計算を少しでもサポートできればと思い制作しました。

## URL
 **https://retire-money.herokuapp.com/**

## 利用方法
![table](https://user-images.githubusercontent.com/69449342/94896545-b1ecf980-04c8-11eb-87b9-abdfed6a5341.gif)
![modal](https://user-images.githubusercontent.com/69449342/94896540-af8a9f80-04c8-11eb-8abc-fb8b4e3d7435.gif)

- フォームに金額を入力した後、「表を作成・更新」ボタンをクリックしてください。
- 入力内容に不備がある場合はメッセージが表示されますので、修正してください。
- 項目名横の「iマーク」をクリックすることで、詳細説明や参考リンクが確認できます。
- 「入力内容をリセット」ボタンをクリックすることでフォームと表が初期化されます。

## ローカルでの動作方法
`$ git clone https://github.com/shohey-421/retire_money.git`  
`% cd retire_money.git`  
`% bundle install`  
`% rails db:create`  
`% rails db:migrate`  
`$ rails s`  

- - -
## 実装予定の機能
- 表の外部データ出力機能（スプレッドシートなど）、一時保存
