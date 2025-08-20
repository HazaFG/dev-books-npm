function setGetEnv(fn) {
  _onSetGetEnv();
}
let _onSetGetEnv = () => {
};
function setOnSetGetEnv(fn) {
  _onSetGetEnv = fn;
}

export { setOnSetGetEnv as a, setGetEnv as s };
