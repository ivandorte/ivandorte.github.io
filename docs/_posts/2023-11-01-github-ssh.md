---
title: Add a SSH key to Your Github account
image-fa: fa-brands fa-github
tags: git github ssh auth
description: Guide on how to quickly setup GitHub SSH
---

In this blog post we’ll see how to create an SSH key to your GitHub account and use it for authentication, access and write data in GitHub repositories.

## What is SSH?

**SSH** (Secure Shell), is a network protocol for operating network services in a secure wayover an unsecured network. 

Setting up a SSH key is a priority for GitHub users so they can safely access public repositories and contribute to open source.

#### Prerequisites

- **git**
    * Windows: https://git-scm.com/
    * Gnu-Linux:<br>
    ```
    sudo apt install git
    ```
- **SSH**
    * Windows: follow instructions **[here]**(https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui)
    * Gnu-Linux:<br>
    ```
    sudo apt install openssh-server
    sudo systemctl enable ssh
    sudo ufw allow ssh
    ```
   
## Generate a new SSH key

Assuming you're on a Gnu-Linux environment, open a terminal and move to .ssh folder in your user profile:

```
cd ~/.ssh
```

If the folder does not exist just create it:

```
mkdir ~/.ssh
```

Create the SSH key:

```
ssh-keygen -o -t rsa -C <email>
```

Where `<email>` is your email.

Press enter to accept the default location. When prompted, type a password.

Copy and paste the output of this command:

```
cat id_rsa.pub
```

Head up to your GitHub account, navigate to Settings > SSH and GPG keys > New SSH key, copy the content copied above then click `Add SSH key`.

{% include elements/local-video.html video="https://github.com/ivandorte/ivandorte.github.io/blob/main/docs/videos/posts/2023-11-01-github-ssh.webm?raw=true" caption="Adding a SSH to your GitHub account" %}

DONE!

## Sponsor the authors

#### External links

{% include elements/donate.html donation="https://www.paypal.me/ivandorte" %}
