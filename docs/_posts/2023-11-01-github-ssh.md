---
title: Git/SSH configuration
image-fa: fa-brands fa-github
tags: git github ssh auth
description: Guide on how to quickly setup Git and add a GitHub SSH key to Your Github account
---

In this blog post we’ll see a few things to customize your Git environment and how to create and add a SSH key to your GitHub account to use it for authentication, access and write data in GitHub repositories.

## First-time basic configuration of Git

Git offers a very powerful function called `config` which is intended to easily set the configuration values controlling how it works, that are stored in your user profile in a file named `.gitconfig`; you can easily view all of them by running:

```
$ git config --list --show-origin
```

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-01-github-ssh/01.webm?raw=true" caption="Listing all the git config properties" %}

To get started, the first settings you should edit are the basic informations used by Git commit, i.e. `identity` and `email`.

```
$ git config --global user.name <name>
$ git config --global user.email <email>
```

The flag `--global` sets Git configuration values on global project level.

Optionally you can specify a text `editor` to customize Git messages. Git uses the system one (e.g. nano) by default.

```
$ git config --global core.editor <new-editor>
```

DONE! Let's see how to add a SSH Key to your GitHub account!

## What is SSH?

**SSH** (Secure Shell) is a network protocol for operating network services in a secure way over an unsecured network. 

Setting up a SSH key is mandatory for GitHub users so they can safely access public repositories and share their contributions with the open source community.

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-01-github-ssh/02.webm?raw=true" caption="Contributing to open source projects..." %}

#### Prerequisites

- **Git**
    * Windows: [https://git-scm.com/](https://git-scm.com/)
    * Gnu-Linux:<br>
    ```
    $ sudo apt install git
    ```
- **SSH**
    * Windows: [**follow instructions**](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui)
    * Gnu-Linux:<br>
    ```
    $ sudo apt install openssh-server
    $ sudo systemctl enable ssh
    $ sudo ufw allow ssh
    ```
   
## Generate a new SSH key

Assuming you're on a Gnu-Linux environment, open a terminal and move to the .ssh folder in your user profile:

```
$ cd ~/.ssh
```

If the folder does not exist just create it:

```
$ mkdir ~/.ssh
```

Generate the SSH key:

```
$ ssh-keygen -o -t rsa -C <email>
```

Press enter to accept the default location. When prompted, type a password!

Copy the output of this command:

```
$ cat id_rsa.pub
```

Head up to your GitHub account, navigate to Settings > SSH and GPG keys > New SSH key, paste the content copied above then click `Add SSH key`.

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-01-github-ssh/03.webm?raw=true" caption="Adding a SSH to your GitHub account" %}

DONE!

## Sponsor the authors

#### External links

{% include elements/donate.html donation="https://www.paypal.me/ivandorte" %}
