function solution(video_len, pos, op_start, op_end, commands) {
  const commandsObject = {
    prev: -10,
    next: 10,
  };

  const toSec = (time) => {
    const [minute, sec] = time.split(":").map(Number);
    return minute * 60 + sec;
  };

  const toFormat = (secs) => {
    let minute = Math.floor(secs / 60);
    let sec = secs % 60;

    const mm = String(minute).padStart(2, "0");
    const ss = String(sec).padStart(2, "0");

    return `${mm}:${ss}`;
  };

  const VideoLen = toSec(video_len);
  let Pos = toSec(pos);
  const OpStart = toSec(op_start);
  const OpEnd = toSec(op_end);

  if (Pos >= OpStart && Pos < OpEnd) Pos = OpEnd;

  commands.forEach((commands) => {
    if (Pos >= OpStart && Pos < OpEnd) {
      Pos = OpEnd;
    }

    Pos += commandsObject[commands];

    if (Pos < 0) Pos = 0;
    if (Pos > VideoLen) Pos = VideoLen;

    if (Pos >= OpStart && Pos < OpEnd) {
      Pos = OpEnd;
    }
  });

  return toFormat(Pos);
}
