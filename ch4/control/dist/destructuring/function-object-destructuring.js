function play({ ready, minute = -1 } = { ready: "" }) {
    console.log(ready, minute);
}
play({ ready: "yes" });
play({ ready: "yes", minute: 30 });
play();
