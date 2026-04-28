// 打字机动画
function typeWrite(el, text, speed = 25) {
    el.innerText = "";
    let i = 0;
    const timer = setInterval(() => {
        el.innerText += text[i];
        i++;
        if (i >= text.length) clearInterval(timer);
    }, speed);
}

// 三个房间剧情文案
const roomText = {
    1: "你在一座废弃多年的古宅客厅醒来。空气潮湿发霉，烛火幽暗，老旧的红木家具落满灰尘，四周昏暗压抑，出口被锁住，你必须想办法逃离这里……",
    2: "狭长的走廊昏暗幽深，墙壁斑驳，挂着泛黄的旧画像。地上散落着一张旧报纸，尽头的木门被一把挂锁牢牢锁住，只有解开谜题，才能打开通往书房的路。",
    3: "书房尘封已久，书架堆满旧书与信件，桌面上放着上锁的盒子与泛黄日记。这里藏着古宅主人所有秘密，也是逃离的关键。"
};

// 房间切换
function changeRoom(num){
    document.querySelectorAll(".room").forEach(r=>r.classList.remove("active"));
    document.getElementById("room"+num).classList.add("active");
    typeWrite(document.querySelector("#room"+num+" .story-text"), roomText[num]);
}

// ========== 客厅线索 ==========
const noteContent = `你凑近看，纸条上的字迹已经模糊不清，勉强能辨认出：

「它是我生命的四个数字，也是你逃离的钥匙。」

纸条的角落印着一行褪色的年份：1895`;

function examineNote() {
    alert(noteContent);
}

// 客厅密码：1895
function solvePuzzle(){
    let pwd = prompt("请输入密码：");
    if(pwd === "1895"){
        alert("咔哒一声，锁开了！你在里面找到了一把黄铜钥匙。");
        document.getElementById("toRoom2Btn").disabled = false;
        document.getElementById("bag").innerText = "背包：黄铜钥匙";
    }else{
        alert("密码不对，盒子纹丝不动。");
    }
}

// ========== 走廊线索 ==========
const newspaperContent = `你捡起地上泛黄的报纸，头版头条写着：
《古宅主人离奇失踪，亿万家产无人继承，古宅疑似闹鬼》
报纸日期：1927年10月`;

const paintingsContent = `墙上挂着三幅褪色的油画：
1. 第一幅：风景油画，鲜亮得有些诡异，右下角写着年份「1889」
2. 第二幅：人物肖像，依稀能看出是一位中年女子，人脸已经模糊不清，右下角写着年份「1903」
3. 第三幅：静物写生，像小孩子的笔触，右下角写着年份「1915」`;

function examineNewspaper() { alert(newspaperContent); }
function examinePaintings() { alert(paintingsContent); }

// 走廊密码：1927
function solveCorridorLock(){
    let pwd = prompt("请输入挂锁密码：");
    if(pwd === "1927"){
        alert("咔哒一声，挂锁弹开了！你从锁盒里取出了一枚银质钥匙。");
        document.getElementById("toRoom3Btn").disabled = false;
        document.getElementById("bag").innerText = "背包：黄铜钥匙、银质钥匙";
    }else{
        alert("密码不对，挂锁纹丝不动。");
    }
}

// ========== 书房线索 ==========
const diaryContent = `泛黄的日记字迹潦草扭曲：
我生于1895，老宅坍塌于1927。
自我的祖辈起家族便缠上了阴郁疯癫的诅咒，这所宅子是我们所有人的摇篮和墓地。
年轻人，我不知为何你会来到这幽灵之地。
愿上主保守你的前路，万事蒙恩。`;

const deskBoxTip = `木盒表面刻着小字：
三位一体的完全，缺一不可。这三个数字为你指明前路`;

function readDiary(){ alert(diaryContent); }
function checkDeskBox(){ alert(deskBoxTip); }

// 错误次数统计
let wrongCount = 0;

// 最终密码：333 + 完美坏结局判定
function finalLockPuzzle(){
    let pwd = prompt("请输入最终逃离密码：");
    if(!pwd) return;

    if(pwd === "333"){
        alert("木盒缓缓开启，里面放着古宅大门的钥匙。你终于有机会逃离这片诡谲压抑的牢笼……");
        document.getElementById("endBtn").disabled = false;
        document.getElementById("bag").innerText = "背包：黄铜钥匙、银质钥匙、古宅大门钥匙";
        wrongCount = 0;
    }else{
        wrongCount++;
        if(wrongCount >= 3){
            // 坏结局 完整文案
            alert(`
你连续三次输入错误密码。

木盒骤然锁死，阴风四起，
古宅门窗尽数封闭，出路彻底断绝。

【坏结局：永世囚禁】
你被困在这座死寂古宅中，
与疯狂的幽灵相伴，永远无法逃离。
`);
            // 全局锁死所有按钮
            document.querySelectorAll(".game-btn").forEach(btn=>{
                btn.disabled = true;
            });
        }else{
            alert(`密码错误，木盒纹丝不动。\n剩余尝试次数：${3 - wrongCount}`);
        }
    }
}

// 正常逃离 完整长文案
function goEnd(){
    alert(`
你握紧钥匙，推开冰冷沉重的古宅大门。
温柔的月光刺破黑暗，阴冷与压抑尽数消散。
你跑出很远，一阵轰隆隆的巨响使你停下脚步。
月光下，古宅轰然坍塌，消失不见。
就像从未存在过。

【普通结局：成功逃离】
你活着走出了沉寂古宅，
但这座房子里埋藏的悲剧与秘密，永远留在了暗处。
    `);
}

// 开局打字机
window.onload = function(){
    typeWrite(document.querySelector("#room1 .story-text"), roomText[1]);
}
