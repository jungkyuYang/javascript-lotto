const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const VendingMachine = require("./lotto/domain/VendingMachine");
const NumberGenerator = require("./lotto/domain/NumberGenerator");

class App {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.numberGenerator = new NumberGenerator();
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.vendingMachine.setMoney(money);

      return this.printLotto(money);
    });
  }

  printLotto(money) {
    Console.print(`\n${money / 1000}개를 구매했습니다.`);

    let totalLotto = [];

    for (let changeMoney = money; changeMoney >= 1000; changeMoney -= 1000) {
      const purchasedLotto = this.numberGenerator.createRandomNumbers();
      const strPurchasedLotto = "[" + purchasedLotto.join(", ") + "]";

      totalLotto.push(purchasedLotto);
      Console.print(strPurchasedLotto);
    }

    return;
  }
}

const app = new App();
app.play();

module.exports = App;
