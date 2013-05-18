GadgetCharacter
===============

Windows7用ガジェットでゴミファイルを食べて成長するキャラクター


## データ構造

### Character
- totale_file_size : 今ままでに取得したファイルのサイズ
- base : キャラクターマスター
- level : キャラクターの現在のレベル＝表示段階。画像イメージがここでかわる


### CharacterBase
- id : キャラクターのID。キャラクターディレクトリ名と同期させる必要がある
- name : キャラクターの名前
- level_max : 最大レベル
- level_up_margin : そのレベルになるのに必要なファイルサイズの配列
- images : 画像ファイルパスの配列
- words : 台詞ファイル(JSON)パス

### Words
- id : 台詞のID
- status : 対象となるステータス
- threshold : しきい値。ステータス値が閾値以上なら発言対象となる
- sentence : 文章

