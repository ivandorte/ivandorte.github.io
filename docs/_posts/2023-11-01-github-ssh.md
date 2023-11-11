---
title: Git/SSH configuration
image-fa: fa-brands fa-github
tags: git github ssh auth
description: Guide on how to quickly setup Git and add a GitHub SSH key to Your Github account
---

In this blog post we’ll see a few things to customize your Git environment and how to create an SSH key to your GitHub account and use it for authentication, access and write data in GitHub repositories.

## First-time basic configuration of Git

Git comes with a tool called `config` that lets you to configure variables that control all aspects of how Git looks and operates.

You can visualize all these settings by running:

```
$ git config --list --show-origin
```

The first settings you should edit are the informations used by Git commit, i.e. `identity` and `email`.

```
$ git config --global user.name <name>
$ git config --global user.email <email>
```

Optionally you can specify a text `editor` to customize Git messages. Git uses the system one (e.g. nano) by default.

```
$ git config --global core.editor <new-editor>
```

DONE! Let's see how to add a SSH Key to your GitHub account!

## What is SSH?

**SSH** (Secure Shell) is a network protocol for operating network services in a secure way over an unsecured network. 

Setting up a SSH key is a priority for GitHub users so they can safely access public repositories and share their contributions with the open source community.

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-01-github-ssh/01.webm?raw=true" caption="Contributing to open source projects..." %}

#### Prerequisites

- **Git**
    * Windows: https://git-scm.com/
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

Assuming you're on a Gnu-Linux environment, open a terminal and move to .ssh folder in your user profile:

```
$ cd ~/.ssh
```

If the folder does not exist just create it:

```
$ mkdir ~/.ssh
```

Create the SSH key:

```
$ ssh-keygen -o -t rsa -C <email>
```

Where `<email>` is your email address.

Press enter to accept the default location. When prompted, type a password!

Copy and paste the output of this command:

```
$ cat id_rsa.pub
```

Head up to your GitHub account, navigate to Settings > SSH and GPG keys > New SSH key, copy & paste the content shown above then click `Add SSH key`.

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-01-github-ssh/02.webm?raw=true" caption="Adding a SSH to your GitHub account" %}

DONE!

## Sponsor the authors

#### External links

{% include elements/donate.html donation="https://www.paypal.me/ivandorte" %}
