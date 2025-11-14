const WEBHOOK_URL = "https://ptb.discord.com/api/webhooks/1438771431772258355/8_yBf-nClQbjrYUACb43hTrP3ulqJBVUp9ekl_a9ejo8Zph38Z3Ub1ILBJVMpu-BKgbp";

async function sendScore(game, score) {
    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            game: game,
            score: score,
            timestamp: Date.now()
        })
    });
}
