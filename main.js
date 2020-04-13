let max_hp = 0; let now_hp = ""; let enemy_name = ""; let enemy_level = ""; let color = ""

function search() {
  let enemy_name = "slime"
  let enemy_level = 1
  let hp = "";
  let max_hp = 10;
  let now_hp = max_hp;
  let color = "";
  let loop = Math.floor(now_hp / (max_hp / 10))
  if (loop > 5) {
    color = "#4EFF4A"
  } else {
    if (loop < 6) {
      color = "#FFD74A"
    } else {
      if (loop < 3) {
        color = "#FF4A4A"
      }
    }
  }
  document.getElementById('console').innerHTML = "<p>" + enemy_name + " " + enemy_level + "Lv [" + "<span style=\"color:" + color + ";\">" + "■".repeat(loop) + "</span>" + "<span style=\"color:gray;\">" + "■".repeat(10 - loop) + "</span>" + "<span style=\"color:#212121;\">]</span></span>"
  return [max_hp, enemy_name, enemy_level]
}

function attack() {
  if (max_hp == 0) {
    let enemy_date = search()
    max_hp = enemy_date[0];
    enemy_name = enemy_date[1]
    enemy_level = enemy_date[2]
    now_hp = max_hp
    now_hp = now_hp - 1
    console.log(now_hp);
    let loop = Math.floor(now_hp / (max_hp / 10))
    if (loop > 5) {
      color = "#4EFF4A"
    } else {
      if (loop < 3) {
        color = "#FF4A4A"
      } else {
        if (loop < 6) {
          color = "#FFD74A"
        }
      }
    }
    document.getElementById('console').innerHTML = "<p>" + enemy_name + " " + enemy_level + "Lv [" + "<span style=\"color:" + color + ";\">" + "■".repeat(loop) + "</span>" + "<span style=\"color:gray;\">" + "■".repeat(10 - loop) + "</span>" + "<span style=\"color:#212121;\">]</span></span>"
  }else {
    now_hp = now_hp - 1
    console.log(now_hp);
    let loop = Math.floor(now_hp / (max_hp / 10))
    if (loop > 5) {
      color = "#4EFF4A"
    } else {
      if (loop < 3) {
        color = "#FF4A4A"
      } else {
        if (loop < 6) {
          color = "#FFD74A"
        }
      }
    }
    if (now_hp < 0) {
      document.getElementById('console').innerHTML = "<p>kill</p>"
    }else{
    document.getElementById('console').innerHTML = "<p>" + enemy_name + " " + enemy_level + "Lv [" + "<span style=\"color:" + color + ";\">" + "■".repeat(loop) + "</span>" + "<span style=\"color:gray;\">" + "■".repeat(10 - loop) + "</span>" + "<span style=\"color:#212121;\">]</span></span>"
    }
}
}
