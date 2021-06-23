# Git Status

## Introduction
`git status` is a command that show us how is it going on the working tree.

## How to use it
### `git status` or `git status --long`
Shows the status with a long format
  
```bash
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
      modified:   docs/pills/index.md

Untracked files:
(use "git add <file>..." to include in what will be committed)
      docs/pills/git-status.md
```

###  `git status -v` 
Shows the textual changes that are staged and will be commited

###  `git status -s`
Shows the info with a short format

```bash
D  docs/pills/index.md
?? docs/pills/git-status.md
A  docs/pills/git-rebase.md
```

The `-s` modificator allows us to see the info with an special format `XY PATH` where the *x* (staging area) and *y* (local changes) could be:
- `''`: unmodified
- `?`: untracked
- `M`: modified
- `A`: added
- `D`: deleted
- `R`: renamed
- `C`: copied

So if we want to see our actual branch and our current changes in a short way, we only have to write on the terminal `git status -b -s`
And we could get something like
```bash
## git-status
 M docs/pills/git-rebase.md
AM docs/pills/git-status.md
 D docs/pills/index.md
```

Here we can see:
- the current branch *git-status*
- the file `git-rebase.md` has been modified
- the file `index.md` has been deleted
- the file `git-status.md` that has been added to the staging area and modified later.

###  `git status -u[mode] | --untracked-files[mode]`
Allow us to select if we want to show untracked files, the `mode` options are:
- `no`: Only shows tracked files
- `normal`: Shows untacked files and directories
- `all`: Shows individual files in untracked directories

```bash
> git status -uall

On branch git-status
Your branch is up to date with 'origin/git-status'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   docs/pills/git-status.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/pills/newFileUntracked
```
```bash
> git status -uno

On branch git-status
Your branch is up to date with 'origin/git-status'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   docs/pills/git-status.md

no changes added to commit (use "git add" and/or "git commit -a")
```
