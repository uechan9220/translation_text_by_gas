function doGet(e) {
  const params = e.parameter;

  //DeepLのAPIキーを設定 ※各自のAPIキーで書き換え
  let apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
  //Deeplに翻訳したいテキスト
  let text = params.text;
  //DeepLのAPIにリクエストするURLを設定
  let apiUrl = 'https://api-free.deepl.com/v2/translate?auth_key=';
  //翻訳を英語に指定。
  let lang = 'EN';
  //パラメータを設定
  apiUrl = apiUrl + apiKey + '&text=' + text + '&target_lang=' + lang;
  //DeeplAPIに翻訳をリクエスト
  let response = UrlFetchApp.fetch(apiUrl).getContentText();
  //responseを元に文字列抽出
  let translationText = JSON.parse(response).translations[0].text;

  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(translationText);
  return output;
}
