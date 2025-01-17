# Java学習チェックリスト

## 1. Javaの基本概念

- 1.1. プログラム構造
  - 1.1.1. クラス宣言
    - アクセス修飾子 (public、private、protected、default)
    - staticキーワード
    - 抽象クラス
    - finalクラス
  - 1.1.2. メソッド宣言
    - メソッドのオーバーロード
    - メソッドのオーバーライド
  - 1.2. インターフェース宣言
    - 1.2.1. デフォルトメソッド
    - 1.2.2. 静的メソッド
  - 1.3. パッケージとインポート
    - 1.3.1. パッケージの階層構造
    - 1.3.2. static import

## 2. データ型と変数

- 2.1. プリミティブデータ型
  - int、double、charなど
- 2.2. ラッパークラス
  - Integer、Doubleなど
- 2.3. 列挙型 (Enum)
- 2.4. null値とNullPointerException

## 3. 演算子と式

- 3.1. 代入演算子
  - =、+=、-=など
- 3.2. 算術演算子
  - +、-、*、/など
- 3.3. 比較演算子
  - ==、!=、<、>など
- 3.4. 論理演算子
  - &&、||、!など
- 3.5. 三項演算子 (条件演算子)

## 4. 制御構造

- 4.1. if文と条件式
  - 4.1.1. else if
- 4.2. forループ、whileループ、do-whileループ
  - 4.2.1. 拡張forループ
- 4.3. switch文
  - 4.3.1. breakとcontinueステートメント
- 4.4. ループのラベル

## 5. クラスとオブジェクト

- 5.1. クラスの作成
  - 5.1.1. フィールド (インスタンス変数)とアクセス修飾子
    - パッケージプライベート
  - 5.1.2. クラス変数 (static変数)
    - finalキーワード
  - 5.1.3. メソッドの作成
    - メソッドの可視性 (public、private、protected)
    - 静的メソッド
    - メソッドの引数と戻り値
    - メソッドのオーバーロード
- 5.2. コンストラクタ
  - 5.2.1. パラメータつきコンストラクタ
  - 5.2.2. デフォルトコンストラクタ
  - 5.2.3. thisキーワード
- 5.3. インスタンスとオブジェクトの作成
- 5.4. パッケージアクセスクラス

## 6. カプセル化と継承

- 6.1. カプセル化
  - 6.1.1. ゲッターとセッター
    - アクセス修飾子
- 6.2. 継承
  - 6.2.1. スーパークラスとサブクラスの関係
    - extendsキーワード
    - superキーワード
    - finalクラスとfinalメソッド
  - 6.2.2. 抽象クラス
    - abstractキーワード
- 6.3. インターフェース
  - 6.3.1. インターフェースの宣言と実装
  - 6.3.2. デフォルトメソッド
  - 6.3.3. 関数型インターフェース

## 7. ポリモーフィズム

- 7.1. メソッドのオーバーライド
  - @Overrideアノテーション
  - キャストと型変換
- 7.2. ダイナミックバインディング
- 7.3. ジェネリクス
  - 型パラメータ
- 7.4. ワイルドカード型

## 8. 例外処理

- 8.1. 例外クラスと例外のハンドリング
  - チェック例外と非チェック例外
- 8.2. try-catch-finallyブロック
  - ネストされたtry-catchブロック
- 8.3. throwsキーワード
  - 複数の例外の宣言
- 8.4. 自作例外の作成
  - Checked例外とUnchecked例外

## 9. コレクションフレームワーク

- 9.1. List
  - 9.1.1. ArrayList、LinkedList、Vector
    - 初期容量と拡張容量
    - コレクション操作 (add、remove、getなど)
  - 9.1.2. スレッドセーフなリスト
- 9.2. Set
  - 9.2.1. HashSet、LinkedHashSet、TreeSet
    - ハッシュコードとイコールメソッド
  - 9.2.2. スレッドセーフなセット
- 9.3. Map
  - 9.3.1. HashMap、LinkedHashMap、TreeMap
    - キー-値ペア操作
    - スレッドセーフなマップ
  - 9.3.2. ConcurrentHashMap
  - 9.3.3. WeakHashMap
  - 9.3.4. IdentityHashMap
- 9.4. コレクションのイテレーション
  - for-eachループ
  - Iteratorインターフェース

## 10. ファイル入出力

- 10.1. ファイル読み書き
  - 10.1.1. FileReader、FileWriter、BufferedReader、BufferedWriter
  - 10.1.2. ファイルストリーム
  - 10.1.3. バイトストリームと文字ストリーム
  - 10.1.4. リーダーとライター
