// vue3的源码叫vuejs/core

// vue使用MIT协议

// 更新vscode后！没有用，用doc

// 查看本地所有的分支
// git branch
// 查看远程所有的分支
// git branch-a

// 创建dev分支
// git branch dev
// 切换分支
// git checkout <branch>
// 创建并切换到新分支
// git checkout -b <branch>
// git branch --merged # 查看所有合并到当前分支的分支
// git branch --no-merged # 查看所有没有合并到当前分支的分支
// 如果某些已经合并的分支我们不再需要了，那么可以将其移除掉
// git branch –d hotfix # 删除当前分支
// git branch –D hotfix # 强制删除某一个分支

// 分支的作用，修复bug
// 创建并切换hotfix分支修复bug
// 切换主分支然后合并
// git checkout master
// git merge hotfix
// 合并冲突，看情况选留下
// 然后再提交代码git -a -m "" push


// git push -u origin HEAD:main
// -u指的是设定默认值，此处设为origin main后之后若直接使用git push，则是默认向该远程分支push。

//  最好保持本地分支和远程分支一样的名字main main，这样git pull git push就可以省略了，其他操作就简单 不然git push origin master:main或git push origin head:main(head默认指向master)(把本地master分支推送到远程main分支) 如果写git push origin master是把本地master分支推送到远程master，但是github现在默认是main分支，不是master分支了
// 创建并切换到本地main分支并跟踪远程远程origin/main分支
// git checkout -b main --track origin/main
// -b main可以不写，默认是origin/main的main
// git checkout --track origin/main
// 简写：
// git chekout main
// 这样就不用设置默认行为了

// git push默认行为默认：
// git config push.default simple
// git push，找的是当前分支对应远程的与当前同名的分支，类似git push origin master:master 
// 所以当前分支与远程分支不同名时想要git push省略，就要先配置上游分支然后：
// git config push.default upstream

// git config push.default current
// 推送当前分支到远程的同名分支，远程没有就直接新建
// git config push.default simple
// 推送当前分支到远程的同名分支，远程没有就报错

// 查看当前这个仓库的.git目录下的配置
// cat .git/config


// 对于重大的版本我们常常会打上一个标签，以表示它的重要性：
// 创建标签：
// 轻量标签:
// git tag v1.0.0
// 附注标签:
// git tag -a v1.0.0 -m "注释"
// 查看tag
// git tag
// 推送标签单个
// git push origin v1.0.0
// 推送本地全部标签
// git push origin --tags
// 切换到tag对应的版本
// git checkout v1.0.0
// 删除本地仓库上的标签 git tag -d <tagname>
// 删除远程的tag git push <remote> –delete <tagname>
