[![](https://mermaid.ink/img/pako:eNplkU1uxCAMha-C2DZzARYzm1aquu02Gw92GiT-BoOiaDR3LySkUlQvLOu9z8bAU-qAJJVkehTymt4N_CRwoxc1IMbL9fr2FWavxCdZG0SrBzGHRUAisYZyO6GcQyIlmPkkkwXORleDPFJK7bB0bnxwdR-8EWJKwQlYWGhryO7gNrqiFzQcQedZ1WSCF4mw6GPcbs4N7Lriv226Ur3W6hUjYt9iG9WMGBUAdHVhBldVC84jKIEUbVj_m_dm3ouxfdyej5CDdJQcGKwP_WzeKPNMjkapaok0QbF5lKN_VbREhEwfaOp9pZrAMg0SSg7fq9dS5VTogPpnder1C98ImL8)](https://mermaid.live/edit#pako:eNplkU1uxCAMha-C2DZzARYzm1aquu02Gw92GiT-BoOiaDR3LySkUlQvLOu9z8bAU-qAJJVkehTymt4N_CRwoxc1IMbL9fr2FWavxCdZG0SrBzGHRUAisYZyO6GcQyIlmPkkkwXORleDPFJK7bB0bnxwdR-8EWJKwQlYWGhryO7gNrqiFzQcQedZ1WSCF4mw6GPcbs4N7Lriv226Ur3W6hUjYt9iG9WMGBUAdHVhBldVC84jKIEUbVj_m_dm3ouxfdyej5CDdJQcGKwP_WzeKPNMjkapaok0QbF5lKN_VbREhEwfaOp9pZrAMg0SSg7fq9dS5VTogPpnder1C98ImL8)

[![](https://mermaid.ink/img/pako:eNqVk9FugjAUhl-l6fXwAbgjQAyJGwaciQk3R3qQzkJJKSaL-O4rDCbodFkv6ff9_0lpzzSVDKlNUXkcDgqKpCQ_y6mqOkfUpG0Xi_ZMYueV2CSHegrFN9DSif-GXClgb7CEZlzV2lkHpDwoeSQ1KjihSujM1qDx-RADYVnSEKtugkpAio8hqLjpMlX9FILDXiDJ5IPmXkEBtT7WCCrN76yrM_WvLUMG-4DyIJ923jkCujMR95VTawgeFMXqpx1j5BN8lt4B_zuFmzUN8_xVsPWjneV4XuTH8ZgcRp4fmUiFKfLT_N8Fb9swcP0eba9oKs05zcDvnSlmBRu_uzK8TEXD5rHrKPTe3Y3lOht_GUa7URy-9w2lBl7-Zs3mHlsSKhVDhcz0zc-cEPpCC1QFcGZe3LnbS6jOscCEdiLDDBqhO-ti0KZi5vL5jGupqJ2BqPGFQqNl_Fmm1NaqwREa3u5AXb4AsUod7A)](https://mermaid.live/edit#pako:eNqVk9FugjAUhl-l6fXwAbgjQAyJGwaciQk3R3qQzkJJKSaL-O4rDCbodFkv6ff9_0lpzzSVDKlNUXkcDgqKpCQ_y6mqOkfUpG0Xi_ZMYueV2CSHegrFN9DSif-GXClgb7CEZlzV2lkHpDwoeSQ1KjihSujM1qDx-RADYVnSEKtugkpAio8hqLjpMlX9FILDXiDJ5IPmXkEBtT7WCCrN76yrM_WvLUMG-4DyIJ923jkCujMR95VTawgeFMXqpx1j5BN8lt4B_zuFmzUN8_xVsPWjneV4XuTH8ZgcRp4fmUiFKfLT_N8Fb9swcP0eba9oKs05zcDvnSlmBRu_uzK8TEXD5rHrKPTe3Y3lOht_GUa7URy-9w2lBl7-Zs3mHlsSKhVDhcz0zc-cEPpCC1QFcGZe3LnbS6jOscCEdiLDDBqhO-ti0KZi5vL5jGupqJ2BqPGFQqNl_Fmm1NaqwREa3u5AXb4AsUod7A)


# BPMS CHAT (業務フローを元に作成）

![image](https://user-images.githubusercontent.com/1344355/152995665-0d114337-7384-403e-bcdb-4711f03c80af.png)

## 方針
- 情報基盤　PHP業務システム(PHPRUNNER)
- 業務フロー　画面　BPMS(Processmaker）
- API（NODE,PYTHON,PHP GraphQL)
- 開発などの資料まとめ、業務（GSS)
- 業務ロジック（GAS)
- 業務用アプリ（APPSHEET)
- 上記の内容を元に、ReactNaiveをベースとしてAPI通信のサービスの作成

  - 開発は単体テストの為、GITPODで単体でステップ実行
  - サービス用はDockerで起動
- <a href="https://docs.google.com/spreadsheets/d/15RR8KdM2yseGNzyem_OnHc7OwDNij8OLic8OKcJbxPU/edit#gid=674693680" target=_blunk>spreadsheet</a>SpreadSheetにシステムを統一
- 単体テストは　スプレッドシートに関数を記載して一括テスト
- python で操作（GASと兼用）https://github.com/googleworkspace/python-samples

# BPMS
  - processmaker https://www.processmaker.com/
  - [mermaid](https://mermaid.live/edit/?gist=#eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgQWxpY2UtPj4rSm9objogSGVsbG8gSm9obiwgaG93IGFyZSB5b3U_XG4gICAgQWxpY2UtPj4rSm9objogSm9obiwgY2FuIHlvdSBoZWFyIG1lP1xuICAgIEpvaG4tLT4-LUFsaWNlOiBIaSBBbGljZSwgSSBjYW4gaGVhciB5b3UhXG4gICAgSm9obi0tPj4tQWxpY2U6IEkgZmVlbCBncmVhdCEgaHR0cHM6Ly9qcFxuICAgIEpvaG4tPj4rdGVzdDogYWFhYWFhYVxuICAgIHRlc3QtPj4tYWFhOiBhYWFhXG4gICAgICAgICAgICAiLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjp0cnVlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0)

![image](https://user-images.githubusercontent.com/1344355/153618480-2eca408f-6871-46f7-baa4-1745b3be394c.png)


# APPSHEET
- アプリの雛型の作成
- sheetの内容を各種データに変換した後データ確認用のアプリを作成する

![image](https://user-images.githubusercontent.com/1344355/153668920-b021911a-aa3c-4510-a910-e18a5caae12b.png)


# opencolab
 - python https://colab.research.google.com/drive/12JbdQ8-Wsq1FJk0FKNSM7gtgBLf0RVu7
 - nodejs 設定方法

# nodejs(GASで作成する前にNodejsで作成）

![image](https://user-images.githubusercontent.com/1344355/152913146-e0c37d62-b950-45f3-95e6-263630218757.png)


# AWS
  - btobe
  - ecr
  - ec2
  - cloudfrong
  - routes3（Domain管理）
  - lambda
  - apigateway gcp のFunction と比較（FiraBase連携）
  - cloudfront
  
  - ahuna nosql query https://aws.amazon.com/jp/athena/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc
  - ses https://aws.amazon.com/jp/ses/
  - cloudwatch
  - kibana
  - travisci
  - ELB(ロードバランサー）
  - securitygroup(ファイヤーウォール設定）
  - table(ルーティング設定）
# github CIDI
  - [gasの自動アップデート](https://github.com/bpmbox/gasaction)
  - action gas
  - action eca
# ReatNative React(VS Codeでdebugが出来ないとキツイ）
  https://v5.reactrouter.com/web/example/nesting
  - reactbase
  - builderx(GUIのデザイン）
  - https://www.gitpod.io/docs/quickstart/react(REACTのデバッグ方法確認）
  - https://github.com/apolopena/express-react-starter(GITHUB Laravel starter)

1. navigation https://reactnavigation.org/docs/navigation-lifecycle
2. redux 

![image](https://user-images.githubusercontent.com/1344355/153439067-13df1bcd-b372-4f3e-9e96-7ea89406cf8d.png)
1,vscodeをローカルで立てる
2,task.json

# Expo(step debug 確認）
 - https://snack.expo.dev/
  https://zenn.dev/hal1986/articles/20211225-eas-build-and-submit
  - ecs ios build
# laravel(STEP デバッグの確認GITPOD)　20220208 これが出来た後、APPSHEETで開発
  - https://github.com/apolopena/gitpod-laravel-starter#the-default-development-server
  - graphql https://don-bu-rakko.com/laravel-%E3%81%A7-graphql-%E3%82%92%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B%EF%BC%81-lighthouse%E3%83%8F%E3%83%B3%E3%82%BA%E3%82%AA%E3%83%B3/
  - scaffold
![image](https://user-images.githubusercontent.com/1344355/152865286-8d09222e-1bd0-46dd-b606-418998b1f1cf.png)

デバッグURL

- cloud9上でデバッグ実行をして、リモートからURLをたたく（GITPODでも同じか）

https://URL?XDEBUG_SESSION_START=cloud9ide

1. 上記のURLを実行
2. Cloud9上で　ステップ実行開始
3. リアルタイムで、プログラムの内容を確認

![image](https://user-images.githubusercontent.com/1344355/136885873-dc1f2294-cba7-4c05-98f9-c8ea3000ecbd.png)



# Django
![image](https://user-images.githubusercontent.com/1344355/152696685-c2c1888d-76ad-4a66-835c-6ba3d87cfb38.png)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/template-python-django)
  - template https://gitpod.io/#https://github.com/gitpod-io/template-python-django
  - template github https://github.com/gitpod-io/template-python-django
  - Document https://docs.djangoproject.com/ja/4.0/intro/tutorial03/
  - celery バックグラウンドキュー　https://qiita.com/kwi/items/bd289aeff0fa5881e797
  - debug https://djangobrothers.com/blogs/django_debug_toolbar/
  - graphqllog https://www.moesif.com/ Reactで通信の場合ログが必要
  - profile https://github.com/jazzband/django-silk
  - push https://github.com/jazzband/django-silk
  - graphql https://django-graphql-auth.readthedocs.io/en/latest/
  - elasticapm https://dev.classmethod.jp/articles/get-started-elastic-apm/
# GraphQL
  - HASURA(TEST SITE)https://cloud.hasura.io/project/7b8a6471-20a5-45d0-b940-d16d5b133ace/console/data/manage/connect
  - gas
  - python
  - php
  - nodejs
  - hasura
# Google colab
  https://colab.research.google.com/github/Pippippi3104/colab_sample/blob/master/github.ipynb
  - visualstdio code
  - google spread https://developers.google.com/sheets/api/quickstart/python (gas ＋　Python で制御）
  - GOOGLE 操作　https://colab.research.google.com/notebooks/io.ipynb#scrollTo=J4QxBareshEV
# OpenAI
  - https://beta.openai.com/examples/
  - https://aihub.cloud.google.com/u/0/p/products%2Fec58b241-50d4-45e4-a673-4cfffceec8b3
# ChatworkBot
# LineBot
  - LINEAPI と GASでのチャットボット
# APIServer(Laravel Django hasura)
  https://hasura.io/docs/latest/graphql/core/guides/mysql-preview.html
### Line
### OCR
### GoogleCustomSearch
### FireBase
- FireBaseで基盤システムは開発（チャット母体）
- https://bpmbox.github.io/tutorials

### sendbird
- https://github.com/sendbird １からソースを見るのが良い
### sendgrid
### mailhog
### teraform
 - teraformer aws
 - teraformer サーバー設定自動出力　https://qiita.com/andromeda/items/fda67a65bbb56f21e6bd

# Google Apps Script Samples [![Build Status](https://travis-ci.org/googleworkspace/apps-script-samples.svg?branch=master)](https://travis-ci.org/googleworkspace/apps-script-samples)

Various sample code and projects for the Google Apps Script platform, a JavaScript platform in the cloud.

Learn more at [developers.google.com](https://developers.google.com/apps-script).

## Google APIs

<img
src="https://www.gstatic.com/images/branding/product/2x/admin_96dp.png"
align="left"
width="96px"/>
### AdminSDK
- [Manage domains and apps](adminSDK)
<br><br>

dithub dev

<img
src="https://www.gstatic.com/images/branding/product/2x/google_cloud_96dp.png"
align="left"
width="96px"/>
### Advanced Services
- [Access Google APIs via Advanced Google services](advanced/)
<br><br>

<img
src="https://www.gstatic.com/images/branding/product/2x/calendar_96dp.png"
align="left"
width="96px"/>
### Calendar
- [List upcoming events](calendar/quickstart)
- [Create a vacation calendar](calendar/vacationCalendar)

<img
src="https://www.gstatic.com/images/branding/product/2x/classroom_96dp.png"
align="left"
width="96px"/>
### Classroom
- [Manage Google Classroom](classroom/quickstart)
<br><br>

<img
src="https://www.gstatic.com/images/branding/product/2x/data_studio_96dp.png"
align="left"
width="96px"/>
### Data Studio
- [Build a connector](data-studio/build.gs)
- [Authentication and Authorization](data-studio/auth.gs)

<img
src="https://www.gstatic.com/images/branding/product/2x/docs_96dp.png"
align="left"
width="96px"/>
### Docs
- [Cursor inspector add-on](docs/cursorInspector)
- [Translate add-on](docs/translate)

<img
src="https://www.gstatic.com/images/branding/product/2x/drive_96dp.png"
align="left"
width="96px"/>
### Drive
- [Manage Google Drive files and folders](drive/quickstart)
- [View Google Drive activity](drive/activity)

<img
src="https://www.gstatic.com/images/branding/product/2x/forms_96dp.png"
align="left"
width="96px"/>
### Forms
- [Notification add-on](forms)
<br><br>

<img
src="https://www.gstatic.com/images/branding/product/2x/gmail_96dp.png"
align="left"
width="96px"/>
### Gmail
- [Sending email](gmail/sendingEmails)
- [Mailmerge: Merge a template email with content](gmail/mailmerge)

<img
src="https://www.gstatic.com/images/icons/material/system/2x/people_black_48dp.png"
align="left"
width="96px"/>
### People
- [Listing Connections](people/quickstart)
<br><br>

<img
src="https://www.gstatic.com/images/branding/product/2x/sheets_96dp.png"
align="left"
width="96px"/>
### Sheets
- [Managing Responses for Google Forms](sheets)
- [Menus and Custom Functions](sheets)

<img
src="https://www.gstatic.com/images/branding/product/2x/slides_96dp.png"
align="left"
width="96px"/>
### Slides
- [Translate Slides Add-on](slides/translate)
- [Progress Bars add-on](slides/progress)

<img
src="https://www.gstatic.com/images/branding/product/2x/tasks_96dp.png"
align="left"
width="96px"/>
### Tasks
- [List Tasks](tasks/quickstart)
- [Simple Tasks Web App](tasks/simpleTasks)

<img
src="https://www.gstatic.com/images/icons/material/system/2x/code_grey600_48dp.png"
align="left"
width="96px"/>
### Templates
- Build off a working framework for new Apps Script projects.
<br><br>

<img
src="https://www.gstatic.com/images/icons/material/system/2x/alarm_grey600_48dp.png"
align="left"
width="96px"/>
### Triggers
- Call an Apps Script function such as `onOpen`, `onEdit`, or `onInstall` in an add-on
- Create a [time-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#time_driven_triggers)

## Codelabs

Codelab tutorials combine detailed explanation, coding exercises, and documented best practices to help engineers get up to speed with key Google technologies. Here's a list of Apps Script codelabs:

- [Apps Script Intro](http://g.co/codelabs/apps-script-intro)
- [Apps Script CLI – clasp](http://g.co/codelabs/clasp)
- [BigQuery + Sheets + Slides](http://g.co/codelabs/bigquery-sheets-slides)
- [Docs Add-on + Cloud Natural Language API](http://g.co/codelabs/nlp-docs)
- [Gmail Add-ons](http://g.co/codelabs/gmail-add-ons)
- [Hangouts Chat Bots](http://g.co/codelabs/chat-apps-script)

## Clone using the `clasp` command-line tool

Learn how to clone, pull, and push Apps Script projects on the command-line
using [clasp](https://developers.google.com/apps-script/guides/clasp).

## Lint

Run ESLint over this whole repository with:

```shell
npm run lint
```

This command will fix simple errors.
