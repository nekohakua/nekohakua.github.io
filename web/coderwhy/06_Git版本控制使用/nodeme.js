// 全局仓库的设置用户名以及邮箱
// git config --global user.name "userName"
// git config --global user.email "email address"

// 没有git仓库时初始化本地仓库
// git init

// 查看状态
// git status

// 全部提交到暂存区,跟踪它们 未跟踪：untracked
// git add .

// git commit -m "信息"

// git push

// git pull

// git commit -a -m "aaaa"
// 等价
// git add .
// git commit -m "aaaa"

// 查看提交日志
// git log
// 按q退出 按空格下一页

// git log --pretty=oneline
// git log --pretty=oneline --graph

// 版本回退
// git reset
// 上一个版本就是HEAD^，上上一个版本就是HEAD^^
// git reset --hard HEAD^
// 如果是上1000个版本，我们可以使用HEAD~1000；
// git reset --hard HEAD~1000
// 可以指定某一个commit id；
// git reset --hard 2d44982 

// 记录全部操作，包括回退到旧版本后再回到最新版本
// git reflog
// 使用git reset --hard 2d44982


// 远程服务器有仓库时就不需要初始化仓库了
// git clone https://github.com/coderwhy/hy-react-web-music.git

// .gitignore文件：git要忽略的文件，一般项目里脚手架已经配好，也可以自己添加，也可以去github搜fitignore看哪些需要忽略

// bash命令：clear


// windows使用的git存储git服务器的凭证工具（基于HTTP的凭证存储）
// $ git config credential.helper
// manager-core
// manager-core表示已经安装了 安装git时默认安装了
// 更多使用SSH密钥验证 ed25519（更多）和rsa：加密类型
// ssh-keygen -t ed25519 -C “your email"
// ssh-keygen -t rsa -b 2048 -C “your email"
// 然后去c盘的C:\Users\Lenovo\.ssh看.pub文件的公钥
// 然后放到git服务器的公钥位置 这样就可以验证了

// 查看远程仓库 默认远程仓库名字叫origin
// git remote
// 更加详细
// git remote -v

// 本地写有代码，想把本地代码添加到刚刚创建的远程仓库（不是先拉后提交）,本地已经初始化本地git仓库
// ◼ 添加远程地址：我们也可以继续添加远程服务器（让本地的仓库和远程服务器仓库建立连接）：
// git remote add <shortname> <url>
// 如
// git remote add gitlab http://152.136.185.210:7888/coderwhy/gitremotedemo.git
// 然后从远程仓库origin拉下到master，并合并不相干的历史：
// git pull origin master --allow-unrelated-histories
// git pull == git fetch + git merge(rebase)
// 默认情况下是将当前分支（比如master）push到origin远程仓库的；
// git push
// git push origin master

// 设置上游分支/跟踪分支就不用 git pull origin master
// git branch --set-upstream-to=origin/<branch>
// 如
// git branch --set-upstream-to=origin/master
// 或者这样创建本地dev分支并跟踪origin/master,
// git branch --track dev origin/master

// 重命名远程地址：
// git remote rename origin gitlab
// 移除远程地址：
// git remote remove gitlab


// 查看分支
// git branch
