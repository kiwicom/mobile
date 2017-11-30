const childProcess = require('child_process');

module.exports = function spawn(task, args, onClose) {
  const child = childProcess.spawn(task, args, {
    stdio: 'inherit',
    env: process.env,
  });

  child.on('error', error => {
    console.log(error);
  });
  child.on('close', code => {
    onClose(code);
  });
};
