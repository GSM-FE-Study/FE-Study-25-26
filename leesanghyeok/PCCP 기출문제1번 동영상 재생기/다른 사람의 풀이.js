function toSeconds(time) {
  const [minute, second] = time.split(":");
  return minute * 60 + Number(second);
}

function solution(video_len, pos, op_start, op_end, commands) {
  let position = toSeconds(pos);
  const videoLen = toSeconds(video_len);
  const opStart = toSeconds(op_start);
  const opEnd = toSeconds(op_end);

  if (opStart <= position && position <= opEnd) position = opEnd;

  commands.forEach((command) => {
    position += command === "next" ? 10 : -10;
    position = Math.max(0, Math.min(position, videoLen));
    if (opStart <= position && position <= opEnd) position = opEnd;
  });

  const minute = Math.floor(position / 60)
    .toString()
    .padStart(2, "0");
  const second = (position % 60).toString().padStart(2, "0");
  return minute + ":" + second;
}
