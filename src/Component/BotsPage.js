import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botsArmy, setBotsArmy] = useState([]);

  function getMyArmy(newBot) {
    if (botsArmy.includes(newBot)) return true;
    setBotsArmy((botsArmy) => [...botsArmy, newBot]);
  }

  function handleFilter(newBot) {
    const filterArmy = botsArmy.filter((bot) => bot !== newBot);
    return setBotsArmy(filterArmy);
  }

  useEffect(() => {
    fetch("https://api.npoint.io/355a876266adae40daf4/bots/")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <YourBotArmy
        handleFilter={handleFilter}
        getMyArmy={getMyArmy}
        botsArmy={botsArmy}
      />
      <BotCollection getMyArmy={getMyArmy} bots={bots} />
    </div>
  );
}

export default BotsPage;
