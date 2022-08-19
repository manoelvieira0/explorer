function updateTimerDisplay(minutes, seconds) {
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      resetControlls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

export {countdown, resetTimer}