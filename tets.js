function test(){
  
  function didmount(){
  }
  
  function willmount(){
  }

  // Personクラスを定義する（引数付き）
  class Person {
    // プロパティを追加する
    constructor(name,greetingword) {
      this.name = name;
      this.greetingword = greetingword;
    }
    
    // メソッドを追加する
　　greeting(){
        Logger.log(this.greetingword);
    }
  }

　// new演算子で引数を渡してインスタンスを作成する
　var hirachin = new Person("ひらちん","オッス！")

　// メソッドを実行する
　hirachin.greeting()
}

