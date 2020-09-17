# README

## アプリケーション名
退職前にお金について整理するサイト

## アプリケーション概要
フォームの説明に沿って収入や支出、現在の貯蓄額を入力することで、退職後１年間分の貯蓄推移を表で確認できます。

## URL
 **https://retire-money.herokuapp.com/**

## 利用方法
![table](https://user-images.githubusercontent.com/69449342/93432699-dbbaf380-f900-11ea-8f9a-cae7456f8b89.gif)

![modal](https://user-images.githubusercontent.com/69449342/93432777-f4c3a480-f900-11ea-9cc5-62dd7adca403.gif)

- フォームに金額を入力した後、「表を作成・更新」ボタンをクリックしてください。
- 入力内容に不備がある場合はメッセージが表示されますので、修正してください。
- 項目名横の「iマーク」をクリックすることで、詳細説明や参考リンクが確認できます。
- 「入力内容をリセット」ボタンをクリックすることでフォームと表が初期化されます。

## ローカルでの動作方法
`$ git clone https://github.com/shohey-421/retire_money.git`  
`% cd hoge`  
`% bundle install`  
`% rails db:create`  
`% rails db:migrate`  
`$ rails s`  

- - -

## 目指した課題解決
会社に勤めている場合とそうでない場合で、社会保険料や生活費が大きく変わってきます。  
そんな中で、退職や転職に伴うお金の不安、手間を少しでも楽に解決できるよう作成しました。

## 洗い出した要件
- 退職後の支出においては、社会保険料（年金、健康保険）、住民税、生活費、その他を設ける。
- 退職後の収入においては、退職金、失業保険、その他を設ける。
- 失業保険は条件によって給付期間やタイミングが異なるので、条件に応じて表示を変える。
- 支出、収入、貯蓄それそれの合計ランを設ける。
- フォームに金額の入力が終わっていれば、1年間の貯蓄の推移がわかる表を表示する。
- 貯蓄がマイナスになる場合は赤文字にする。
- 各入力項目の詳細説明はモーダルウィンドウで表示する。
- 各入力金額自体の計算は計算方法が多岐にわたるため機能には組み込まず、計算方法がわかる外部リンクを設置する。
- フォームに半角数字以外が入力された場合はメッセージを表示する。

## 実装予定の機能
- 表の外部データ出力機能（スプレッドシートなど）を検討しています。