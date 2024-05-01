# Connection timed out

## 问题

执行 `git push origin main` 将项目 [push](https://git-scm.com/docs/git-push) 到 GitHub 时，提示 `Connection timed out`

```
$ git push origin main

ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.
```

## 解决

参考

- [git - ssh: connect to host github.com port 22: Connection timed out - Stack Overflow](https://stackoverflow.com/a/52817036)

打开 Windows 用户文件夹下的 `.ssh/config`，填入

```
Host github.com
Hostname ssh.github.com
Port 443
```

```
$ ssh -T git@github.com
Hi tangjan! You've successfully authenticated, but GitHub does not provide shell access.
```

然后再执行 `git push origin main`，就能成功 push 了。