- 10.2. ファイル入出力例外処理
- 10.3. シリアライズとデシリアライズ
  - serialVersionUID
  - オブジェクトストリーム

## 11. スレッドと並行プログラミング

- 11.1. スレッドの作成
- 11.2. スレッドのライフサイクル
- 11.3. スレッド同期とロック
  - synchronizedキーワード
  - ミューテックスとセマフォ
- 11.4. Executorフレームワーク
  - スレッドプール
- 11.5. Javaの並行プログラミングベストプラクティス

## 12. ジャンゴニックス

- 12.1. ラムダ式
- 12.2. ストリームAPI
- 12.3. 関数型プログラミングの概念
- 12.4. Optionalクラス
- 12.5. CompletableFutureと非同期プログラミング

## 13. デザインパターン

- 13.1. シングルトンパターン
- 13.2. ファクトリーパターン
- 13.3. アダプターパターン
- 13.4. デコレーターパターン
- 13.5. MVCパターン
- 13.6. その他の一般的なデザインパターン

## 14. データベース接続とJPA

- 14.1. JDBCの基本
- 14.2. データベース接続プール
- 14.3. Java Persistence API (JPA)
- 14.4. Hibernateフレームワーク

## 15. ユニットテスト

- 15.1. JUnitフレームワーク
- 15.2. テスト駆動開発 (TDD)

## 16. Java開発ツール

- 16.1. 統合開発環境 (IDE)
- 16.2. ビルドツール
  - Apache Maven
  - Gradle

## 17. Javaエコシステム

- 17.1. Java Virtual Machine (JVM)
- 17.2. Javaエディション (SE, EE, ME)
- 17.3. Javaコミュニティとリソース

## 18. ベストプラクティスとパフォーマンスチューニング

- 18.1. コーディング規約
- 18.2. パフォーマンスヒント
- 18.3. メモリ管理

## 19. プロジェクトと実践

- 19.1. Javaプロジェクトの構成
- 19.2. バージョン管理システム
  - Git
- 19.3. コードリファクタリング
- 19.4. クリーンコードの原則

## 20. ウェブ開発とフレームワーク

- 20.1. サーブレットとJSP
- 20.2. Spring Framework
- 20.3. JavaServer Faces (JSF)
- 20.4. マイクロサービスアーキテクチャ

## 21. データ処理とデータベース

- 21.1. SQLとデータベース設計
- 21.2. NoSQLデータベース
  - MongoDB、Redisなど
- 21.3. データベースアクセスフレームワーク
  - Hibernate、JPAなど

## 22. クラウドコンピューティングとデプロイメント

- 22.1. AWS、Azure、Google Cloud
- 22.2. Dockerコンテナ
- 22.3. クラウドデプロイメント

## 23. セキュリティ

- 23.1. 認証と認可
- 23.2. セキュアコーディングの原則
- 23.3. SSL/TLS暗号化
- 23.4. OWASP Top Tenプロジェクト

## 24. モバイルアプリケーション開発

- 24.1. Androidアプリ開発
- 24.2. iOSアプリ開発

## 25. インターネット・オブ・シングス (IoT)

- 25.1. IoTデバイスと通信
- 25.2. センサーデータ処理
- 25.3. IoTプロトコル

## 26. ビッグデータ処理と分析

- 26.1. Hadoopエコシステム
- 26.2. Apache Spark
- 26.3. データウェアハウス

## 27. ソフトウェア開発ライフサイクル

- 27.1. アジャイル開発
- 27.2. DevOpsプラクティス
- 27.3. ソフトウェアテストと品質保証

## 28. コーポレートアプリケーションとエンタープライズ開発

- 28.1. エンタープライズJavaBeans (EJB)
- 28.2. サービス指向アーキテクチャ (SOA)
- 28.3. マイクロサービスアーキテクチャ

## 29. ソフトウェアライセンスと著作権

- 29.1. オープンソースソフトウェア
- 29.2. コピーライトとライセンス

## 30. Javaコミュニティとキャリア

- 30.1. Javaユーザーグループ
- 30.2. カンファレンスとセミナー
- 30.3. Java開発者のキャリアパス

## 31. Java 17以降の新機能

- 31.1. プレビュー機能
- 31.2. プロジェクトLoom
- 31.3. プロジェクトValhalla

## 32. その他のJava関連技術

- 32.1. JavaFX
- 32.2. Java Webサービス
- 32.3. Javaコンカレンシー
